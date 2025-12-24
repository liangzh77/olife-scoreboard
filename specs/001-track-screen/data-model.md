# 数据模型: 赛场信息屏幕 (Track Screen)

**功能分支**: `001-track-screen`
**创建日期**: 2025-12-24
**状态**: 完成

## 1. 核心实体

### 1.1 赛事 (Event)

从 API 获取的赛事数据结构。

```typescript
interface TrackBoardEvent {
  id: string           // 赛事唯一标识
  name: string         // 赛事名称
  description: string | null
  startAt: string      // ISO 日期时间
  endAt: string
  status: string       // 赛事状态
  stages: Stage[]      // 阶段列表
}
```

### 1.2 阶段 (Stage)

赛事下的阶段/赛段。

```typescript
interface Stage {
  id: string
  name: string
  description: string | null
  startAt: string
  endAt: string
  status: string
  courses: Course[]    // 组别列表
}
```

### 1.3 组别 (Course)

阶段下的具体比赛组别。

```typescript
interface Course {
  id: string
  name: string
  status: 'stopped' | 'running'
  class: {
    id: string
    name: string       // 组别分类名称
  }
  startTime?: string   // 组别开始时间（用于排序）
}
```

### 1.4 运动员成绩 (CompetitorResult)

完赛运动员的成绩数据。

```typescript
interface CompetitorResult {
  id: string
  competitor: {
    id: string
    name: string       // 姓名
    country: string    // 国籍（国家代码）
    gender: string
    birthday: string
  }
  bibNumber: string    // 号码布
  startAt: string | null   // 出发时间
  finishAt: string | null  // 完赛时间
  status: string       // 状态: finished, dnf, dns, dsq 等
  totalTime: number    // 总用时（毫秒）
  rank: number | null  // 名次
  splitTimes: SplitTime[]  // 分段成绩（暂不展示）
}
```

### 1.5 实时数据 (LiveResult)

正在比赛中的运动员实时数据。

```typescript
interface LiveResult {
  id: string
  competitor: {
    id: string
    name: string
    country: string
    gender: string
    birthday: string
  }
  bibNumber: string
  startAt: string      // 出发时间
  progress: number     // 完成进度百分比
  splitTimes: LivePunchRecord[]  // 实时打卡记录
}
```

### 1.6 组别成绩汇总 (CourseTrackingBoard)

单个组别的完整成绩数据。

```typescript
interface CourseTrackingBoard {
  courseInfo: {
    id: string
    name: string
    class: { id: string; name: string }
    stage: { id: string; name: string }
    event: { id: string; name: string }
    controls: string[]   // 点位列表
  }
  results: CompetitorResult[]      // 完赛成绩列表
  liveResults: LiveResult[]        // 实时数据列表
}
```

## 2. 应用状态模型

### 2.1 配置状态 (ConfigState)

应用配置，持久化存储。

```typescript
interface ConfigState {
  // 数据源
  apiBaseUrl: string           // API 服务器地址

  // 展示参数
  pageStayTime: number         // 每页停留时间（秒），默认 30
  fontSize: 'small' | 'medium' | 'large'  // 字体大小
  columnCount: number          // 分栏数量，默认 2

  // 赞助商相关
  sponsorInterval: number      // 赞助商展示频次（每多少轮）
  sponsorDuration: number      // 每个 LOGO 展示时长（秒）
}
```

### 2.2 选择状态 (SelectionState)

用户在配置页面的选择。

```typescript
interface SelectionState {
  selectedEventId: string | null      // 当前选中的赛事
  selectedCourseIds: string[]         // 选中的组别列表（多选）
}
```

### 2.3 播放状态 (PlaybackState)

滚动播放页面的运行时状态。

```typescript
interface PlaybackState {
  // 当前展示
  currentCourseIndex: number   // 当前组别索引（在选中列表中）
  currentPageIndex: number     // 当前页码
  totalPages: number           // 总页数

  // 轮播计数
  roundCount: number           // 已完成的轮播轮数
  showingSponsor: boolean      // 是否正在展示赞助商 LOGO
  currentSponsorIndex: number  // 当前赞助商索引

  // 网络状态
  isOnline: boolean            // 网络是否连接
  lastUpdateTime: string       // 最后更新时间
}
```

### 2.4 事件队列 (EventQueue)

跑马灯事件队列。

