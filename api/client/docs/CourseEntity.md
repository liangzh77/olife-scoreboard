# CourseEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**stage** | [**StageBriefEntity**](StageBriefEntity.md) |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**_class** | [**ClassBriefEntity**](ClassBriefEntity.md) |  | [default to undefined]
**route** | [**RouteBriefEntity**](RouteBriefEntity.md) |  | [default to undefined]
**courseRule** | [**CourseRuleEntity**](CourseRuleEntity.md) |  | [default to undefined]
**startTime** | **string** |  | [default to undefined]
**timeLimit** | **number** | 比赛限时（分钟） | [default to undefined]

## Example

```typescript
import { CourseEntity } from './api';

const instance: CourseEntity = {
    id,
    name,
    stage,
    status,
    createdAt,
    updatedAt,
    _class,
    route,
    courseRule,
    startTime,
    timeLimit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
