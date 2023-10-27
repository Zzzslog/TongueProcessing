<template>
	<u-navbar :is-back="false" title="" :background="background">
		<view class="slot-wrap">
			<u-avatar :src="src" :size="75"></u-avatar>
			<u-search placeholder="请输入关键字" v-model="keyword" :show-action="false" bg-color="#ffffff"></u-search>
			<view class="aliiconfont aliicon-saomiao" ></view>
		</view>
	</u-navbar>
</template>

<script>
	export default{
		data(){
			return{
				keyword:"",
				src:"https://img1.baidu.com/it/u=1367769822,3129403553&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
				background:{
					backgroundImage:"linear-gradient(180deg, rgb(163, 255, 250), rgb(199, 255, 199))"
				}
			}
		}
	}
</script>

<style lang="scss" scoped> 
	.slot-wrap {
			display: flex;
			align-items: center;
			padding: 0 30rpx;
			/* 如果您想让slot内容占满整个导航栏的宽度 */
			/* flex: 1; */
			/* 如果您想让slot内容与导航栏左右有空隙 */
			/* padding: 0 30rpx; */
		}
	.aliiconfont{
		padding-left: 30rpx;
		font-size: 25px;
	}
	.u-avatar{
		margin-left: 30rpx;
	}
	.u-search{
		padding-left: 90rpx;
	}
</style>