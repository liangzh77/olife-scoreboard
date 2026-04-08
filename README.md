# olife

赛事信息屏幕相关项目仓库。当前仓库以 `track-screen` 为主要可运行工程，同时包含 API 文档、项目输入资料、规格文档和 SDK 子模块。

## 仓库定位

这个仓库不是单一 Node 应用，而是一个多目录聚合仓库，主要包含：

- `track-screen/`：uni-app 赛场信息屏幕应用
- `api/`：接口文档与生成的客户端代码
- `configuration/`：原始项目资料与过程文档输入
- `specs/`：本仓库维护的需求、设计、计划与契约文档
- `events-live-server-sdk/`：相关 SDK 子模块

## 目录结构

```text
olife/
├── api/                  # API 文档与客户端代码（输入资料）
├── configuration/        # 项目配置/过程资料（输入资料）
├── events-live-server-sdk/ # SDK 子模块
├── specs/                # 需求、研究、设计、任务文档
├── track-screen/         # uni-app 主工程
├── CLAUDE.md             # 仓库开发说明
└── package.json          # 顶层少量依赖
```

## 主要工程

### `track-screen`

这是仓库里的主要应用，一个用于比赛现场大屏展示成绩的 uni-app 项目。

技术栈：

- uni-app
- Vue 3
- Vite
- H5 / App 双端构建

功能方向：

- 赛事和组别选择
- 成绩轮播展示
- 实时数据刷新
- 跑马灯事件通知
- 赞助商展示
- 国际化与主题切换

详细说明可参考：

- [track-screen/README.md](./track-screen/README.md)

## API 与输入资料

以下目录在当前仓库里更偏“输入”性质：

- [api](./api)
- [configuration](./configuration)

根据仓库说明，这两部分通常不作为主要修改对象：

- `configuration/`：项目文档、原始配置资料
- `api/`：API 文档与接口客户端代码

## 规格文档

当前规格文档集中在：

- [specs/001-track-screen/spec.md](./specs/001-track-screen/spec.md)
- [specs/001-track-screen/plan.md](./specs/001-track-screen/plan.md)
- [specs/001-track-screen/quickstart.md](./specs/001-track-screen/quickstart.md)
- [specs/001-track-screen/data-model.md](./specs/001-track-screen/data-model.md)
- [specs/001-track-screen/contracts/api-contracts.md](./specs/001-track-screen/contracts/api-contracts.md)

## 开发说明

### 顶层依赖

根目录 `package.json` 当前只包含少量依赖：

```json
{
  "dependencies": {
    "@resvg/resvg-js": "^2.6.2"
  }
}
```

因此日常开发通常不在根目录直接运行应用，而是进入子工程目录。

### 启动 `track-screen`

进入子工程：

```bash
cd track-screen
npm install
```

常用命令：

```bash
npm run dev:h5
npm run build:h5
npm run dev:app
npm run build:app
```

### 启动本地代理

仓库说明中提供了一个代理服务，用于 H5 开发时解决 CORS：

```bash
node "C:/liangz77/python_projects/github_projects/olife/track-screen/proxy-server.js"
```

代理地址：

- 本地：`http://127.0.0.1:3333`
- 目标：`https://live.olife.run`

## 子目录说明

### `api/`

包含：

- `events-live-server.api.ts`
- `client/` 自动生成的接口客户端代码

适合作为前端接口对接参考，不建议随意手工改动生成产物。

### `configuration/`

包含从“初始配置”到“文档”“变更”“总结”等阶段目录，更像项目资料归档区。

### `events-live-server-sdk/`

为相关 SDK 子模块，可独立查看其自带说明文档：

- [events-live-server-sdk/README.md](./events-live-server-sdk/README.md)

## 建议阅读顺序

如果你是第一次接手这个仓库，建议按这个顺序看：

1. [CLAUDE.md](./CLAUDE.md)
2. [track-screen/README.md](./track-screen/README.md)
3. [specs/001-track-screen/quickstart.md](./specs/001-track-screen/quickstart.md)
4. [specs/001-track-screen/spec.md](./specs/001-track-screen/spec.md)
5. [api/events-live-server.api.ts](./api/events-live-server.api.ts)

## 说明

这个根目录 README 主要用于解释仓库整体结构与入口位置。实际开发、运行和构建，请优先进入 [`track-screen`](./track-screen) 子工程。
