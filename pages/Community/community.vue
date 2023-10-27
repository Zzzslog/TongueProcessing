<template>	
	<view class="community">
		<view class="nav">
			<u-tabs :list="list"
			:is-scroll="false"
			:current="current" 
			item-width="100rpx"
			@change="changeNav">
			</u-tabs>
		</view>
		<view class="loadingState" v-show="loadState">
			<skeleton
			  :loading="loading"
			  :avatarSize="skeleton1.avatarSize"
			  :row="skeleton1.row"
			  :showTitle="skeleton1.showTitle"
			>
			</skeleton>
		</view>
		<view class="content"> 
			<view class="item" v-for="item in contentList">
				<blog-item></blog-item>
			</view>
		</view>
		<view class="edit">
			<text class="aliiconfont aliicon-shuru"></text>
		</view>
	</view>
</template>

<script>
	import Skeleton from '../../components/primewind-skeleton/pages/skeleton/index.vue'
	export default {
		components: {
		    Skeleton
		  },
		data() {
			return {
				list:[
					{
						name:"最新",
					},
					{
						name:"热门",
					}
				],
				contentList:[
					1,2,3
				],
				skeleton1 : {
					avatarSize: '52px',
					row: 3,
					showTitle: true,
				},
				current:0,
				loading: true,
				loadState:false,
				
			}
		},
		 created() {
		    this.reloadData()
		},
		methods:{
			changeNav(index){
				this.current=index;
			},
			 reloadData() {
			      this.loading = true
			      setTimeout(() => {
			        this.loading = false
			      }, 3000)
			 },
		}
	}
</script>

<style lang="scss" scoped>
	.section-title {
	  padding: 40rpx 32rpx 0;
	  color: #666;
	  font-size: 16px;
	}
	.community .section-content {
	  padding: 40rpx;
	  color: #999;
	  font-size: 14px;
	}
	.community {
		padding: 40rpx 0;
		// display: flex;
		// flex-direction: column;
		// align-items: center;
		// justify-content: center;
	}
	.content{
		.item{
			padding: 30rpx;
			border-bottom: #F7F7F7 10rpx solid;
		}
	}
	.nav{
		margin-top: 50rpx;
	}
	.loadingState{
		padding: 30rpx;
	}
	.edit{
		width: 120rpx;
		height: 120rpx;
		background: #0199FE;
		border-radius: 50%;
		color: #fff;
		position: fixed;
		z-index: 100;
		bottom: 150rpx;
		right: 50rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0 0 20rpx rgba(1,153,254,0.8);
		.aliiconfont{
			font-size: 50rpx;
		}
	}
</style>
