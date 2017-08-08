<template>
  <header>
    <div class="top-left">
      <a href=""></a>
    </div>
    <div class="top-center">
      <p class="fir">紫荆网新闻</p>
      <p class="sec">影响有影响力的人</p>
    </div>
    <div class="top-right">
      <a href="javascript:" class="fir"></a>
      <a href="javascript:" class="sec" id="sec" ></a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
/*头部*/
 header{width:100%;height:120px;padding-top:25px;background:#3575c6;}
 header .top-left {float:left;}
 header .top-left a{width:68px;height:68px;margin-left:25px;display:block;background:url("../assets/img/logo.png")no-repeat;}
 header .top-center {float:left;margin-left:20px;color:#fff;}
 header .top-center .fir{font-size:22px;border-bottom:1px solid #fff;line-height:30px;}
 header .top-center .sec{font-size:20px;line-height: 30px;}
 header .top-right {float:right;margin-right:20px;margin-top:10px;}
 header .top-right a{float:left;width:53px;height:79px;display:block;}
 header .top-right .fir{background:url('../assets/img/download.png')no-repeat;}
 header .top-right .sec{margin-left:20px;background:url('../assets/img/btn.png')no-repeat;}
</style>
