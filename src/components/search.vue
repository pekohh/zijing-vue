<template>
  <!--搜索框-->
  <div class="search">
    <form>
      <a href="javascript:;" class="btn"></a>
      <input type="text" placeholder="请输入搜索词" class="search-text"/>
    </form>
  </div>
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
/*搜索框*/
 .search{width:100%;margin:30px auto;height:60px;position:relative;}
 .search .btn{background:url("../assets/img/search.png")no-repeat center;position:absolute;left:30%;top:20%;height:31px;width:31px;cursor:pointer;margin:0 auto;}
 .search .search-text{margin:0 10%;width:55%;height:58px;padding-left:25%;font-size:20px;border-radius: 25px;border:1px solid #ccc;}
</style>
