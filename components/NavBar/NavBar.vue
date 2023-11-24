<template>
	<u-navbar :is-back="false" title="" :background="user_background">
		<view class="slot-wrap">
			<u-avatar :src="user_avatar" :size="75"></u-avatar>
			<u-search placeholder="请输入关键字" v-model="keyword"  :animation="true" :show-action="true" action-text="搜索" bg-color="#ffffff" :clearabled="true" @clear="clearSearch" @custom="Search"></u-search>
			<view class="aliiconfont aliicon-saomiao" ></view>
		</view>
	</u-navbar>
</template>

<script>
	export default{
		data(){
			return{
				keyword:"",
				user_avatar:"https://img1.baidu.com/it/u=1367769822,3129403553&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
				user_background:{
					backgroundImage:"linear-gradient(180deg, rgb(163, 255, 250), rgb(199, 255, 199))"
				}
			}
		},
		mounted(){
			// const storedUser = localStorage.getItem('user')
			// const user = storedUser? JSON.parse(storedUser) : null
			// this.user_avatar = this.user? this.user.avatar : "../static/no-logo.png"
			// this.user_background = this.user.background? { backgroundImage:"this.user.background"} : {backgroundImage:"linear-gradient(180deg, rgb(163, 255, 250), rgb(199, 255, 199))"}
		},
		methods:{
			clearSearch(){
				this.keyword = "";
			},
			Search(){
				
			}
		},
	}
</script>

<style lang="scss" scoped> 
	.slot-wrap {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0 30rpx;
			max-width: 100%;
			/* 如果您想让slot内容占满整个导航栏的宽度 */
			flex: 1;
			/* 如果您想让slot内容与导航栏左右有空隙 */
			/* padding: 0 30rpx; */
		}
	.aliiconfont{
		padding-left: 30rpx;
		font-size: 25px;
	}
	.u-avatar{
		margin-left: 30rpx;
	}
	.u-search{
		padding-left: 90rpx;
	}

</style>