```typescript
interface MarqueeEvent {
  id: string           // 事件唯一ID（用于去重）
  type: 'start' | 'finish' | 'ranking'
  message: string      // 显示文本
  timestamp: number    // 事件时间戳
}

interface EventQueue {
  events: MarqueeEvent[]       // 待显示事件队列
  currentEvent: MarqueeEvent | null  // 正在显示的事件
}
```

## 3. 界面视图模型

### 3.1 成绩展示项 (ResultDisplayItem)

用于界面展示的成绩数据（整合完赛和实时）。

```typescript
interface ResultDisplayItem {
  // 基本信息
  rank: number | string        // 名次或 "-"
  bibNumber: string            // 号码布
  country: string              // 国籍
  name: string                 // 姓名

  // 时间信息
  startTime: string            // 出发时间（格式化后）
  finishTime: string           // 完赛用时（格式化后）或 "比赛中"
  timeDiff: string             // 与第一名时间差

  // 状态
  status: 'finished' | 'running' | 'dnf' | 'dns' | 'dsq'
  evaluation: string           // 评估结果（如有）

  // 样式标记
  isTopThree: boolean          // 是否前三名
  isLive: boolean              // 是否实时数据
}
```

### 3.2 分页视图 (PageView)

分栏分页后的展示数据。

```typescript
interface PageView {
  pageIndex: number            // 页码
  columns: ResultDisplayItem[][] // 各栏数据
}
```

### 3.3 状态栏数据 (StatusBarData)

配置页面顶部状态栏。

```typescript
interface StatusBarData {
  version: string              // 应用版本号
  isOnline: boolean            // 网络状态
  deviceIp: string             // 设备 IP 地址
  apiUrl: string               // 数据源 URL
  lastUpdate: string           // 最后更新时间
}
```

## 4. 数据转换

### 4.1 API 响应 → 展示数据

```typescript
function transformResults(
  results: CompetitorResult[],
  liveResults: LiveResult[],
  firstPlaceTime: number
): ResultDisplayItem[] {
  const items: ResultDisplayItem[] = []

  // 转换完赛成绩
  results.forEach(r => {
    items.push({
      rank: r.rank ?? '-',
      bibNumber: r.bibNumber,
      country: r.competitor.country,
      name: r.competitor.name,
      startTime: formatTime(r.startAt),
      finishTime: formatDuration(r.totalTime),
      timeDiff: r.rank === 1 ? '-' : formatDiff(r.totalTime - firstPlaceTime),
      status: r.status as any,
      evaluation: '',  // API 中暂无此字段
      isTopThree: r.rank !== null && r.rank <= 3,
      isLive: false
    })
  })

  // 转换实时数据（显示在列表末尾）
  liveResults.forEach(r => {
    items.push({
      rank: '-',
      bibNumber: r.bibNumber,
      country: r.competitor.country,
      name: r.competitor.name,
      startTime: formatTime(r.startAt),
      finishTime: '比赛中',
      timeDiff: '-',
      status: 'running',
      evaluation: '',
      isTopThree: false,
      isLive: true
    })
  })

  return items
}
```

### 4.2 时间格式化工具

```typescript
// 格式化时间戳为 HH:MM:SS
function formatTime(isoString: string | null): string {
  if (!isoString) return '-'
  const date = new Date(isoString)
  return date.toLocaleTimeString('zh-CN', { hour12: false })
}

// 格式化持续时间（毫秒）为 HH:MM:SS
function formatDuration(ms: number): string {
  if (!ms || ms <= 0) return '-'
  const seconds = Math.floor(ms / 1000)
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
}

// 格式化时间差
function formatDiff(ms: number): string {
  if (!ms || ms <= 0) return '-'
  return '+' + formatDuration(ms)
}
```

## 5. 存储键定义

| 键名 | 类型 | 说明 |
|------|------|------|
| `track_screen_config` | JSON | 配置参数 |
| `track_screen_selection` | JSON | 最后选择的赛事和组别 |
| `track_screen_cache` | JSON | 成绩数据缓存（离线使用） |

## 6. 数据流图

```
┌─────────────────────────────────────────────────────────────┐
│                         API 层                               │
│  getTrackBoardEvents() ──→ 赛事列表                         │
│  getTrackingBoard(courseId) ──→ 组别成绩                     │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                      数据转换层                              │
│  transformResults() ──→ ResultDisplayItem[]                 │
│  calculatePages() ──→ PageView[]                            │
│  detectEvents() ──→ MarqueeEvent[]                          │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                       视图层                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ 成绩表格     │  │ 跑马灯       │  │ 赞助商LOGO   │      │
│  │ ResultTable  │  │ Marquee      │  │ SponsorLogo  │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
```
