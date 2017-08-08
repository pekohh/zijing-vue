<template>
  <div id="app">
    <HeaderView></HeaderView>
    <NavView></NavView>
    <SearchView></SearchView>
    <SliderView></SliderView>
    <router-view></router-view>
    <FooterView></FooterView>
  </div>
</template>

<script>
import NavView from './components/nav.vue'
import HeaderView from './components/header.vue'
import SliderView from './components/slider.vue'
import SearchView from './components/search.vue'
import ContentView from './components/content.vue'
import FooterView from './components/footer.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    NavView,
    HeaderView,
    SliderView,
    SearchView,
    ContentView,
    FooterView
  }
}

</script>

<style>

</style>
