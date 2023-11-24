import http from "../api/http.js"

const home={
	loadHomeLunbo:async(data)=>({url:'/loadHomeLunbo',method:'post',data:data}),
	loadHotNews:async(data)=>({url:'/loadHotNews',method:'post',data:data}),
}