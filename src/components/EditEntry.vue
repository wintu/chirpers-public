<script setup>
import MenuBar from './parts/MenuBar.vue'
import APIClient from '../libs/api_client'
import {reactive, ref} from 'vue'
import OverlayManager from '../libs/overlay_manager'
import UserSelector from './parts/UserSelector.vue'
import Loading from './parts/Loading.vue'
import Dialog from './parts/Dialog.vue'
import {useRouter} from 'vue-router'

const router = useRouter()
const groups = reactive({
  defaultGroup: null,
  customGroups: []
})

const fileInput = ref(null)
const media = reactive({
  files: []
})

const entry = reactive({
  groupId: null,
  mediaIds: [],
  content: ''
})

const fetchGroups = async () => {
  const json = await APIClient.get('/groups')
  if (!json.ok) return

  groups.defaultGroup = json.defaultGroup
  groups.customGroups = json.customGroups
  entry.groupId = json.defaultGroup.id
}

(async () => {
  await fetchGroups()
})()

const onChangeInputFile = async event => {
  if ((event.target.files.length + media.files.length) > 4) {
    alert('添付できるメディアは4つまでです')
    event.target.value = ''
    return
  }
  media.files.push(...Array.from(event.target.files).map(file => (
    {original: file, url: URL.createObjectURL(file), type: file.type.split('/')[0]}
  )))
  event.target.value = ''
}

const onDeleteFile = file => {
  media.files = media.files.filter(f => f !== file)
}

const uploadMedia = async () => {
  const params = new FormData
  media.files.forEach(file => params.append('media', file.original))

  const json = await APIClient.post('/media/upload', params, {
    headers: {"Content-Type": "multipart/form-data"}
  })
  
  entry.mediaIds = json.media.map(m => m.id)
}

const onClickCustomGroupBtn = () => {
  OverlayManager.setView(UserSelector, {
    created: fetchGroups
  })
}

const post = async () => {
  if (!entry.content) return alert('つぶやきを書いてください')
  if (media.files.length) {
    OverlayManager.setView(Loading, {message: 'メディアを処理してます'})
    await uploadMedia()
  }
  OverlayManager.close()
  OverlayManager.setView(Loading, {message: 'つぶやきを処理してます'})
  const json = await APIClient.post('/entries', {...entry})
  OverlayManager.close()
  OverlayManager.setView(Dialog, {
    title: 'Congratulations!', message: 'つぶやきを投稿しました! Twitterでフォロワーさんに伝えましょう!', button: {
      message: 'Twitterに投稿', callback: () => {
        router.push('/home')
        window.open(`https://twitter.com/share?url=${encodeURI(`chirpers.wintu.dev/e/${json.entry.uuid}`)}`, '_blank').focus()
      }
    }
  })
}

</script>

