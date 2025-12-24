# Tasks: 赛场信息屏幕 (Track Screen)

**Input**: Design documents from `/specs/001-track-screen/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

**开发策略**: 界面优先（先完成 UI，再实现功能），先 H5 后安卓

## Format: `[ID] [P?] [Story] Description`

- **[P]**: 可并行执行（不同文件，无依赖）
- **[Story]**: 所属用户故事（US1, US2, US3...）
- 所有路径基于 `track-screen/` 目录

---

## Phase 1: 项目初始化

**Purpose**: 创建 uni-app 项目骨架和基础配置

- [x] T001 使用 HBuilderX 或 CLI 初始化 uni-app 项目 in track-screen/
- [x] T002 [P] 配置 pages.json 路由（config 和 display 两个页面）in track-screen/pages.json
- [x] T003 [P] 配置 manifest.json 应用信息（版本号、横屏模式）in track-screen/manifest.json
- [x] T004 [P] 配置全局样式和 rpx 基准 in track-screen/App.vue
- [x] T005 创建目录结构（pages/, components/, services/, static/）in track-screen/

---

## Phase 2: 基础服务层（阻塞性前置任务）

**Purpose**: 所有用户故事都依赖的核心服务

**⚠️ CRITICAL**: 必须完成此阶段才能开始用户故事开发

- [x] T006 实现本地存储服务 in track-screen/services/storage.js
  - getConfig() / saveConfig()
  - 默认配置值（apiBaseUrl, pageStayTime, fontSize, columnCount, sponsorInterval, sponsorDuration）
- [x] T007 [P] 实现 API 调用服务 in track-screen/services/api.js
  - getTrackBoardEvents()
  - getTrackingBoard(courseId)
  - 错误处理和响应解析
- [x] T008 [P] 实现数据转换工具 in track-screen/utils/transform.js
  - transformResults() - API 数据转展示数据
  - formatTime() / formatDuration() / formatDiff() - 时间格式化
- [x] T009 [P] 实现分页计算工具 in track-screen/utils/pagination.js
  - calculatePages() - 分栏分页计算
  - calculateRowsPerColumn() - 动态行数计算
- [x] T010 实现网络状态监听服务 in track-screen/services/network.js
  - initNetworkListener()
  - 网络状态变化回调

**Checkpoint**: 基础服务就绪，可以开始用户故事开发

---

## Phase 3: 用户故事 1 - 配置赛事并启动展示 (Priority: P1) 🎯 MVP

**Goal**: 管理员可以选择赛事和组别，点击开始进入播放页面

**Independent Test**: 启动应用 → 看到配置页面 → 选择赛事 → 多选组别 → 点击开始 → 跳转播放页

### UI 实现（界面优先）

- [x] T011 [P] [US1] 创建配置页面布局框架 in track-screen/pages/config/index.vue
  - 顶部状态栏区域
  - 左侧赛事列表区域
  - 右侧组别列表区域
  - 底部按钮区域（开始/退出）
- [x] T012 [P] [US1] 实现状态栏组件 UI in track-screen/components/StatusBar/index.vue
  - 版本号、网络状态、设备IP、数据源URL、最后更新时间
  - 使用模拟数据展示
- [x] T013 [P] [US1] 实现赛事列表组件 UI in track-screen/components/EventList/index.vue
  - 列表项样式（赛事名称、状态）
  - 选中状态高亮
  - 使用模拟数据展示
- [x] T014 [P] [US1] 实现组别列表组件 UI in track-screen/components/CourseList/index.vue
  - 列表项样式（组别名称、状态）
  - 多选 checkbox 支持
  - 使用模拟数据展示

### 功能实现

- [x] T015 [US1] 接入 API 获取赛事列表 in track-screen/pages/config/index.vue
  - 调用 getTrackBoardEvents()
  - 替换模拟数据为真实数据
- [x] T016 [US1] 实现赛事选择逻辑 in track-screen/pages/config/index.vue
  - 点击赛事更新右侧组别列表
  - 清空之前选中的组别
- [x] T017 [US1] 实现组别多选逻辑 in track-screen/pages/config/index.vue
  - checkbox 勾选/取消
  - selectedCourseIds 状态管理
- [x] T018 [US1] 实现开始按钮跳转逻辑 in track-screen/pages/config/index.vue
  - 校验至少选择一个组别
  - 保存选择到 storage
  - 跳转到 display 页面并传参
- [x] T019 [US1] 实现退出按钮逻辑 in track-screen/pages/config/index.vue
  - 条件编译：H5 关闭窗口，App 退出应用
- [x] T020 [US1] 实现状态栏真实数据绑定 in track-screen/components/StatusBar/index.vue
  - 版本号从 manifest.json 读取
  - 网络状态从 network.js 获取
  - 设备 IP 使用 uni API 获取

**Checkpoint**: 用户故事 1 完成，可以独立测试配置页面功能

---

## Phase 4: 用户故事 2 - 查看组别成绩滚动播放 (Priority: P1) 🎯 MVP

**Goal**: 观众可以在大屏幕上看到成绩滚动展示，支持分栏分页和自动轮播

**Independent Test**: 从配置页进入 → 看到成绩列表 → 自动分栏 → 自动翻页 → 自动切换组别

### UI 实现（界面优先）

- [x] T021 [P] [US2] 创建播放页面布局框架 in track-screen/pages/display/index.vue
  - 顶部标题区域（赛事名+组别名）
  - 中间成绩表格区域
  - 底部跑马灯区域（占位）
- [x] T022 [P] [US2] 实现成绩表格组件 UI in track-screen/components/ResultTable/index.vue
  - 表头：名次、号码布、国籍、姓名、出发时间、完赛用时、差值、评估
  - 分栏布局（CSS flexbox/grid）
  - 前三名高亮样式
  - 使用模拟数据展示
- [x] T023 [US2] 实现分栏布局自适应 in track-screen/components/ResultTable/index.vue
  - 根据配置的 columnCount 动态分栏
  - 响应字体大小配置

### 功能实现

- [x] T024 [US2] 接入 API 获取成绩数据 in track-screen/pages/display/index.vue
  - 调用 getTrackingBoard(courseId)
  - 使用 transformResults() 转换数据
- [x] T025 [US2] 实现数据轮询刷新 in track-screen/pages/display/index.vue
  - 60 秒间隔自动刷新
  - 使用 DataPoller 类
- [x] T026 [US2] 实现分页计算和状态管理 in track-screen/pages/display/index.vue
  - 使用 calculatePages() 计算分页
  - currentPageIndex 状态
  - totalPages 计算
- [x] T027 [US2] 实现页面自动切换 in track-screen/pages/display/index.vue
  - 定时器：每 pageStayTime 秒切换下一页
  - 最后一页后切换到下一个组别
- [x] T028 [US2] 实现页面切换动画 in track-screen/pages/display/index.vue
  - CSS transition 平滑过渡
  - translateX 滑动效果
- [x] T029 [US2] 实现多组别轮播逻辑 in track-screen/pages/display/index.vue
  - 按开始时间排序组别
  - 过滤未开始的组别
  - currentCourseIndex 状态
  - 组别切换动画
- [x] T030 [US2] 实现网络异常处理 in track-screen/pages/display/index.vue
  - 断网时显示缓存数据
  - 界面提示网络状态异常
- [x] T031 [US2] 实现空数据处理 in track-screen/pages/display/index.vue
  - 无数据时显示"暂无数据"
  - 跳过无数据组别

**Checkpoint**: 用户故事 1+2 完成，核心功能可用（MVP）

---

## Phase 5: 用户故事 3 - 查看实时事件跑马灯 (Priority: P2)

**Goal**: 观众可以在底部看到新出发、新完成、排名变化等实时事件

**Independent Test**: 有新事件时 → 跑马灯显示事件文本 → 从右向左滚动

### UI 实现（界面优先）

- [x] T032 [P] [US3] 实现跑马灯组件 UI in track-screen/components/Marquee/index.vue
  - 从右向左滚动动画
  - 可配置滚动速度
  - 使用模拟文本展示

### 功能实现

- [x] T033 [US3] 实现事件追踪服务 in track-screen/services/eventTracker.js
  - EventTracker 类
  - detectEvents() - 检测新出发、新完成、前三名变化
  - 事件去重和缓存
- [x] T034 [US3] 集成事件追踪到播放页面 in track-screen/pages/display/index.vue
  - 每次数据刷新时调用 detectEvents()
  - 将事件推入队列
- [x] T035 [US3] 实现事件队列管理 in track-screen/pages/display/index.vue
  - events 队列
  - currentEvent 当前显示
  - 滚动完成后显示下一条
- [x] T036 [US3] 实现跑马灯事件绑定 in track-screen/components/Marquee/index.vue
  - 接收事件消息 prop
  - 滚动完成事件回调

**Checkpoint**: 用户故事 3 完成，跑马灯功能可用

---

## Phase 6: 用户故事 4 - 赞助商LOGO轮播 (Priority: P2)

**Goal**: 赛事组织方可以在成绩展示间隙展示赞助商LOGO

**Independent Test**: 组别轮播达到配置频次 → 全屏显示LOGO → 停留配置时长 → 返回成绩

### UI 实现（界面优先）

- [x] T037 [P] [US4] 实现赞助商LOGO全屏组件 UI in track-screen/components/SponsorLogo/index.vue
  - 全屏覆盖层
  - 居中显示 LOGO 图片
  - 淡入淡出动画
  - 使用模拟图片展示

### 功能实现

- [x] T038 [US4] 实现赞助商数据管理 in track-screen/pages/display/index.vue
  - 临时方案：本地配置 LOGO 列表
  - 预留 API 接口（待后端实现）
- [x] T039 [US4] 实现轮播频次计数 in track-screen/pages/display/index.vue
  - roundCount 轮播计数
  - 达到 sponsorInterval 时触发
- [x] T040 [US4] 实现LOGO展示逻辑 in track-screen/pages/display/index.vue
  - showingSponsor 状态
  - currentSponsorIndex 索引
  - 展示 sponsorDuration 秒后返回
- [x] T041 [US4] 处理LOGO列表为空情况 in track-screen/pages/display/index.vue
  - 跳过LOGO展示环节
  - 直接继续成绩展示

**Checkpoint**: 用户故事 4 完成，赞助商功能可用

---

## Phase 7: 用户故事 5 - 调整展示参数 (Priority: P3)

**Goal**: 管理员可以根据现场情况调整字体大小、分栏数量等参数

**Independent Test**: 修改参数 → 保存 → 播放页面按新参数展示

### UI 实现（界面优先）

- [x] T042 [P] [US5] 实现参数设置面板组件 UI in track-screen/components/SettingsPanel/index.vue
  - 每页停留时间输入框
  - 字体大小选择器（小/中/大）
  - 分栏数量选择器（1-4）
  - 赞助商轮播频次输入框
  - 赞助商展示时长输入框
  - 数据源URL输入框

### 功能实现

- [x] T043 [US5] 集成设置面板到配置页面 in track-screen/pages/config/index.vue
  - 嵌入 SettingsPanel 组件
  - 双向绑定配置值
- [x] T044 [US5] 实现配置值保存逻辑 in track-screen/components/SettingsPanel/index.vue
  - 修改后调用 saveConfig()
  - 持久化到本地存储
- [x] T045 [US5] 实现配置值加载逻辑 in track-screen/pages/config/index.vue
  - 页面加载时调用 getConfig()
  - 恢复上次配置
- [x] T046 [US5] 播放页面响应配置变化 in track-screen/pages/display/index.vue
  - 从 storage 读取最新配置
  - 应用字体大小、分栏数量等

**Checkpoint**: 用户故事 5 完成，参数配置功能可用

---

## Phase 8: 用户故事 6 - 从滚动播放返回配置 (Priority: P3)

**Goal**: 管理员可以在播放过程中返回配置页面进行调整

**Independent Test**: 播放页面 → 鼠标靠近右上角 → 显示设置按钮 → 点击返回配置页

### UI 实现（界面优先）

- [x] T047 [P] [US6] 实现隐藏设置按钮 UI in track-screen/pages/display/index.vue
  - 右上角定位
  - 默认透明/隐藏
  - hover 或 touch 时显示

### 功能实现

- [x] T048 [US6] 实现鼠标/触摸检测 in track-screen/pages/display/index.vue
  - H5: mousemove 事件监听
  - App: touchstart 事件监听
  - 检测右上角区域
- [x] T049 [US6] 实现按钮显示/隐藏逻辑 in track-screen/pages/display/index.vue
  - 靠近时显示（opacity 过渡）
  - 离开后延迟隐藏
- [x] T050 [US6] 实现返回配置页面逻辑 in track-screen/pages/display/index.vue
  - 停止所有定时器
  - 跳转回 config 页面
  - 保留当前选择

**Checkpoint**: 所有用户故事完成

---

## Phase 9: 收尾与跨平台适配

**Purpose**: 完善细节，安卓平台适配

- [x] T051 [P] 代码清理和注释 in track-screen/
- [x] T052 [P] 添加 loading 状态和骨架屏 in track-screen/pages/
- [x] T053 [P] 添加错误边界处理 in track-screen/pages/
- [ ] T054 安卓真机测试和问题修复 in track-screen/
- [x] T055 条件编译处理平台差异 in track-screen/（使用 #ifdef APP-PLUS）
- [ ] T056 [P] 更新 quickstart.md 验证清单 in specs/001-track-screen/quickstart.md
- [ ] T057 打包 H5 版本验证 in track-screen/
- [ ] T058 打包安卓 APK in track-screen/

---

## 依赖关系与执行顺序

### 阶段依赖

- **Phase 1 项目初始化**: 无依赖，可立即开始
- **Phase 2 基础服务层**: 依赖 Phase 1 完成 - **阻塞所有用户故事**
- **Phase 3-8 用户故事**: 全部依赖 Phase 2 完成
  - US1 (P1) 和 US2 (P1) 是 MVP，建议优先完成
  - US3-US6 可并行或按优先级顺序
- **Phase 9 收尾**: 依赖所有用户故事完成

### 用户故事依赖

| 故事 | 优先级 | 依赖 | 说明 |
|------|--------|------|------|
| US1 | P1 | Phase 2 | 配置页面，入口功能 |
| US2 | P1 | Phase 2, US1 | 播放页面需要从配置页跳转 |
| US3 | P2 | US2 | 跑马灯在播放页面底部 |
| US4 | P2 | US2 | LOGO在播放页面展示 |
| US5 | P3 | US1 | 参数设置在配置页面 |
| US6 | P3 | US2 | 返回按钮在播放页面 |

### 并行执行机会

**Phase 1 内部**:
```
T002, T003, T004 可并行
```

**Phase 2 内部**:
```
T007, T008, T009 可并行（T006 完成后）
```

**用户故事 UI 任务**:
```
T012, T013, T014 可并行（US1 UI）
T032, T037, T042, T047 可并行（US3-6 UI，Phase 2 完成后）
```

---

## 并行执行示例

### 示例 1: Phase 2 基础服务
```bash
# 先完成 storage 服务
Task T006: "实现本地存储服务 in track-screen/services/storage.js"

