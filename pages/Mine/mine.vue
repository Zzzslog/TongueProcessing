<template>
	<view class="center">
		<view class="userinfo">
			<image :src="userinfo.avatar"></image>
			<view class="logo-title">
				<text class="user-name">
					{{userinfo.name}}
				</text>
			</view>
		</view>
		<uni-grid class="grid" :column="4" :show-border="false" :square="true">
			<uni-grid-item class="item" v-for="(item,index) in gridList" :key="index">
				<uni-icons class="icon" color="#59CBDE" :type="item.icon" size="40"></uni-icons>
				<text class="text">{{item.text}}</text>
			</uni-grid-item>
		</uni-grid>
		<uni-list class="center-list" v-for="(itemlist,index) in centerList" @click.native="tapGrid(index)" :key="index">
			<uni-list-item v-for="(item,i) in itemlist" :title="item.title" link :right-text="item.rightText" :key="i"
				:clickable="true" :to="item.to" @click="centerListClick(item)" 
				:class="item.icon" style="padding-left: 20rpx;color:#ADE5EE;font-size:25px;">
				<template v-slot:footer>
					<view v-if="item.showBorder" class="item-footer">
						<text class="item-footer-text">{{item.rightText}}</text>
						<view class="item-footer-badge"></view>
					</view>
				</template>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userinfo:{
					avatar:"/static/uni-center/avatar.png",
					name:"As We are",
				},
				gridList:[
					{
						"text":"通知",
						"icon":"notification",
					},
					{
						"text":"个人资料",
						"icon":"person",
					},
					{
						"text":"好友",
						"icon":"staff",
					},
					{
						"text":"个人档案",
						"icon":"compose",
					}
				],
				centerList:[
					[	
						
						{
							"title":"消息",
							"icon":"aliiconfont aliicon-tongzhi"
						},
						{
							"title":"钱包",
							"icon":"aliiconfont aliicon-zhifu"
						},
						{
							"title":"点赞过的文章",
							"icon":"aliiconfont aliicon-dianzan"
						},
						{
							"title":"就诊记录",
							"icon":"aliiconfont aliicon-jilu"
						}
					],
					[
						{
							"title":"个人资料",
							"icon":"aliiconfont aliicon-shenfen"
						},
						{
							"title":"健康自检",
							"icon":"aliiconfont aliicon-kangfuke"
						}
					],
					[	
						{
							"title":"设置",
							"icon":"aliiconfont aliicon-shezhi"
						},
						{
							"title":"关于",
							"icon":"aliiconfont aliicon-shuoming"
						}
					]
					
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	view {
		display: flex;
		box-sizing: border-box;
		flex-direction: column;
	}
	page {
		background-color: #f8f8f8;
	}
	.center {
		width: 100%;
		min-height: 100%;
		flex: 1;
		flex-direction: column;
	}
	.userinfo{
		padding-top: 120rpx;
		background-image: linear-gradient(90deg, rgb(204, 255, 246), rgb(255, 190, 158));
		flex-direction: column;
		justify-content: center;
		align-items: center;
		image{
			width: 180rpx;
			height: 180rpx;
			border-radius: 90rpx;
		}
		.logo-title{
			flex: 1;
			align-items: center;
			justify-content: space-between;
			flex-direction: row;
			.user-name{
				font-size: 1rem;
				font-weight: 800;
				height: 150rpx;
				line-height: 150rpx;
				color: black;
			}
		}
	}
	.grid {
		background-color: #ffffff;
		margin-bottom: 6px;
	}
	.uni-grid .text {
		font-size: 16px;
		height: 25px;
		line-height: 25px;
		color: #817f82;
	}
	.uni-grid .item ::v-deep .uni-grid-item__box {
		justify-content: center;
		align-items: center;
	}
	.center-list {
		margin-bottom:50rpx;
		background-color: #f9f9f9;
	}
	
	// .center-list-cell {
	// 	width: 100%;
	// 	background-color: #007AFF;
	// 	height: 80rpx;
	// }
	
	/*修改边线粗细示例*/
	/* #ifndef APP-NVUE */
	.center-list ::v-deep .uni-list--border:after {
		-webkit-transform: scaleY(0.3);
		transform: scaleY(0.3);
		margin-left: 80rpx;
	}
	
	.center-list ::v-deep .uni-list--border-top,
	.center-list ::v-deep .uni-list--border-bottom {
		display: none;
	}
	
	/* #endif */
	.item-footer {
		flex-direction: row;
		align-items: center;
	}
	
	.item-footer-text {
		color: #999;
		font-size: 36rpx;
		padding-right: 10rpx;
	}
	
	.item-footer-badge {
		width: 20rpx;
		height: 20rpx;
		/* #ifndef APP-NVUE */
		border-radius: 50%;
		/* #endif */
		/* #ifdef APP-NVUE */
		border-radius: 10rpx;
		/* #endif */
		background-color: #DD524D;
	}
</style>