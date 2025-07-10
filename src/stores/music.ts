import { defineStore } from 'pinia'
import {reactive} from 'vue'
export const usemusicStore = defineStore('music', ()=>{
    let mmenu=reactive({
        murl:"",
        mlrc:"[00:00.000] 作词 : 大能人\n[00:01.000] 作曲 : 编曲采样《情歌》前奏\n[00:02.000] 原唱 : 雷智皓(大能人)\n[00:03.000] 出品 : 网易音乐人 X 青云LAB\n[00:11.570]我的山楂树之恋\n[00:14.590]只有是和你才",
        msong:"",
        mname:"",
        mpicurl:"http://p2.music.126.net/G00sAe86sPi5gFQyuJHU7A==/109951164260611202.jpg"
    })
    return {mmenu}
  })