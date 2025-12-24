# PunchApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createPunchRecordFromFingerCard**](#createpunchrecordfromfingercard) | **POST** /punch/finger-card | createPunchRecordFromFingerCard|
|[**getPunchRecords**](#getpunchrecords) | **GET** /punch | getPunchRecords|

# **createPunchRecordFromFingerCard**
> RestDataResponseOfObjectEntityArray createPunchRecordFromFingerCard(createPunchRecordPayload)


### Example

```typescript
import {
    PunchApi,
    Configuration,
    CreatePunchRecordPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new PunchApi(configuration);

let createPunchRecordPayload: CreatePunchRecordPayload; //

const { status, data } = await apiInstance.createPunchRecordFromFingerCard(
    createPunchRecordPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPunchRecordPayload** | **CreatePunchRecordPayload**|  | |


### Return type

**RestDataResponseOfObjectEntityArray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPunchRecords**
> RestDataResponseOfPunchRecordEntityArray getPunchRecords()


### Example

```typescript
import {
    PunchApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PunchApi(configuration);

let page: number; // (optional) (default to 1)
let pageSize: number; // (optional) (default to 10)
let competitorId: string; // (optional) (default to undefined)
let courseId: string; // (optional) (default to undefined)
let controlId: string; // (optional) (default to undefined)
let deviceId: string; // (optional) (default to undefined)
let sortBy: 'punchAt' | 'uploadAt' | 'createdAt' | 'code' | 'cardNbr' | 'deviceId' | 'batch' | 'source'; //排序字段 (optional) (default to undefined)
let sortOrder: 'asc' | 'desc'; //排序方向 (optional) (default to 'desc')

const { status, data } = await apiInstance.getPunchRecords(
    page,
    pageSize,
    competitorId,
    courseId,
    controlId,
    deviceId,
    sortBy,
    sortOrder
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] |  | (optional) defaults to 1|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **competitorId** | [**string**] |  | (optional) defaults to undefined|
| **courseId** | [**string**] |  | (optional) defaults to undefined|
| **controlId** | [**string**] |  | (optional) defaults to undefined|
| **deviceId** | [**string**] |  | (optional) defaults to undefined|
| **sortBy** | [**&#39;punchAt&#39; | &#39;uploadAt&#39; | &#39;createdAt&#39; | &#39;code&#39; | &#39;cardNbr&#39; | &#39;deviceId&#39; | &#39;batch&#39; | &#39;source&#39;**]**Array<&#39;punchAt&#39; &#124; &#39;uploadAt&#39; &#124; &#39;createdAt&#39; &#124; &#39;code&#39; &#124; &#39;cardNbr&#39; &#124; &#39;deviceId&#39; &#124; &#39;batch&#39; &#124; &#39;source&#39;>** | 排序字段 | (optional) defaults to undefined|
| **sortOrder** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | 排序方向 | (optional) defaults to 'desc'|


### Return type

**RestDataResponseOfPunchRecordEntityArray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

