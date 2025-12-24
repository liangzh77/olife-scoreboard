# RouteApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createRoute**](#createroute) | **POST** /route | createRoute|
|[**deleteControlPoints**](#deletecontrolpoints) | **DELETE** /route/{id}/controlpoints | deleteControlPoints|
|[**deleteRoute**](#deleteroute) | **DELETE** /route/{id} | deleteRoute|
|[**getControlPoints**](#getcontrolpoints) | **GET** /route/{id}/controlpoints | getControlPoints|
|[**getRouteById**](#getroutebyid) | **GET** /route/{id} | getRouteById|
|[**getRoutesByTerrainId**](#getroutesbyterrainid) | **GET** /route | getRoutesByTerrainId|
|[**insertControlPoints**](#insertcontrolpoints) | **POST** /route/{id}/controlpoints | insertControlPoints|
|[**moveControlPoint**](#movecontrolpoint) | **POST** /route/{id}/controlpoint/move | moveControlPoint|
|[**updateRoute**](#updateroute) | **PUT** /route/{id} | updateRoute|

# **createRoute**
> RestDataResponseOfRouteEntity createRoute(createRoutePayload)


### Example

```typescript
import {
    RouteApi,
    Configuration,
    CreateRoutePayload
} from './api';

const configuration = new Configuration();
const apiInstance = new RouteApi(configuration);

let createRoutePayload: CreateRoutePayload; //

const { status, data } = await apiInstance.createRoute(
    createRoutePayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createRoutePayload** | **CreateRoutePayload**|  | |


### Return type

**RestDataResponseOfRouteEntity**

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

# **deleteControlPoints**
> RestResponse deleteControlPoints(deleteRouteControlPointsPayload)


### Example

```typescript
import {
    RouteApi,
    Configuration,
    DeleteRouteControlPointsPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new RouteApi(configuration);

let id: string; // (default to undefined)
let deleteRouteControlPointsPayload: DeleteRouteControlPointsPayload; //

const { status, data } = await apiInstance.deleteControlPoints(
    id,
    deleteRouteControlPointsPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteRouteControlPointsPayload** | **DeleteRouteControlPointsPayload**|  | |
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

# **deleteRoute**
> RestResponse deleteRoute()


### Example

```typescript
import {
    RouteApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RouteApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteRoute(
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

# **getControlPoints**
> RestDataResponseOfRouteControlPointEntityArray getControlPoints()


### Example

```typescript
import {
    RouteApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RouteApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getControlPoints(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfRouteControlPointEntityArray**

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

# **getRouteById**
> RestDataResponseOfRouteEntity getRouteById()


### Example

```typescript
import {
    RouteApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RouteApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getRouteById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfRouteEntity**

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

# **getRoutesByTerrainId**
> RestDataResponseOfRouteEntityArray getRoutesByTerrainId()


### Example

```typescript
import {
    RouteApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RouteApi(configuration);

let terrain: string; // (default to undefined)

const { status, data } = await apiInstance.getRoutesByTerrainId(
    terrain
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **terrain** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfRouteEntityArray**

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

# **insertControlPoints**
> RestDataResponseOfRouteControlPointEntityArray insertControlPoints(insertRouteControlPointsPayload)


### Example

```typescript
import {
    RouteApi,
    Configuration,
    InsertRouteControlPointsPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new RouteApi(configuration);

let id: string; // (default to undefined)
let insertRouteControlPointsPayload: InsertRouteControlPointsPayload; //

const { status, data } = await apiInstance.insertControlPoints(
    id,
    insertRouteControlPointsPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **insertRouteControlPointsPayload** | **InsertRouteControlPointsPayload**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfRouteControlPointEntityArray**

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

# **moveControlPoint**
> RestDataResponseOfRouteControlPointEntityArray moveControlPoint(moveRouteControlPointPayload)


### Example

```typescript
import {
    RouteApi,
    Configuration,
    MoveRouteControlPointPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new RouteApi(configuration);

let id: string; // (default to undefined)
let moveRouteControlPointPayload: MoveRouteControlPointPayload; //

const { status, data } = await apiInstance.moveControlPoint(
    id,
    moveRouteControlPointPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **moveRouteControlPointPayload** | **MoveRouteControlPointPayload**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfRouteControlPointEntityArray**

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

# **updateRoute**
> RestDataResponseOfRouteEntity updateRoute(updateRoutePayload)


### Example

```typescript
import {
    RouteApi,
    Configuration,
    UpdateRoutePayload
} from './api';

const configuration = new Configuration();
const apiInstance = new RouteApi(configuration);

let id: string; // (default to undefined)
let updateRoutePayload: UpdateRoutePayload; //

const { status, data } = await apiInstance.updateRoute(
    id,
    updateRoutePayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateRoutePayload** | **UpdateRoutePayload**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfRouteEntity**

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

