<template>
  <div class="error-view">
    <p class="code">500</p>
    <img class="img" src="/src/assets/error.svg" alt="">
    <p class="message">エラー起こしちゃいました...</p>
    <p class="message">お問合せ先: <a class="ui-link" href="http://twitter.com/wintu520" target="_blank" rel="noopener noreferrer">@wintu520</a></p>
  </div>
</template>

<style lang="stylus" scoped>
  @import '../libs/variable.styl'
  @import '../libs/ui.styl'

  .error-view
    position relative
    display flex
    flex-direction column
    justify-content center
    align-items center
    width 100%
    height 100%
    background $cl-dark
    color $cl-text

  .code
    font-size 20rem
    margin-bottom 10px
    font-weight bold
    opacity .7
    @media screen and (max-width $breakpoint)
      font-size 10rem

  .img
    position relative
    width 50%
    margin-top -200px
    max-width "calc(%s - 20%)" % $max-width
    @media screen and (max-width $breakpoint)
      margin-top -100px
      width 80%

  .message
    margin-top 20px
    font-size 16px
</style>