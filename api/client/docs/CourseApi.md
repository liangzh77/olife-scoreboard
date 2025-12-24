# CourseApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCourse**](#createcourse) | **POST** /course | createCourse|
|[**deleteCourse**](#deletecourse) | **DELETE** /course/{id} | deleteCourse|
|[**getCourseById**](#getcoursebyid) | **GET** /course/{id} | getCourseById|
|[**getCourses**](#getcourses) | **GET** /course | getCourses|
|[**updateCourse**](#updatecourse) | **PUT** /course/{id} | updateCourse|

# **createCourse**
> RestDataResponseOfCourseEntity createCourse(createCoursePayload)


### Example

```typescript
import {
    CourseApi,
    Configuration,
    CreateCoursePayload
} from './api';

const configuration = new Configuration();
const apiInstance = new CourseApi(configuration);

let createCoursePayload: CreateCoursePayload; //

const { status, data } = await apiInstance.createCourse(
    createCoursePayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCoursePayload** | **CreateCoursePayload**|  | |


### Return type

**RestDataResponseOfCourseEntity**

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

# **deleteCourse**
> RestResponse deleteCourse()


### Example

```typescript
import {
    CourseApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CourseApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteCourse(
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

# **getCourseById**
> RestDataResponseOfCourseEntity getCourseById()


### Example

```typescript
import {
    CourseApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CourseApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getCourseById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfCourseEntity**

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

# **getCourses**
> RestDataResponseOfCourseEntityArray getCourses()


### Example

```typescript
import {
    CourseApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CourseApi(configuration);

let stage: string; // (default to undefined)

const { status, data } = await apiInstance.getCourses(
    stage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **stage** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfCourseEntityArray**

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

# **updateCourse**
> RestDataResponseOfCourseEntity updateCourse(updateCoursePayload)


### Example

```typescript
import {
    CourseApi,
    Configuration,
    UpdateCoursePayload
} from './api';

const configuration = new Configuration();
const apiInstance = new CourseApi(configuration);

let id: string; // (default to undefined)
let updateCoursePayload: UpdateCoursePayload; //

const { status, data } = await apiInstance.updateCourse(
    id,
    updateCoursePayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateCoursePayload** | **UpdateCoursePayload**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfCourseEntity**

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

