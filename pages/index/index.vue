<template>
	<view>
		<view class="content">
<!-- 			<u-search :show-action="true" action-text="搜索" :animation="true"></u-search> -->
			<image class="logo" src="../../static/app-icon.png"></image> 
			<view class="text-area">
				<text class="title">{{title}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:"欢迎来到舌象诊断系统"
			}
		},
		onLoad() {
			
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
		border-radius: 90rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: darkgrey;
	}
</style>
