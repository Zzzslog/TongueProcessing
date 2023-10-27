<template>
	<view class="huati">
		<view class="huati-navbar">
			<u-section title="热搜话题" sub-title="查看更多" font-size="35"></u-section>
		</view>
		<scroll-view scroll-x :scroll-with-animation="true" class="uni-swiper-tab">
			<view  class="huati-content">
				<view class="huati-items" v-for="(it,index) in huati" :key="index">
					<view style="display: flex;flex-direction: column;">
						<image :src="it.image" mode="aspectFill"></image>
						<text>{{it.name}}</text>	
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"HuaTi",
		data() {
			return {
				huati:[
						 {
							 image:"/static/huati/pet.png",
							 name:"宠物",
						 },
						 {
							 image:"/static/huati/business.png",
							 name:"商务",
						 },
						 {
							 image:"/static/huati/fashion.png",
							 name:"时尚",
						 },
						 {
							 image:"/static/huati/music.png",
							 name:"音乐",
						 },
						 {
							 image:"/static/huati/work.png",
							 name:"工作",
						 },
						 {
							 image:"/static/huati/social.png",
							 name:"社交",
						 },
						 {
							 image:"/static/huati/travel.png",
							 name:"旅行"
						 },
						 {
							image:"/static/huati/cheerup.png",
							name:"庆祝"
						 }
				],
			};
		}
	}
</script>

<style lang="scss">
.huati{
		margin: 30rpx  10rpx 10rpx 10rpx;
		// margin: auto;
		background-color: #ADE5EE;
		height: 300rpx;
		width: 97%;
		align-items: center;
		justify-content: space-between;
		border-radius: 20rpx;
		.huati-navbar{
			width: 96%;
			margin: 10rpx 10rpx;
		}
		.uni-swiper-tab{
			white-space: nowrap;
			background-color: #F0F6F6;
			// position:fixed;
			display: flex;
			// margin: 10rpx 10rpx 10rpx 10rpx;
			height: 200rpx;
			border-radius: 20rpx;
			margin-top: 20rpx;
		}
		.huati-content{
			display: flex;
			flex-direction: row;
			.huati-items{
				margin: 20rpx 23rpx;
				display: inline-block;
				image{
					width: 128rpx;
					height: 128rpx;
					border-radius: 60rpx;
					background-color: white;
				}
				text{
					font-size: 0.6rem;
					margin-left: 40rpx;
				}
			}
		}
	}
</style>