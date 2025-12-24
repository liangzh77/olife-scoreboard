# 技术研究: 赛场信息屏幕 (Track Screen)

**功能分支**: `001-track-screen`
**创建日期**: 2025-12-24
**状态**: 完成

## 1. uni-app 项目初始化

### 1.1 创建项目方式

推荐使用 HBuilderX 可视化创建或 CLI 方式：

```bash
# CLI 方式（需要先安装 @vue/cli）
npm install -g @vue/cli
vue create -p dcloudio/uni-preset-vue track-screen
```

### 1.2 项目配置

**pages.json** - 页面路由配置：
```json
{
  "pages": [
    {
      "path": "pages/config/index",
      "style": {
        "navigationBarTitleText": "配置",
        "navigationStyle": "custom"
      }
    },
    {
      "path": "pages/display/index",
      "style": {
        "navigationBarTitleText": "展示",
        "navigationStyle": "custom"
      }
    }
  ],
  "globalStyle": {
    "navigationBarTextStyle": "white",
    "navigationBarBackgroundColor": "#1a1a1a",
    "backgroundColor": "#1a1a1a"
  }
}
```

**manifest.json** - 应用配置重点：
- H5 配置：router mode, publicPath
- App 配置：splash 启动图, 横屏模式支持

### 1.3 横屏模式

大屏展示需要横屏，manifest.json 配置：
```json
{
  "app-plus": {
    "screenOrientation": ["landscape-primary", "landscape-secondary"]
  }
}
```

## 2. 数据获取策略

### 2.1 轮询方案

使用 `setInterval` + `uni.request` 实现数据轮询：

```javascript
// services/api.js
const API_BASE = uni.getStorageSync('apiBaseUrl') || 'http://localhost:8080'

export function getTrackBoardEvents(eventId = null) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: `${API_BASE}/live/track-board/events`,
      data: eventId ? { eventId } : {},
      success: (res) => {
        if (res.data.code === 0) {
          resolve(res.data.data)
        } else {
          reject(new Error(res.data.msg))
        }
      },
      fail: reject
    })
  })
}

export function getTrackingBoard(courseId) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: `${API_BASE}/live/tracking-board/${courseId}`,
      success: (res) => {
        if (res.data.code === 0) {
          resolve(res.data.data)
        } else {
          reject(new Error(res.data.msg))
        }
      },
      fail: reject
    })
  })
}
```

### 2.2 轮询控制器

```javascript
// services/poller.js
export class DataPoller {
  constructor(fetchFn, interval = 60000) {
    this.fetchFn = fetchFn
    this.interval = interval
    this.timer = null
    this.lastData = null
  }

  start(callback) {
    this.stop()
    const poll = async () => {
      try {
        const data = await this.fetchFn()
        this.lastData = data
        callback(null, data)
      } catch (error) {
        callback(error, this.lastData) // 错误时返回缓存数据
      }
    }
    poll() // 立即执行一次
    this.timer = setInterval(poll, this.interval)
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
  }
}
```

## 3. 本地存储方案

### 3.1 配置持久化

```javascript
// services/storage.js
const CONFIG_KEY = 'track_screen_config'

const defaultConfig = {
  apiBaseUrl: 'http://192.168.3.139:8080',
  pageStayTime: 30,        // 秒
  fontSize: 'medium',      // small/medium/large
  columnCount: 2,          // 分栏数
  sponsorInterval: 3,      // 每多少轮展示一次赞助商
  sponsorDuration: 5       // 赞助商LOGO展示秒数
}

export function getConfig() {
  const saved = uni.getStorageSync(CONFIG_KEY)
  return saved ? { ...defaultConfig, ...JSON.parse(saved) } : defaultConfig
}

export function saveConfig(config) {
  uni.setStorageSync(CONFIG_KEY, JSON.stringify(config))
}

export function getConfigValue(key) {
  return getConfig()[key]
}

export function setConfigValue(key, value) {
  const config = getConfig()
  config[key] = value
  saveConfig(config)
}
```

## 4. 动画方案

### 4.1 页面切换动画

使用 CSS transition 或 uni-app 内置动画：

```vue
<template>
  <view class="page-container">
    <view
      class="page"
      :class="{ 'slide-out': isTransitioning }"
      :style="{ transform: `translateX(${offsetX}px)` }"
    >
      <!-- 当前页内容 -->
    </view>
  </view>
</template>

<style>
.page-container {
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.page {
  transition: transform 0.5s ease-in-out;
}

.slide-out {
  transform: translateX(-100%);
}
</style>
```

### 4.2 跑马灯动画

```vue
<template>
  <view class="marquee-container">
    <view class="marquee-content" :style="marqueeStyle">
      {{ text }}
    </view>
  </view>
</template>

<script>
export default {
  props: {
    text: String,
    duration: { type: Number, default: 10 } // 秒
  },
  computed: {
    marqueeStyle() {
      return {
        animation: `marquee ${this.duration}s linear`
      }
    }
  }
}
</script>

<style>
.marquee-container {
  overflow: hidden;
  width: 100%;
}

.marquee-content {
  white-space: nowrap;
  display: inline-block;
}

@keyframes marquee {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}
</style>
```

