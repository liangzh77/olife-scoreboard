# BibApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createBib**](#createbib) | **POST** /bib | createBib|
|[**deleteBib**](#deletebib) | **DELETE** /bib/{id} | deleteBib|
|[**getAvailableBibs**](#getavailablebibs) | **GET** /bib/available | getAvailableBibs|
|[**getBibById**](#getbibbyid) | **GET** /bib/{id} | getBibById|
|[**getBibs**](#getbibs) | **GET** /bib | getBibs|
|[**updateBib**](#updatebib) | **PUT** /bib/{id} | updateBib|

# **createBib**
> RestDataResponseOfBibEntity createBib(createBibPayload)


### Example

```typescript
import {
    BibApi,
    Configuration,
    CreateBibPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new BibApi(configuration);

let createBibPayload: CreateBibPayload; //

const { status, data } = await apiInstance.createBib(
    createBibPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createBibPayload** | **CreateBibPayload**|  | |


### Return type

**RestDataResponseOfBibEntity**

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

# **deleteBib**
> RestResponse deleteBib()


### Example

```typescript
import {
    BibApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BibApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteBib(
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

# **getAvailableBibs**
> RestDataResponseOfBibEntityArray1 getAvailableBibs()


### Example

```typescript
import {
    BibApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BibApi(configuration);

let event: string; // (default to undefined)

const { status, data } = await apiInstance.getAvailableBibs(
    event
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **event** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfBibEntityArray1**

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

# **getBibById**
> RestDataResponseOfBibEntity getBibById()


### Example

```typescript
import {
    BibApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BibApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getBibById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfBibEntity**

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

# **getBibs**
> RestDataResponseOfBibEntityArray getBibs()


### Example

```typescript
import {
    BibApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BibApi(configuration);

let event: string; // (optional) (default to undefined)
let competitor: string; // (optional) (default to undefined)
let page: number; // (optional) (default to 1)
let pageSize: number; // (optional) (default to 10)

const { status, data } = await apiInstance.getBibs(
    event,
    competitor,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **event** | [**string**] |  | (optional) defaults to undefined|
| **competitor** | [**string**] |  | (optional) defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to 1|
| **pageSize** | [**number**] |  | (optional) defaults to 10|


### Return type

**RestDataResponseOfBibEntityArray**

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

# **updateBib**
> RestDataResponseOfBibEntity updateBib(updateBibPayload)


### Example

```typescript
import {
    BibApi,
    Configuration,
    UpdateBibPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new BibApi(configuration);

let id: string; // (default to undefined)
let updateBibPayload: UpdateBibPayload; //

const { status, data } = await apiInstance.updateBib(
    id,
    updateBibPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateBibPayload** | **UpdateBibPayload**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfBibEntity**

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

