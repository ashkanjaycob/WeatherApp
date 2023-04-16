<template>
  <div class="container-sm"> 
    <HeaderComp></HeaderComp>
    <router-link to="WeatherCard"></router-link>

    <router-view></router-view>

  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
export default {
  name: 'App',
  components:{
    HeaderComp
  }
}
</script>

<style></style>
