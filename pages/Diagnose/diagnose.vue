<template>
	<view class="content">
		<!-- <view class="topnav">
			<u-tabs
				:list="list"
				 :is-scroll="false" 
				 :current="current" 
				 @change="change"
				  bar-width="80rpx"
				  item-width="200rpx"
				 >
			</u-tabs>
		</view> -->
		<view class="main_content">
			<view class="diagnose">
				<view class="upload">
					<image @click="chooseImage" :src="imgShow" class="_image" hemode="aspectFit"></image>
				</view>	
				<text>请点击上图\n选择：拍照or相册</text>
			</view>
			<u-form :model="form" ref="uForm" >
					<u-form-item><text class="item" >苔色：</text><u-input placeholder="" v-model="form.taise" disabled/></u-form-item>
					<u-form-item><text class="item" >苔质：</text><u-input placeholder="" v-model="form.taizhi" disabled/></u-form-item>
					<u-form-item><text class="item" >舌色：</text><u-input placeholder="" v-model="form.shese" disabled/></u-form-item>
					<u-form-item><text class="item" >体质：</text><u-input placeholder="" v-model="form.tizhi" disabled/></u-form-item>
					<u-form-item><text class="item" >证型：</text><u-input placeholder="" v-model="form.zhengxing" disabled/></u-form-item>
					<u-form-item><text class="item" >适宜食物：</text><u-input placeholder="" v-model="form.shiyishiwu" disabled/></u-form-item>
					<u-form-item><text class="item" >禁忌食物：</text><u-input placeholder="" v-model="form.jinjishiwu" disabled/></u-form-item>
					<u-form-item><text class="item" >适宜运动：</text><u-input placeholder="" v-model="form.shiyiyundong" disabled/></u-form-item>
			</u-form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgShow:"/static/diagnose/picture.png",
				list:[
					{
						name:"证型判断",
					},
					{
						name:"体质判断",
					}
				],
				form:{
						taise:"",
						taizhi:"",
						shese:"",
						tizhi:"",
						zhengxing:"",
						shiyishiwu:"",
						jinjishiwu:"",
						shiyiyundong:"",
				},
				tabs:[
					{
						taise:"",
						taizhi:"",
						shese:"",
						tizhi:"",
						zhengxing:"",
						shiyishiwu:"",
						jinjishiwu:"",
						shiyiyundong:"",
					},
				],
				current:0,
			}
		},
		methods:{
			chooseImage() {
					uni.chooseImage({
						count: 1, //默认9
						sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
						sourceType: ['album', 'camera'], //从相册选择、摄像头
						success: res=> {
							this.imgShow = res.tempFilePaths[0]
							this.form.taise="白苔",
							this.form.taizhi="有点刺，润苔，厚苔，腻苔，非剥苔",
							this.form.shese="红舌",
							this.form.shexing="胖大舌",
							this.form.shezhi="无齿痕，有裂纹",
							this.form.tizhi="气虚体质，湿热体质",
							this.form.zhengxing="肾阴虚证，热盛伤阴，肝阳上亢，邪热湿度蕴结于里，热极生风",
							this.form.shiyishiwu="绿叶蔬菜，苹果，香蕉，橘子，桃子，酸奶，菌类等",
							this.form.jinjishiwu="辣椒，大葱，咖啡，烟酒，海鲜等",
							this.form.shiyiyundong="八段锦，五禽戏，太极拳，易筋经，慢跑，室外有氧运动，吐呐法"
						}
					});
			},
			change(index){
				this.current=index;
			}
		},
	}
</script>

<style lang="scss" scoped>
.content{
	width: 100%;
	min-height: 100%;
	flex-direction: column;
	display: flex;
	justify-content: center;
	align-items: center;
	// background-color: #efffff;
}
.topnav{
	margin-top: 30rpx;
}
.u-form-item{
	.item{
		color:black;
		font-size: 0.9rem;
		font-weight: 700;
	}
}

.diagnose{
	margin: 20rpx;
	// margin-left: 60rpx;
	// border-radius: 40rpx;
	// border: 5rpx dashed;
	display: flex;
	flex-direction: column;
	width: 400rpx;
	height: 450rpx;
	background-color: #edfffe;
	text-align: center;
	text{
		// font-weight: 800;
		font-size: 0.8rem;
		color: darkred;
	}
	.upload{
		margin: auto;
	}
	._image{
		width: 350rpx;
		height: 350rpx;
	}
	
}
</style>
