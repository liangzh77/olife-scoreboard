# UpdateCourseRulePayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**courseType** | **string** |  | [optional] [default to undefined]
**finishTimeMode** | **string** |  | [optional] [default to undefined]
**indEvalRule** | **string** |  | [optional] [default to undefined]
**indRankingRule** | **string** |  | [optional] [default to undefined]
**startTimeMode** | **string** |  | [optional] [default to undefined]
**teamRankingRule** | **string** |  | [optional] [default to undefined]
**timeAccuracy** | **number** |  | [optional] [default to undefined]
**teamEvalRuleAdmitTeamCount** | **number** | 允许计入团队成绩的队伍数量 | [optional] [default to undefined]
**teamEvalRuleValidResultMax** | **number** | 团队成绩中可计入的有效个人成绩人数上限 | [optional] [default to undefined]
**teamEvalRuleValidResultMin** | **number** | 团队成绩中可计入的有效个人成绩人数下限 | [optional] [default to undefined]

## Example

```typescript
import { UpdateCourseRulePayload } from './api';

const instance: UpdateCourseRulePayload = {
    name,
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
