import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		hasLogin: false,
		isUniverifyLogin: false,
		loginProvider: "",
		openid: null,
		testvuex: false,
		colorIndex: 0,
		colorList: ['#FF0000', '#00FF00', '#0000FF'],
		noMatchLeftWindow: true,
		active: 'componentPage',
		leftWinActive: '/pages/component/view/view',
		activeOpen: '',
		menu: [],
		univerifyErrorMsg: '',
		tabBarList:[{
				pagePath: "pages/Home/home",
				iconPath: "static/home.png",
				selectedIconPath: "static/home-active.png",
				text: "首页",
				midButton:false
			},
			{
				pagePath: "pages/Encyclopedia/encyclopedia",
				iconPath: "static/encyclopedia.png",
				selectedIconPath: "static/encyclopedia-active.png",
				text: "健康百科",
				midButton:false
			},
			{
				pagePath: "pages/Diagnose/diagnose",
				iconPath: "static/diagnose.png",
				selectedIconPath: "static/diagnose-active.png",
				text: "诊断",
				midButton:true,
			},
			{
				pagePath: "pages/Community/community",
				iconPath: "static/community.png",
				selectedIconPath: "static/community-active.png",
				text: "社区",
				midButton:false
			}, 
			{
				pagePath: "pages/Mine/mine",
				iconPath: "static/mine.png",
				selectedIconPath: "static/mine-active.png",
				text: "我的",
				midButton:false
			},
		]
	},
})
export default store