# CourseRuleApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCourseRule**](#createcourserule) | **POST** /courserule | createCourseRule|
|[**deleteCourseRule**](#deletecourserule) | **DELETE** /courserule/{id} | deleteCourseRule|
|[**getCourseRuleById**](#getcourserulebyid) | **GET** /courserule/{id} | getCourseRuleById|
|[**getCourseRulesByEventId**](#getcourserulesbyeventid) | **GET** /courserule | getCourseRulesByEventId|
|[**updateCourseRule**](#updatecourserule) | **PUT** /courserule/{id} | updateCourseRule|

# **createCourseRule**
> RestDataResponseOfCourseRuleEntity createCourseRule(createCourseRulePayload)


### Example

```typescript
import {
    CourseRuleApi,
    Configuration,
    CreateCourseRulePayload
} from './api';

const configuration = new Configuration();
const apiInstance = new CourseRuleApi(configuration);

let createCourseRulePayload: CreateCourseRulePayload; //

const { status, data } = await apiInstance.createCourseRule(
    createCourseRulePayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCourseRulePayload** | **CreateCourseRulePayload**|  | |


### Return type

**RestDataResponseOfCourseRuleEntity**

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

# **deleteCourseRule**
> RestResponse deleteCourseRule()


### Example

```typescript
import {
    CourseRuleApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CourseRuleApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteCourseRule(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestResponse**

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

# **getCourseRuleById**
> RestDataResponseOfCourseRuleEntity getCourseRuleById()


### Example

```typescript
import {
    CourseRuleApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CourseRuleApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getCourseRuleById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfCourseRuleEntity**

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

# **getCourseRulesByEventId**
> RestDataResponseOfCourseRuleEntityArray getCourseRulesByEventId()


### Example

```typescript
import {
    CourseRuleApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CourseRuleApi(configuration);

let event: string; // (default to undefined)

const { status, data } = await apiInstance.getCourseRulesByEventId(
    event
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **event** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfCourseRuleEntityArray**

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

# **updateCourseRule**
> RestDataResponseOfCourseRuleEntity updateCourseRule(updateCourseRulePayload)


### Example

```typescript
import {
    CourseRuleApi,
    Configuration,
    UpdateCourseRulePayload
} from './api';

const configuration = new Configuration();
const apiInstance = new CourseRuleApi(configuration);

let id: string; // (default to undefined)
let updateCourseRulePayload: UpdateCourseRulePayload; //

const { status, data } = await apiInstance.updateCourseRule(
    id,
    updateCourseRulePayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateCourseRulePayload** | **UpdateCourseRulePayload**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfCourseRuleEntity**

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

