<script setup>
import Const from '../../libs/const'
import {reactive} from 'vue'
const {bind} = defineProps(['bind'])
const emit = defineEmits(['close'])

const data = reactive({
  position: bind.position || 0,
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


</script>

<template>
  <div :class="`media-view ${data.isClosed ? 'fade-out' : 'fade-in'}`">
    <img class="content" :src="bind.media[data.position].url" v-if="bind.media[data.position].type === Const.MEDIA_TYPE.IMAGE">
    <video class="content" :src="bind.media[data.position].url" controls controlsList="nodownload" v-else></video>
    <button class="close" type="button" @click="startCloseAnimation"><i class="fas fa-times"></i></button>
    <button class="right-arrow" type="button" v-if="bind.media[data.position + 1]" @click="data.position++"><i class="fas fa-arrow-alt-circle-right"></i></button>
    <button class="left-arrow" type="button" v-if="bind.media[data.position - 1]" @click="data.position--"><i class="fas fa-arrow-alt-circle-left"></i></button>
  </div>
</template>

<style lang="stylus" scoped>
@import "../../libs/variable.styl"

.media-view
  backdrop-filter blur(3px)
  background rgba(0, 0, 0, 0.5)
  color $cl-text
  font-size 14px

.close
  position absolute
  font-size 40px
  top 20px
  right 20px
  background none
  border none
  color $cl-text
  cursor pointer

.right-arrow
  position absolute
  font-size 40px
  bottom 20px
  right 20px
  background none
  border none
  color $cl-text
  cursor pointer
  opacity 0.6

.left-arrow
  position absolute
  font-size 40px
  bottom 20px
  left 20px
  background none
  border none
  color $cl-text
  cursor pointer
  opacity 0.6

.content
  position relative
  width 100%
  height 100%
  object-fit contain
  box-sizing border-box
  padding 0 80px
  +sp()
    padding 0
    padding-bottom 80px

.fade-in
  animation fadeIn 0.4s ease forwards

.fade-out
  animation fadeOut 0.4s ease forwards

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
