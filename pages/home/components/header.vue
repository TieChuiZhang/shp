<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题嘿嘿嘿
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
  </div>
</template>

<script>
export default{
    name:'HomeHeader'
  }
</script>

<style lang="stylus" scoped>
  @import'~@/assets/styles/varibles.styl'
  .header
    display:flex
    //line-height:64px
    height:80px
    background :$bgColor
    color:#fff
    .header-left
      width:30px
      margin-left:20px
      margin-top:45px
      float:left
       .back-icon
         text-align:center
         font-size:18px
    .header-input
      flex:1
      height:30px
      line-height:30px
      margin-top:40px
      margin-left:10px
      background:#fff
      border-radius:5px
      color:#ccc
      font-size :15px
      padding-left:10px
    .header-right
      width:80px
      margin-top:40px
      float:right
      text-align:center
      font-size :18px
      .arrow-icon
       font-size :16px
</style>
