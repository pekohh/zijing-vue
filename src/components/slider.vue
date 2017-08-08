<template>
  <div id="lunbo" class="swiper-container lunbo">
      <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../assets/img/1.jpg"/></div>
            <div class="swiper-slide"><img src="../assets/img/2.jpg"/></div>
            <div class="swiper-slide"><img src="../assets/img/3.jpg"/></div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.silder()
  },
  methods:{
    silder(){
      var mySwiper = new Swiper ('.swiper-container', {
           loop: true,
           autoplay: 3000,
      })
    }
  }
}
</script>

<style scoped>
/*轮播图*/
#lunbo{height:480px;width:100%;}
#lunbo img{height:480px;width:100%;display:block;}

</style>
