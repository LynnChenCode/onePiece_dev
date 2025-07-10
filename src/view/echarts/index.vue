<template>
  <header>
    <div class="header-left">
      <span class="header-screening" @click="router.push('/')">首页</span>
    </div>
    <div class="header-center">
      <div class="header-center-title">
        <span>个人数据化平台中心</span>
        <div class="header-center-warning">数据来源为国家统计局</div>
      </div>
    </div>
    <div class="header-right">
      <el-popover placement="bottom" :width="400" trigger="click">
        <template #reference>
          <span class="header-download">修改报告</span>
        </template>
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="中">
            <el-input
              v-model="ctmsg.chinapeople"
              placeholder="总人口"
              clearable
            />
            <el-input
              v-model="ctmsg.frontpeople"
              placeholder="前端人数"
              clearable
            />
          </el-form-item>

        </el-form>
      </el-popover>
      <span class="header-time">当前时间：{{ time }}</span>
    </div>
  </header>
  <section class="mainbox">
    <div class="column">
      <div class="panel">
        <Leftop :msg1="ltmsg" />
        <div class="panel-footer"></div>
      </div>

      <div class="panel">
        <!-- lefbottom -->
        <Lefbot :msg2="lbmsg" :msg21="lbmsg2" />
        <div class="panel-footer"></div>
      </div>
    </div>
    <div class="column">
      <div class="panel-center">
        <div class="le">
          <h2>中国总人口</h2>
          <div style="height: 0.04rem"></div>
          <span>{{ ctmsg.chinapeople }}</span>
          <b class="number__text fot_text">万人</b>
        </div>
        <div class="ri">
          <h2>前端人数</h2>
          <div style="height: 0.04rem"></div>
          <span>{{ ctmsg.frontpeople }}</span>
          <b class="number__text fot_text">万人</b>
        </div>
      </div>
      <div class="dataScreen-map-title">关系网</div>
      <chinaMap />
    </div>
    <div class="column">
      <div class="panel">
        <!-- rightop -->
        <Rightop :msg3="rtmsg" />
        <div class="panel-footer"></div>
      </div>

      <div class="panel">
        <!-- rightbottom -->
        <Rightbot :msg4="rbmsg" :msg41="rtmsg2" />
        <div class="panel-footer"></div>
      </div>
    </div>
  </section>
</template>

<script setup >
import Leftop from "./components/leftop.vue";
import Lefbot from "./components/letbot.vue";
import Rightbot from "./components/rightbot.vue";
import chinaMap from "./components/chinaMap.vue";
import Rightop from "./components/rightop.vue";
import { useTime } from "@/hooks/useTime";
import { ref, reactive } from "vue";
import { useRouter } from 'vue-router'
const ctmsg = reactive({ chinapeople: 1425625, frontpeople: 600 });
const router=useRouter()
const ltmsg = reactive([
  {
    value: 79,
    name: "Vue3",
    percentage: "80%",
    maxValue: 100,
  },
  {
    value: 59,
    name: "TS",
    percentage: "60%",
    maxValue: 100,
  },
  {
    value: 49,
    name: "Java",
    percentage: "50%",
    maxValue: 100,
  },
  {
    value: 39,
    name: "Mysql",
    percentage: "40%",
    maxValue: 100,
  },
  {
    value: 29,
    name: "Echart",
    percentage: "30%",
    maxValue: 100,
  },
]);
const lbmsg2 = reactive([0, 0, 0, 0]);
const lbmsg = reactive([
  {
    name: "大道至简",
  },
  {
    name: "修身养性",
  },
  {
    name: "苍天已死",
  },
  {
    name: "黄天当立",
  },
  {
    name: "所谓伊人",
  },
  {
    name: "在水一方",
  },
]);
const rtmsg = reactive([
  {
    number: "1",
    name: "三体1",
    date: "2021.07.13~2021.07.26",
  },
  {
    number: "2",
    name: "三体2",
    date: "2021.08.12~2021.09.23",
  },
  {
    number: "3",
    name: "三体3",
    date: "2021.10.13~2021.12.07",
  },
  {
    number: "4",
    name: "在细雨中呼喊",
    date: "2022.04.07~2022.05.07",
  },
  {
    number: "5",
    name: "活着",
    date: "2023.07.15~2023.07.15",
  },
  {
    number: "6",
    name: "云边有个小卖部",
    date: "未读",
  },
  {
    number: "7",
    name: "天堂旅行团",
    date: "未读",
  },
  {
    number: "8",
    name: "精准表达：把话说到点子上",
    date: "2023.08.23~未知",
  },
]);
const rtmsg2 = reactive([0, 8, 0, 0]);
const rbmsg = reactive([[6], ["男生60%"]]);
// 获取当前时间
const { nowTime } = useTime();

let time = ref(nowTime.value);

setInterval(() => {
  time.value = useTime().nowTime.value;
}, 1000);

</script>

<style lang="scss">
@import "./index.scss";

.fot_text {
  font-size: 20px;
  margin: 0 5px;
  color: #fff;
  font-weight: normal;
}
</style>
