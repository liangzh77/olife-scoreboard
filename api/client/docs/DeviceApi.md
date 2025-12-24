# DeviceApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createControlStation**](#createcontrolstation) | **POST** /device/control-station | createControlStation|
|[**deleteControlStation**](#deletecontrolstation) | **DELETE** /device/control-station/{id} | deleteControlStation|
|[**getAllControlStations**](#getallcontrolstations) | **GET** /device/control-station | getAllControlStations|
|[**getControlStationById**](#getcontrolstationbyid) | **GET** /device/control-station/{id} | getControlStationById|
|[**updateControlStation**](#updatecontrolstation) | **PUT** /device/control-station/{id} | updateControlStation|

# **createControlStation**
> RestDataResponseOfControlStationEntity createControlStation(createControlStationPayload)


### Example

```typescript
import {
    DeviceApi,
    Configuration,
    CreateControlStationPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new DeviceApi(configuration);

let createControlStationPayload: CreateControlStationPayload; //

const { status, data } = await apiInstance.createControlStation(
    createControlStationPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createControlStationPayload** | **CreateControlStationPayload**|  | |


### Return type

**RestDataResponseOfControlStationEntity**

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

# **deleteControlStation**
> RestResponse deleteControlStation()


### Example

```typescript
import {
    DeviceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DeviceApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteControlStation(
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

# **getAllControlStations**
> RestDataResponseOfControlStationEntityArray getAllControlStations()


### Example

```typescript
import {
    DeviceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DeviceApi(configuration);

let status: string; // (default to undefined)

const { status, data } = await apiInstance.getAllControlStations(
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **status** | [**string**] |  | defaults to undefined|


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

# **getControlStationById**
> RestDataResponseOfControlStationEntity getControlStationById()


### Example

```typescript
import {
    DeviceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DeviceApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getControlStationById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfControlStationEntity**

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

# **updateControlStation**
> RestDataResponseOfControlStationEntity updateControlStation(updateControlStationPayload)


### Example

```typescript
import {
    DeviceApi,
    Configuration,
    UpdateControlStationPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new DeviceApi(configuration);

let id: string; // (default to undefined)
let updateControlStationPayload: UpdateControlStationPayload; //

const { status, data } = await apiInstance.updateControlStation(
    id,
    updateControlStationPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateControlStationPayload** | **UpdateControlStationPayload**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfControlStationEntity**

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

