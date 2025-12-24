# ClassApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createClass**](#createclass) | **POST** /class | createClass|
|[**deleteClass**](#deleteclass) | **DELETE** /class/{id} | deleteClass|
|[**getClassById**](#getclassbyid) | **GET** /class/{id} | getClassById|
|[**getClassesByEventId**](#getclassesbyeventid) | **GET** /class | getClassesByEventId|
|[**updateClass**](#updateclass) | **PUT** /class/{id} | updateClass|

# **createClass**
> RestDataResponseOfClassEntity createClass(createClassPayload)


### Example

```typescript
import {
    ClassApi,
    Configuration,
    CreateClassPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new ClassApi(configuration);

let createClassPayload: CreateClassPayload; //

const { status, data } = await apiInstance.createClass(
    createClassPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createClassPayload** | **CreateClassPayload**|  | |


### Return type

**RestDataResponseOfClassEntity**

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

# **deleteClass**
> RestResponse deleteClass()


### Example

```typescript
import {
    ClassApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ClassApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteClass(
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

# **getClassById**
> RestDataResponseOfClassEntity getClassById()


### Example

```typescript
import {
    ClassApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ClassApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getClassById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfClassEntity**

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

# **getClassesByEventId**
> RestDataResponseOfClassEntityArray getClassesByEventId()


### Example

```typescript
import {
    ClassApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ClassApi(configuration);

let event: string; // (default to undefined)

const { status, data } = await apiInstance.getClassesByEventId(
    event
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **event** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfClassEntityArray**

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

# **updateClass**
> RestDataResponseOfClassEntity updateClass(updateClassPayload)


### Example

```typescript
import {
    ClassApi,
    Configuration,
    UpdateClassPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new ClassApi(configuration);

let id: string; // (default to undefined)
let updateClassPayload: UpdateClassPayload; //

const { status, data } = await apiInstance.updateClass(
    id,
    updateClassPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateClassPayload** | **UpdateClassPayload**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfClassEntity**

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

