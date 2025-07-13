# 大前端项目：Vue3 多功能应用平台

> 基于 Vue3 + Pinia + TypeScript + ECharts 的现代化前端解决方案

![项目概览](https://github.com/user-attachments/assets/c4c3fefa-4a41-4510-b5ee-6770b4cb731f)

## ✨ 项目亮点

- **现代化技术栈**：Vue3 Composition API + TypeScript 类型安全
- **状态管理**：Pinia 提供简洁高效的状态管理方案
- **数据可视化**：集成 ECharts 实现专业级图表展示
- **多媒体功能**：支持网易云音乐/QQ音乐免费歌曲搜索播放
- **交互体验**：动态看板娘提升用户交互体验

## 🛠️ 技术栈

**核心框架**  
![Vue.js](https://img.shields.io/badge/Vue.js-3.2.47-4FC08D?logo=vuedotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-3178C6?logo=typescript)

**状态管理**  
![Pinia](https://img.shields.io/badge/Pinia-2.0.0-FFD02F?logo=vue.js)

**数据可视化**  
![ECharts](https://img.shields.io/badge/ECharts-5.4.2-AA344D?logo=apacheecharts)

**UI & 样式**  
![Sass](https://img.shields.io/badge/Sass-1.63.6-CC6699?logo=sass)

**构建工具**  
![Vite](https://img.shields.io/badge/Vite-4.3.9-646CFF?logo=vite)

## 🎯 功能模块

### 🎵 音乐播放系统
- 双平台音乐搜索（网易云音乐 + QQ音乐）
- 歌单管理与收藏功能
- 实时歌词显示
- 播放控制与音效调节

![音乐播放界面](https://github.com/user-attachments/assets/109df350-e273-48e2-af1e-680bf7a33e07)
![歌单界面](https://github.com/user-attachments/assets/b09ee850-f5cc-455e-a6b3-e7e565276e03)

### 📊 数据可视化中心
- 多维度数据图表展示
- 实时数据更新
- 图表交互与钻取功能
- 自定义仪表盘布局

![可视化界面](https://github.com/user-attachments/assets/17b2fa5b-b472-4140-b279-797162c29625)

### 🤖 智能看板娘
- 动态角色交互
- 场景化对话系统
- 用户操作引导
- 个性化表情反馈

![看板娘](https://github.com/user-attachments/assets/e5eff2dd-fe26-4759-b2de-80c3a196d7bb)

### ⚙️ 其他特色功能
- 404 创意页面

![404](https://github.com/user-attachments/assets/0716c2bc-db66-48e1-b75a-4bb76fbb3aeb)

## 🚀 快速开始

### 前置要求
确保已安装：
- Node.js (v18+)
- npm (v9+)

### 安装步骤
```bash
# 克隆仓库
git clone https://github.com/your-username/project-name.git

# 进入项目目录
cd project-name

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

### 项目结构
```
src/
├── assets/          # 静态资源
├── components/      # 通用组件
├── hooks/           # 组合式函数
├── layouts/         # 页面布局
├── router/          # 路由配置
├── stores/          # Pinia 状态管理
├── styles/          # 全局样式
├── utils/           # 工具函数
├── views/           # 页面视图
│   ├── echarts      # 数据可视化
│   ├── file         # 首页
│   ├── musicpage    # 音乐页面
|   ├── pagenotfound.vue   # 404页面
│   └── ...          
└── main.ts          # 应用入口
```

## 🌐 API 集成

### 音乐服务 API
```typescript
使用的是https://wanghun.top网站的公共api，有兴趣的朋友可以去了解下
还使用了APlayer组件
```

### ECharts 集成说明
```vue
使用了echarts和vue3-seamless-scroll组件，还有部分是展示图用的CSS动画加我用PS做的样式图片
```

## 🤝 贡献指南

我们欢迎任何形式的贡献！请遵循以下步骤：

1. Fork 项目仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 📜 开源协议

本项目采用 [MIT 许可证](LICENSE)

---
**让数据歌唱，让图表起舞** — 一个融合技术与艺术的前端解决方案  
如有任何问题，请联系：2787962113@qq.com
