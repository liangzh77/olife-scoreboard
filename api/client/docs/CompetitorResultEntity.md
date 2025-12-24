# CompetitorResultEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**competitor** | [**CompetitorBriefEntity**](CompetitorBriefEntity.md) |  | [default to undefined]
**bibNumber** | **string** |  | [default to undefined]
**startAt** | **string** |  | [default to undefined]
**finishAt** | **string** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**splitTimes** | [**Array&lt;ResultSplitTimeEntity&gt;**](ResultSplitTimeEntity.md) |  | [default to undefined]
**totalTime** | **number** |  | [default to undefined]
**rank** | **number** |  | [default to undefined]

## Example

```typescript
import { CompetitorResultEntity } from './api';

const instance: CompetitorResultEntity = {
    id,
    competitor,
    bibNumber,
    startAt,
    finishAt,
    status,
    splitTimes,
    totalTime,
    rank,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
