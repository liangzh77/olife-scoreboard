# CreateCourseRulePayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**eventId** | **string** |  | [default to undefined]
**courseType** | **string** |  | [default to undefined]
**finishTimeMode** | **string** |  | [default to undefined]
**indEvalRule** | **string** |  | [default to undefined]
**indRankingRule** | **string** |  | [default to undefined]
**startTimeMode** | **string** |  | [default to undefined]
**teamRankingRule** | **string** |  | [default to undefined]
**timeAccuracy** | **number** |  | [default to undefined]
**teamEvalRuleAdmitTeamCount** | **number** | 允许计入团队成绩的队伍数量 | [default to undefined]
**teamEvalRuleValidResultMax** | **number** | 团队成绩中可计入的有效个人成绩人数上限 | [default to undefined]
**teamEvalRuleValidResultMin** | **number** | 团队成绩中可计入的有效个人成绩人数下限 | [default to undefined]

## Example

```typescript
import { CreateCourseRulePayload } from './api';

const instance: CreateCourseRulePayload = {
    name,
    eventId,
    courseType,
    finishTimeMode,
    indEvalRule,
    indRankingRule,
    startTimeMode,
    teamRankingRule,
    timeAccuracy,
    teamEvalRuleAdmitTeamCount,
    teamEvalRuleValidResultMax,
    teamEvalRuleValidResultMin,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
