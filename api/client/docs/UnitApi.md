# UnitApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createUnit**](#createunit) | **POST** /unit | createUnit|
|[**deleteUnit**](#deleteunit) | **DELETE** /unit/{id} | deleteUnit|
|[**getTeamsByUnitId**](#getteamsbyunitid) | **GET** /unit/{id}/teams | getTeamsByUnitId|
|[**getUnitById**](#getunitbyid) | **GET** /unit/{id} | getUnitById|
|[**getUnitsByEventId**](#getunitsbyeventid) | **GET** /unit | getUnitsByEventId|
|[**searchUnits**](#searchunits) | **GET** /unit/search | searchUnits|
|[**updateUnit**](#updateunit) | **PUT** /unit/{id} | updateUnit|

# **createUnit**
> RestDataResponseOfUnitEntity createUnit(createUnitPayload)


### Example

```typescript
import {
    UnitApi,
    Configuration,
    CreateUnitPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new UnitApi(configuration);

let createUnitPayload: CreateUnitPayload; //

const { status, data } = await apiInstance.createUnit(
    createUnitPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createUnitPayload** | **CreateUnitPayload**|  | |


### Return type

**RestDataResponseOfUnitEntity**

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

# **deleteUnit**
> RestResponse deleteUnit()


### Example

```typescript
import {
    UnitApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UnitApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteUnit(
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

# **getTeamsByUnitId**
> RestDataResponseOfTeamEntityArray getTeamsByUnitId()


### Example

```typescript
import {
    UnitApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UnitApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getTeamsByUnitId(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfTeamEntityArray**

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

# **getUnitById**
> RestDataResponseOfUnitEntity getUnitById()


### Example

```typescript
import {
    UnitApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UnitApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getUnitById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfUnitEntity**

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

# **getUnitsByEventId**
> RestDataResponseOfUnitEntityArray getUnitsByEventId()


### Example

```typescript
import {
    UnitApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UnitApi(configuration);

let event: string; // (default to undefined)
let page: number; // (optional) (default to 1)
let pageSize: number; // (optional) (default to 10)

const { status, data } = await apiInstance.getUnitsByEventId(
    event,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **event** | [**string**] |  | defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to 1|
| **pageSize** | [**number**] |  | (optional) defaults to 10|


### Return type

**RestDataResponseOfUnitEntityArray**

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

# **searchUnits**
> RestDataResponseOfUnitEntityArray searchUnits()


### Example

```typescript
import {
    UnitApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UnitApi(configuration);

let eventId: string; // (default to undefined)
let name: string; // (default to undefined)
let page: number; // (optional) (default to 1)
let pageSize: number; // (optional) (default to 10)

const { status, data } = await apiInstance.searchUnits(
    eventId,
    name,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eventId** | [**string**] |  | defaults to undefined|
| **name** | [**string**] |  | defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to 1|
| **pageSize** | [**number**] |  | (optional) defaults to 10|


### Return type

**RestDataResponseOfUnitEntityArray**

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

# **updateUnit**
> RestDataResponseOfUnitEntity updateUnit(updateUnitPayload)


### Example

```typescript
import {
    UnitApi,
    Configuration,
    UpdateUnitPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new UnitApi(configuration);

let id: string; // (default to undefined)
let updateUnitPayload: UpdateUnitPayload; //

const { status, data } = await apiInstance.updateUnit(
    id,
    updateUnitPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateUnitPayload** | **UpdateUnitPayload**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfUnitEntity**

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

