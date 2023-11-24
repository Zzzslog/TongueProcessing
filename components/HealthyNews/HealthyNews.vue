<template>
	<view class="healthy_news">
		<view class="tips-navbar">
			<u-section title="健康常识" sub-title="查看更多" font-size="35"></u-section>
		</view>
		<scroll-view scroll-x :scroll-with-animation="true" class="uni-swiper-tab" style="height: 40%;" >
			<view class="tips" >
				<view class="tip" v-for="(item,index) in tips" :key="index">
					<view style="display: flex;flex-direction: column;width: 250rpx;">
						<u-image width="250rpx" height="150rpx" :src="item.image"></u-image>
						<text class="tip_text">{{item.title}}</text>
						<text class="tip_content">{{truncateText(item.content)}}</text>
					</view>	
				</view>
			</view>
		</scroll-view>
		<view class="news-navbar">
			<u-section title="健康资讯" sub-title="查看更多" font-size="35"></u-section>
		</view>
		<view style="display: flex;flex-direction: column; overflow-x: hidden;width: 420rpx;height: 50%;">
	<!-- 	<scroll-view scroll-x :scroll-with-animation="true" class="uni-swiper-tab" style="height: 40%;" > -->
			<view class="news">
				<view class="new" v-for="(item,index) in news" :key="index">
					<view style="display: flex;flex-direction: column;width: 420rpx;">
						<video :src="item.videopath" :poster="item.image" style="width:420rpx;height:300rpx"></video>
						<text style="font-size: 1rem;font-weight: 650;text-align: center;">{{item.title}}</text>
						<text class="new_content">{{truncateText(item.detail)}}</text>
					</view>
				</view>	
			</view>
<!-- 		</scroll-view> -->
		</view>
	</view>
</template>

<script>
export default {
	name:"HealthyNews",
	data() {
		return {
			tips:[
				 {
					 image:"https://img1.baidu.com/it/u=1852380089,2239345274&fm=253&fmt=auto&app=138&f=JPEG?w=612&h=447",
					 title:"中医是什么？",
					 content:"中医诞生于原始社会，春秋战国时期中医理论已基本形成。中医学以阴阳五行为理论基础，将人体看做气、形、神的一种",
				 },
				 {
					 image:"https://img1.baidu.com/it/u=1889310296,3381505979&fm=253&fmt=auto&app=138&f=PNG?w=500&h=707",
					 title:"中医舌诊",
					 content:"舌诊是观察舌头的色泽、形态的变化来辅助诊断及鉴别的一个简单有效的方法。 舌诊，诊断学名词。为望诊重点内容之一。观指标。舌为心之苗，脾之外候，苔由胃气所生。脏腑通过经脉与舌相联中医诊断疾病的重要客系，手少阴之别系舌本，足少阴之脉挟舌本，足厥阴之脉络舌本，足太阴之脉连舌本，散舌下，故脏腑病变，可在舌质和舌苔上反映出来，舌诊主要诊察舌质和舌苔的形态、色泽、润燥等，以此判断疾病的性质、病势的浅深、气血的盛衰、津液的盈亏及脏腑的虚实等。",
				 },
				 {
					 image:"https://img2.baidu.com/it/u=1015194904,3507246436&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=312",
					 title:"中医脉诊",
					 content:"脉诊是通过按触人体不同部位的脉搏，以体察脉象变化的切诊方法。又称切脉、诊脉、按脉、持脉。脉象的形成与脏腑气血密切相关，若脏腑气血发生病变，血脉运行就会受到影响，脉象就有变化。脉诊在临床上，可推断疾病的进退预后。临床上主要掌握脉诊的时间、病人的体位，医生的指法和指力轻重，每次按脉时间，以每侧脉搏跳动不少于50次为限，同时要了解健康人脉象的变化情况，才能正确地进行脉诊。"
				 }
			 ],
			 news:[
				 {
					 videopath:"https://xy42x248x135x244xy.mcdn.bilivideo.cn:4483/upgcxcode/39/10/476071039/476071039_da2-1-192.mp4?e=ig8euxZM2rNcNbNz7wdVhwdlhbhMhwdVhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1698139235&gen=playurlv2&os=mcdn&oi=1911897371&trid=00000dad76b7d7b64e1ea1f6fe4ac7bb0398u&mid=595822230&platform=pc&upsig=d63a724d88a2cd9024cf514854236ec9&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&mcdnid=14001909&bvc=vod&nettype=0&orderid=0,3&buvid=F23DAFDD-D609-5862-8D60-A4279C69F35019697infoc&build=0&f=u_0_0&agrr=1&bw=234411&logo=A0002000",
					 image:"",
					 title:"八段锦标准带口令版",
					 detail:"来源：bilibili\n八段锦是由八种不同动作组成的健身术，故名“八段”。因为这种健身功可以强身益寿，祛病除疾，其效果甚佳，有如展示给人们一幅绚丽多彩的锦缎，故称为“锦”。八段锦是我国民间广泛流传的一种健身术，据有关文献记载已有八百多年历史。",
				 },
				 // {
					//  videopath:"",
					//  image:"",
					//  title:"如何正确呵护心脏健康",
					//  detail:"",
				 // }
			 ],
			 maxLength:37,
		}
	},
	methods:{
		truncateText(text){
				if(text.length>this.maxLength){
					return text.slice(0,this.maxLength)+"...";
				}else{
					return text;
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.healthy_news{
		margin: 30rpx 15rpx;
		border-radius: 20rpx;
		height:70%;
		background-color: white;
		.tips{
			display: flex;
			flex-direction: row;
			.tip{
				margin: 20rpx;
				display: inline-block;
				.tip_content{
					margin-left: 15rpx;
				}
				.tip_text{
					font-size: 1rem;
					font-weight: 650;
					text-align: center;
					background: linear-gradient(to bottom, white 0%,white 65%,rgba(199, 255, 222,0.4) 0%,rgba(199, 255, 222,0.4) 65% );
				}
			}
		}
		.news{
			display: flex;
			flex-direction: row;
			height: 40%;
			.new{
				margin: 20rpx 20rpx;
				display: inline-block;
				.new_content{
					margin-left: 15rpx;
				}
			}
			
		}
	}
</style>