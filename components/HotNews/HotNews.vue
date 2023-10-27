<template>
	<view class="newdiv">
		<view class="navbar-down">
			<u-section title="热门资讯" sub-title="查看更多" font-size="35"></u-section>
		</view>
		<view class="now_news">
			<view class="self" v-for="(peo,index) in user" style="display: flex;flex-direction: column;" :key="index">
				<view style="display: flex;flex-direction: row;">
					<u-avatar :src="peo.imgsrc" class="userimg"></u-avatar>
					<view class="selfinfo">
						<text class="username">{{peo.username}}</text>
						<text class="userdetail">{{peo.detail}}</text>
					</view>
				</view>
				<view style="display: flex;flex-direction: column;">
					<view class="article">
						<view class="texttitle">
							{{peo.title}}
						</view>
						<u-read-more  ref="uReadMore" :toggle="true" show-height="400" color="black">
							<rich-text :nodes="peo.article"></rich-text>
						</u-read-more>
					</view>
				</view>
				<u-line  class="u-line" border-style="solid" hard-line="false"></u-line>
				<u-row gutter="16" justify="end" style="margin-right: 45rpx;">
					<u-col span="1" offset="1" style="display: flex;">
						<view class="aliiconfont aliicon-liulan"></view>
						<text>{{peo.liulan}}</text>
					</u-col>
					<u-col span="1"  offset="1" style="display: flex;">
						<view class="aliiconfont aliicon-xiaoxi"></view>
						<text>{{peo.pinglun}}</text>
					</u-col>
					<u-col span="1"  offset="1" style="display: flex;">
						<view class="aliiconfont aliicon-dianzan"></view>
						<text>{{peo.dianzan}}</text>
					</u-col>
				</u-row>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"HotNews",
		data() {
			return {
				user:[
					{
						imgsrc:"/static/uni-center/avatar.png",
						username:"As We are",
						detail:"优质中医博主",
						title:"全国中医药杰出贡献奖拟表彰人选名单公布",
						article:"国医在线讯 9月19日，国家中医药管理局发布了《关于对全国中医药杰出贡献奖拟表彰人选进行公示的公告》，根据《人力资源社会保障部 国家卫生健康委员会 国家中医药管理局关于开展全国中医药杰出贡献奖评选表彰工作的通知》精神，并经“全国中医药杰出贡献奖”评选表彰工作领导小组审核，拟授予于载畿等80人“全国中医药杰出贡献奖”称号，云南省张震国医大师、朱兆云总监获此殊荣。",
						dianzan:3,
						liulan:5,
						pinglun:7,
					}
				]
			};
		}
	}
</script>

<style lang="scss" scoped>
.newdiv{
		background-color: white;
		border-radius: 40rpx;
		width: 96%;
		height:60%;
		margin:auto;
		margin-top: 8px;
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
		}
		.navbar-down{
			width: 96%;
			margin: 35rpx 0 0 30rpx;
			// position: fixed;
		}
}
</style>