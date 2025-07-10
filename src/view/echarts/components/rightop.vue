<template>
  <div class="echarts-header">
    <span>序号</span>
    <span>书名</span>
    <span>时间</span>
  </div>
  <vue3-seamless-scroll :list="tableData" :step="0.5" class="scroll" hover wheel>
    <div class="item" v-for="(item, index) in tableData" :key="index">
      <span class="column pos">
        <div class="count-item__icon">
          <div class="icon__circle animate-rotation"></div>
          <img class="icon__content" src="../assets/icon-book.png" />
          <div class="po">{{item.number}}</div>
        </div>
      </span>
      <span class="column po2">{{item.name}}</span>
      <span class="column">{{item.date}}</span>
    </div>
  </vue3-seamless-scroll>
</template>
<script setup >
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
const props=defineProps({msg3:[]})

const tableData = props.msg3
</script>
<style lang="scss"  > 
@import "@/style/screen-mixin.scss";

.echarts-header {
  box-sizing: border-box;
  display: flex;
  height: 36px;
  margin: 10px 0 0;
  line-height: 36px;
  background: url("../images/rankingChart-bg.png") no-repeat;
  background-size: 100% 100%;
  span {
    width: 15%;
    margin-left: 8px;
    font-size: 14px;
    font-weight: bold;
    color: #fdbc52;
    text-align: center;
    &:nth-child(2) {
      margin-left: 10px;
    }
    &:last-child {
      width: 60%;
      margin-left: 60px;
    }
  }
}
.scroll {
  height:calc( 100% - 20px);
  width: 100%;
  text-align: center;
  margin: 0 auto;
  overflow: hidden;
  background-color: #011a37;
  position: relative;
}

.scroll .item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 5px;
  margin-bottom: 5px;
  height: 45px;
  background:#0e2f56;
    color:#fff;
    font-size: 12px;
    font-weight: bold;
    border: 1px solid #41e4f1;
    border-radius: 3px;
  .po2{
    // margin-right:100px;
    position: absolute;
    left: 20%;
    text-align: left;
  }  
}

.count-item {

  &__icon {
    width: 50px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  
}

.icon {
  &__circle {
    @include background-setting(
      "../assets/circle.png",
      36px,
      36px
    );

    position: absolute;
  }

  &__content {
    width: 17px;
    height:17px ;
  }
}

.animate-rotation{
  animation: animate-rotation 10s linear infinite;
}

@keyframes animate-rotation {
  from {
    -webkit-transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
  }
}

.pos{
  position: relative;
  .po{
    position: absolute;
    top: 35%;
  }
}
</style>