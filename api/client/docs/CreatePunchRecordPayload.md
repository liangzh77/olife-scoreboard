# CreatePunchRecordPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eventId** | **string** |  | [default to undefined]
**model** | **string** |  | [default to undefined]
**cardNbr** | **string** |  | [default to undefined]
**startTime** | **string** |  | [default to undefined]
**finishTime** | **string** |  | [default to undefined]
**punchs** | [**Array&lt;PunchDto&gt;**](PunchDto.md) |  | [default to undefined]
**hash** | **string** |  | [default to undefined]
**rawdata** | **string** |  | [default to undefined]

## Example

```typescript
import { CreatePunchRecordPayload } from './api';

const instance: CreatePunchRecordPayload = {
    eventId,
    model,
    cardNbr,
    startTime,
    finishTime,
    punchs,
    hash,
    rawdata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
