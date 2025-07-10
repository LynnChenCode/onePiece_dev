<template>
    <div class="main">
        <div class="item">播放列表</div>
        <div class="item">歌词</div>
        <el-button type="primary" style="margin-left: 16px" @click="drawer = true">
            搜索
        </el-button>
    </div>
    <usePalyer :m="msg" />
    <el-drawer v-model="drawer" :z-index="20" :modal="false" title="I am the title" :with-header="false">
        <div class="affix-container">
            <el-input v-model="input" :change="searchlist(input)" class="w-50 m-2" placeholder="输入歌名">
                <template #append>
                    <img style="width: 36px;height: 36px;" :src="photo"
                        @click="photo === selectlist.logourl1 ? photo = selectlist.logourl2 : photo = selectlist.logourl1"
                        alt="wrong" />
                </template>
                <template #prefix>
                    <el-icon class="el-input__icon">
                        <search />
                    </el-icon>
                </template>
            </el-input>
            <ul v-show="photo === selectlist.logourl1" v-infinite-scroll="load" class="infinite-list"
                style="overflow: auto">
                <li v-for="(i, index) in wylist" :key="index + 1" @click="searchwykey(index + 1)"
                    class="infinite-list-item">
                    {{ i
                    }}</li>
            </ul>
            <ul v-show="photo !== selectlist.logourl1" v-infinite-scroll="load" class="infinite-list"
                style="overflow: auto">
                <li v-for="(i, index) in qqlist" :key="index + 1" @click="searchqqkey(index + 1)"
                    class="infinite-list-item">{{ i }}</li>
            </ul>
            <el-affix target=".affix-container" :offset="80">
                <el-button type="danger" :icon="Close" circle @click="drawer = false" />
            </el-affix>
        </div>



    </el-drawer>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue';
import usePalyer from '@/components/musicPlayer.vue'
import { Close } from '@element-plus/icons-vue'
import { qq, wy, qqlrc } from '@/api/musicapi'
import { ElMessage } from 'element-plus'
const drawer = ref(false)
const input = ref("")
let loading = ref(true)
const selectlist = reactive({
    select: 'src/assets/wylogo.png',
    label1: '网易',
    logourl1: 'src/assets/wylogo.png',
    label2: 'QQ',
    logourl2: 'src/assets/qqlogo.png'
})
let photo = ref(selectlist.logourl1)
let wylist = reactive([])
let qqlist: string[] = reactive([])
const count = ref(0)
const load = () => {
    count.value += 2
}
interface searchdata {
    msg: string, //歌名
    type: string, //返回格式"json/xml"
    n?: number,// 有n=数字为选歌，无n则为列表。
    //g:
}
interface playmusic {
    name: "",
    artlist: "",
    url: "",
    cover: "",
    lrc: ""
}
const open3 = () => {
    ElMessage({
        showClose: true,
        message: '没有该歌曲资源',
        type: 'warning',
    })
}
//搜索歌曲列表
async function searchlist(value: string) {
    value.trim()
    if (value == "") {
        console.log("空的")
    } else {
        let data: searchdata = {
            msg: value, //歌名
            type: "json/xml", //返回格式"json/xml"
            //n:10,// 有n=数字为选歌，无n则为列表。
        }
        //网易和QQ的搜索结果展示在下方列表中，logo变化，下方搜索结果就变化，用v-show切换

        await wy(data).then((res:any) => {
            // console.log("网易",res)
            // ElLoading.service(loading)

            wylist = res.data.data.simplify.split('\n')
            //    console.log(wylist)

        })
        await qq(data).then((res:any) => {
            // console.log("qq",res)
            if (res.data.code == 400) {
                qqlist.push(res.data.msg)
            } else {
                qqlist = res.data.data.split('\n')
            }
        })

    }

    loading.value = false
}
let msg = ref({})

