<template>
    <div class="head">
        <el-input v-model="input" placeholder="歌单id" class="input-with-select">
            <template #append>
                <span @click="addgedan(input)">添加</span>
            </template>
        </el-input>
    </div>

    <div class="warp">
        <div class="content">
            <el-scrollbar height="550px">
                <van-grid :gutter="25" :column-num="4" :square="true">
                    <van-grid-item v-for="(item, index) in menulist" :key="index" @click="gendanlist(index)">
                        <template #default>
                            <p>{{ item.nickname }}</p>
                            <div>
                                <img style="width: 100px;height: 100px;" :src="item.avatarUrl" alt="图片错误">
                            </div>
                            <div>
                                <p>{{ item.name }}</p>
                            </div>
                        </template>


                    </van-grid-item>
                </van-grid>
            </el-scrollbar>
        </div>
        <van-cell-group inset>
            <el-scrollbar height="550px">
                <van-cell v-for="(item, index) in list" :key="index">
                    <template #title>
                        <span @click="clickmusic(item)" class="custom-title">{{ item.songname }} </span>
                        <span style="float: right;">{{ item.name }}</span>
                    </template>
                </van-cell>
            </el-scrollbar>
        </van-cell-group>
    </div>
</template>

<script setup lang="ts">
import { wygedan, wygedanlrc,wygedanurl } from "@/api/musicmenuapi";
import { h, ref, reactive, onBeforeMount } from "vue"
import { usemusicStore } from '@/stores/music'
import { ElNotification } from 'element-plus'
let menulistid = reactive([981484303, 2037020941, 8153375346, 6686195202, 8413164289, 7403566770, 8653297603])
interface menulist {
    avatarUrl: string,
    playlist: object[],
    nickname: string,
    name: string,
    description: string
}
interface list {
    id: string,
    songname:string,
    name: string,
    pic: string,
    picUrl: string
}
const store=usemusicStore()
let menulist: menulist[] = reactive([])
let list: list[] = reactive([]);
const meg = () => {
    console.log("ss")
    ElNotification({
        title: '歌单错误',
        message: h('i', { style: 'color: teal' }, '这个歌单id不行哟'),
        duration: 3000,
    })
}
let input = ref()
interface mmusic{
    murl:string,
    mlrc:string,
    msong:string,
    mname:string,
    mpicurl:string
}
let mmenu:mmusic={
    msong:"",
    mname:"",
    mlrc:"",
    mpicurl:"",
    murl:""
}
function addgedan(input: number) {
    wygedan({ id: input }).then((res:any) => {
        try {
            menulist.push({
                avatarUrl: res.data.yonghu.coverImgUrl,
                playlist: res.data.playlist,
                nickname: res.data.nickname,
                name: res.data.yonghu.name,
                description: res.data.yonghu.description
            })
        } catch (error) {
            console.log(error)
            meg()
        }


    })
}
function gendanlist(val: number) {
   
    menulist[val].playlist.map((el => {
        console.log(el)
        return list.push({
            id: (el as any).id,
            songname: (el as any).al.name,
            name: (el as any).ar[0].name,
            pic: (el as any).al.pic,
            picUrl: (el as any).al.picUrl,
            
        })
    }))

}

async function clickmusic(item:list){
    await wygedanurl({id:item.id,type:"url"}).then((res:any)=>{
        console.log("id",item.id)
        mmenu.murl=res.request.responseURL
 
    }).catch((error:any)=>{
        console.log(error)
    });
    await  wygedanlrc({mid:item.id,type:"wy"}).then((res:any)=>{
    //    console.log("歌词",res.data)
         mmenu.mlrc=res.data
    }).catch((error:any)=>{
        console.log(error)
    });
    mmenu.mname=item.name
    mmenu.msong=item.songname
    mmenu.mpicurl=item.picUrl
    try {

        store.mmenu=mmenu
    } catch (error) {
        console.log(error)
    }
}
onBeforeMount(() => {
    menulistid.map((el) => {
        wygedan({ id: el, type: "json" }).then((res:any) => {
            console.log(res.data)
            return menulist.push({
                avatarUrl: res.data.yonghu.coverImgUrl,
                playlist: res.data.playlist,
                nickname: res.data.nickname,
                name: res.data.yonghu.name,
                description: res.data.yonghu.description
            })

        })
    })

})

</script>
<style lang="scss" scoped>
// .van-grid-item{
//     width: 100px ;
//     height: 200px;
// }
@mixin posit {
    display: flex;
    justify-content: center;
    align-items: center;
}

.head {
    @include posit;
    margin: 20px 0;

    .el-input-group {
        width: 600px;
        margin: 0 auto;
    }
}

.warp {
    display: flex;
    justify-content: space-between;

    .content {
        width: 1100px;
        height: 100%;
    }

    .van-cell-group {
        width: 400px;
        border: 1px solid skyblue;
    }
}
</style>../stores/music