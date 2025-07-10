<template>
  <canvas id="bgCanvas" width="1912" height="300"
    style="display: block; position: fixed; margin: 0px; padding: 0px; border: 0px; outline: 0px; left: 0px; top: 0px; width: 100%; height: 100%; z-index: -1; background-color: whitesmoke;"></canvas>

  <div class="warp">
    <header>现在时间：{{ time }}</header>
    <!-- 🏴‍☠️🎼👾🗂️ -->
    <nav>

      <div v-if="flag" @click="flagfun">
        ☀️
      </div>
      <div v-else @click="flagfun">🌙</div>
    </nav>
    <div class="main">
      <div class="content">
        <ul>
          <li @click="showUl('lowul1')"><span>01 前端</span></li>
          <ul id="lowul1" style="display: none;">
            <li v-for="item in lowul1"><span><a class="a_link" :href="item.src" target="_blank">{{ item.name }}</a></span></li>
          </ul>

          <li @click="showUl('lowul2')"><span>02 后端</span></li>
          <ul id="lowul2" style="display: none;">
            <li><span>java基础</span></li>
            <li><span>springboot</span></li>
            <li><span>SQL基础</span></li>
          </ul>

          <li @click="showUl('lowul3')"><span>03 网络安全</span></li>
          <ul id="lowul3" style="display: none;">
            <li><span>暂无</span></li>
          </ul>

          <li @click="showUl('lowul4')"><span>04 前端可视化</span></li>
          <ul id="lowul4" style="display: none;">
            <li v-for="item in lowul4"><span><a class="a_link" :href="item.src" target="_blank">{{ item.name }}</a></span></li>
          </ul>

          <i class="pi pi-spin pi-cog" style="font-size: 0.3rem; color: #00ffff"></i>

          <li @click="showUl('lowul5')"><span>05 动漫/电影</span></li>
          <ul id="lowul5" style="display: none;">
            <li v-for="item in lowul5"><span><a class="a_link" :href="item.src" target="_blank">{{ item.name }}</a></span></li>
          </ul>

          <i class="pi pi-spin pi-cog" style="font-size: 0.3rem; color: #ee82ee"></i>
          <li @click="showUl('lowul6')"><span>06 工具</span></li>
          <ul id="lowul6" style="display: none;">
            <li v-for="item in lowul6"><span><a class="a_link" :href="item.src" target="_blank">{{ item.name }}</a></span></li>
          </ul>
        </ul>
        <i class="pi pi-spin pi-cog" style="font-size: 0.3rem; color: #82ee8b;margin: 0 35px;"></i>
           <div id="echarts" @click="router.push('/echarts')">
            🌏<span>数据可视化</span>
           </div>
        <i class="pi pi-spin pi-cog" style="font-size: 0.3rem; color: #ee8d82;margin: 20px 35px 0;"></i>
        <div id="music"   @click="router.push('/music')">
          🎶<span>音乐播放器</span>   
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useTime } from "@/hooks/useTime"
import { ref, onMounted } from "vue"
import 'primeicons/primeicons.css';
import "./bgcaidai.js"
import { showUl } from "@/hooks/showUL"
const { nowTime, hour } = useTime();
const router=useRouter()
let time = ref(nowTime.value);
let Hour = ref(hour.value)
let flag = ref(true)
let lowul1 = [{ name: "Vue官网", src: "https://cn.vuejs.org/" },
{ name: "Router插件", src: "https://router.vuejs.org/zh/" },
{ name: "pinia插件", src: "https://pinia.vuejs.org/zh/" },
{ name: "HTML官网", src: "https://html.com/" },
{ name: "CSS官网", src: "https://www.w3.org/Style/CSS/" },
{ name: "JavaScript官网", src: "https://www.java-scripts.net/" },
{ name: "JavaScript入门", src: "https://wangdoc.com/javascript/" },
{ name: "ES6", src: "https://es6.ruanyifeng.com/" }]

let lowul4 = [{ name: "Echarts官网", src: "https://echarts.apache.org/handbook/zh/get-started/" },
{ name: "PPchart", src: "http://ppchart.com/#/" },
{ name: "chartsdev", src: "http://192.144.199.210/forum.php" },
{ name: "WebGL", src: "http://www.hewebgl.com/" }]

let lowul5 = [{ name: "茶杯狐", src: "https://cupfox.app/" },
{ name: "freeok", src: "https://www.freeok.me/" },
{ name: "哈哩哈哩", src: "http://halihali6.com/" },
{ name: "风车动漫", src: "http://www.dmla1.com/" },
{ name: "樱花动漫", src: "http://www.yinghuavideo.com/" }]

let lowul6 = [{ name: "储物间", src: "https://axutongxue.com/" },
{ name: "思否", src: "https://segmentfault.com/blogs" },
{ name: "博客园", src: "https://www.cnblogs.com/" }]
setInterval(() => {
  time.value = useTime().nowTime.value;
  Hour.value = useTime().hour.value
}, 1000);
onMounted(() => {

})
function flagfun() {
  if (flag.value === true) {
    flag.value = false
  } else {
    flag.value = true
  }
}
</script>
<style scoped lang="scss">
header,
nav {
  padding-left: 40px;
}

.main {
  .content {
    ul {
      list-style: square inside url(@/assets/file.png);
      margin: 0 35px;
      ul {
        list-style: square inside url(@/assets/internet.png);

      }

      li {
        font-size: 18px;
        padding: 5px;

        span {
          position: absolute;

        }
      }
    }

  }
}

#echarts,#music {
  font-size: 18px;
  padding: 5px;
  span {
    position: absolute;

  }
  margin: 0 35px;
}
.a_link{
  color: black;
  text-decoration: none;
}
</style>
