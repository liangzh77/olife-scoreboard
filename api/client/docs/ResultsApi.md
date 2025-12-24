# ResultsApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**evaluateResults**](#evaluateresults) | **POST** /results/evaluate | evaluateResults|
|[**getResults**](#getresults) | **GET** /results | getResults|

# **evaluateResults**
> evaluateResults(evaluateResultsDto)


### Example

```typescript
import {
    ResultsApi,
    Configuration,
    EvaluateResultsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new ResultsApi(configuration);

let evaluateResultsDto: EvaluateResultsDto; //

const { status, data } = await apiInstance.evaluateResults(
    evaluateResultsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **evaluateResultsDto** | **EvaluateResultsDto**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getResults**
> RestDataResponseOfCourseResultEntityArray getResults()


### Example

```typescript
import {
    ResultsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ResultsApi(configuration);

let page: number; // (optional) (default to 1)
let pageSize: number; // (optional) (default to 10)
let courseId: string; // (optional) (default to undefined)
let competitorId: string; // (optional) (default to undefined)
let status: 'ok' | 'notok'; //结果状态过滤: ok(仅返回状态为OK的结果), other(返回状态非OK的结果) (optional) (default to undefined)

const { status, data } = await apiInstance.getResults(
    page,
    pageSize,
    courseId,
    competitorId,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] |  | (optional) defaults to 1|
| **pageSize** | [**number**] |  | (optional) defaults to 10|
| **courseId** | [**string**] |  | (optional) defaults to undefined|
| **competitorId** | [**string**] |  | (optional) defaults to undefined|
| **status** | [**&#39;ok&#39; | &#39;notok&#39;**]**Array<&#39;ok&#39; &#124; &#39;notok&#39;>** | 结果状态过滤: ok(仅返回状态为OK的结果), other(返回状态非OK的结果) | (optional) defaults to undefined|


### Return type

**RestDataResponseOfCourseResultEntityArray**

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