# 然后并行执行
Task T007: "实现 API 调用服务 in track-screen/services/api.js"
Task T008: "实现数据转换工具 in track-screen/utils/transform.js"
Task T009: "实现分页计算工具 in track-screen/utils/pagination.js"
```

### 示例 2: US1 UI 开发
```bash
# 并行开发所有 UI 组件
Task T012: "实现状态栏组件 UI in track-screen/components/StatusBar/index.vue"
Task T013: "实现赛事列表组件 UI in track-screen/components/EventList/index.vue"
Task T014: "实现组别列表组件 UI in track-screen/components/CourseList/index.vue"
```

---

## 实施策略

### MVP 优先（用户故事 1+2）

1. 完成 Phase 1: 项目初始化
2. 完成 Phase 2: 基础服务层 (**阻塞点**)
3. 完成 Phase 3: 用户故事 1（配置页面）
4. 完成 Phase 4: 用户故事 2（播放页面）
5. **停止并验证**: 测试核心功能是否可用
6. 在 H5 环境演示给用户确认

### 增量交付

1. MVP (US1+US2) → 演示/确认
2. 添加 US3 (跑马灯) → 演示/确认
3. 添加 US4 (赞助商) → 演示/确认
4. 添加 US5+US6 (参数+返回) → 演示/确认
5. Phase 9 收尾 + 安卓打包 → 发布

### 界面优先原则

每个用户故事内部：
1. 先完成所有 UI 任务（使用模拟数据）
2. 与用户确认界面设计
3. 再完成功能实现任务
4. 集成真实数据

---

## Notes

- [P] 任务 = 不同文件，无依赖，可并行
- [Story] 标签 = 任务所属用户故事
- 每个用户故事应可独立完成和测试
- 每完成一个任务或逻辑组后提交代码
- 在任意 Checkpoint 停止可验证已完成故事
- 避免：模糊任务、同文件冲突、跨故事强依赖

---

## Phase 10: 优化与改进 (2024-12-24)

**Purpose**: 布局优化和用户体验改进

### 已完成

- [x] T059 表头多栏显示 in track-screen/components/ResultTable/index.vue
  - 每栏显示独立的列标题组
  - 使用 grid 布局与数据栏对齐
- [x] T060 状态文本简化 in track-screen/components/ResultTable/index.vue
  - MissingPunch → MP（橙色）
  - OverTime → OT（黄色）
  - 添加 getStatusText() 方法
- [x] T061 字体大小范围扩展 in track-screen/components/SettingsPanel/index.vue
  - 范围从 20-40 扩展到 10-60 rpx
- [x] T062 列宽百分比布局 in track-screen/components/ResultTable/index.vue
  - 改用百分比宽度 + min-width
  - 解决大字体溢出和小字体空白问题
- [x] T063 列间距优化 in track-screen/components/ResultTable/index.vue
  - 添加 1% 列间距 (gap)
- [x] T064 滚动条样式优化 in track-screen/components/CourseList/index.vue, EventList/index.vue
  - 简洁半透明滚动条
  - 使用非 scoped 样式块
- [x] T065 分页计算优化 in track-screen/utils/pagination.js
  - 简化行高计算公式
  - 修复行数计算不准确问题
- [x] T066 窗口自适应 in track-screen/pages/display/index.vue
  - 添加 resize 监听
  - 动态重新计算布局

**Checkpoint**: 布局优化完成，所有核心功能可用
