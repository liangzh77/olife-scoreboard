# AllControlsApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createAllControls**](#createallcontrols) | **POST** /allcontrols | createAllControls|
|[**deleteAllControls**](#deleteallcontrols) | **DELETE** /allcontrols/{id} | deleteAllControls|
|[**getAllControlsByControlId**](#getallcontrolsbycontrolid) | **GET** /allcontrols/controlpoint/{controlId} | getAllControlsByControlId|
|[**getAllControlsById**](#getallcontrolsbyid) | **GET** /allcontrols/{id} | getAllControlsById|
|[**getAllControlsByTerrainId**](#getallcontrolsbyterrainid) | **GET** /allcontrols | getAllControlsByTerrainId|
|[**getAvailableStations**](#getavailablestations) | **GET** /allcontrols/{id}/stations/available | getAvailableStations|
|[**getControlPointsByAllControlsId**](#getcontrolpointsbyallcontrolsid) | **GET** /allcontrols/{id}/controlpoints | getControlPointsByAllControlsId|
|[**updateAllControls**](#updateallcontrols) | **PUT** /allcontrols/{id} | updateAllControls|

# **createAllControls**
> RestDataResponseOfAllControlsEntity createAllControls(createAllControlsPayload)


### Example

```typescript
import {
    AllControlsApi,
    Configuration,
    CreateAllControlsPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new AllControlsApi(configuration);

let createAllControlsPayload: CreateAllControlsPayload; //

const { status, data } = await apiInstance.createAllControls(
    createAllControlsPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createAllControlsPayload** | **CreateAllControlsPayload**|  | |


### Return type

**RestDataResponseOfAllControlsEntity**

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

# **deleteAllControls**
> RestResponse deleteAllControls()


### Example

```typescript
import {
    AllControlsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AllControlsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteAllControls(
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

# **getAllControlsByControlId**
> RestDataResponseOfAllControlsEntity getAllControlsByControlId()


### Example

```typescript
import {
    AllControlsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AllControlsApi(configuration);

let controlId: string; // (default to undefined)

const { status, data } = await apiInstance.getAllControlsByControlId(
    controlId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **controlId** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfAllControlsEntity**

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

# **getAllControlsById**
> RestDataResponseOfAllControlsEntity getAllControlsById()


### Example

```typescript
import {
    AllControlsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AllControlsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getAllControlsById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfAllControlsEntity**

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

# **getAllControlsByTerrainId**
> RestDataResponseOfAllControlsEntityArray getAllControlsByTerrainId()


### Example

```typescript
import {
    AllControlsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AllControlsApi(configuration);

let terrain: string; // (default to undefined)

const { status, data } = await apiInstance.getAllControlsByTerrainId(
    terrain
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **terrain** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfAllControlsEntityArray**

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

# **getAvailableStations**
> RestDataResponseOfControlStationEntityArray getAvailableStations()


### Example

```typescript
import {
    AllControlsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AllControlsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getAvailableStations(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfControlStationEntityArray**

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

# **getControlPointsByAllControlsId**
> RestDataResponseOfControlPointEntityArray getControlPointsByAllControlsId()


### Example

```typescript
import {
    AllControlsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AllControlsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getControlPointsByAllControlsId(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfControlPointEntityArray**

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

# **updateAllControls**
> RestDataResponseOfAllControlsEntity updateAllControls(updateAllControlsPayload)


### Example

```typescript
import {
    AllControlsApi,
    Configuration,
    UpdateAllControlsPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new AllControlsApi(configuration);

let id: string; // (default to undefined)
let updateAllControlsPayload: UpdateAllControlsPayload; //

const { status, data } = await apiInstance.updateAllControls(
    id,
    updateAllControlsPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateAllControlsPayload** | **UpdateAllControlsPayload**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfAllControlsEntity**

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

