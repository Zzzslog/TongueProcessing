<template>
	<view class="navdiv">
		<u-row  justify="end" align="center" >
			<u-col span="5">
				<view class="nav">
					<view class="nav_item1">
						<text class="font-card" >问诊大厅</text>
						<view class="aliiconfont aliicon-yiyuan" ></view>
					</view>
				</view>
			</u-col>
			<u-col span="6" >
				<view class="nav">
					<view class="nav_item2" style="background-color: white;border-radius: 40rpx;">
						<view class="aliiconfont aliicon-bingli"></view>
						<text class="font-card">电子病历</text>
					</view>
					<view class="nav_item2" style="background-color: white;border-radius: 40rpx;margin-top: 25rpx;">
						<view class="aliiconfont aliicon-tongxun" ></view>
						<text class="font-card">舌象图鉴</text>
					</view>
				</view>
			</u-col>
		</u-row>
	</view>
</template>

<script>
	export default {
		name:"HomeNav",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.navdiv{
	background: linear-gradient(to bottom,#ADE5EE,#d3fafc,#eff7fe);
	border-radius: 30rpx;
	margin:auto;
	width: 96%;
	height: 300rpx;
}
.font-card{
	font-size: 35rpx;
	margin: 20px auto;
}
.nav{
	text-align: center;
	opacity: 0.8;
	width: 250rpx;
	border-radius: 40rpx;
	margin: auto;
	margin-top: 16rpx;
	.nav_item1{
		height: 270rpx;
		line-height: 100rpx;
		display:block;
		background: linear-gradient(to bottom,#acfaed,white);
		border-radius: 40rpx;
		box-shadow: -5rpx 3rpx 2rpx 7rpx #a9f4e8;
		view{
			margin: 10px auto;
		}
		.aliiconfont{
			font-size: 64px;
			opacity: 0.8;
		}
		.aliicon-yiyuan{
			color: #9086ff;
		}
		
	}
	.nav_item2{
		height: 120rpx;
		display: flex;
		box-shadow: 5rpx -3rpx 2rpx 7rpx #f4f4f4;
		view{
			margin: 15px auto;
		}
		.aliiconfont{
			font-size: 35px;
			opacity: 0.7;
		}
		.aliicon-bingli{
			color: #ffbc1e;
		}
		.aliicon-tongxun{
			color: #2ffc96;
		}
	}
}
</style>