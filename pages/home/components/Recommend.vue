<template>
	<view>
		<view class="example-title">热销推荐</view>
		<uni-list v-for="item in recommendList" :key="item.id">
			<uni-list-item :show-arrow="false" :title="item.title" :note="item.desc" :thumb="item.imgUrl" @click="sbc(item)"/>
		</uni-list>
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default {
		name:'HomeRecommend',
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {
				recommendList:[{
					id:'0001',
					imgUrl:'http://img1.qunarzz.com/sight/p0/1506/e8/e87354c876fd6c38.water.jpg_200x200_9c11d922.jpg',
					title:'大连海洋世界',
					desc:'浪漫大连首站,浪漫的海洋主题乐园'
				},
				{
					id:'0002',
					imgUrl:'http://img1.qunarzz.com/sight/p0/1506/e8/e87354c876fd6c38.water.jpg_200x200_9c11d922.jpg',
					title:'大连海洋世界',
					desc:'浪漫大连首站,浪漫的海洋主题乐园'
				},
				{
					id:'0003',
					imgUrl:'http://img1.qunarzz.com/sight/p0/1506/e8/e87354c876fd6c38.water.jpg_200x200_9c11d922.jpg',
					title:'大连海洋世界',
					desc:'浪漫大连首站,浪漫的海洋主题乐园'
				},
				{
					id:'0004',
					imgUrl:'http://img1.qunarzz.com/sight/p0/1506/e8/e87354c876fd6c38.water.jpg_200x200_9c11d922.jpg',
					title:'大连海洋世界',
					desc:'浪漫大连首站,浪漫的海洋主题乐园'
				},
				{
					id:'0005',
					imgUrl:'http://img1.qunarzz.com/sight/p0/1506/e8/e87354c876fd6c38.water.jpg_200x200_9c11d922.jpg',
					title:'大连海洋世界',
					desc:'浪漫大连首站,浪漫的海洋主题乐园'
				}]
			}
		},
		methods: {
			switchChange(e) {
				uni.showToast({
					title: 'change:' + e.value,
					icon: 'none'
				})
			},
			sbc(item){
				alert(item.id)
			}
		}
	}
	
</script>

<style lang="stylus">
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4
	}
	
	view {
		font-size: 28upx;
		line-height: inherit
	}
	.example {
		padding: 0 30upx 30upx
	}
	.example-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32upx;
		color: #464e52;
		padding: 5upx 10upx 10upx 40upx;
		margin-top: 20upx;
		position: relative;
		//background-color: #fdfdfd;
		border-bottom: 1px #f5f5f5 solid
	}
	
	.example-title__after {
		position: relative;
		color: #031e3c
	}
	
	.example-title:after {
		content: '';
		position: absolute;
		left: 30upx;
		margin: auto;
		top: 0;
		bottom: 0;
		width: 6upx;
		height: 32upx;
		background-color: #ccc
	}
	
	.example .example-title {
		margin: 40upx 0
	}
	
	.example-body {
		padding: 30upx;
		background: #fff
	}
	
	.example-info {
		padding: 30upx;
		color: #3b4144;
		background: #fff
	}
</style>
