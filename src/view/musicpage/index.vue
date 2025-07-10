<template>
  <div class="wrap">
    <header>
      <div class="menu">
        <el-menu :router="true" :default-active="route.path" class="el-menu-demo" mode="horizontal">
          <el-menu-item index="/music1" @click="a='1'">首页</el-menu-item>
          <el-menu-item index="/music2" @click="a='2'">歌单</el-menu-item>
          <el-menu-item index="/music3" @click="a='3'">排行榜</el-menu-item>
          <el-menu-item disabled class="fr0">{{ route.meta.title }}</el-menu-item>
            <el-menu-item class="fr1"><svg t="1689681529112" class="icon" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="9603" width="40" height="50">
              <path
                d="M224 277.333333a32 32 0 0 0-32 32v384c0 17.664 14.336 32 32 32h576a32 32 0 0 0 32-32V405.333333a32 32 0 0 0-32-32h-320a31.914667 31.914667 0 0 1-22.613333-9.386666L380.16 286.72a32 32 0 0 0-22.698667-9.386667H224zM128 309.333333A96 96 0 0 1 224 213.333333h133.461333c25.472 0 49.92 10.112 67.925334 28.16l67.84 67.84h306.773333A96 96 0 0 1 896 405.333333v288a96 96 0 0 1-96 96H224A96 96 0 0 1 128 693.333333v-384z"
                fill="#000000" p-id="9604"></path>
            </svg></el-menu-item>
          <el-menu-item class="fr2"><svg t="1689681618474" class="icon" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="11517" width="30" height="50">
              <path
                d="M665.65 28.3c-76.085 0-139.942 52.676-158.38 123.19H49.71v82.13h457.56c18.438 70.514 82.295 123.18 158.38 123.18s139.942-52.666 158.38-123.18h129.06v-82.13H824.03C805.592 80.976 741.735 28.3 665.65 28.3z m0 82.13c45.169 0 82.13 36.951 82.13 82.12 0 45.169-36.961 82.13-82.13 82.13s-82.12-36.961-82.12-82.13 36.951-82.12 82.12-82.12zM337.03 346.26c-76.085 0-139.942 52.676-158.38 123.19H49.59v82.13h129.06c18.438 70.514 82.295 123.18 158.38 123.18 76.084 0 139.932-52.666 158.37-123.18h457.56v-82.13H495.4c-18.438-70.514-82.286-123.19-158.37-123.19z m0 82.13c45.169 0 82.12 36.951 82.12 82.12 0 45.169-36.951 82.13-82.12 82.13-45.169 0-82.13-36.961-82.13-82.13s36.961-82.12 82.13-82.12z m328.5 245.81c-76.088 0-139.945 52.67-158.38 123.19H49.59v82.12h457.56c18.438 70.514 82.295 123.19 158.38 123.19 76.084 0 139.932-52.676 158.37-123.19h129.06v-82.12H823.91c-18.434-70.52-82.291-123.19-158.38-123.19z m0 82.12c45.169 0 82.12 36.961 82.12 82.13s-36.951 82.12-82.12 82.12c-45.169 0-82.13-36.951-82.13-82.12 0-45.169 36.961-82.13 82.13-82.13z"
                p-id="11518"></path>
            </svg></el-menu-item>
          <el-menu-item class="fr3"> <el-avatar style="height: 48px;"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" /></el-menu-item>
        
          </el-menu>
      </div>
    </header>
  
  <!-- <keep-alive include="music">
    <router-view ></router-view>
  </keep-alive>  -->

  <keep-alive>
   <Music v-if="a==='1'"></Music>
   <Musicmenu v-else-if="a==='2'"></Musicmenu>
   <MusiclevelVue v-else></MusiclevelVue>
  </keep-alive>

  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import Music from './music.vue';
import Musicmenu from './musicmenu.vue';
import {ref} from 'vue'
import MusiclevelVue from './musiclevel.vue';
const route = useRoute();
let a=ref("1")
</script>
<style lang="scss" scoped>
@font-face {
  font-family: headfon;
  src: url("@/assets/fonts/MetroDF.ttf");
}
header {
  height: 1rem;
  .fr0{
    position: absolute;
    left: 45%;
  }
  .fr1{
  position: absolute;
  right: 140px;
}
.fr2{
  position: absolute;
  right: 70px;
}
.fr3{
  position: absolute;
  right: 0px;
}
}
.el-menu-item{
   font-size: 18px;
    font-family: headfon;
  }
</style>


