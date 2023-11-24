import http from "./http.js"
const user={
	Login:async(data)=>http({url:'/login',method:'post',data:data}),
	Register:async(data)=>http({url:'/register',method:'post',data:data}),
	Forget:async(data)=>http({url:'/forget',method:'post',data:data}),
}
export default user