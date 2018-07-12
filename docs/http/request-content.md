### 一个请求中都包含了什么？
-------

### 请求目综合信息，以下图为例 General
![request-general](./images/request-general.png)

| Request URL | |
|:--- |:---|
| 字段说明| 请求地址|
| 默认值| 无 |
| 数据类型| String |

| Request Method | |
|:--- |:---|
| 字段说明| 请求类型|
| 默认值| GET |
| 数据类型| GET,POST,PUT,DELETE,HEAD,CONNECT,OPTIONS,TRACE,PATCH  |
| 备注|  GET=获取，POST=提价，PUT=更新，DELETE=删除，HEAD=请求资源头，CONNECT=链接，OPTIONS=获取资源支持的请求，TRACE=测试，PATCH=修改部分，详情参考[后端Api架构设计的一些见解](./api-server-architecture.md) |

| Status Code | |
|:--- |:---|
| 字段说明| 请求状态码|
| 默认值| 无 |
| 数据类型| Number |
| 备注| [你和服务器的交往日常](./response-status-codes.md) |



| Remote Address | |
|:--- |:---|
| 字段说明| 请求服务器的IP和端口|
| 默认值| 无 |
| 数据类型| String |

| Referrer Policy | |
|:--- |:---|
| 字段说明| 监管哪些访问来源信息，应该被包含在生成的请求当中。|
| 默认值| 无 |
| 数据类型| String |
| 备注|  |
