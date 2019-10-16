<template>
	<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
	  <swiper-item><image src="http://pic-bucket.ws.126.net/photo/0001/2019-10-16/ERJMS1QQ00AO0001NOS.jpg"></image></swiper-item>
	  <swiper-item><image src="http://pic-bucket.ws.126.net/photo/0001/2019-10-16/ERJMS1QR00AO0001NOS.jpg"></image></swiper-item>
	  <swiper-item><image src="http://pic-bucket.ws.126.net/photo/0001/2019-10-16/ERJMS1QS00AO0001NOS.jpg"></image></swiper-item>
	</swiper>
</template>

<script>
export default {
	name: 'HomeSwiper',
	data() {
		return {
			background: ['color1', 'color2', 'color3'],
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500
		};
	},
};
</script>
<style lang="stylus" scoped>
	.swiper
	 width:100%
</style>
