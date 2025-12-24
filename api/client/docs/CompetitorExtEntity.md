# CompetitorExtEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**birthday** | **string** |  | [default to undefined]
**country** | **string** |  | [default to undefined]
**eventId** | **string** |  | [default to undefined]
**gender** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**cardNbrs** | **Array&lt;string&gt;** |  | [default to undefined]
**bibs** | **Array&lt;string&gt;** |  | [default to undefined]
**courses** | [**Array&lt;CourseBriefEntity&gt;**](CourseBriefEntity.md) |  | [default to undefined]
**regs** | [**Array&lt;RegistrationBriefEntity&gt;**](RegistrationBriefEntity.md) |  | [default to undefined]
**team** | [**TeamEntity**](TeamEntity.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CompetitorExtEntity } from './api';

const instance: CompetitorExtEntity = {
    id,
    birthday,
    country,
    eventId,
    gender,
    name,
    cardNbrs,
    bibs,
    courses,
    regs,
    team,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
