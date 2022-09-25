<script setup>
import {reactive} from 'vue'
const {bind} = defineProps(['bind'])
const emit = defineEmits(['close'])

const data = reactive({
  isClosed: false
})

const animationend = () => {
  emit('close')
  document.removeEventListener('animationend', animationend)
}

const startCloseAnimation = () => {
  data.isClosed = true
  document.addEventListener('animationend', animationend)
}

const buttonHandler = () => {
  startCloseAnimation()
  bind.button?.callback?.()
}
</script>

<template>
  <div :class="`dialog-view ${data.isClosed ? 'fade-out' : 'fade-in'}`">
    <p class="title slide-in">{{bind.title}}</p>
    <p class="message slide-in">{{bind.message}}</p>
    <button class="ui-button slide-in" @click="buttonHandler">{{bind.button.message}}</button>
  </div>
</template>

<style lang="stylus" scoped>
@import "../../libs/variable.styl"
@import "../../libs/ui.styl"

.dialog-view
  backdrop-filter blur(3px)
  background rgba(0, 0, 0, 0.5)
  color $cl-text
  font-size 16px
  display flex
  justify-content center
  align-items center
  flex-direction column

.title
  font-size 1.8rem
  font-weight bold
  margin-bottom 15px
  padding 0 20px

.message
  padding 0 20px
  text-align center
  margin-bottom 40px

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