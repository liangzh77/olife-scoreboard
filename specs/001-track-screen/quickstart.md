# 快速启动指南: 赛场信息屏幕 (Track Screen)

**功能分支**: `001-track-screen`
**创建日期**: 2025-12-24

## 前置条件

### 开发环境

1. **Node.js**: v14.x 或更高版本
2. **HBuilderX**: 推荐使用 DCloud 官方 IDE（可选，也可用 VS Code）
3. **浏览器**: Chrome / Edge（用于 H5 调试）

### 后端服务

- 确保 Events Live Server API 服务已启动
- 默认地址: `http://192.168.3.139:8080`
- 可在应用配置中修改

## 快速开始

### 1. 克隆项目

```bash
# 克隆主仓库
git clone https://github.com/liangzh77/olife-scoreboard.git
cd olife-scoreboard

# 初始化子模块
git submodule update --init --recursive
```

### 2. 进入 track-screen 目录

```bash
cd track-screen
```

### 3. 安装依赖

```bash
npm install
```

### 4. 启动 H5 开发服务器

**方式 A: 使用 HBuilderX**
1. 用 HBuilderX 打开 `track-screen` 目录
2. 点击菜单 "运行" → "运行到浏览器" → "Chrome"

**方式 B: 使用命令行**
```bash
npm run dev:h5
```

### 5. 访问应用

浏览器打开: `http://localhost:8080` (端口可能有所不同)

## 配置说明

### 数据源配置

首次启动后，在配置页面设置：
- **API 地址**: 后端服务器地址（如 `http://192.168.3.139:8080`）

### 展示参数

| 参数 | 默认值 | 说明 |
|------|--------|------|
| 每页停留时间 | 30 秒 | 成绩页面切换间隔 |
| 字体大小 | 中 | small/medium/large |
| 分栏数量 | 2 | 1-4 栏 |
| 赞助商轮播频次 | 3 | 每 N 轮展示一次 |
| 赞助商展示时长 | 5 秒 | 每个 LOGO 停留时间 |

## 开发流程

### 目录结构

```
track-screen/
├── pages/
│   ├── config/index.vue     # 配置页面
│   └── display/index.vue    # 播放页面
├── components/              # 可复用组件
├── services/               # 业务服务
├── static/                 # 静态资源
├── pages.json              # 路由配置
├── manifest.json           # 应用配置
└── App.vue                 # 入口文件
```

### 开发建议

1. **先 H5 后 App**: 在浏览器完成主要开发，再测试安卓
2. **使用 rpx 单位**: 确保多端适配
3. **条件编译**: 平台差异代码使用 `#ifdef` 处理

### 调试技巧

**H5 调试**:
- 使用 Chrome DevTools 检查元素和网络请求
- 使用 Vue DevTools 查看组件状态

**App 调试**:
- HBuilderX 连接安卓设备
- 使用真机运行查看实际效果

## 构建发布

### H5 构建

```bash
npm run build:h5
```

输出目录: `dist/build/h5/`

### Android APK 构建

1. 在 HBuilderX 中打开项目
2. 点击菜单 "发行" → "原生App-云打包"
3. 选择 Android 平台，配置签名
4. 等待云端打包完成

## 常见问题

### Q: 网络请求失败

**A**: 检查以下几点：
1. API 服务器是否启动
2. 配置的 API 地址是否正确
3. H5 开发可能存在跨域问题，需后端配置 CORS

### Q: 样式在安卓上显示不正确

**A**:
1. 检查是否使用了 `rpx` 单位
2. 避免使用 `vh`/`vw` 单位
3. 使用条件编译处理平台差异

### Q: 如何查看网络状态

**A**: 配置页面顶部状态栏会显示当前网络连接状态

## 相关文档

- [功能规格说明](./spec.md)
- [实施计划](./plan.md)
- [数据模型](./data-model.md)
- [API 合约](./contracts/api-contracts.md)
- [技术研究](./research.md)
