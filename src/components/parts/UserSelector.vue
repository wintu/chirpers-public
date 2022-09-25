<script setup>
import APIClient from '../../libs/api_client'
import {uniqBy, throttle} from 'lodash'
import {reactive, watch} from 'vue'

const {bind} = defineProps(['bind'])
const emit = defineEmits(['close'])
const data = reactive({
  selectedIds: [],
  users: [],
  search: '',
  name: '',
  isClosed: false,
  isLoading: true,
  isLast: false
})

watch(() => data.search, throttle(() => {
  if (data.isLoading) return
  data.users = []
  data.isLast = false

  fetchUsers()
}, 500))

const fetchUsers = async (offset = 0) => {
  data.isLoading = true
  const json = await APIClient.get('/groups/defaultMembers', {
    params: {offset, search: data.search}
  })

  data.users = uniqBy([...data.users, ...json.twitterUsers], 'id')
  data.isLoading = false
  data.isLast = !json.twitterUsers.length
}

const fetchGroup = async () => {
  if (!bind.groupId) return
  const json = await APIClient.get(`/groups/${bind.groupId}`)
  if (!json.ok) return
  data.selectedIds = json.group.twitterUsers.map(user => user.id)
  data.name = json.group.name
}

const animationend = () => {
  emit('close')
  document.removeEventListener('animationend', animationend)
}

const startCloseAnimation = () => {
  data.isClosed = true
  document.addEventListener('animationend', animationend)
}

const toggleSelect = user => {
  const id = data.selectedIds.find(id => id === user.id)
  id ? data.selectedIds = data.selectedIds.filter(i => i !== id) : data.selectedIds.push(user.id)
}

const LOADING_AREA = 30
const scrollHandler = throttle(event => {
  const isTargetArea = event.target.scrollHeight - (event.target.scrollTop + event.target.offsetHeight) < LOADING_AREA
  if (!isTargetArea || data.isLast) return
  fetchUsers(data.users.length)
}, 100)

const createGroup = async () => {
  if (!data.name || data.selectedIds.length < 1) {
    return alert('グループ名とグループに入れるユーザーを指定してください')
  }

  const json = await APIClient.post(`/groups/${bind.groupId || 'create'}`, {name: data.name, twitterUserIds: data.selectedIds})
  if (!json.ok) return
  bind.created()
  startCloseAnimation()
}

fetchUsers()
fetchGroup()
</script>

<template>
  <div :class="`user-selector ${data.isClosed ? 'fade-out' : 'fade-in'}`">
    <div class="click-area" @click="startCloseAnimation"></div>
    <div class="modal slide-in">
      <p class="section-title">カスタムグループ</p>
      <div class="ui-icon-input search-bar">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="表示名 or ID" v-model="data.search">
      </div>
      <div class="list-wrap" @scroll="scrollHandler">
        <div class="user-list">
          <div :class="`col ${data.selectedIds.find(id => id === user.id) ? 'active' : ''}`" v-for="user of data.users" :key="user.id" @click="toggleSelect(user)">
            <div class="avatar-wrap">
              <img :src="user.avatarUrl" class="avatar">
              <i class="fas fa-check-circle selected"></i>
            </div>
            <p class="name">{{user.name}}</p>
            <p class="twitter-id">@{{user.twitterId}}</p>
          </div>
        </div>
      </div>

      <input type="text" class="ui-input group-name" placeholder="グループ名" v-model="data.name">
      <div class="button-wrap">
        <button class="ui-button cancel" @click="startCloseAnimation">キャンセル</button>
        <button class="ui-button" @click="createGroup()">保存</button>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
@import "../../libs/variable.styl"
@import "../../libs/ui.styl"

.user-selector
  backdrop-filter blur(3px)
  background rgba(0, 0, 0, 0.5)
  color $cl-text
  font-size 16px
  display flex
  justify-content center
  align-items center

.click-area
  position absolute
  top 0
  left 0
  width 100%
  height 100%

.group-name
  margin-top 20px
  flex-shrink 0

.search-bar
  margin-bottom 10px

.button-wrap
  margin-top 20px
  width 100%
  display flex
  align-items center
  .ui-button
    width 100%
  .ui-button + .ui-button
    margin-left 10px
  .cancel
    background $cl-gray

.modal
  position relative
  width calc(100% - 60px)
  max-width 600px
  height calc(100% - 100px)
  max-height 800px
  padding 20px
  background $cl-dark
  border-radius 8px
  box-shadow $shadow
  display flex
  flex-direction column

.section-title
  font-size 1.4rem
  font-weight bold
  margin-bottom 15px
  flex-shrink 0

.list-wrap
  position relative
  width 100%
  height 100%
  background $cl-gray
  border-radius 5px
  overflow-y scroll
  box-shadow $shadow

.user-list
  display flex
  align-items flex-start
  width 100%
  flex-wrap wrap
  .col
    position relative
    width calc(calc(100% / 3) - 20px)
    margin 10px
    border-radius 3px
    text-align center
    word-break break-all
    cursor pointer
    &.active
      .avatar-wrap
        position relative
        display inline-block
      .selected
        display block
    .selected
      display none
      position absolute
      top -5px
      right -11px
      padding 3px
      border-radius 50%
      font-size 1.2rem
      color $cl-primary
    .avatar
      position relative
      width 60px
      height 60px
      object-fit cover
      border-radius 50%
      margin-bottom 10px
    .name
      margin-bottom 5px
    .twitter-id
      font-size 0.7rem
      color $cl-gray-2
  
.fade-in
  animation fadeIn 0.4s ease forwards

.fade-out
  animation fadeOut 0.4s ease forwards

.slide-in
  animation slideIn 0.3s ease-out 0.2s forwards
  opacity 0
  transform translateY(20px)

@keyframes fadeIn
  from
    opacity 0
  to
    opacity 1

@keyframes fadeOut
  from
    opacity 1
  to
    opacity 0

@keyframes slideIn
  from
    opacity 0
    transform translateY(20px)
  to
    opacity 1
    transform translateY(0)
</style>