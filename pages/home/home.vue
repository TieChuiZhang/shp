<template>
  <div>
    <home-header></home-header>
	<home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from'./components/header'
import HomeSwiper from'./components/leeswiper'
export default{
  name:'Home',
  components:{
    HomeHeader:HomeHeader,
	HomeSwiper:HomeSwiper
  }
}
</script>

<style>
</style>
