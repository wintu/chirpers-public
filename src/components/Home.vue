<script setup>
import MenuBar from './parts/MenuBar.vue'
import UserSelector from './parts/UserSelector.vue'
import APIClient from '../libs/api_client'
import OverlayManager from '../libs/overlay_manager'
import { reactive } from 'vue'
import striptags from 'striptags'

const data = reactive({
  entries: [],
  defaultGroup: null,
  groups: []
})

const fetchEntries = async () => {
  const json = await APIClient.get(`/entries`)
  if (!json.ok) return
  data.entries = json.entries
}

const fetchGroups = async () => {
  const json = await APIClient.get('/groups')
  if (!json.ok) return
  data.defaultGroup = json.defaultGroup
  data.groups = json.customGroups || []
}

const showGroupCreateModal = (groupId = null) => {
  OverlayManager.setView(UserSelector, {
    created: fetchGroups,
    groupId
  })
}

const deleteEntry = async entryId => {
  if (!confirm('つぶやきを削除してよろしいですか?')) return
  await APIClient.post(`/entries/${entryId}/delete`)
  fetchEntries()
}

const deleteGroup = async groupId => {
  if (!confirm('グループを削除すると、紐づいてるつぶやきも全て削除されます。 よろしいですか?')) return
  await APIClient.post(`/groups/${groupId}/delete`)
  fetchEntries()
  fetchGroups()
}

fetchEntries()
fetchGroups()
</script>

<template>
  <div class="home-view">
    <menu-bar class="menu"></menu-bar>

    <div class="home-content">
      <h2 class="title">つぶやき一覧</h2>
      <div class="entry-list" v-if="data.entries.length">
        <div class="col" v-for="entry of data.entries" :key="entry.id">
          <div class="entry-info">
            <p class="content">{{striptags(entry.content)}}</p>
            <span class="group">閲覧範囲: {{entry.group?.name || 'だれでも'}}</span>
            <router-link class="ui-link" :to="`/e/${entry.uuid}`">閲覧ページ</router-link>
          </div>

          <button class="delete-btn" @click="deleteEntry(entry.id)"><i class="fas fa-trash-alt"></i></button>
        </div>
      </div>

      <div class="no-entry" v-else>
        つぶやきがありません...
      </div>

      <h2 class="title">グループ一覧</h2>
      <div class="group-list">
        <div class="col" v-if="data.defaultGroup">
          <p class="name">{{data.defaultGroup.name}}</p>
          <div class="members">
            <img v-for="user of data.defaultGroup.twitterUsers" :key="user.id" :src="user.avatarUrl" alt="">
          </div>
        </div>

        <div class="col" v-for="group of data.groups" :key="group.id">
          <p class="name">{{group.name}}</p>
          <div class="members">
            <img v-for="user of group.twitterUsers" :key="user.id" :src="user.avatarUrl" alt="">
          </div>
          <div class="buttons">
            <button class="ui-button delete-btn" @click="deleteGroup(group.id)">削除</button>
            <button class="ui-button edit-btn" @click="showGroupCreateModal(group.id)">編集</button>
          </div>
        </div>
      </div>

      <div class="blank"></div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import '../libs/variable.styl'
  @import '../libs/ui.styl'

  .home-view
    position relative
    width 100%
    height 100%
    background $cl-dark
    ios-safe-area()
    overflow-y scroll
    color $cl-text

  .home-content
    position relative
    width 100%
    box-sizing border-box
    padding 20px 10px 0 10px
    height 100%
    max-width $max-width
    margin 0 auto

  .blank
    padding-bottom $menu-height

  .no-entry
    position relative
    width 100%
    padding 40px 0
    display flex
    justify-content center
    align-items center

  .entry-list
    position relative
    width 100%
    margin-bottom 40px
    .col + .col
      border-top 1px solid $cl-gray-2
    .col
      position relative
      width 100%
      display flex
      align-items center
      padding 15px 0
      .entry-info
        position relative
        width 100%
        overflow hidden
        .content
          display block
          font-size 16px
          font-weight bold
          margin-bottom 5px
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
        .group
          font-size 14px
        .ui-link
          margin-left 10px
          font-size 14px
      .delete-btn
        margin-left 20px
        flex-shrink 0
        background $cl-gray-2
        font-size 15px
        width 30px
        height 30px
        border-radius 50%
        border none
        color $cl-gray
        cursor pointer

  .group-list
    position relative
    width calc(100% + 10px)
    margin-left -10px
    display flex
    align-content center
    flex-wrap wrap
    +sp()
      display block
      margin 0
      width 100%
    .col
      position relative
      padding 20px
      box-sizing border-box
      background $cl-gray
      box-shadow $shadow
      width calc(calc(100% / 3) - 20px)
      margin 10px
      border-radius 8px
      +sp()
        width 100%
        margin 0
        margin-top 15px
      .name
        font-size 18px
        font-weight bold
        margin-bottom 15px
      .members
        position relative
        width 100%
        margin-bottom 10px
        img
          position relative
          width calc(10% + 4px)
          object-fit cover
          overflow hidden
          border-radius 50%
          border 1px solid $cl-gray-2
          box-sizing border-box
        img + img
          margin-left -5px
      .buttons
        position relative
        width 100%
        display flex
        align-items center
        .edit-btn
          width 100%
          background $cl-dark
        .delete-btn
          width 100%
          background $cl-secondary
          margin-right 10px
</style>