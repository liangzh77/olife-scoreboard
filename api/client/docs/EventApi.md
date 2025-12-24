# EventApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createEvent**](#createevent) | **POST** /event | createEvent|
|[**deleteEvent**](#deleteevent) | **DELETE** /event/{id} | deleteEvent|
|[**getAllEvents**](#getallevents) | **GET** /event | getAllEvents|
|[**getEventById**](#geteventbyid) | **GET** /event/{id} | getEventById|
|[**updateEvent**](#updateevent) | **PUT** /event/{id} | updateEvent|

# **createEvent**
> RestDataResponseOfEventEntity createEvent(createEventPayload)


### Example

```typescript
import {
    EventApi,
    Configuration,
    CreateEventPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new EventApi(configuration);

let createEventPayload: CreateEventPayload; //

const { status, data } = await apiInstance.createEvent(
    createEventPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createEventPayload** | **CreateEventPayload**|  | |


### Return type

**RestDataResponseOfEventEntity**

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

# **deleteEvent**
> RestResponse deleteEvent()


### Example

```typescript
import {
    EventApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EventApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteEvent(
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

# **getAllEvents**
> RestDataResponseOfEventEntityArray getAllEvents()


### Example

```typescript
import {
    EventApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EventApi(configuration);

const { status, data } = await apiInstance.getAllEvents();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**RestDataResponseOfEventEntityArray**

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

# **getEventById**
> RestDataResponseOfEventEntity getEventById()


### Example

```typescript
import {
    EventApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EventApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getEventById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfEventEntity**

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

# **updateEvent**
> RestDataResponseOfEventEntity updateEvent(updateEventPayload)


### Example

```typescript
import {
    EventApi,
    Configuration,
    UpdateEventPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new EventApi(configuration);

let id: string; // (default to undefined)
let updateEventPayload: UpdateEventPayload; //

const { status, data } = await apiInstance.updateEvent(
    id,
    updateEventPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateEventPayload** | **UpdateEventPayload**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfEventEntity**

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