<template>
  <div class="post-view">
    <menu-bar class="menu"></menu-bar>
    <div class="post-content">
      <h2 class="section-title">つぶやきを書く</h2>
      <textarea class="ui-textarea" placeholder="ここにつぶやきを書きましょう..." v-model="entry.content"></textarea>

      <h2 class="section-title">メディアを添付する</h2>
      <div class="no-media" v-if="!media.files.length" @click="fileInput.click()">
        <i class="fas fa-plus-circle"></i>
        <p>ファイルをアップロードする</p>
      </div>

      <div class="media-wrap" v-else>
        <div class="col" v-for="(file, idx) of media.files" :key="`idx-${idx}`">
          <img v-if="file.type === 'image'" :src="file.url" class="media">
          <video v-else class="media" :src="file.url" :type="file.original.type" controls></video>
          <span class="delete" @click="onDeleteFile(file)"><i class="fas fa-trash-alt"></i></span>
        </div>
        <div class="col" v-if="media.files.length < 4">
          <div class="no-media" @click="fileInput.click()">
          <i class="fas fa-plus-circle"></i>
          <p>追加する</p>
        </div>
        </div>
      </div>

      <input type="file" ref="fileInput" style="display: none" accept=".mp4,.mov,.jpg,.png,.jpeg" multiple @change="onChangeInputFile">

      <h2 class="section-title">公開範囲を選択</h2>
      <div class="publish-level-selector" v-if="groups.defaultGroup">
        <div :class="`col ${groups.defaultGroup.id === entry.groupId ? 'active' : ''}`" @click="entry.groupId = groups.defaultGroup.id">
          <i class="fas fa-user-friends"></i>
          <p>{{groups.defaultGroup.name}}</p>
        </div>
        <div v-for="group of groups.customGroups" :key="group.id" :class="`col ${group.id === entry.groupId ? 'active' : ''}`" @click="entry.groupId = group.id">
          <i class="fas fa-users-cog"></i>
          <p>{{group.name}}</p>
        </div>
        <div :class="`col ${entry.groupId ? '' : 'active'}`" @click="entry.groupId = null">
          <i class="fas fa-lock-open"></i>
          <p>全員公開</p>
        </div>
        <div class="col" @click="onClickCustomGroupBtn()">
          <i class="fas fa-plus-circle"></i>
          <p>新規グループを作成する</p>
        </div>
      </div>

      <div class="btn-center">
        <button class="ui-button" @click="post">投稿する</button>
      </div>

      <div class="blank"></div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import '../libs/variable.styl'
  @import '../libs/ui.styl'

  .post-view
    position relative
    width 100%
    height 100%
    background $cl-dark
    ios-safe-area()
    color $cl-text
    overflow-y scroll

  .blank
    padding-bottom $menu-height

  .post-content
    position relative
    width calc(100% - 20px)
    max-width $max-width
    margin 0 auto
    padding 20px 10px 0 10px
    height 100%

    .section-title
      font-size 25px
      padding 20px 0

    .no-media
      position relative
      width calc(100% - 40px)
      padding 20px
      border 2px dashed $cl-gray
      border-radius 8px
      display flex
      justify-content center
      align-items center
      cursor pointer
      margin-bottom 20px
      p
        font-weight bold
      i
        margin-right 10px

    .media-wrap
      position relative
      width calc(100% + 10px)
      margin -10px
      display flex
      align-items center
      margin-bottom 20px
      .col
        position relative
        width calc(calc(100% / 4) - 20px)
        margin 10px
        &:before
          content ""
          padding-top 100%
          display block
        .media
          position absolute
          width 100%
          height 100%
          border-radius 5px
          overflow hidden
          top 0
          left 0
          box-shadow $shadow
          object-fit cover
        .delete
          position absolute
          width 30px
          height 30px
          display inline-flex
          justify-content center
          align-items center
          top -10px
          right -10px
          box-shadow $shadow
          background $cl-gray
          color $cl-text
          font-size 14px
          border-radius 50%
          cursor pointer
        .no-media
          position absolute
          width 100%
          height 100%
          top 0
          left 0
          border-radius 5px
          padding 0
          margin 0
          flex-direction column
          i
            margin 0
            margin-bottom 5px
            font-size 30px


    .ui-textarea
      margin-bottom 30px
      +sp()
        height 400px

    .publish-level-selector
      position relative
      width calc(100% + 10px)
      margin-left -10px
      display flex
      flex-wrap wrap
      +sp()
        width 100%
        margin-left 0
      .col
        position relative
        width calc(50% - 60px)
        margin 10px
        padding 20px
        display flex
        background $cl-gray
        color $cl-text
        box-shadow $shadow
        border-radius 8px
        justify-content center
        align-items center
        cursor pointer
        +sp()
          width 100%
          margin 5px 0
        i
          margin-right 10px
        &.active
          border 2px solid $cl-primary
          padding 18px
          box-shadow none
          color $cl-primary
          font-weight bold

  .btn-center
    position relative
    width 100%
    display flex
    justify-content center
    margin-top 30px
    .ui-button
      width 100%
      max-width 300px
      +sp()
        max-width none
</style>