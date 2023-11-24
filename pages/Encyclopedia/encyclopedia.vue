<template>
	<view class="content">
	<!-- 	顶部导航栏 -->
		<NavBar></NavBar>
	<!-- 	话题栏 -->
		<view class="huati">
			<view class="huati-navbar">
				<u-section title="热搜话题" sub-title="查看更多" font-size="35"></u-section>
			</view>
			<scroll-view scroll-x :scroll-with-animation="true" class="uni-swiper-tab">
				<HuaTi @huatiClick="clickHuati"></HuaTi>	
			</scroll-view>
		</view>
		<!-- 健康常识+健康资讯栏-->
			<HealthyNews></HealthyNews>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods:{
			clickHuati(){
				console.log("已点击")
			}
		}
	}
</script>

<style scoped lang="scss">
.content {
	background-color: #F0F6F6;
	width: 100%;
	height: 100%;
}
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

</style>
