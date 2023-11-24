<template>
	<view class="navdiv">
<!-- 		<u-row  justify="end" align="center" >
			<u-col span="5"> -->
				<view class="nav">
					<view class="nav_item1">
						<text class="font-card" >问诊大厅</text>
						<image class="icon1" src="../../static/home/hospital3.png" ></image>
					</view>
				</view>
<!-- 			</u-col> -->
<!-- 			<u-col span="6" > -->
				<view class="nav">
					<view class="nav_item2">
						<image class="icon2" src="../../static/home/medicalrecord.png" ></image>
						<text class="font-card">电子病历</text>
					</view>
					<view class="nav_item2" style="margin-top: 25rpx;">
						<image class="icon2" src="../../static/home/tonguefolder.png" ></image>
						<text class="font-card">舌象图鉴</text>
					</view>
				</view>
<!-- 			</u-col>
		</u-row> -->
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
	 display: flex;
	  justify-content: center;
	  align-items: center;
	// text-align: center;
}
.u-row {
  justify-content: center;
  align-items: center;
  height: 100%;
}
.font-card{
	font-size: 35rpx;
	margin: 20px auto;
}
.icon1{
	width: 128rpx;
	height: 128rpx;
	opacity: 0.8;
}
.icon2{
	margin-left: 15rpx;
	width: 64rpx;
	height: 64rpx;
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
		display: block;
		background: linear-gradient(to bottom,#acfaed,white);
		border-radius: 40rpx;
		box-shadow: -5rpx 3rpx 2rpx 7rpx #a9f4e8;
		view{
			margin: 10px auto;
		}	
		// margin-left: 10rpx;
	}
	.nav_item2{
		height: 120rpx;
		display: flex;
		align-items: center;
		box-shadow: 5rpx -3rpx 2rpx 7rpx #f4f4f4;
		background-color: white;border-radius: 40rpx;
		view{
			margin: 15px auto;
		}
		// margin-right: 10rpx;
	}
}
</style>