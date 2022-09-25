<script setup>
  import Auth from '../libs/auth'
  import APIClient from '../libs/api_client'
  import Const from '../libs/const'
  import {watch, reactive} from 'vue'
  import {useRoute} from 'vue-router'
  import MenuBar from './parts/MenuBar.vue'
  import Media from './parts/Media.vue'
  import OverlayManager from '../libs/overlay_manager'

  const entry = reactive({
    id: null,
    uuid: null,
    content: '',
    media: [],
    user: null,
    fetched: false
  })

  const error = reactive({
    message: '',
    group: null
  })
  const route = useRoute()

  const authStatus = Auth.getStatus()
  Auth.redirectHandler()

  const fetchEntry = async () => {
    if (authStatus.progress) return
    try {
      const json = await APIClient.get(`/entries/${route.params.entryId}/public`)
      entry.id = json.entry.id
      entry.uuid = json.entry.uuid
      entry.content = json.entry.content
      entry.user = json.entry.user
      entry.media = json.entry.media || []
      entry.fetched = true
    } catch (e) {
      error.message = e.message
      error.group = e.group
    }
  }

  fetchEntry()
  watch(() => authStatus.progress, fetchEntry)

  const showMediaViewer = position => {
    OverlayManager.setView(Media, {
      media: entry.media,
      position
    })
  }
</script>

<template>
  <div class="public-entry">
    <menu-bar class="menu"></menu-bar>
    <div class="lock-view" v-if="!entry.fetched">
      <i class="fas fa-lock icon"></i>
      <p class="message" v-if="error.message">{{error.message}}</p>
      <p class="message" v-else>閲覧できるか確認中です...</p>
      <button class="ui-button" v-if="authStatus.progress"><i class="fa fa-spinner fa-spin"></i>&nbsp;&nbsp;認証中</button>
      <button class="ui-button" v-else-if="!authStatus.isLoggedIn" @click="Auth.login()">&nbsp;<i class="fab fa-twitter"></i>&nbsp;&nbsp;Twitterでログイン</button>

      <p class="notice" v-if="!authStatus.isLoggedIn">※Twitter連携が必須です。アカウント情報はアカウント認証とフォロー中のユーザー取得に利用します。</p>
    </div>

    <div class="entry-view" v-else>
      <div class="message-area">
        <div class="user-info">
          <img :src="entry.user.avatarUrl" class="avatar">
          <div>
            <p>{{entry.user.name}}</p>
            <a class="twitter-link ui-link" :href="`https://twitter.com/i/user/${entry.user.twitterUid}`">Twitterへ飛ぶ</a>
          </div>
        </div>
        <p class="content ui-deep" v-html="entry.content"></p>

        <div class="media-area">
          <div class="col" v-for="(media, idx) of entry.media" :key="media.id" @click="showMediaViewer(idx)">
            <img class="col-content" :src="media.url" v-if="media.type === Const.MEDIA_TYPE.IMAGE">
            <video class="col-content" :src="media.url" v-else></video>
            <div class="play-icon" v-if="media.type === Const.MEDIA_TYPE.VIDEO"><i class="fas fa-play-circle"></i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import '../libs/variable.styl'
  @import '../libs/ui.styl'

  .public-entry
    position relative
    width 100%
    height 100%
    background $cl-dark
    display flex
    flex-direction column
    ios-safe-area()
    color $cl-text
    font-size 16px

  .menu
    flex-shrink 0

  .lock-view
    position relative
    width calc(100% - 40px)
    height 100%
    padding 20px
    display flex
    justify-content center
    align-items center
    flex-direction column
    .icon
      font-size 100px
      margin-bottom 40px
    .message
      text-align center
      margin-bottom 30px
    .notice
      font-size 0.9rem!important
      opacity 0.7
      margin-top 10px

  .entry-view
    position relative
    width calc(100% - 20px)
    max-width $max-width
    margin 0 auto
    padding 20px 10px 0 10px
    height 100%
    overflow-y scroll
    padding-bottom $menu-height

  .message-area
    position relative
    width calc(100% - 40px)
    background $cl-gray
    box-shadow $shadow
    padding 20px
    border-radius 8px
    .content
      position relative
      width 100%
      word-break break-all
      white-space pre-line
    .user-info
      position relative
      display inline-flex
      align-items center
      margin-bottom 20px
      .avatar
        width 50px
        height 50px
        object-fit cover
        border-radius 50%
        margin-right 15px
      .twitter-link
        display inline-block
        font-size 14px

  .media-area
    position relative
    width calc(100% + 20px)
    margin-left -10px
    display flex
    align-items center
    flex-wrap wrap
    .col
      position relative
      width calc(50% - 20px)
      margin 10px
      &:before
        content ""
        display block
        padding-top 56.25%
      .col-content
        position absolute
        top 0
        left 0
        width 100%
        height 100%
        object-fit cover
        border-radius 6px
        box-shadow $shadow
      .play-icon
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        font-size 50px
        opacity 0.6
        color $cl-text
      +sp()
        width 100%

</style>