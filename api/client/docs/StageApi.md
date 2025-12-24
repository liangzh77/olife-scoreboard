# StageApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createStage**](#createstage) | **POST** /stage | createStage|
|[**deleteStage**](#deletestage) | **DELETE** /stage/{id} | deleteStage|
|[**getStageById**](#getstagebyid) | **GET** /stage/{id} | getStageById|
|[**getStagesByEventId**](#getstagesbyeventid) | **GET** /stage | getStagesByEventId|
|[**updateStage**](#updatestage) | **PUT** /stage/{id} | updateStage|

# **createStage**
> RestDataResponseOfStageEntity createStage(createStagePayload)


### Example

```typescript
import {
    StageApi,
    Configuration,
    CreateStagePayload
} from './api';

const configuration = new Configuration();
const apiInstance = new StageApi(configuration);

let createStagePayload: CreateStagePayload; //

const { status, data } = await apiInstance.createStage(
    createStagePayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createStagePayload** | **CreateStagePayload**|  | |


### Return type

**RestDataResponseOfStageEntity**

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

# **deleteStage**
> RestResponse deleteStage()


### Example

```typescript
import {
    StageApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StageApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteStage(
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

# **getStageById**
> RestDataResponseOfStageEntity getStageById()


### Example

```typescript
import {
    StageApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StageApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getStageById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfStageEntity**

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

# **getStagesByEventId**
> RestDataResponseOfStageEntityArray getStagesByEventId()


### Example

```typescript
import {
    StageApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StageApi(configuration);

let event: string; // (default to undefined)

const { status, data } = await apiInstance.getStagesByEventId(
    event
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **event** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfStageEntityArray**

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

# **updateStage**
> RestDataResponseOfStageEntity updateStage(updateStagePayload)


### Example

```typescript
import {
    StageApi,
    Configuration,
    UpdateStagePayload
} from './api';

const configuration = new Configuration();
const apiInstance = new StageApi(configuration);

let id: string; // (default to undefined)
let updateStagePayload: UpdateStagePayload; //

const { status, data } = await apiInstance.updateStage(
    id,
    updateStagePayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateStagePayload** | **UpdateStagePayload**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfStageEntity**

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

