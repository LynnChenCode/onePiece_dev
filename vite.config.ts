import { defineConfig, resolveBaseUrl } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { VantResolver } from 'unplugin-vue-components/resolvers';
import { warn } from 'vue'

// https://vitejs.dev/config/
export default defineConfig(({ mode }): any =>{
  return{
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver(),VantResolver()],  
      }),
      
    ],
    esbuild: {
      jsxInject: `import React from 'react'`,
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    // 添加 allowJs 选项
    optimizeDeps: {
      allowNodeBuiltins: ['bcrypt', 'lodash', 'moment', 'dayjs'],
    },
    allowJs: true,
    assetsInclude: ['**/*.lrc'],
    server: {
      proxy: {
        // 字符串简写写法：http://localhost:5173/foo -> http://localhost:4567/foo
        '/foo': 'http://localhost:4567',
        // 带选项写法：http://localhost:5173/api/bar -> http://jsonplaceholder.typicode.com/bar
        '/wy': {
          target: 'https://wanghun.top/api/v5/music/wy.php',
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, ''),
        },
        '/qq':{
          target:'https://wanghun.top/api/v5/music/qq.php',
          changeOrigin:true,
        },
        '/gedan':{
          target:'https://wanghun.top/api/mirai/wygedan.php',
          changeOrigin: true,
        },
        '/2d':{
          target:'https://eqcn.ajz.miesnfu.com/wp-content/plugins/wp-3d-pony/live2dw/lib/L2Dwidget.min.js',
          changeOrigin:true
        },
        '/lrcwy':{
          target:'https://wanghun.top/qqmusic/lrc.php',
          changeOrigin:true,
      
        },
        '/urlwy':{
          target:"https://wanghun.top/qqmusic/wymusic.php",
          changeOrigin:true,
          
        },
        // 代理 websockets 或 socket.io 写法：ws://localhost:5173/socket.io -> ws://localhost:5174/socket.io
        '/socket.io': {
          target: 'ws://localhost:5174',
          ws: true,
        },
      },
    },
  }
 
})
