import { RouteRecordRaw } from "vue-router";

export const staticRouters:RouteRecordRaw[]=[
    {
        path:'/',
        name:"file",
        component:()=>import("@/view/file/studyFileList.vue"),
        meta:{
            title:"学习文件链接"
        }
    },
    {
        path:'/echarts',
        component:()=>import('@/view/echarts/index.vue'),
        meta:{
            title:"数据可视化"
        }
    },
    {
        path:'/404',
        component:()=>import("@/view/pagenotfound.vue")
        
    },
    {
        path:'/music',
        component:()=>import("@/view/musicpage/index.vue"),
        redirect:"/music1",
        meta:{
           title:"私人音乐播放",
        },
        children:[{
            path:'/music1',
            name:'m1',
            component:()=>import("@/view/musicpage/music.vue"),
            meta:{
               title:"私人音乐播放-首页",
            },
        },
        {
            path:'/music2',
            name:'m2',
            component:()=>import("@/view/musicpage/musicmenu.vue"),
            meta:{
               title:"私人音乐播放-歌单",
            },
         
        },
        {
            path:'/music3',
            name:'m3',
            component:()=>import("@/view/musicpage/musiclevel.vue"),
            meta:{
               title:"私人音乐播放-排行榜",
            }
        }]
    },
    
]