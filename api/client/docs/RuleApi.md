# RuleApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createRule**](#createrule) | **POST** /rule | createRule|
|[**deleteRule**](#deleterule) | **DELETE** /rule/{id} | deleteRule|
|[**getAllRules**](#getallrules) | **GET** /rule | getAllRules|
|[**getRuleById**](#getrulebyid) | **GET** /rule/{id} | getRuleById|
|[**updateRule**](#updaterule) | **PUT** /rule/{id} | updateRule|

# **createRule**
> RestDataResponseOfRuleEntity createRule(createRulePayload)


### Example

```typescript
import {
    RuleApi,
    Configuration,
    CreateRulePayload
} from './api';

const configuration = new Configuration();
const apiInstance = new RuleApi(configuration);

let createRulePayload: CreateRulePayload; //

const { status, data } = await apiInstance.createRule(
    createRulePayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createRulePayload** | **CreateRulePayload**|  | |


### Return type

**RestDataResponseOfRuleEntity**

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

# **deleteRule**
> RestResponse deleteRule()


### Example

```typescript
import {
    RuleApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RuleApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteRule(
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

# **getAllRules**
> RestDataResponseOfRuleEntityArray getAllRules()


### Example

```typescript
import {
    RuleApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RuleApi(configuration);

const { status, data } = await apiInstance.getAllRules();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**RestDataResponseOfRuleEntityArray**

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

# **getRuleById**
> RestDataResponseOfRuleEntity getRuleById()


### Example

```typescript
import {
    RuleApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RuleApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getRuleById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfRuleEntity**

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

# **updateRule**
> RestDataResponseOfRuleEntity updateRule(updateRulePayload)


### Example

```typescript
import {
    RuleApi,
    Configuration,
    UpdateRulePayload
} from './api';

const configuration = new Configuration();
const apiInstance = new RuleApi(configuration);

let id: string; // (default to undefined)
let updateRulePayload: UpdateRulePayload; //

const { status, data } = await apiInstance.updateRule(
    id,
    updateRulePayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateRulePayload** | **UpdateRulePayload**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfRuleEntity**

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

