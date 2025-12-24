# CreateCoursePayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**classId** | **string** |  | [default to undefined]
**routeId** | **string** |  | [default to undefined]
**courseRuleId** | **string** |  | [default to undefined]
**stageId** | **string** |  | [default to undefined]
**startTime** | **string** |  | [optional] [default to undefined]
**timeLimit** | **number** | 比赛限时（分钟） | [default to undefined]

## Example

```typescript
import { CreateCoursePayload } from './api';

const instance: CreateCoursePayload = {
    name,
    classId,
    routeId,
    courseRuleId,
    stageId,
    startTime,
    timeLimit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
