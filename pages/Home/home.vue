<template>
	<view class="content">
		<!-- 顶部主要导航栏 -->
		<NavBar></NavBar>
		<!-- 首页轮播图 -->
		<view class="wrap">
			<u-swiper :list="list" :duration="3000" :effect3d="true" :circular="true"></u-swiper>
		</view>
		<!-- 主页块状导航-问诊大厅、电子病历、舌象图鉴 -->
		<HomeNav></HomeNav>
		<!-- 热门资讯栏 -->
		<HotNews></HotNews>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{
						image:'/static/home/lunbo1.jpg'
					},
					{
						image:'/static/home/lunbo2.jpg'
					},
					{
						image:'/static/home/lunbo3.jpg'
					},
					{
						image:'/static/home/lunbo4.jpg'
					}
				],
				
			}
		},

	}
</script>

<style scoped lang="scss">
.wrap {
	padding: 20rpx;
}
.content{
	width: 100%;
	min-height: 100%;
	background-color: #efffff;
}
</style>