//wy歌曲
async function searchwykey(value: number) {
    let data: searchdata = {
        msg: input.value, //歌名
        type: "json/xml", //返回格式"json/xml"
        n: value// 有n=数字为选歌，无n则为列表。
    }
    await wy(data).then((res:any) => {
        console.log("网易", res)
        let response = res.data.data
        let getmusic: playmusic = {
            cover: response.picture,
            name: response.songtitle,
            artlist: response.songname,
            url: response.musicurl,
            lrc: response.lrctxt.data
            // response[7].replace(/^\"lrctxt\":/,'').replace(/^"/,'').replace(/"$/,'')
        }
        if (getmusic.url === "") {
            open3()
            console.log("msg", "URL没有")
        } else {
                    msg.value = getmusic                
                    console.log("wy歌曲", msg, msg.value)
        }
    })
}
//qq歌曲
async function searchqqkey(value: number) {
    let data: searchdata = {
        msg: input.value, //歌名
        type: "json/xml", //返回格式"json/xml"
        n: value// 有n=数字为选歌，无n则为列表。
    }
    await qq(data).then((res:any) => {
        console.log("qq", res)
        let response = res.data
        let getmusic: playmusic = {
            cover: response.picture,
            name: response.name,
            artlist: response.songname,
            url: response.url,
            lrc: ''

        }
        qqlrc(res.data.lrc).then((re:any) => {
            getmusic.lrc = re.data.data
        })
        if (getmusic.url === "") {
            open3()

            console.log("msg", "URL没有")
        } else {
            msg.value = getmusic
            console.log("qq歌曲", msg)
        }

    })
}
//let lrco:any = null;
// lrco = setTimeout(lrcoffsetTop, 1000);
// function lrcoffsetTop() {
//     clearTimeout(lrco)
//     if (document.getElementsByClassName("aplayer-lrc-current").item(0).offsetTop > 100) {
//         console.log(document.getElementsByClassName("aplayer-lrc-current").item(0).offsetTop)
//         console.log(document.getElementsByClassName("aplayer-lrc-contents").item(0).scrollTop)
//         console.log(document.getElementsByClassName("aplayer-lrc-contents").item(0).clientHeight)
//     }
//     lrco = setTimeout(lrcoffsetTop, 1000)
// };

onMounted(() => {


})
onUnmounted(() => {
    console.log("被销毁了")
})

</script>
<style lang="scss" >
.aplayer.aplayer-fixed {
    position: fixed;
    bottom: 10px;
    left: 34%;
    right: 0;
    margin: 0;
    z-index: 99;
    overflow: visible;
    max-width: 500px;
    box-shadow: none;
}

.aplayer.aplayer-fixed .aplayer-body {
    position: fixed;
    bottom: 10px;
    left: 34%;
    right: 0;
    margin: 0;
    z-index: 99;
    background: #fff;
    padding-right: 18px;
    transition: all .3s ease;
    max-width: 500px;
}

.aplayer .aplayer-lrc {
    display: none;
    position: relative;
    height: 480px;
    text-align: center;
    overflow: hidden;
    margin: -10px 0 7px;
}

.aplayer.aplayer-fixed .aplayer-lrc {
    display: block;
    position: fixed;
    bottom: 18%;
    left: 36px;
    right: 0;
    margin: 0;
    z-index: 98;
    pointer-events: none;
    text-shadow: -1px -1px 0 #fff;
}

.aplayer .aplayer-lrc p {
    font-size: 24px;
    color: #666;
    line-height: 30px !important;
    height: 35px !important;
    padding: 0 !important;
    margin: 0 !important;
    transition: all .5s ease-out;
    opacity: .4;
    overflow: hidden;
}

.aplayer.aplayer-fixed .aplayer-list {
    position: fixed;
    top: 120px;
    left: 20px;
    width: 500px;
    height: 500px;
    margin-bottom: 30px;
    border: 1px solid #eee;
    border-bottom: none;
}

.main {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 30px;

    .item {
        height: 30px;
        font-size: 24px;
    }
}

.affix-container {
    height: 100%;
    border-radius: 4px;
    background: var(--el-color-primary-light-9);
    position: relative;

    .el-affix {
        text-align: center;
        position: absolute;
        bottom: 1px;
        left: 50%;
    }
}

.infinite-list {
    height: 600px;
    padding: 0;
    margin: 0;
    list-style: none;
}

.infinite-list .infinite-list-item {
    display: flex;
    align-items: center;
    height: 50px;
    background: var(--el-color-primary-light-9);
    margin: 20px;
    color: var(--el-color-primary);
}

.infinite-list .infinite-list-item+.list-item {
    margin-top: 10px;
}
</style>