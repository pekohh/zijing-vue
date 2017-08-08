<template>
      <div class="content">
        <h3>{{arrList.title}}</h3>
        <time>{{arrList.time}}</time>
        <p>{{arrList.p}}</p>
      </div>
</template>

<script>

import HeaderView from './header.vue'
import NavView from './nav.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      arrList:[]
    }
  },
  components:{
    NavView,
    HeaderView
  },
  mounted(){
    this.silder();
    this.fetchData(this.$route.params.id);
  },
  methods:{
    silder(){
      var mySwiper = new Swiper ('.swiper-container', {
           loop: true,
           autoplay: 3000,
      })
    },
    fetchData(id){
      var _this=this
      this.$http.get('../src/data/aa.txt').then(function(res){
        _this.arrList=res.data[id-1]
      }).catch(function(err){
           console.log(err)
      })
    }
  }
}
</script>

<style scoped>
  .content{min-height:1000px;margin-top:20px;padding:0 20px;}
  .content h3{font-size:20px;text-align:center;line-height:40px}
  .content time{font-size:18px;color:orange;line-height:36px;padding:20px 0}
  .content p{text-indent:32px;color:16px;line-height:32px;margin-top:20px}
</style>
