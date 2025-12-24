# CompStatusApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getCompetitorStatus**](#getcompetitorstatus) | **GET** /compstatus | getCompetitorStatus|

# **getCompetitorStatus**
> RestDataResponseOfCompetitorStatusEntityArray getCompetitorStatus()


### Example

```typescript
import {
    CompStatusApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CompStatusApi(configuration);

let page: number; // (optional) (default to 1)
let pageSize: number; // (optional) (default to 10)
let competitorId: string; // (optional) (default to undefined)
let courseId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getCompetitorStatus(
    page,
    pageSize,
    competitorId,
    courseId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] |  | (optional) defaults to 1|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **competitorId** | [**string**] |  | (optional) defaults to undefined|
| **courseId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**RestDataResponseOfCompetitorStatusEntityArray**

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

