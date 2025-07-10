import request from "@/utils/request";

//搜索歌曲
export function wy(data:any){
    return  request({
        url:"/wy",
        method: "post",
        params:data
    })
}


//qq搜索
export function qq(data:any){
    return request({
        url:"/qq",
        method: "post",
        params:data
    })
}
export function qqlrc(data:string){
   return request({
    url:data,
    method:'post'
   })
}


// {
//     msg:"时间过客", //歌名
//     type:"json/xml", //返回格式
//     n:1,// 有n=数字为选歌，无n则为列表。
//     //g:
// }

// export function wylrc(){
//     return axios({
//         url:"https://wanghun.top/qqmusic/lrc.php",
//         method:'get',
//         params:{
//            mid:"",//网易音乐id
//            type:"wy"
//         }
//     })
// }

// export function qqlrc(){
//     return axios({
//         url:"https://wanghun.top/qqmusic/lrc.php",
//         method:'get',
//         params:{
//            mid:"",//qq音乐id
//            type:"qq"
//         }
//     })
// }