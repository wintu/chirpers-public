<script setup>
  import {onUnmounted} from 'vue'
  import easterEgg from './libs/easter_egg'
  import OverlayManager from './libs/overlay_manager'

  const resizeHandler = () => document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`)
  window.addEventListener('resize', resizeHandler)
  onUnmounted(() => window.removeEventListener('resize', resizeHandler))
  resizeHandler()
  easterEgg()

  const overlayStatus = OverlayManager.status
</script>
<template>
  <div class="app">
    <router-view class="container"></router-view>

    <component
      class="overlay"
      v-if="overlayStatus.currentView"
      :is="overlayStatus.currentView.component"
      :bind="overlayStatus.currentView.bindData"
      @close="OverlayManager.close()">
    </component>
  </div>
</template>
<style lang="stylus">
  @import 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Noto+Sans+JP:wght@400;700&display=swap'
  @import '@fortawesome/fontawesome-free/css/all.min.css'
  @import './libs/reset.styl'

  .app
    position relative
    width 100%
    height calc(var(--vh) * 100)
    font-family 'Montserrat', 'Noto Sans JP', sans-serif
    font-size 14px
    letter-spacing .08em
    line-height 1.6

  .overlay
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    z-index 2
</style>