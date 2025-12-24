# 更新日志

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
  - 名次: 6%，号码布: 8%，国籍: 6%，姓名: flex，出发时间: 12%，完赛用时: 14%，差值: 14%，状态: 8%
- **滚动条样式**: 添加简洁风格半透明滚动条
- **列间距**: 各字段之间添加 1% 间距

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

**状态显示映射**:
| 状态值 | 显示 | 颜色 |
|--------|------|------|
| finished | 完成 | 绿色 #52c41a |
| running | 进行中 | 蓝色 #1890ff |
| MissingPunch | MP | 橙色 #fa8c16 |
| OverTime | OT | 黄色 #faad14 |
| DNF/DNS/DSQ | DNF/DNS/DSQ | 红色 #ff4d4f |

### SettingsPanel 设置面板

| 参数 | 范围 | 默认值 |
|------|------|--------|
| 每页停留时间 | 1-999 秒 | 10 |
| 字体大小 | 10-60 rpx | 26 |
| 分栏数量 | 1-4 | 2 |
| 赞助商轮播频次 | 1-99 轮 | 5 |
| 赞助商展示时长 | 1-999 秒 | 5 |

### 分页计算 (pagination.js)

```javascript
// 每栏行数计算
rowHeight = fontSize * 1.2 + 8
rows = (availableHeight - headerHeight) / rowHeight

// 每页条目数
itemsPerPage = rowsPerColumn * columnCount
```
