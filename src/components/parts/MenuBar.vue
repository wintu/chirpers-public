<script setup>
import {computed} from 'vue'
import {useRoute} from 'vue-router'
import Auth from '../../libs/auth'

const route = useRoute()
const isHome = computed(() => route.path.match('home'))
const isPost = computed(() => route.path.match('/entry/create'))
</script>

<template>
  <div>
    <div class="sp-head">
      <router-link class="logo" to="/home">
        <h1>CHIRPERS</h1>
      </router-link>
    </div>

    <div class="wrap">
      <div class="menu-bar">
        <router-link class="logo" to="/home">
          <h1>CHIRPERS</h1>
        </router-link>

        <div class="page-selector" v-if="Auth.status.isLoggedIn">
          <router-link :class="`col ${isHome ? 'active' : ''}`" to="/home">
            <i class="fas fa-home"></i>
          </router-link>

          <router-link :class="`col ${isPost ? 'active' : ''}`" to="/entry/create">
            <i class="far fa-plus-square"></i>
          </router-link>

          <span :class="`col`" @click="Auth.logout()">
            <i class="fas fa-sign-out-alt"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import 'https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap'
  @import '../../libs/variable.styl'

  .wrap
    background $cl-gray
    box-shadow $shadow
    position relative
    width calc(100% - 20px)
    padding 0 10px
    z-index 1
    +sp()
      position fixed
      bottom 0
      left 0
      border-radius 8px 8px 0 0

  .sp-head
    background $cl-gray
    box-shadow $shadow
    position relative
    top 0
    left 0
    width calc(100% - 20px)
    padding 10px
    +pc()
      display none
    .logo > h1
      font-size 1.6rem

  .menu-bar
    position relative
    margin auto
    width 100%
    max-width $max-width
    display flex
    justify-content space-between
    align-items center
    .logo
      font-size 2rem
      +sp()
        display none
      h1
        font-size 2rem

  .logo
    flex-shrink 0
    color $cl-text
    display block
    text-decoration none
    h1
      font-family 'Major Mono Display'

  .page-selector
    position relative
    flex-shrink 0
    display flex
    align-items center
    +sp()
      width 100%
      justify-content space-around
    .col
      margin 0 10px
      padding 15px 10px
      color $cl-text
      text-align center
      +sp()
        padding 8px 10px
      p
        margin-top 5px
      i
        font-size 25px
      &.active
        border-bottom 2px solid $cl-primary
        color $cl-primary

      

</style>