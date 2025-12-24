# RegistrationApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createRegistration**](#createregistration) | **POST** /registration | createRegistration|
|[**deleteRegistration**](#deleteregistration) | **DELETE** /registration/{id} | deleteRegistration|
|[**getCompetitorRegistrationInfo**](#getcompetitorregistrationinfo) | **GET** /registration/competitor/{competitorId} | getCompetitorRegistrationInfo|
|[**getCompetitorsByClassId**](#getcompetitorsbyclassid) | **GET** /registration/class/{classId}/competitors | getCompetitorsByClassId|
|[**getRegistrationById**](#getregistrationbyid) | **GET** /registration/{id} | getRegistrationById|
|[**getRegistrationsByEventId**](#getregistrationsbyeventid) | **GET** /registration | getRegistrationsByEventId|
|[**updateRegistration**](#updateregistration) | **PUT** /registration/{id} | updateRegistration|

# **createRegistration**
> RestDataResponseOfRegistrationEntity createRegistration(createRegistrationPayload)


### Example

```typescript
import {
    RegistrationApi,
    Configuration,
    CreateRegistrationPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new RegistrationApi(configuration);

let createRegistrationPayload: CreateRegistrationPayload; //

const { status, data } = await apiInstance.createRegistration(
    createRegistrationPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createRegistrationPayload** | **CreateRegistrationPayload**|  | |


### Return type

**RestDataResponseOfRegistrationEntity**

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

# **deleteRegistration**
> RestResponse deleteRegistration()


### Example

```typescript
import {
    RegistrationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RegistrationApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteRegistration(
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

# **getCompetitorRegistrationInfo**
> RestDataResponseOfCompetitorBriefWithClassEntity getCompetitorRegistrationInfo()


### Example

```typescript
import {
    RegistrationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RegistrationApi(configuration);

let competitorId: string; // (default to undefined)

const { status, data } = await apiInstance.getCompetitorRegistrationInfo(
    competitorId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **competitorId** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfCompetitorBriefWithClassEntity**

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

# **getCompetitorsByClassId**
> RestDataResponseOfCompetitorBriefWithClassEntityArray getCompetitorsByClassId()


### Example

```typescript
import {
    RegistrationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RegistrationApi(configuration);

let classId: string; // (default to undefined)
let registered: string; // (default to undefined)

const { status, data } = await apiInstance.getCompetitorsByClassId(
    classId,
    registered
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **classId** | [**string**] |  | defaults to undefined|
| **registered** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfCompetitorBriefWithClassEntityArray**

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

# **getRegistrationById**
> RestDataResponseOfRegistrationEntity getRegistrationById()


### Example

```typescript
import {
    RegistrationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RegistrationApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getRegistrationById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfRegistrationEntity**

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

# **getRegistrationsByEventId**
> RestDataResponseOfRegistrationEntityArray getRegistrationsByEventId()


### Example

```typescript
import {
    RegistrationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RegistrationApi(configuration);

let event: string; // (default to undefined)
let competitor: string; // (default to undefined)
let _class: string; // (default to undefined)

const { status, data } = await apiInstance.getRegistrationsByEventId(
    event,
    competitor,
    _class
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **event** | [**string**] |  | defaults to undefined|
| **competitor** | [**string**] |  | defaults to undefined|
| **_class** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfRegistrationEntityArray**

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

# **updateRegistration**
> RestDataResponseOfRegistrationEntity updateRegistration(updateRegistrationPayload)


### Example

```typescript
import {
    RegistrationApi,
    Configuration,
    UpdateRegistrationPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new RegistrationApi(configuration);

let id: string; // (default to undefined)
let updateRegistrationPayload: UpdateRegistrationPayload; //

const { status, data } = await apiInstance.updateRegistration(
    id,
    updateRegistrationPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateRegistrationPayload** | **UpdateRegistrationPayload**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfRegistrationEntity**

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

