<template>
	<view class="login">
		<view class="content">
			<!-- 头部logo -->
			<view class="header">
				<image :src="logoImage"></image>
			</view>
			<!-- 主体表单 -->
			<view class="main">
				<wInput
					v-model="user.key"
					type="text"
					maxlength="11"
					placeholder="用户名/电话"
					:focus="isFocus"
					 @input="autoSave"
				></wInput>
				<wInput
					v-model="user.password"
					type="password"
					maxlength="11"
					placeholder="密码"
					 @input="autoSave"
				></wInput>
			</view>
			<wButton 
				class="wbutton"
				text="登 录"
				:rotate="isRotate" 
				@click="startLogin"
			></wButton>
			
			<!-- 其他登录 -->
			<view class="other_login cuIcon">
				<view class="login_icon">
					<view class="cuIcon-weixin wechat_color" @tap="login_weixin"></view>
				</view>
				<view class="login_icon">
					<view class="cuIcon-weibo weibo_color" @tap="login_weibo"></view>
				</view>
				<view class="login_icon">
					<view class="cuIcon-github github_color" @tap="login_github"></view>
				</view>
			</view>
			
			<!-- 底部信息 -->
			<view class="footer">
				<navigator url="forget" open-type="navigate">找回密码</navigator>
				<text>|</text>
				<navigator url="register" open-type="navigate">注册账号</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	let _this;
	import wInput from '../../components/watch-login/watch-input.vue' //input
	import wButton from '../../components/watch-login/watch-button.vue' //button
	
	export default {
		data() {
			return {
				//logo图片 base64
				logoImage:"../../static/app-icon.png",
				user:{
					key:"",
					password:"",
				},
				isRotate: false, //是否加载旋转
				isFocus: true // 是否聚焦
			};
		},
		components:{
			wInput,
			wButton,
		},

		mounted() {
			_this= this;
			this.isLogin();
		},
		methods: {
			isLogin(){
				//判断缓存中是否登录过，直接登录
				try {
					const value = uni.getStorageSync('setUserData',this.user);
					if (value) {
						//有登录信息
						console.log("已登录用户：",value);
						_this.$store.dispatch("setUserData",value); //存入状态
						uni.reLaunch({
							url: '/pages/home/home',
						});
					}
				} catch (e) {
					// error
				}
			},
			async testCorrect(){
				//逻辑判断
				if(this.isRotate){
					//判断是否加载中，避免重复点击请求
					return false;
				}
				 if (this.isLogin()) {
				    // 用户已登录的逻辑
				    return;
				}
				if (this.user.key.length == "") {
					 uni.showToast({
						icon: 'none',
						position: 'bottom',
						title: '用户名/手机号不能为空'
					});
					return;
				}
				if (this.user.password.length < 6) {
					uni.showToast({
						icon: 'none',
						position: 'bottom',
						title: '密码长度不能少于6位数'
					});
					return;
				}
			},
		   async startLogin (e){
                // console.log(e)
				// 登录
				this.testCorrect()
				
				// 加载旋转
				_this.isRotate=true
				setTimeout(function(){
					_this.isRotate=false
				},3000)
				
				// // TEST测试
				// uni.showToast({
				// 	title:"登录成功"
				// })
				// // // uni.setStorageSync('user',data.data)
				uni.switchTab({
					url:'/pages/home/home'
				})
				
				// 正式部署
				// uni.showLoading({
				// 	title: '登录中'
				// });

				// const res=await this.$user.Login(this.user)
				// console.log();
				//登录成功
				 try {
				        await this.$user.Login(this.user);
						console.log(res)
				        if (res.status == 200) {
				            console.log(res.data);
				            uni.showToast({
								icon:"success",
				                title: "登录成功"
				            });
				            // localStorage存储用户信息
				            localStorage.setItem('user', JSON.stringify(this.user));
				            uni.setStorageSync('user', res.data);
				            uni.switchTab({
				                url: '/pages/home/home'
				            });
				        } else {
							uni.removeStorageSync('userInputData');
				            uni.showToast({
								icon:"error",
				                title: "登录失败"
				            });
										        }
				    } catch (error) {
				        console.error('Error in startLogin:',error);
						console.log('Error details:', error.message, error.response); // 添加这一行
				        uni.showToast({
							icon:"error",
				            title: "登录异常"
				        });
				    } finally {
				        // 无论请求成功还是失败，加载旋转结束
				        this.isRotate = false;
				    }
		    },
			login_weixin() {
				//微信登录
				uni.showToast({
					icon: 'none',
					position: 'bottom',
					title: '...'
				});
			},
			login_weibo() {
				//微博登录
				uni.showToast({
					icon: 'none',
					position: 'bottom',
					title: '...'
				});
			},
			login_github() {
				//github登录
				uni.showToast({
					icon: 'none',
					position: 'bottom',
					title: '...'
				});
			},
			autoSave() {
				  // 将用户输入的数据保存到本地缓存
				  uni.setStorageSync('userInputData', this.user);
				 //  // 提示用户保存成功，可以根据实际需求进行处理
				 //  uni.showToast({
					// title: '保存成功',
					// icon: 'success',
				 //  });
		    },	
	},
	onLoad(){
		// 在页面加载时，尝试从本地缓存中获取数据并设置到 savedData 中
		const savedData = uni.getStorageSync('userInputData',this.user);
		if (savedData) {
		  this.user = savedData;
		}
	}
}
</script>

<style>
	@import url("../../components/watch-login/css/icon.css");
	@import url("./css/main.css");
</style>
