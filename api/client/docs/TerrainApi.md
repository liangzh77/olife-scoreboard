# TerrainApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createTerrain**](#createterrain) | **POST** /terrain | createTerrain|
|[**deleteTerrain**](#deleteterrain) | **DELETE** /terrain/{id} | deleteTerrain|
|[**getTerrainById**](#getterrainbyid) | **GET** /terrain/{id} | getTerrainById|
|[**getTerrainsByEventId**](#getterrainsbyeventid) | **GET** /terrain | getTerrainsByEventId|
|[**updateTerrain**](#updateterrain) | **PUT** /terrain/{id} | updateTerrain|

# **createTerrain**
> RestDataResponseOfTerrainEntity createTerrain(createTerrainPayload)


### Example

```typescript
import {
    TerrainApi,
    Configuration,
    CreateTerrainPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new TerrainApi(configuration);

let createTerrainPayload: CreateTerrainPayload; //

const { status, data } = await apiInstance.createTerrain(
    createTerrainPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTerrainPayload** | **CreateTerrainPayload**|  | |


### Return type

**RestDataResponseOfTerrainEntity**

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

# **deleteTerrain**
> RestResponse deleteTerrain()


### Example

```typescript
import {
    TerrainApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TerrainApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteTerrain(
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

# **getTerrainById**
> RestDataResponseOfTerrainEntity getTerrainById()


### Example

```typescript
import {
    TerrainApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TerrainApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getTerrainById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfTerrainEntity**

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

# **getTerrainsByEventId**
> RestDataResponseOfTerrainEntityArray getTerrainsByEventId()


### Example

```typescript
import {
    TerrainApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TerrainApi(configuration);

let event: string; // (default to undefined)

const { status, data } = await apiInstance.getTerrainsByEventId(
    event
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **event** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfTerrainEntityArray**

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

# **updateTerrain**
> RestDataResponseOfTerrainEntity updateTerrain(updateTerrainPayload)


### Example

```typescript
import {
    TerrainApi,
    Configuration,
    UpdateTerrainPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new TerrainApi(configuration);

let id: string; // (default to undefined)
let updateTerrainPayload: UpdateTerrainPayload; //

const { status, data } = await apiInstance.updateTerrain(
    id,
    updateTerrainPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateTerrainPayload** | **UpdateTerrainPayload**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfTerrainEntity**

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

