# ControlPointApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**bindControlStation**](#bindcontrolstation) | **POST** /controlpoint/{id}/bindstation | bindControlStation|
|[**createControlPoint**](#createcontrolpoint) | **POST** /controlpoint | createControlPoint|
|[**deleteControlPoint**](#deletecontrolpoint) | **DELETE** /controlpoint/{id} | deleteControlPoint|
|[**getBindControlStation**](#getbindcontrolstation) | **GET** /controlpoint/{id}/bindstation | getBindControlStation|
|[**getControlPointById**](#getcontrolpointbyid) | **GET** /controlpoint/{id} | getControlPointById|
|[**unbindControlStation**](#unbindcontrolstation) | **DELETE** /controlpoint/{id}/bindstation | unbindControlStation|
|[**updateControlPoint**](#updatecontrolpoint) | **PUT** /controlpoint/{id} | updateControlPoint|

# **bindControlStation**
> RestDataResponseOfControlBindingEntity bindControlStation(bindControlStationPayload)


### Example

```typescript
import {
    ControlPointApi,
    Configuration,
    BindControlStationPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new ControlPointApi(configuration);

let id: string; // (default to undefined)
let bindControlStationPayload: BindControlStationPayload; //

const { status, data } = await apiInstance.bindControlStation(
    id,
    bindControlStationPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bindControlStationPayload** | **BindControlStationPayload**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfControlBindingEntity**

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

# **createControlPoint**
> RestDataResponseOfControlPointEntity createControlPoint(createControlPointPayload)


### Example

```typescript
import {
    ControlPointApi,
    Configuration,
    CreateControlPointPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new ControlPointApi(configuration);

let createControlPointPayload: CreateControlPointPayload; //

const { status, data } = await apiInstance.createControlPoint(
    createControlPointPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createControlPointPayload** | **CreateControlPointPayload**|  | |


### Return type

**RestDataResponseOfControlPointEntity**

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

# **deleteControlPoint**
> RestResponse deleteControlPoint()


### Example

```typescript
import {
    ControlPointApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ControlPointApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteControlPoint(
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

# **getBindControlStation**
> RestDataResponseOfControlStationEntityArray getBindControlStation()


### Example

```typescript
import {
    ControlPointApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ControlPointApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getBindControlStation(
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

# **getControlPointById**
> RestDataResponseOfControlPointEntity getControlPointById()


### Example

```typescript
import {
    ControlPointApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ControlPointApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getControlPointById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfControlPointEntity**

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

# **unbindControlStation**
> RestResponse unbindControlStation(unbindControlStationPayload)


### Example

```typescript
import {
    ControlPointApi,
    Configuration,
    UnbindControlStationPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new ControlPointApi(configuration);

let id: string; // (default to undefined)
let unbindControlStationPayload: UnbindControlStationPayload; //

const { status, data } = await apiInstance.unbindControlStation(
    id,
    unbindControlStationPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **unbindControlStationPayload** | **UnbindControlStationPayload**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestResponse**

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

# **updateControlPoint**
> RestDataResponseOfControlPointEntity updateControlPoint(updateControlPointPayload)


### Example

```typescript
import {
    ControlPointApi,
    Configuration,
    UpdateControlPointPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new ControlPointApi(configuration);

let id: string; // (default to undefined)
let updateControlPointPayload: UpdateControlPointPayload; //

const { status, data } = await apiInstance.updateControlPoint(
    id,
    updateControlPointPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateControlPointPayload** | **UpdateControlPointPayload**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfControlPointEntity**

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

