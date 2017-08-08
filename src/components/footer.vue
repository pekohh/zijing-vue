<template>
 <footer>
      <div class="tag-btn">
          <div class="btn"> 更多精彩 尽在手机紫荆网</div>
      </div>

      <div class="main_footer">
          <div class="ftxt">紫荆网 Copyright © 2017</div>
          <div class="ftxt2">ZIJING.ORG Limited All Rights Reserved</div>
      </div>
</footer>

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
/*尾部*/
.tag-btn{width:100%;text-align:center;color:#fff;background:#ddd;font-size:30px;height:60px;line-height:60px;}
.main_footer{background:#e6e6e6;color:#707070;text-align:center;font-size:20px;border-top: 1px solid #d1d0d0;padding: 12px 0 18px 0;}
.main_footer>div{padding: 7px 0 ;}
</style>
