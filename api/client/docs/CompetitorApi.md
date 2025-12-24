# CompetitorApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**batchCreateCompetitor**](#batchcreatecompetitor) | **POST** /competitor/batch | batchCreateCompetitor|
|[**createCompetitor**](#createcompetitor) | **POST** /competitor | createCompetitor|
|[**deleteCompetitor**](#deletecompetitor) | **DELETE** /competitor/{id} | deleteCompetitor|
|[**getCompetitorById**](#getcompetitorbyid) | **GET** /competitor/{id} | getCompetitorById|
|[**getCompetitorsByEventId**](#getcompetitorsbyeventid) | **GET** /competitor | getCompetitorsByEventId|
|[**searchCompetitors**](#searchcompetitors) | **GET** /competitor/search | searchCompetitors|
|[**updateCompetitor**](#updatecompetitor) | **PUT** /competitor/{id} | updateCompetitor|

# **batchCreateCompetitor**
> RestDataResponseOfBatchCreateCompetitorResult batchCreateCompetitor(batchCreateCompetitorPayload)


### Example

```typescript
import {
    CompetitorApi,
    Configuration,
    BatchCreateCompetitorPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new CompetitorApi(configuration);

let batchCreateCompetitorPayload: BatchCreateCompetitorPayload; //

const { status, data } = await apiInstance.batchCreateCompetitor(
    batchCreateCompetitorPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **batchCreateCompetitorPayload** | **BatchCreateCompetitorPayload**|  | |


### Return type

**RestDataResponseOfBatchCreateCompetitorResult**

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

# **createCompetitor**
> RestDataResponseOfCompetitorEntity createCompetitor(createCompetitorPayload)


### Example

```typescript
import {
    CompetitorApi,
    Configuration,
    CreateCompetitorPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new CompetitorApi(configuration);

let createCompetitorPayload: CreateCompetitorPayload; //

const { status, data } = await apiInstance.createCompetitor(
    createCompetitorPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCompetitorPayload** | **CreateCompetitorPayload**|  | |


### Return type

**RestDataResponseOfCompetitorEntity**

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

# **deleteCompetitor**
> RestResponse deleteCompetitor()


### Example

```typescript
import {
    CompetitorApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CompetitorApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteCompetitor(
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

# **getCompetitorById**
> RestDataResponseOfCompetitorExtEntity getCompetitorById()


### Example

```typescript
import {
    CompetitorApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CompetitorApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getCompetitorById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfCompetitorExtEntity**

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

# **getCompetitorsByEventId**
> RestDataResponseOfCompetitorExtEntityArray getCompetitorsByEventId()


### Example

```typescript
import {
    CompetitorApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CompetitorApi(configuration);

let event: string; // (default to undefined)
let page: number; // (optional) (default to undefined)
let pageSize: number; // (optional) (default to 10)

const { status, data } = await apiInstance.getCompetitorsByEventId(
    event,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **event** | [**string**] |  | defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to undefined|
| **pageSize** | [**number**] |  | (optional) defaults to 10|


### Return type

**RestDataResponseOfCompetitorExtEntityArray**

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

# **searchCompetitors**
> RestDataResponseOfCompetitorExtEntityArray searchCompetitors()


### Example

```typescript
import {
    CompetitorApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CompetitorApi(configuration);

let eventId: string; // (default to undefined)
let cardNbr: string; // (optional) (default to undefined)
let name: string; // (optional) (default to undefined)
let bibNumber: string; // (optional) (default to undefined)
let teamName: string; // (optional) (default to undefined)
let page: number; // (optional) (default to 1)
let pageSize: number; // (optional) (default to 10)

const { status, data } = await apiInstance.searchCompetitors(
    eventId,
    cardNbr,
    name,
    bibNumber,
    teamName,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eventId** | [**string**] |  | defaults to undefined|
| **cardNbr** | [**string**] |  | (optional) defaults to undefined|
| **name** | [**string**] |  | (optional) defaults to undefined|
| **bibNumber** | [**string**] |  | (optional) defaults to undefined|
| **teamName** | [**string**] |  | (optional) defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to 1|
| **pageSize** | [**number**] |  | (optional) defaults to 10|


### Return type

**RestDataResponseOfCompetitorExtEntityArray**

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

# **updateCompetitor**
> RestDataResponseOfCompetitorExtEntity updateCompetitor(updateCompetitorPayload)


### Example

```typescript
import {
    CompetitorApi,
    Configuration,
    UpdateCompetitorPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new CompetitorApi(configuration);

let id: string; // (default to undefined)
let updateCompetitorPayload: UpdateCompetitorPayload; //

const { status, data } = await apiInstance.updateCompetitor(
    id,
    updateCompetitorPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateCompetitorPayload** | **UpdateCompetitorPayload**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfCompetitorExtEntity**

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

