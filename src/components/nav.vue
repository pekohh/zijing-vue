<template>
  <nav>
    <ul class="nav1" id="nav1" style="display:none;">
      <router-link tag="li" to="/js" active-class="active">
        <a href="">军事</a>
      </router-link>
      <router-link tag="li" to="/pl" active-class="active">
        <a href="">评论</a>
      </router-link>
      <router-link tag="li" to="/gj" active-class="active">
        <a href="">国际</a>
      </router-link>
     <router-link tag="li" to="/wh" active-class="active">
        <a href="">文化</a>
      </router-link>
      <router-link tag="li" to="/zs" active-class="active">
        <a href="">招商</a>
      </router-link>
      <router-link tag="li" to="/ft" active-class="active">
        <a href="">访谈</a>
      </router-link>
      <router-link tag="li" to="/jk" active-class="active">
        <a href="">健康</a>
      </router-link>
      <router-link tag="li" to="/sh" active-class="active">
        <a href="">商会</a>
      </router-link>
      <router-link tag="li" to="/ly" active-class="active">
        <a href="">旅游</a>
      </router-link>
      <router-link tag="li" to="/db" active-class="active">
        <a href="">读报</a>
      </router-link>
      <router-link tag="li" to="/fj" active-class="active">
        <a href="">佛教</a>
      </router-link>
      <router-link tag="li" to="/gy" active-class="active">
        <a href="">公益</a>
      </router-link>
      <router-link tag="li" to="/tp" active-class="active">
        <a href="">图片</a>
      </router-link>
      <router-link tag="li" to="/yl" active-class="active">
        <a href="?yl">娱乐</a>
      </router-link>
      <router-link tag="li" to="/jbf" active-class="active">
        <a href="">基本法</a>
      </router-link>
    </ul>
    <ul class="nav2">
      <router-link tag="li" to="/yw" active-class="active">
        <a href="">要闻</a>
      </router-link>
      <router-link tag="li" to="/xg" active-class="active">
        <a href="">香港</a>
      </router-link>
      <router-link tag="li" to="/nd" active-class="active">
        <a href="">内地</a>
      </router-link>
      <router-link tag="li" to="/zx" active-class="active">
        <a href="">资讯</a>
      </router-link>
      <router-link tag="li" to="/cj" active-class="active">
        <a href="">财经</a>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      href:''
    }
  },
  mounted(){
  /*
      var indexx=window.location.href.split('/').length-1;
      var href=window.location.href.split('/')[indexx].substr(0,2);
      this.href=href;
      var length=$('nav ul li').length;
      var arr=[]
      for(var i=0;i<length;i++)
      {
        $('nav ul li').eq(i).index=i;
        arr.push($('nav ul li').eq(i).find("a").attr("href").substr(-2,2))      
      }
      var index=arr.indexOf(href);
      $("nav ul li").eq(index).find("a").addClass("on").parent().siblings().find("a").removeClass("on");
      $("nav ul li").click(function(){
        $(this).find("a").addClass("on").parents().siblings().find("a").removeClass("on"); 
      })*/
  }
  
}
</script>

<style scoped>
  nav ul li{width:20%;height:80px;line-height: 80px;float:left;text-align:center;font-size:30px;}
  nav ul li a {color:#000}
  nav ul li a.on{color:#f60;}
  nav .nav1{}
  nav .nav2{background:#ccc;}
</style>
