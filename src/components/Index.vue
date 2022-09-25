<script setup>
  import Auth from '../libs/auth'
  import ApiClient from '../libs/api_client'
  import {useRoute, useRouter} from 'vue-router'
  import {watch} from 'vue'

  const router = useRouter()
  const route = useRoute()
  const authStatus = Auth.getStatus()
  Auth.redirectHandler()

  if (route.query.redirect) {
    watch(() => authStatus.isLoggedIn, isLoggedIn => {
      if (!isLoggedIn) return
      router.push({path: route.query.redirect})
    })
  }

</script>

<template>
  <div class="index-view">
    <div class="concept-wrap">
      <img class="hero-img" src="/src/assets/top-hero.svg" alt="">
      <div class="concept">
        <h1>CHIRPERS</h1>
        <p class="subtitle">deliver chirps to only your best friends!</p>
        <p>
          <span class="strong">CHIRPERS</span> はTwitterで見せたい人のみにつぶやけるサービスです。<br>
          あなたも親しい友達だけへ想いを伝えましょう!
        </p>
        <div class="button-wrap">
          <button class="ui-button" v-if="authStatus.progress"><i class="fa fa-spinner fa-spin"></i> 認証中</button>
          <router-link class="ui-button" v-else-if="authStatus.isLoggedIn" to="/home">ホームへ移動</router-link>
          <button class="ui-button" v-else @click="Auth.login()">&nbsp;<i class="fab fa-twitter"></i>&nbsp;&nbsp;Twitterでログイン</button>
        </div>
        <p class="notice" v-if="!authStatus.isLoggedIn">※Twitter連携が必須です。アカウント情報はアカウント認証とフォロー中のユーザー取得に利用します。</p>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import 'https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap'
  @import '../libs/variable.styl'
  @import '../libs/ui.styl'

  .index-view
    position relative
    width 100%
    height 100%
    background $cl-dark
    overflow-y scroll

  .concept-wrap
    position relative
    display flex
    align-items center
    justify-content center
    width 100%
    height 100%
    color $cl-text
    max-width $max-width
    margin 0 auto
    +sp()
      display block

  .hero-img
    display block
    flex-shrink 0
    width 50%
    max-width 600px
    padding 20px
    padding-right 60px
    box-sizing border-box
    +sp()
      width 80%
      margin 0 auto
      padding 50px 20px

  .concept
    position relative
    width 100%
    box-sizing border-box
    +sp()
      padding 20px
    h1
      display block
      font-family 'Major Mono Display'
      font-size 5rem
      +sp()
        font-size 3.5rem
    .subtitle
      font-size 1.4rem
      display block
      margin-bottom 60px
    p
      font-size 1.2rem
      margin-bottom 40px
    .strong
      font-weight bold

  .button-wrap
    position relative
    margin 0 auto
    text-align center
    box-sizing border-box
    margin-bottom 15px
    .ui-button
      font-size 21px
      text-decoration none
      box-sizing border-box

  .notice
    font-size 0.9rem!important
    opacity 0.7
    
</style>