<template>
	<view>
		<view class="huati-items" v-for="(it,index) in huati" :key="index">
			<view class="box"     :class="{ 'clicked': clickedItems[index] }"  @touchstart="handleTouchStart(index)" @touchend="handleTouchEnd(index)">
				<image :src="it.image" mode="aspectFill"></image>
				<text>{{it.name}}</text>	
			</view>
		</view>
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
				 clickedItems: Array.from({ length: 8 }, () => false),
			};
		},
		methods:{
			// handleClick(){
			// 	  // 在组件内部点击子话题时触发 huatiClick 事件
			// 	  this.$emit('huatiClick');
			// },
			handleTouchStart(index) {
			       // 仅设置当前点击的话题项状态为 true
			       this.$set(this.clickedItems, index, true);
			},
			handleTouchEnd(index) {
			  // 模拟点击后阴影效果持续一段时间后消失
			  setTimeout(() => {
				this.$set(this.clickedItems, index, false);
			  }, 200)
			},
		}
}	
</script>

<style lang="scss">
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
.box{
	transition: box-shadow 0.3s; // 添加过渡效果
	display: flex;
	flex-direction: column;
	&.clicked {
	  box-shadow: 0 0 10px 10rpx rgba(155, 155, 155, 0.2); // 点击后的阴影效果
	}
}
// .huati-content{
// 	display: flex;
// 	flex-direction: row;
// }
</style>