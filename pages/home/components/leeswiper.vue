<template>
	<div class="swiper" >
		<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" indicator-color="#fff"  
         indicator-active-color="red">
			<swiper-item  v-for="item in swiperList" :key="item.id">
				<image class="swiper-img" :src="item.imageUrl" />
			</swiper-item>
		</swiper>
	</div>
</template>

<script>
export default {
	name: 'HomeSwiper',
	data() {
		return {
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500,
			swiperList:[{
				id:'0001',
				imageUrl:'http://pic-bucket.ws.126.net/photo/0001/2019-10-16/ERJMS1QQ00AO0001NOS.jpg'
			},{
				id:'0002',
				imageUrl:'http://pic-bucket.ws.126.net/photo/0001/2019-10-16/ERJMS1QR00AO0001NOS.jpg'
			},{
				id:'0003',
				imageUrl:'http://pic-bucket.ws.126.net/photo/0001/2019-10-16/ERJMS1QS00AO0001NOS.jpg'
			}]
		};
	}
};
</script>
<style lang="stylus" scoped>
.swiper
	overflow hidden
	width 100%
	height 0
	padding-bottom 40%
	.swiper-img
		width 100%
</style>
