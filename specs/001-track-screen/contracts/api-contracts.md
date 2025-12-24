# API 合约: 赛场信息屏幕 (Track Screen)

**功能分支**: `001-track-screen`
**创建日期**: 2025-12-24
**数据源**: `api/client/api.ts` (只读参考)

## 概述

本文档定义了 Track Screen 应用与后端 API 的交互合约。所有 API 定义参考 `api/` 目录中的规范文档，本文仅记录本功能使用的接口子集。

## 基础配置

```
Base URL: {configurable, default: http://192.168.3.139:8080}
Content-Type: application/json
```

## 接口列表

### 1. 获取赛事列表

获取所有赛事及其阶段、组别信息。

**端点**: `GET /live/track-board/events`

**查询参数**:
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| eventId | string | 否 | 筛选特定赛事 |

**响应**:
```json
{
  "code": 0,
  "msg": "success",
  "data": [
    {
      "id": "evt-001",
      "name": "2024 城市定向赛",
      "description": "年度城市定向越野赛",
      "startAt": "2024-03-15T08:00:00Z",
      "endAt": "2024-03-15T18:00:00Z",
      "status": "running",
      "stages": [
        {
          "id": "stg-001",
          "name": "第一赛段",
          "description": "城市核心区",
          "startAt": "2024-03-15T08:00:00Z",
          "endAt": "2024-03-15T12:00:00Z",
          "status": "running",
          "courses": [
            {
              "id": "crs-001",
              "name": "精英男子组",
              "status": "running",
              "class": {
                "id": "cls-001",
                "name": "ME"
              }
            },
            {
              "id": "crs-002",
              "name": "精英女子组",
              "status": "running",
              "class": {
                "id": "cls-002",
                "name": "WE"
              }
            }
          ]
        }
      ]
    }
  ]
}
```

**错误码**:
| code | 说明 |
|------|------|
| 0 | 成功 |
| 1001 | 服务器内部错误 |
| 1002 | 参数错误 |

---

### 2. 获取组别成绩

获取指定组别的完赛成绩和实时数据。

**端点**: `GET /live/tracking-board/{courseId}`

**路径参数**:
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| courseId | string | 是 | 组别 ID |

**响应**:
```json
{
  "code": 0,
  "msg": "success",
  "data": {
    "courseInfo": {
      "id": "crs-001",
      "name": "精英男子组",
      "class": { "id": "cls-001", "name": "ME" },
      "stage": { "id": "stg-001", "name": "第一赛段" },
      "event": { "id": "evt-001", "name": "2024 城市定向赛" },
      "controls": ["S", "31", "32", "33", "F"]
    },
    "results": [
      {
        "id": "res-001",
        "competitor": {
          "id": "comp-001",
          "name": "张三",
          "country": "CHN",
          "gender": "male",
          "birthday": "1995-06-15"
        },
        "bibNumber": "101",
        "startAt": "2024-03-15T08:05:00Z",
        "finishAt": "2024-03-15T09:23:45Z",
        "status": "finished",
        "totalTime": 4725000,
        "rank": 1,
        "splitTimes": [
          { "code": "31", "time": 180000, "rank": 1, "cumulativeTime": 180000 }
        ]
      },
      {
        "id": "res-002",
        "competitor": {
          "id": "comp-002",
          "name": "李四",
          "country": "CHN",
          "gender": "male",
          "birthday": "1998-02-20"
        },
        "bibNumber": "102",
        "startAt": "2024-03-15T08:07:00Z",
        "finishAt": "2024-03-15T09:28:12Z",
        "status": "finished",
        "totalTime": 4872000,
        "rank": 2,
        "splitTimes": []
      }
    ],
    "liveResults": [
      {
        "id": "live-001",
        "competitor": {
          "id": "comp-003",
          "name": "王五",
          "country": "CHN",
          "gender": "male",
          "birthday": "2000-11-08"
        },
        "bibNumber": "103",
        "startAt": "2024-03-15T08:10:00Z",
        "progress": 60,
        "splitTimes": [
          { "code": "31", "valid": true, "time": 195000 },
          { "code": "32", "valid": true, "time": 420000 }
        ]
      }
    ]
  }
}
```

**状态值说明**:
| status | 说明 |
|--------|------|
| finished | 正常完赛 |
| dnf | 未完成 (Did Not Finish) |
| dns | 未出发 (Did Not Start) |
| dsq | 取消资格 (Disqualified) |
| mp | 漏打 (Mispunch) |
| otl | 超时 (Over Time Limit) |

---

## 数据刷新策略

| 场景 | 刷新间隔 | 说明 |
|------|----------|------|
| 滚动播放中 | 60 秒 | 符合 FR-017 要求 |
| 配置页面 | 不自动刷新 | 用户手动触发 |
| 网络恢复 | 立即刷新 | 网络重连后立即获取最新数据 |

## 错误处理

### 网络错误

当网络请求失败时：
1. 保留最后一次成功获取的数据
2. 在界面上显示网络状态异常提示
3. 继续尝试按间隔刷新

### API 错误

当 API 返回非 0 的 code 时：
1. 记录错误信息
2. 不更新当前展示数据
3. 继续尝试按间隔刷新

## 赞助商 LOGO API

> **注意**: 赞助商 LOGO 列表的 API 尚未在 `api/` 中定义。
>
> 当前假设：赞助商信息由 API 提供，待后端实现后补充合约。
>
> 临时方案：可在本地配置静态 LOGO URL 列表用于开发测试。

预期接口结构：
```json
{
  "code": 0,
  "data": [
    {
      "id": "sponsor-001",
      "name": "赞助商A",
      "logoUrl": "https://example.com/logo-a.png"
    }
  ]
}
```
