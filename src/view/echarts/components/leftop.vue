<template>
    <div class="echarts-header">
    <span>排名</span>
    <span>专业</span>
    <span>熟练度</span>
  </div>
  <UseEcharts :tit="echartsname" :option="option" />
</template>

<script setup >
import UseEcharts from '@/components/useEcharts.vue';
import { ranking1, ranking2, ranking3, ranking4 } from "../assets/ranking-icon";
import { ref,reactive} from 'vue';
let echartsname=ref("lt")

let colors= ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"]
const props=defineProps({msg1:[]})

let data =props.msg1


let option = reactive({
  grid: { 
      top: "5%",
      left: "7%",
      right: "4%",
      bottom: "1%",
      containLabel: true
    },
    xAxis: {
      type: "value",
      axisLine: {
        show: false,
        lineStyle: {
          color: "white"
        }
      },
      nameGap: 1,
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false,
        fontSize: 16
      },
      // boundaryGap: ["3%", "2%"],
      // splitNumber: 4,
      triggerEvent: false
    },
    yAxis: [
      {
        show: true,
        data: data.map((val) => val.name),
        inverse: true,
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#fff",
          formatter: function (value) {
            let str = value.length > 6 ? value.slice(0, 6) + "..." : value;
            let index = data.map((item) => item.name).indexOf(value) + 1;
            return ["{" + (index > 3 ? "lg" : "lg" + index) + "|NO." + index + "}", "{title|" + str + "}"].join(" ");
          },
          rich: {
            lg1: {
              width: 60,
              backgroundColor: {
                image: ranking1
              },
              color: "#fff",
              align: "center",
              height: 20,
              fontSize: 13
            },
            lg2: {
              width: 60,
              backgroundColor: {
                image: ranking2
              },
              color: "#fff",
              align: "center",

              height: 20,
              fontSize: 13
            },
            lg3: {
              width: 60,
              backgroundColor: {
                image: ranking3
              },
              color: "#fff",
              align: "center",
              height: 20,
              fontSize: 13
            },
            lg: {
              width: 60,
              backgroundColor: {
                image: ranking4
              },
              color: "#fff",
              align: "center",

              height: 20,
              fontSize: 13
            },
            title: {
              width: 60,
              fontSize: 13,
              align: "center",
              padding: [0, 10, 0, 15]
            }
          }
        },
        triggerEvent: false
      },
      {
        show: true,
        inverse: true,
        data: data,
        axisLabel: {
          fontSize: 14,
          color: "#fff",
          // align: "right",
          margin: 20,
          formatter: (value) => {
            return  value + "%"  ;
          }
        },
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        triggerEvent: false
      }
    ],
    series: [
      {
        name: "条",
        type: "bar",
        yAxisIndex: 0,
        data: data,
        barWidth: 12,
        itemStyle: {
          borderRadius: 30,
          color: function (params) {
            let num = colors.length;
            return colors[params.dataIndex % num];
          }
        },
        label: {
          show: true,
          position: [12, 0],
          lineHeight: 14,
          color: "#fff",
          formatter: (params) => {
            return params.percentage;
          }
        }
      },
      {
        name: "框",
        type: "bar",
        yAxisIndex: 1,
        data: data.map((val) => {
          if (!val.maxValue) {
            return 5;
          }
          return val.maxValue;
        }),
        barWidth: 18,
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 1,
          borderRadius: 15
        },
        silent: true
      }
    ]
})
</script>

<style lang="scss" scoped>
.echarts-header {
  box-sizing: border-box;
  display: flex;
  height: 36px;
  margin: 10px 10px 0;
  line-height: 36px;
  background: url("../images/rankingChart-bg.png") no-repeat;
  background-size: 100% 100%;
  span {
    width: 18%;
    margin-left: 4px;
    font-size: 14px;
    font-weight: bold;
    color: #fdbc52;
    text-align: center;
    &:nth-child(2) {
      margin-left: 4px;
    }
    &:last-child {
      width: 20%;
      margin-left: 60px;
    }
  }
}

</style>