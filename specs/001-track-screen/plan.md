# Implementation Plan: 赛场信息屏幕 (Track Screen)

**Branch**: `001-track-screen` | **Date**: 2025-12-24 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-track-screen/spec.md`

## Summary

开发一个基于 uni-app 框架的赛场信息展示应用，用于在大屏幕上滚动展示比赛成绩、实时事件和赞助商信息。采用"先 H5 后安卓"的开发策略，首先在浏览器中完成所有功能开发和验证，然后再进行安卓平台适配和 APK 打包。

核心功能包括：
- 配置页面：选择赛事和组别，配置展示参数
- 滚动播放：分栏分页展示成绩，自动轮播多组别
- 事件跑马灯：实时显示出发、完成、排名变化
- 赞助商展示：按配置频次全屏展示 LOGO

## Technical Context

**Language/Version**: JavaScript (Vue.js 2.x / Vue 3.x based on uni-app version)
**Primary Dependencies**: uni-app 框架, Vue.js
**Storage**: uni.setStorageSync / uni.getStorageSync (本地持久化)
**Testing**: 手动测试（H5 浏览器调试 + 安卓真机测试）
**Target Platform**: H5 (开发) → Android APK (生产)
**Project Type**: mobile (单页面跨平台应用)
**Performance Goals**: 60fps 动画流畅度，60 秒内数据刷新
**Constraints**: 支持连续运行 8 小时以上，5-10 米观看距离清晰可读
**Scale/Scope**: 2 个主页面（配置页、播放页），预计 10-15 个组件

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| 原则 | 状态 | 说明 |
|------|------|------|
| I. 输入文档保护 | ✅ 通过 | `configuration/` 和 `api/` 目录为只读，仅读取 API 类型定义，不做修改 |
| II. 文档规范 | ✅ 通过 | 所有文档使用中文撰写，存放在 `specs/` 目录 |
| III. uni-app 开发规范 | ✅ 通过 | 主工程在 `track-screen/`，遵循 uni-app 规范，使用 rpx 单位 |
| IV. 跨平台兼容性 | ✅ 通过 | 优先 H5 开发，使用条件编译处理平台差异 |
| V. 简洁性原则 | ✅ 通过 | 优先使用 uni-app 内置组件，避免过度工程化 |

## Project Structure

### Documentation (this feature)

```text
specs/001-track-screen/
├── spec.md              # 功能规格说明
├── plan.md              # 本文件 - 实施计划
├── research.md          # Phase 0 输出 - 技术研究
├── data-model.md        # Phase 1 输出 - 数据模型设计
├── quickstart.md        # Phase 1 输出 - 快速启动指南
├── contracts/           # Phase 1 输出 - API 合约
└── tasks.md             # Phase 2 输出 - 任务列表
```

### Source Code (repository root)

```text
track-screen/                    # uni-app 主工程 (Git submodule)
├── pages/
│   ├── config/                  # 配置页面
│   │   └── index.vue
│   └── display/                 # 滚动播放页面
│       └── index.vue
├── components/
│   ├── EventList/               # 赛事列表组件
│   ├── CourseList/              # 组别列表组件（支持多选）
│   ├── SettingsPanel/           # 参数设置面板
│   ├── ResultTable/             # 成绩表格组件（支持分栏）
│   ├── Marquee/                 # 跑马灯组件
│   ├── SponsorLogo/             # 赞助商LOGO全屏组件
│   └── StatusBar/               # 状态栏（版本号、网络状态等）
├── services/
│   ├── api.js                   # API 调用封装
│   ├── storage.js               # 本地存储封装
│   └── eventTracker.js          # 事件追踪（跑马灯事件检测）
├── store/                       # 状态管理（可选，根据复杂度决定）
├── static/                      # 静态资源
├── pages.json                   # 页面路由配置
├── manifest.json                # 应用配置
└── App.vue                      # 应用入口
```

**Structure Decision**: 采用 uni-app 标准目录结构，使用 `pages/` 存放页面，`components/` 存放可复用组件，`services/` 存放业务逻辑。

## API Endpoints

基于 `api/client/api.ts` 分析，需要使用以下 LiveApi 接口：

| 接口 | 方法 | 路径 | 用途 |
|------|------|------|------|
| getTrackBoardEvents | GET | `/live/track-board/events` | 获取赛事列表（含阶段和组别） |
| getTrackingBoard | GET | `/live/tracking-board/{courseId}` | 获取指定组别的成绩数据 |

### 关键数据结构

```typescript
// 赛事列表响应
TrackBoardEventEntity {
  id: string
  name: string
  stages: TrackBoardStageEntity[]
}

TrackBoardStageEntity {
  id: string
  name: string
  startAt: string
  courses: TrackBoardCourseEntity[]
}

TrackBoardCourseEntity {
  id: string
  name: string
  status: 'stopped' | 'running'
  class: ClassBriefEntity
}

// 成绩数据响应
CourseTrackingBoardEntity {
  courseInfo: CourseInfoEntity
  results: CompetitorResultEntity[]      // 完赛成绩
  liveResults: CompetitorLiveResultEntity[] // 实时数据
}

CompetitorResultEntity {
  id: string
  competitor: { id, name, country, ... }
  bibNumber: string          // 号码布
  startAt: string | null     // 出发时间
  finishAt: string | null    // 完赛时间
  status: string             // 状态
  totalTime: number          // 用时（毫秒）
  rank: number | null        // 名次
}
```

## Complexity Tracking

> 无违规项，方案符合宪章所有原则。

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| - | - | - |

## Development Strategy

根据 spec.md 中定义的开发策略：

### 阶段 1: 界面开发
1. 创建 uni-app 项目骨架
2. 实现配置页面 UI 布局
3. 实现滚动播放页面 UI 布局
4. 实现所有组件的视觉效果

### 阶段 2: 界面确认
- 在 H5 环境中预览和调试
- 与用户确认界面设计

### 阶段 3: 功能开发
1. 接入 API 获取真实数据
2. 实现配置持久化
3. 实现成绩分栏分页逻辑
4. 实现组别轮播和动画
5. 实现跑马灯事件检测
6. 实现赞助商 LOGO 轮播

### 阶段 4: 安卓适配
1. 在安卓真机测试
2. 处理平台差异
3. 打包 APK

## Next Steps

1. **Phase 0**: 生成 research.md - 技术研究（uni-app 项目初始化、动画方案、数据轮询策略）
2. **Phase 1**: 生成 data-model.md、contracts/、quickstart.md
3. **Phase 2**: 运行 /speckit.tasks 生成任务列表
