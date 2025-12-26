# 更新日志

## [8275737] - 2025-12-26

### 赛事状态翻译修复
- 添加 `finished` 状态的翻译（中文"已结束"，英文"Finished"）
- 样式与 `stopped` 状态一致（灰色背景）

---

## [1dd9ab5] - 2025-12-26

### 列可见性设置与表头对齐修复

#### 新增功能
- **列可见性设置**: 设置面板新增复选框控制可选列显示
  - 号码布 (showBib)
  - 国籍 (showCountry)
  - 团队 (showTeam)
  - 出发时间 (showStartTime)
  - 差时 (showTimeDiff)
- **团队字段**: 成绩数据新增团队 (team) 字段支持

#### 修复
- **表头对齐问题**: 移除表头独立字体大小设置，统一使用 `em` 单位计算列宽
- **表头高度**: 减小 30%（系数从 2.8 改为 2.0）

#### 改进
- 号码布截断为 6 字符显示
- 多个号码布用空格分隔

---

## [3b1e4d5] - 2025-12-26

### 号码布解析修复
- 修复号码布解析路径，从 `competitor.bibs` 数组读取
- API 返回的 bibs 是字符串数组，如 `["1035"]`

---

## [12d3651] - 2025-12-26

### 多语言支持和设置面板增强

#### 新增功能
- **国际化服务 (i18n.js)**: 支持中英文切换
- **语言设置**: 设置面板新增语言切换选项
- **跑马灯多语言**: 事件追踪器支持多语言消息

#### 改进
- 所有组件支持 `language` prop 传递

---

## [59e12e0] - 2025-12-25

### 优化轮播大屏显示
- 轮播逻辑优化
- 显示效果改进

---

## [395ee1b] - 2025-12-25

### 主题系统和可复用组件

#### 新增功能
- **主题系统**: 支持 light/dark 主题切换
- **CSS 变量**: 统一颜色、间距等样式变量
- **通用组件**: TButton, TLoadingOverlay 等

---

## [387a2cb] - 2024-12-24

### 文档维护
- 移除 submodule 中的 specs 文件夹，文档统一在主项目维护

---

## [d91dbe0] - 2024-12-24

### 优化表格布局和状态显示

#### 新增功能
- **表头多栏显示**: 表头现在每栏显示一组列标题，与数据栏对齐
- **状态文本简化**:
  - `MissingPunch` 显示为 `MP`（橙色）
  - `OverTime` 显示为 `OT`（黄色）

#### 改进
- **字体大小范围**: 扩展至 10-60 rpx（原 20-40）
- **列宽布局**: 改为百分比布局，支持自适应
- **滚动条样式**: 添加简洁风格半透明滚动条

#### 修复
- 修复大字体时栏被挤出屏幕的问题
- 修复小字体时右侧空间过大的问题

---

## [9cc6674] - 2024-12-24

### 优化跑马灯和UI交互体验

#### 改进
- 跑马灯动画优化
- UI 交互体验提升

---

## [7e19630] - 2024-12-24

### 完成 Phase 5-8 功能实现

#### 新增功能
- 分页轮播功能
- 赞助商展示
- 数据源配置
- 本地存储

---

## [691e2d9] - 2024-12-24

### 实现赛场信息屏幕 MVP (Phase 1-4)

#### 新增功能
- 基础页面结构（配置页、展示页）
- 成绩表格组件 (ResultTable)
- 赛事列表组件 (EventList)
- 组别列表组件 (CourseList)
- 设置面板组件 (SettingsPanel)
- 状态栏组件 (StatusBar)
- 跑马灯组件 (Marquee)
- 赞助商Logo组件 (SponsorLogo)
- API 接口对接
- 本地存储服务

---

## 组件接口规格

### ResultTable 成绩表格

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| columns | Array | [] | 分栏数据，二维数组 |
| columnCount | Number | 2 | 分栏数量 |
| rowsPerColumn | Number | 10 | 每栏行数 |
| fontSize | Number/String | 26 | 字体大小（rpx） |
| language | String | 'zh' | 语言（zh/en） |
| config | Object | {} | 显示配置 |

**config 配置项**:
| 配置项 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| showBib | Boolean | true | 显示号码布 |
| showCountry | Boolean | true | 显示国籍 |
| showTeam | Boolean | false | 显示团队 |
| showStartTime | Boolean | false | 显示出发时间 |
| showTimeDiff | Boolean | true | 显示差时 |

**列宽规则**:
| 列 | 宽度 | 说明 |
|----|------|------|
| 名次 | 3em | 固定宽度 |
| 号码布 | 6em | 固定宽度，最多6字符 |
| 国籍 | 2.5em | 固定宽度 |
| 姓名 | flex | 弹性宽度 |
| 团队 | flex | 弹性宽度 |
| 出发时间 | 5.5em | 固定宽度 |
| 完赛用时 | 5.5em | 固定宽度 |
| 差时 | 5em | 固定宽度 |

**状态显示映射**:
| 状态值 | 显示 |
|--------|------|
| MissingPunch | MP |
| OverTime | OT |
| DNF | DNF |
| DNS | DNS |
| DSQ | DSQ |
| Disqualified | DQ |
| DidNotStart | DNS |
| DidNotFinish | DNF |

### SettingsPanel 设置面板

| 参数 | 范围 | 默认值 |
|------|------|--------|
| 语言 | zh/en | zh |
| 风格主题 | light/dark | light |
| 每页停留时间 | 1-999 秒 | 10 |
| 数据刷新间隔 | 1-999 秒 | 10 |
| 字体大小 | 10-60 rpx | 26 |
| 分栏数量 | 1-4 | 2 |
| 赞助商轮播频次 | 1-99 轮 | 3 |
| 赞助商展示时长 | 1-999 秒 | 5 |

**列显示设置**:
| 设置项 | 默认值 | 说明 |
|--------|--------|------|
| showBib | true | 显示号码布 |
| showCountry | true | 显示国籍 |
| showTeam | false | 显示团队 |
| showStartTime | false | 显示出发时间 |
| showTimeDiff | true | 显示差时 |

### EventList 赛事列表

**赛事状态映射**:
| 状态值 | 中文 | 英文 |
|--------|------|------|
| running | 进行中 | Running |
| stopped | 已结束 | Ended |
| pending | 未开始 | Pending |
| finished | 已结束 | Finished |

### 分页计算 (pagination.js)

```javascript
// 每栏行数计算
rowHeight = fontSize * 2.5
headerHeight = fontSize * 2.0

// 每页条目数
itemsPerPage = rowsPerColumn * columnCount
```