## 5. 分栏分页逻辑

### 5.1 计算分页

```javascript
// utils/pagination.js
export function calculatePages(items, rowsPerColumn, columnCount) {
  const itemsPerPage = rowsPerColumn * columnCount
  const pages = []

  for (let i = 0; i < items.length; i += itemsPerPage) {
    const pageItems = items.slice(i, i + itemsPerPage)
    const columns = []

    for (let j = 0; j < columnCount; j++) {
      columns.push(pageItems.slice(j * rowsPerColumn, (j + 1) * rowsPerColumn))
    }

    pages.push(columns)
  }

  return pages
}
```

### 5.2 动态计算每列行数

根据屏幕高度和字体大小动态计算：

```javascript
export function calculateRowsPerColumn(containerHeight, rowHeight, headerHeight = 100, footerHeight = 60) {
  const availableHeight = containerHeight - headerHeight - footerHeight
  return Math.floor(availableHeight / rowHeight)
}
```

## 6. 事件检测（跑马灯）

### 6.1 事件追踪器

```javascript
// services/eventTracker.js
export class EventTracker {
  constructor() {
    this.previousResults = new Map() // courseId -> Map<competitorId, result>
    this.previousTop3 = new Map()    // courseId -> [id1, id2, id3]
  }

  detectEvents(courseId, results, liveResults) {
    const events = []
    const prevResults = this.previousResults.get(courseId) || new Map()
    const prevTop3 = this.previousTop3.get(courseId) || []

    // 检测新出发
    liveResults.forEach(live => {
      if (!prevResults.has(live.id)) {
        events.push({
          type: 'start',
          message: `${live.competitor.name} 已出发`
        })
      }
    })

    // 检测新完成
    results.forEach(result => {
      const prev = prevResults.get(result.id)
      if (!prev || prev.status !== result.status) {
        if (result.status === 'finished') {
          events.push({
            type: 'finish',
            message: `${result.competitor.name} 已完成比赛`
          })
        }
      }
    })

    // 检测前三名变化
    const currentTop3 = results
      .filter(r => r.rank && r.rank <= 3)
      .sort((a, b) => a.rank - b.rank)
      .map(r => r.id)

    currentTop3.forEach((id, index) => {
      const rank = index + 1
      if (prevTop3[index] !== id) {
        const competitor = results.find(r => r.id === id)
        if (competitor) {
          events.push({
            type: 'ranking',
            message: `${competitor.competitor.name} 获得第 ${rank} 名`
          })
        }
      }
    })

    // 更新缓存
    const newResults = new Map()
    results.forEach(r => newResults.set(r.id, r))
    liveResults.forEach(r => newResults.set(r.id, r))
    this.previousResults.set(courseId, newResults)
    this.previousTop3.set(courseId, currentTop3)

    return events
  }
}
```

## 7. 网络状态检测

### 7.1 网络监听

```javascript
// services/network.js
export function initNetworkListener(onChange) {
  // 获取初始状态
  uni.getNetworkType({
    success: (res) => {
      onChange(res.networkType !== 'none')
    }
  })

  // 监听变化
  uni.onNetworkStatusChange((res) => {
    onChange(res.isConnected)
  })
}
```

## 8. 跨平台注意事项

### 8.1 条件编译

```javascript
// 仅 H5
// #ifdef H5
console.log('Running in H5')
// #endif

// 仅 App
// #ifdef APP-PLUS
console.log('Running in App')
// #endif
```

### 8.2 样式单位

- 使用 `rpx` 作为主要单位，750rpx = 屏幕宽度
- 字体大小推荐使用 `rpx` 确保多端一致
- 避免使用 `vh` / `vw`（App 端支持不完善）

### 8.3 API 兼容

| 功能 | H5 | App |
|------|-----|-----|
| uni.request | ✅ | ✅ |
| uni.setStorageSync | ✅ | ✅ |
| uni.getNetworkType | ✅ | ✅ |
| uni.onNetworkStatusChange | ✅ | ✅ |
| 全屏显示 | 需 CSS | 需配置 manifest |

## 9. 性能优化建议

1. **虚拟滚动**: 如果成绩列表很长，考虑使用虚拟滚动
2. **数据缓存**: 网络断开时使用缓存数据
3. **图片懒加载**: 赞助商 LOGO 使用懒加载
4. **动画优化**: 使用 CSS transform 而非 position 实现动画
5. **内存管理**: 定时清理不需要的数据，避免内存泄漏

## 10. 结论

技术方案可行，使用 uni-app 能够满足"一次开发，多端发布"的需求。建议：

1. 先完成 H5 版本开发和验证
2. 使用 HBuilderX 进行开发，利用其热更新和调试功能
3. 定期在安卓真机上测试，及时发现平台差异
4. 保持代码简洁，优先使用 uni-app 内置能力
