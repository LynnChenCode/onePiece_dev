<template>
  <div id="player">
  </div>
</template>

<script setup >
import APlayer from 'aplayer';
import 'aplayer/dist/APlayer.min.css';
import { ref, reactive, watch, onMounted, watchEffect } from 'vue';
import list from '@/hooks/localmusicList.js'
import { usemusicStore } from '../stores/music.ts'
const props = defineProps({
  m: {
    type: Object,
    default() {
      return { messge: "hello" }
    }
  }
})
let store = usemusicStore()


onMounted(() => {
  const ap = new APlayer({
    element: document.getElementById('player'),
    fixed: true,
    listFolded: false,
    lrcType: 1,
    audio: list
  });

    watch(()=>props.m,(newV) => {
    if (newV != "Audio name") {
      ap.list.add([{
        name: props.m.name,
        artist: props.m.artlist,
        url: props.m.url,
        cover: props.m.cover,
        lrc: props.m.lrc,
        theme: '#ebd0c2'
      }]);
      ap.list.switch(19)
      console.log("有了")
    }else{
      console.log("error")
    }

  })
   watch(()=>store.mmenu.mname, (newV) => {
      if(newV!="Audio name"){
        console.log("chuang", store.mmenu)
        ap.list.add([{
        name: store.mmenu.msong,
        artist: store.mmenu.mname,
        url: store.mmenu.murl,
        cover: store.mmenu.mpicurl,
        lrc: store.mmenu.mlrc,
        theme: '#ebd0c2'
      }])
      ap.list.switch(19)
      console.log(ap.list)

      }
    
    })
 

})



</script>
