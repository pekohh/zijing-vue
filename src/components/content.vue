<template>
  <div id="content" class="con" v-scroll="add">
    <ul>
      <li v-for="(item,index) in arrList">
        <router-link :to="'/article/'+item.id">
          <div class='con_l'>
            <img :src='item.imgurl'>
          </div>
          <div class='con_r'>
            <h3><a href=''>{{item.title}}</a></h3>
          <span><i></i><time>{{item.time}}</time></span>
        </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      arrList:[],
      articleList:[],
      start:0,
      pageSize:10,
      page:1
    }
  },
  mounted(){
    this.path=this.$route.path.substr(1,2);
    this.fetchData();
  },
  methods:{
    fetchData(){
      var _this=this;
      this.$http.get('../src/data/aa.txt').then(function(res){
        if(_this.articleList.length==0)
        {
          for(var i=0;i<res.data.length;i++)
          {
            if(res.data[i].column==_this.path)
            {
              _this.articleList.push(res.data[i])//把所有符合频道的数据找出来
            }
          } 
        }
 
        var sum1=_this.articleList.length;//本频道数据的总和
        var len=_this.pageSize
        if(len>=sum1)
        {
          len=sum1;        
        }
        for(_this.start;_this.start<len;_this.start++)
        {
          _this.arrList.push(_this.articleList[_this.start])//把当前需要展示的数据添加到显示数组中
        }
      }).catch(function(err){
       // alert(err)
      })
    },
    add(){
      this.page++
      this.start=this.pageSize
      this.pageSize=this.page*10


    }       
  },
  watch:{
    $route(to){
      this.path=to.path.substr(1,2);
      this.start=0
      this.pageSize=10
      this.page=1
      this.arrList=[],
      this.articleList=[],
      this.fetchData();
    },
    page(val){
      this.fetchData()
    }
  },
  directives:{
    scroll:{
      bind:function(el,binding){
        window.addEventListener("scroll",()=>{
          if(document.body.offsetHeight-window.innerHeight-document.body.scrollTop==0){
            let fnc=binding.value;
            fnc();
          }
        })
      }
    }
  }
 }
</script>

<style>
/*正文样式*/
#content{min-height:1000px;}
.con{}
.con ul li{padding:25px 15px;border-bottom:1px solid #ccc;}
.con  .con_l{width:180px;float:left}
.con  .con_l img{width:180px;height:133px;}
.con .con_r{float:left;margin-left:15px;width:500px;}
.con  .con_r h3 a{color:#333;font-size:30px;}
.con .con_r span {margin-top:36px;display:block;height:27px;display:block;}
.con  .con_r span i{margin:0 10px;background:url("../assets/img/icon.png")no-repeat left bottom;width:22px;height:22px;display:inline-block;}
.con  .con_r span time{font-size:22px;color:#999999;line-height: 22px;font-weight:bold;}

</style>
