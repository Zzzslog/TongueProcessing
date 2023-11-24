<template>
	<view class="content">
		<!-- 顶部主要导航栏 -->
		<NavBar></NavBar>
		<!-- 首页轮播图 -->
		<view class="wrap">
			<u-swiper :list="list" :duration="3000" :effect3d="true" :circular="true"></u-swiper>
		</view>
		<!-- 主页块状导航-问诊大厅、电子病历、舌象图鉴 -->
		<HomeNav></HomeNav>
		<!-- 热门资讯栏 -->
		<view class="newdiv">
			<view class="navbar-down">
				<u-section title="热门词条" sub-title="详细资讯" font-size="35" @click="readMore"></u-section>
			</view>
			<!-- <HotNews></HotNews> -->
			 <view class="charts-box">
			     <qiun-data-charts 
			          type="word"
			          :opts="opts"
			          :chartData="chartData"
			        />
			 </view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{
						image:'/static/home/lunbo1.jpg'
					},
					{
						image:'/static/home/lunbo2.jpg'
					},
					{
						image:'/static/home/lunbo3.jpg'
					},
					{
						image:'/static/home/lunbo4.jpg'
					}
				],
				 chartData: {},
				      //您可以通过修改 config-ucharts.js 文件中下标为 ['word'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
				      opts: {
				        color: ["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
				        padding: undefined,
				        enableScroll: false,
				        extra: {
				          word: {
				            type: "normal",
				            autoColors: false
				          }
				        }
				      }
			}
		},
		onReady() {
		    this.getServerData();
		},
		mounted(){
			// this.loadData()
		},
		methods:{
			// async loadData(){
			// 	const res = this.$user.loadHomeLunbo()
			// 	this.list = [...res.data.lunbo]
			// }
			readMore(){
				uni.navigateTo({
					url:"./list2detail-list/list2detail-list",
					// success(res) {
					// 	console.log("跳转成功", res);
					//   },
				 //   fail(err) {
					// console.error("跳转失败", err);
				 //   }
				});
			},
			 getServerData() {
			      //模拟从服务器获取数据时的延时
			      setTimeout(() => {
			        //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
			        let res = {
			            series: [
			              {
			                name: "chatGPT",
			                textSize: 25,
			                data: undefined
			              },
			              {
			                name: "新媒体",
			                textSize: 20,
			                data: undefined
			              },
			              {
			                name: "OpenAI",
			                textSize: 20,
			                data: undefined
			              },
			              {
			                name: "AIGC",
			                textSize: 20,
			                data: undefined
			              },
			              {
			                name: "华为",
			                textSize: 20,
			                data: undefined
			              },
			              {
			                name: "阿里",
			                textSize: 20,
			                data: undefined
			              },
			              {
			                name: "iPhone15",
			                textSize: 20,
			                data: undefined
			              },
			              {
			                name: "字节跳动",
			                textSize: 20,
			                data: undefined
			              },
			              {
			                name: "特斯拉",
			                textSize: 12,
			                data: undefined
			              },
			              {
			                name: "价格刺客",
			                textSize: 10,
			                data: undefined
			              },
			              {
			                name: "星巴克",
			                textSize: 12,
			                data: undefined
			              },
			              {
			                name: "迪卡侬",
			                textSize: 10,
			                data: undefined
			              },
			              {
			                name: "AMD",
			                textSize: 12,
			                data: undefined
			              },
			              {
			                name: "文心一言",
			                textSize: 10,
			                data: undefined
			              },
			              {
			                name: "全球数字生态大会",
			                textSize: 12,
			                data: undefined
			              }
			            ]
			          };
			        this.chartData = JSON.parse(JSON.stringify(res));
			      }, 500);
			},
		}
	}
</script>

<style scoped lang="scss">
.wrap {
	padding: 20rpx;
}
.content{
	width: 100%;
	min-height: 100%;
	background-color: #efffff;
}
.newdiv{
	background-color: white;
	border-radius: 40rpx;
	width: 96%;
	height:60%;
	margin:auto;
	margin-top: 8px;
}
.navbar-down{
		width: 96%;
		margin: 35rpx 0 0 30rpx;
		// position: fixed;
}
/* 请根据实际需求修改父元素尺寸，组件自动识别宽高 */
  .charts-box {
    width: 100%;
    height: 300px;
  }
</style>
