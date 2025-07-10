<template>
     <div id="landlord">
    <div class="message" style="opacity:0"></div>
    <canvas id="live2d" width="280" height="250" class="live2d"></canvas>
    
     </div>
</template>
<script setup>
import { onMounted } from "vue";

    onMounted(()=>{
      const script1 = document.createElement('script');
     script1.src = 'src/components/live2d/js/live2d.js';
       // 延迟加载live2d
     script1.onload = () => {
    loadlive2d("live2d", "src/components/live2d/model/tia/model.json");
    };
    document.body.appendChild(script1);
    // const script2 = document.createElement('script');
    //  script2.src = 'src/components/live2d/js/message.js';
    //  document.body.appendChild(script2);
    })

    
    


</script>

<style lang="scss">
@import url(./css/live2d.css);
</style>