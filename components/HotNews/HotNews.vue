<template>
	<view class="now_news">
		<view class="self" v-for="(peo,index) in hotnews" style="display: flex;flex-direction: column;" :key="index">
			<view v-if="index === 0 ">
				<view style="display: flex;flex-direction: row;">
					<u-avatar :src="peo.user_avatar" class="userimg"></u-avatar>
					<view class="selfinfo">
						<text class="username">{{peo.nickname}}</text>
						<text class="userdetail">{{peo.detail}}</text>
					</view>
				</view>
				<view style="display: flex;flex-direction: column;">
					<view class="article">
						<view class="texttitle">
							{{peo.title}}
						</view>
						<u-read-more  ref="uReadMore" :toggle="true" show-height="400" color="black">
							<rich-text :nodes="peo.content"></rich-text>
						</u-read-more>
					</view>
				</view>
				<u-line  class="u-line" border-style="solid" hard-line="false"></u-line>
				<view class="info">
					<view class="box"><text class="aliiconfont aliicon-liulan">{{peo.liulan}}</text></view>
					<view class="box"><text class="aliiconfont aliicon-xiaoxi">{{peo.pinglun}}</text></view>
					<view class="box"><text class="aliiconfont aliicon-dianzan">{{peo.dianzan}}</text></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"HotNews",
		data() {
			return {
				//content<=300字
				hotnews:[
					{
						user_avatar:"/static/uni-center/avatar.png",
						nickname:"As We are",
						detail:"优质中医博主",
						title:"全国中医药杰出贡献奖拟表彰人选名单公布",
						content:"国医在线讯 9月19日，国家中医药管理局发布了《关于对全国中医药杰出贡献奖拟表彰人选进行公示的公告》，根据《人力资源社会保障部 国家卫生健康委员会 国家中医药管理局关于开展全国中医药杰出贡献奖评选表彰工作的通知》精神，并经“全国中医药杰出贡献奖”评选表彰工作领导小组审核，拟授予于载畿等80人“全国中医药杰出贡献奖”称号，云南省张震国医大师、朱兆云总监获此殊荣。",
						dianzan:3,
						liulan:5,
						pinglun:7,
					}
				]
			}
		},
		mounted(){
			// this.loadHotNews()
		},
	}
</script>

<style lang="scss" scoped>
	.now_news{
	margin: 30rpx 30rpx;
	flex:1;
	overflow-y: auto;
	.self{
		display: flex;;
		.selfinfo{
			margin-left: 10px;
			display: flex;
			flex-direction: column;
			.username{
				font-size: 1rem;
			}
			.userdetail{
				color: grey;
				font-size: 0.7rem;
			}
		}
		.article{
			margin:auto;
			margin-top: 20rpx;
			.texttitle{
				font-size: 1rem;
				font-weight: 800;
				margin-bottom: 20rpx;
			}
		}
		
	}
	
	.info{
		display: flex;
		align-items: center;
		justify-content:space-around;
		font-size: 26rpx;	
		color:#333;
		.box{
			display: flex;
			align-items: center;			
			padding:15rpx 0 5rpx;
			flex:1;
			display: flex;
			justify-content: center;
			.iconfont{
				font-size: 40rpx;
				padding-right: 10rpx;
			}
		}
	}
}
</style>