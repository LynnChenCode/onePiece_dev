import request from "@/utils/request";

//wy歌单
export function wygedan(data:any){
    return request({
        url:"/gedan",
        method:"post",
        params:data
    })
}
//wyurl
export function wygedanurl(data:any){
    return request({
        url:"/urlwy",
        method:"get",
        params:data
    })
}
//wyurl重定向请求url
export function wyreurl(musicurl:string){
    return request({
        url:musicurl,
        method:"get"
    })
}
//wy歌单里，歌的lrc
//https://wanghun.top/qqmusic/lrc.php?mid=1349500180&type=wy
export function wygedanlrc(data:any){
    return request({
        url:"/lrcwy",
        method:"post",
        params:data
    })
}
//wy歌单里，歌的pic url
//data:{歌曲id,...}  qq,网易通用
// id=1349500180&type=url
// id=1349500180&type=pic
// export function wygedanpu(data:any){
//     return request({
//         url:"/wyqqgedan/musicurlpic",
//         method:"post",
//         params:data
//     })
// }