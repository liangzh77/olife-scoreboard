# FingerCardApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createFingerCard**](#createfingercard) | **POST** /finger-card | createFingerCard|
|[**deleteFingerCard**](#deletefingercard) | **DELETE** /finger-card/{cardNbr} | deleteFingerCard|
|[**getFingerCardById**](#getfingercardbyid) | **GET** /finger-card/{cardNbr} | getFingerCardById|
|[**getFingerCards**](#getfingercards) | **GET** /finger-card | getFingerCards|
|[**getFingerCardsAvailable**](#getfingercardsavailable) | **GET** /finger-card/available | getFingerCardsAvailable|
|[**updateFingerCard**](#updatefingercard) | **PUT** /finger-card/{cardNbr} | updateFingerCard|

# **createFingerCard**
> RestDataResponseOfFingerCardEntity createFingerCard(createFingerCardPayload)


### Example

```typescript
import {
    FingerCardApi,
    Configuration,
    CreateFingerCardPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new FingerCardApi(configuration);

let createFingerCardPayload: CreateFingerCardPayload; //

const { status, data } = await apiInstance.createFingerCard(
    createFingerCardPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createFingerCardPayload** | **CreateFingerCardPayload**|  | |


### Return type

**RestDataResponseOfFingerCardEntity**

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

# **deleteFingerCard**
> RestResponse deleteFingerCard()


### Example

```typescript
import {
    FingerCardApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FingerCardApi(configuration);

let event: string; // (default to undefined)
let cardNbr: string; // (default to undefined)

const { status, data } = await apiInstance.deleteFingerCard(
    event,
    cardNbr
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **event** | [**string**] |  | defaults to undefined|
| **cardNbr** | [**string**] |  | defaults to undefined|


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

# **getFingerCardById**
> RestDataResponseOfFingerCardEntity getFingerCardById()


### Example

```typescript
import {
    FingerCardApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FingerCardApi(configuration);

let event: string; // (default to undefined)
let cardNbr: string; // (default to undefined)

const { status, data } = await apiInstance.getFingerCardById(
    event,
    cardNbr
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **event** | [**string**] |  | defaults to undefined|
| **cardNbr** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfFingerCardEntity**

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

# **getFingerCards**
> RestDataResponseOfFingerCardEntityArray getFingerCards()


### Example

```typescript
import {
    FingerCardApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FingerCardApi(configuration);

let event: string; // (default to undefined)
let cardnbr: string; // (default to undefined)
let competitor: string; // (default to undefined)

const { status, data } = await apiInstance.getFingerCards(
    event,
    cardnbr,
    competitor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **event** | [**string**] |  | defaults to undefined|
| **cardnbr** | [**string**] |  | defaults to undefined|
| **competitor** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfFingerCardEntityArray**

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

# **getFingerCardsAvailable**
> RestDataResponseOfFingerCardEntityArray getFingerCardsAvailable()


### Example

```typescript
import {
    FingerCardApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FingerCardApi(configuration);

let event: string; // (default to undefined)

const { status, data } = await apiInstance.getFingerCardsAvailable(
    event
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **event** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfFingerCardEntityArray**

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

# **updateFingerCard**
> RestDataResponseOfFingerCardEntity updateFingerCard(updateFingerCardPayload)


### Example

```typescript
import {
    FingerCardApi,
    Configuration,
    UpdateFingerCardPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new FingerCardApi(configuration);

let cardNbr: string; // (default to undefined)
let updateFingerCardPayload: UpdateFingerCardPayload; //

const { status, data } = await apiInstance.updateFingerCard(
    cardNbr,
    updateFingerCardPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateFingerCardPayload** | **UpdateFingerCardPayload**|  | |
| **cardNbr** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfFingerCardEntity**

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

