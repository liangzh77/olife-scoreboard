# LiveApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**generateTrackingBoard**](#generatetrackingboard) | **POST** /live/tracking-board/{courseId} | generateTrackingBoard|
|[**getTrackBoardEvents**](#gettrackboardevents) | **GET** /live/track-board/events | getTrackBoardEvents|
|[**getTrackingBoard**](#gettrackingboard) | **GET** /live/tracking-board/{courseId} | getTrackingBoard|

# **generateTrackingBoard**
> RestDataResponseOfCourseTrackingBoardEntity generateTrackingBoard()


### Example

```typescript
import {
    LiveApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LiveApi(configuration);

let courseId: string; // (default to undefined)

const { status, data } = await apiInstance.generateTrackingBoard(
    courseId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **courseId** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfCourseTrackingBoardEntity**

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

# **getTrackBoardEvents**
> RestDataResponseOfTrackBoardEventEntityArray getTrackBoardEvents()


### Example

```typescript
import {
    LiveApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LiveApi(configuration);

let eventId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getTrackBoardEvents(
    eventId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eventId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**RestDataResponseOfTrackBoardEventEntityArray**

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

# **getTrackingBoard**
> RestDataResponseOfCourseTrackingBoardEntity getTrackingBoard()


### Example

```typescript
import {
    LiveApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LiveApi(configuration);

let courseId: string; // (default to undefined)

const { status, data } = await apiInstance.getTrackingBoard(
    courseId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **courseId** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfCourseTrackingBoardEntity**

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

