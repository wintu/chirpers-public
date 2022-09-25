<script setup>
import {reactive} from 'vue'
const {bind} = defineProps(['bind'])
const emit = defineEmits(['close'])
const data = reactive({isClosed: false})

const animationend = () => {
  emit('close')
  document.removeEventListener('animationend', animationend)
}

const startCloseAnimation = () => {
  data.isClosed = true
  document.addEventListener('animationend', animationend)
}
</script>

<template>
  <div :class="`loading-view ${data.isClosed ? 'fade-out' : 'fade-in'}`">
    <div class="loader"></div>
    <p class="message">{{bind.message || 'しばらくお待ちください'}}</p>
  </div>
</template>

<style lang="stylus" scoped>
  @import "../../libs/variable.styl"

  .loading-view
    backdrop-filter blur(3px)
    background rgba(0, 0, 0, 0.5)
    color $cl-text
    font-size 16px
    display flex
    justify-content center
    align-items center
    flex-direction column

  .loader,
  .loader:after
    border-radius 50%
    width 200px
    height 200px

  .loader
    margin 60px auto
    font-size 10px
    position relative
    text-indent -9999em
    border-top 1.1em solid rgba(255, 255, 255, 0.2)
    border-right 1.1em solid rgba(255, 255, 255, 0.2)
    border-bottom 1.1em solid rgba(255, 255, 255, 0.2)
    border-left 1.1em solid #ffffff
    transform translateZ(0)
    animation load8 1.1s infinite linear

  .fade-in
    animation fadeIn 0.4s ease forwards

  .fade-out
    animation fadeOut 0.4s ease forwards

@keyframes load8 {
  0% {
    transform rotate(0deg)
  }
  100% {
    transform rotate(360deg)
  }
}

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
</style>