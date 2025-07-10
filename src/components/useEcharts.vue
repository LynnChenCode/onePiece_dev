<template>
   <div :id="props.tit"  class="echarts"></div>
</template>

<script setup lang='ts'>
import * as echarts from 'echarts';
import mapJson from '@/utils/china.json'
import { onMounted,onDeactivated,onBeforeUnmount } from 'vue';
   let props=defineProps({
      option:{
         type:Object,
         default:()=>{}
      },
      tit:{
         type:String,
         default:''
      }
   })
   let myChart:echarts.ECharts
   onMounted(()=>{
      myChart = echarts.init(document.getElementById(props.tit) as HTMLElement);
      myChart.setOption(props.option)  
      echarts.registerMap("china", mapJson as any )  
   })
   //图表自适应屏幕尺寸
   const echartsResize = () => {
         myChart.resize();
      };
    
    window.addEventListener("resize", echartsResize);
         // 防止 echarts 页面 keepAlive 时，还在继续监听页面
      onDeactivated(() => {
        window.removeEventListener("resize", echartsResize);
      });
    
      onBeforeUnmount(() => {
        window.removeEventListener("resize", echartsResize);
      });
</script>

<style scoped>
.echarts{
   width:100%;
   height: calc(100% - .125rem);
}
</style>