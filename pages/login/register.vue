<template>
	<view class="register">
		<view class="content">
			<!-- 头部logo -->
			<view class="header">
				<image :src="logoImage"></image>
			</view>
			<!-- 主体 -->
			<view class="main">
				<wInput
					v-model="user.username"
					type="text"
					maxlength="7"
					placeholder="用户名"
					@input="autoSave"
				></wInput>
				<wInput
					v-model="user.nickname"
					type="text"
					maxlength="7"
					placeholder="昵称"
					@input="autoSave"
				></wInput>
				<wInput
					v-model="user.phonenum"
					type="number"
					maxlength="11"
					placeholder="手机号"
					@input="autoSave"
				></wInput>
				<wInput
					v-model="user.password"
					type="password"
					maxlength="11"
					placeholder="登录密码"
					isShowPass
					@input="autoSave"
				></wInput>
	<!-- 			<wInput
					v-model="verCode"
					type="number"
					maxlength="4"
					placeholder="验证码"
					
					isShowCode
					ref="runCode"
					@setCode="getVerCode()"
				></wInput> -->
					
			</view>
				
			<wButton 
				class="wbutton"
				text="注 册"
				:rotate="isRotate" 
				@click.native="startReg()"
			></wButton>
			
			<!-- 底部信息 -->
			<view class="footer">
				<text 
					@tap="isShowAgree" 
					class="cuIcon"
					:class="showAgree?'cuIcon-radiobox':'cuIcon-round'"
				> 同意</text>
				<!-- 协议地址 -->
				<navigator url="" open-type="navigate">《协议》</navigator>
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
					username:"",//用户名
					nickname:"",//昵称
					phonenum:null, // 电话
					password:'', //密码
				},
				// verCode:"", //验证码
				showAgree:false, //协议是否选择
				isRotate: false, //是否加载旋转
			}
		},
		components:{
			wInput,
			wButton,
		},
		mounted() {
			_this= this;
		},
		methods: {
			isShowAgree(){
				//是否选择协议
				_this.showAgree = !_this.showAgree;
			},
			getVerCode(){
				//获取验证码
				if (_this.user.phonenum.length != 11||isNaN(this.user.phonenum)) {
				     uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '手机号格式不正确'
				    });
				    return false;
				}
				console.log("获取验证码")
				this.$refs.runCode.$emit('runCode'); //触发倒计时（一般用于请求成功验证码后调用）
				uni.showToast({
				    icon: 'none',
					position: 'bottom',
				    title: '模拟倒计时触发'
				});
				
				setTimeout(function(){
					_this.$refs.runCode.$emit('runCode',0); //假装模拟下需要 终止倒计时
					uni.showToast({
					    icon: 'none',
						position: 'bottom',
					    title: '模拟倒计时终止'
					});
				},3000)
			},
			 testCorrect(){
				if(this.isRotate){
					//判断是否加载中，避免重复点击请求
					return false;
				}
				if (this.user.username.length == "") {
					 uni.showToast({
						icon: 'none',
						position: 'bottom',
						title: '用户名不能为空'
					});
					return false;
				}
				if (this.user.nickname.length == "") {
					 uni.showToast({
						icon: 'none',
						position: 'bottom',
						title: '昵称不能为空'
					});
					return false;
				}
				if (this.user.username.length < 6) {
					 uni.showToast({
						icon: 'none',
						position: 'bottom',
						title: '用户名不能小于6位'
					});
					return false;
				}
				if (!(/^[a-zA-Z0-9]+$/.test(this.user.username))) {
					 uni.showToast({
						icon: 'none',
						position: 'bottom',
						title: '用户名只能包含字母和数字'
					});
					return false;
				}
				if (this.user.phonenum.length !=11) {
				    uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '手机号格式不正确'
				    });
				    return false;
				}
				if (this.user.password.length < 6) {
				    uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '密码长度不能少于6位数'
				    });
				    return false;
				}
				if (this.showAgree == false) {
				    uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '请先同意《协议》'
				    });
				    return false;
				}
				// if (this.verCode.length != 4) {
				//     uni.showToast({
				//         icon: 'none',
				// 		position: 'bottom',
				//         title: '验证码不正确'
				//     });
				//     return false;
				// }
				return true
			},
		    async startReg() {
				//注册
				const test = this.testCorrect()
				console.log(test)
				if(!test){
					return false
				}
				console.log(typeof this.user.phonenum)
				// console.log("注册成功")
				try{
					_this.isRotate=true
					// setTimeout(function(){
					// 	_this.isRotate=false
					// },3000)
					
					//注册账号
					const res=await this.$user.Register(this.user)
					console.log(res)
					 if (res.status === 200) {
						  uni.showToast({
							title: "注册账号成功"
						  });
						  uni.navigateTo({
							url: '/pages/login/login'
						  });
						} else if(res.data.status === 400){
							console.log(res)
							  uni.removeStorageSync('userInputData');
							  uni.showToast({
								title: res.data.message
							  });
						}
				  } catch (error) {
				    console.error("发生错误:", error);
					 if (error.response) {
					      console.error("服务器响应:", error.response.data);
					    }
				  } finally {
				    this.isRotate = false;
				  }
		    },
			autoSave(){
				// 将用户输入的数据保存到本地缓存
				uni.setStorageSync('userInputData', this.user);
			}
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