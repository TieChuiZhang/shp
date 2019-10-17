<template>
	<!-- <view class="example-body">
		<uni-grid :column="4" :square="false" :highlight="false" @change="change">
			<uni-grid-item v-for="(item, index) in iconList" :key="index">
				<image :src="item.imageUrl" class="image" mode="aspectFill" />
				<text class="text">{{ item.desc }}</text>
			</uni-grid-item>
		</uni-grid>
	</view>	 -->
	<view class="warp">
		<view class="example-body">
			<uni-grid :column="4" :show-border="false" :square="false" @change="change">
				<uni-grid-item v-for="(item, index) in iconList" :key="index">
					<image class="image" :src="item.imageUrl" mode="aspectFill" />
					<text class="text">{{item.desc}}</text>
				</uni-grid-item>
			</uni-grid>
		</view>
	</view>
</template>

<script>
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
	export default{
		name:'HomeIcons',
		components: {uniGrid,uniGridItem},
		data() {
			return {
			    interval: 2000,
				duration: 500,
				iconList:[{
					id:'0001',
					imageUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					desc:'景点门票票'
				},
				{
					id:'0002',
					imageUrl:'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
					desc:'故宫'
				},
				{
					id:'0003',
					imageUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
					desc:'北京必游'
				},
				{
					id:'0004',
					imageUrl:'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
					desc:'动植物园'
				},
				{
					id:'0005',
					imageUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
					desc:'一日游'
				},
				{
					id:'0006',
					imageUrl:'http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',
					desc:'北水古镇'
				},
				{
					id:'0007',
					imageUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png',
					desc:'欢乐谷万圣节'
				},
				{
					id:'0008',
					imageUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
					desc:'赏红叶'
				}]
				}
			},
			methods: {
				change(e) {
					let {
						index
					} = e.detail
					alert(index)
					console.log(index)
				}
			}
			
	}
</script>

<style lang="stylus" scoped>
	.example-body {
		padding: 1upx;
		background: #fff
	}
	.image {
		width: 80upx;
		height: 80upx;
	}
	.text{
		top:120px
		text-align center
		font-size 10px
	}
</style>
