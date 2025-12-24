# TeamResultGroupApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createGroup**](#creategroup) | **POST** /team-result-group | createTeamResultGroup|
|[**createItem**](#createitem) | **POST** /team-result-group/{groupId}/items | createTeamResultGroupItem|
|[**deleteGroup**](#deletegroup) | **DELETE** /team-result-group/{id} | deleteTeamResultGroup|
|[**deleteItem**](#deleteitem) | **DELETE** /team-result-group/items/{id} | deleteTeamResultGroupItem|
|[**getGroupById**](#getgroupbyid) | **GET** /team-result-group/{id} | getTeamResultGroupById|
|[**getGroupsByStageId**](#getgroupsbystageid) | **GET** /team-result-group | getTeamResultGroupsByStageId|
|[**updateGroup**](#updategroup) | **PUT** /team-result-group/{id} | updateTeamResultGroup|

# **createGroup**
> RestDataResponseOfTeamResultGroupEntity createGroup(createTeamResultGroupPayload)


### Example

```typescript
import {
    TeamResultGroupApi,
    Configuration,
    CreateTeamResultGroupPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new TeamResultGroupApi(configuration);

let createTeamResultGroupPayload: CreateTeamResultGroupPayload; //

const { status, data } = await apiInstance.createGroup(
    createTeamResultGroupPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTeamResultGroupPayload** | **CreateTeamResultGroupPayload**|  | |


### Return type

**RestDataResponseOfTeamResultGroupEntity**

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

# **createItem**
> RestDataResponseOfTeamResultGroupItemEntity createItem(createTeamResultGroupItemPayload)


### Example

```typescript
import {
    TeamResultGroupApi,
    Configuration,
    CreateTeamResultGroupItemPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new TeamResultGroupApi(configuration);

let groupId: string; // (default to undefined)
let createTeamResultGroupItemPayload: CreateTeamResultGroupItemPayload; //

const { status, data } = await apiInstance.createItem(
    groupId,
    createTeamResultGroupItemPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTeamResultGroupItemPayload** | **CreateTeamResultGroupItemPayload**|  | |
| **groupId** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfTeamResultGroupItemEntity**

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

# **deleteGroup**
> RestResponse deleteGroup()


### Example

```typescript
import {
    TeamResultGroupApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TeamResultGroupApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteGroup(
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

# **deleteItem**
> RestResponse deleteItem()


### Example

```typescript
import {
    TeamResultGroupApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TeamResultGroupApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteItem(
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

# **getGroupById**
> RestDataResponseOfTeamResultGroupEntity getGroupById()


### Example

```typescript
import {
    TeamResultGroupApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TeamResultGroupApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getGroupById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfTeamResultGroupEntity**

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

# **getGroupsByStageId**
> RestDataResponseOfTeamResultGroupEntityArray getGroupsByStageId()


### Example

```typescript
import {
    TeamResultGroupApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TeamResultGroupApi(configuration);

let stageId: string; // (default to undefined)

const { status, data } = await apiInstance.getGroupsByStageId(
    stageId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **stageId** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfTeamResultGroupEntityArray**

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

# **updateGroup**
> RestDataResponseOfTeamResultGroupEntity updateGroup(updateTeamResultGroupPayload)


### Example

```typescript
import {
    TeamResultGroupApi,
    Configuration,
    UpdateTeamResultGroupPayload
} from './api';

const configuration = new Configuration();
const apiInstance = new TeamResultGroupApi(configuration);

let id: string; // (default to undefined)
let updateTeamResultGroupPayload: UpdateTeamResultGroupPayload; //

const { status, data } = await apiInstance.updateGroup(
    id,
    updateTeamResultGroupPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateTeamResultGroupPayload** | **UpdateTeamResultGroupPayload**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RestDataResponseOfTeamResultGroupEntity**

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

