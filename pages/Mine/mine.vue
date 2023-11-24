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
@import url("../mine/css/main.css");
</style>