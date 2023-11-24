//api封装
//公共请求地址
// import useUserStore from '/api/api.js'
 // const userStore=useUserStore()
  //
const baseUrl='http://192.168.31.104:8081';
 
 const http=(config)=>{
  return new Promise((resolve,reject)=>{
    console.log(config)
    uni.request({
		url:'http://192.168.31.104:8081'+config.url,
		timeout:5000,
		method:config.method,
		data:config.data,
		header: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              // 'Authorization': 'Bearer ' +uni.getStorageSync('token')
            },
      success(res) {
			resolve(res.data)
		},
      fail(err) {
         reject(err)
      }
    })
  })
}


export default http;