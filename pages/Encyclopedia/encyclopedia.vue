<template>
	<view class="content">
	<!-- 	顶部导航栏 -->
		<NavBar></NavBar>
	<!-- 	话题栏 -->
		<HuaTi></HuaTi>	
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
		}
	}
</script>

<style scoped lang="scss">
	.content {
		background-color: #F0F6F6;
		width: 100%;
		height: 100%;
	}
</style>
