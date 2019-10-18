<template>
	<view class="item border-bottom">
		<view class="title">周末去哪儿</view>
		<view v-for="item in list" :key="item.id">
			<view class="item-img-wrapper">
				<image class="item-img" :src="item.imgUrl"/>
			</view>
			<view class="item-info">
				<view class="item-title">{{item.title}}</view>
				<view class="item-desc">{{item.desc}}</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data() {
  	return {
		list:[{
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
  }
}
</script>

<style lang="scss">
	//@import '~styles/mixins.styl'
	.title{
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32upx;
		//color: #464e52;
		padding: 5upx 10upx 10upx 40upx;
		margin-top: 20upx;
		position: relative;
		//background-color: #fdfdfd;
		border-bottom: 1px #f5f5f5 solid
	}
	.title__after {
		position: relative;
		color: #031e3c
	}
	
	.title:after {
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
	.item-img-wrapper{
		overflow: hidden;
		height: 0;
		padding-bottom: 37.09%;
		.item-img{
			width: 100%;
		}
	}
	.item-info{
		padding: .1rem;
		.item-title{
			line-height: 18px;
			font-size: 14px;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		.item-desc{
			line-height:18px;
			color: #ccc;
			font-size: 14px;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		
	}
   
</style>
