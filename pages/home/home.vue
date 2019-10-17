<template>
  <div>
    <home-header></home-header>
	<home-swiper></home-swiper>
	<HomeIcons></HomeIcons>
  </div>
</template>

<script>
import HomeHeader from'./components/header'
import HomeSwiper from'./components/leeswiper'
import HomeIcons from'./components/icons'
export default{
  name:'Home',
  components:{
    HomeHeader:HomeHeader,
	HomeSwiper:HomeSwiper,
	HomeIcons:HomeIcons
  }
}
</script>

<style>
</style>
