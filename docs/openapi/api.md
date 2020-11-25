---
title: OpenAPI接口

---

# 接口列表

以下接口都默认省略 `OpenAPI` 的应用鉴权参数，请根据文档 [接口签名](./api-sign.md) 实现应用鉴权。任务鉴权会列出参数，表名该接口需要任务鉴权，但不再重复说明任务鉴权算法，请根据文档 [接口签名](./api-sign.md) 实现任务鉴权。

## 部门列表-/department/simple

`GET /department/simple`

**Request Headers:**
- Content-Type: application/json

**Request Parameters:**

`无`

**Request Body:**

`无`

**Response:**

```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "departments": [
            {
                "id": 1,
                "pinyin": "bumen",
                "name": "部门",
                "remark": ""
            },
            {
                "id": 2,
                "pinyin": "zhiliangyanfabu",
                "name": "部门2",
                "remark": ""
            }
        ]
    }
}
```
Field | Type | Comment
--- | --- | ---
code | Number | 状态码：0-成功；其他-失败
msg | String | 错误信息，以 `code` 的值为准
data | Object | 响应结果
data.departments | Array | 部门列表
data.departments.id | Number | 部门ID
data.departments.pingyin | String | 部门名称拼音 
data.departments.name | String | 部门名称 
data.departments.remark | String | 备注信息 


## 部门信息详情-/department/show

`GET /department/show`

**Request Headers:**
- Content-Type: application/json

**Request Parameters:**

| 参数名称 | 是否必须 | 示例 | 备注   |
| :------- | :------- | :--- | :----- |
| id       | 是       | 1    | 部门ID |

**Request Body:**

`无`

**Response:**

```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "department": {
            "id": 1,
            "bu_id": 1,
            "name": "部门",
            "pinyin": "bumen",
            "remark": "",
            "created_by": 1,
            "updated_by": 1,
            "created_at": 1591614072,
            "updated_at": 1591614072,
            "creator": {
                "uid": 1,
                "username": "ethananony",
                "user": "ethananony",
                "email": "ethananony@aliyun.com",
                "department": "网校事业部-互联网研发部-基础架构部-服务治理组"
            },
            "updator": {
                "uid": 1,
                "username": "ethananony",
                "user": "ethananony",
                "email": "ethananony@aliyun.com",
                "department": "网校事业部-互联网研发部-基础架构部-服务治理组"
            },
            "business_unit": {
                "id": 1,
                "name": "网校",
                "remark": "学而思网校",
                "pinyin": "wangxiao"
            }
        }
    }
}
```
Field | Type | Comment
--- | --- | ---
code | Number | 状态码：0-成功；其他-失败
msg | String | 错误信息，以 `code` 的值为准
data | Object | 响应结果
data.department | Object | 部门详情 
data.department.id | Number | 部门ID
data.department.bu_id | Number | 事业部ID 
data.department.name | String | 部门名称 
data.department.pinyin | String | 部门名称拼音 
data.department.remark | String | 备注信息 
data.department.created_by | Number | 部门创建者工号 
data.department.updated_by | Number | 部门信息更新者工号 
data.department.created_at | Number | 创建时间（Unix 时间戳） 
data.department.updated_at | Number | 更新时间（Unix 时间戳） 
data.departments.creator | Object | 创建人详情 
data.departments.creator.uid | Number | 工号 
data.departments.creator.username | String | 姓名 
data.departments.creator.user | String | 英文账号 
data.departments.creator.email | String | 邮箱 
data.departments.creator.department | String | 所属部门名称 
data.departments.updator | Object | 信息更新者详情 
data.departments.updator.uid | Number | 工号 
data.departments.updator.username | String | 姓名 
data.departments.updator.user | String | 英文账号 
data.departments.updator.email | String | 邮箱 
data.departments.updator.department | String | 所属部门名称
data.department.business_unit | Object | 事业部信息 
data.department.business_unit.id | Number | 事业部ID 
data.department.business_unit.name | String | 事业部名称 
data.department.business_unit.remark | String | 事业部备注 
data.department.business_unit.pinyin | String | 事业部拼音 

## 用户详情-/user/profile

`GET /user/profile`

**Request Headers:**

- Content-Type: application/json

**Request Parameters:**

| 参数名称 | 是否必须 | 示例   | 备注 |
| :------- | :------- | :----- | :--- |
| uid      | 是       | 2 | 工号 |

**Request Body:**

`无`

**Response:**

```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "user": {
            "uid": 2,
            "username": "another",
            "pinyin": "another",
            "user": "another",
            "email": "another@foo.bar",
            "department": "部门",
            "phone": "18711124774",
            "wechatid": "",
            "role": 9,
            "created_at": 1594011385,
            "updated_at": 1594011385
        },
        "permission": {
            "role": 9,
            "read": [],
            "write": []
        }
    }
}
```
Field | Type | Comment
--- | --- | ---
code | Number | 状态码：0-成功；其他-失败
msg | String | 错误信息，以 `code` 的值为准
data | Object | 响应结果
data.user | Object | 用户详情 
data.user.uid | Number | 工号 
data.user.username | String | 姓名 
data.user.pinyin | String | 姓名拼音 
data.user.user | String | 英文账号 
data.user.email | String | 邮件地址 
data.user.department | String | 所属部门 
data.user.phone | String | 电话 
data.user.wechatid | String | 微信号 
data.user.role | Number | 权限角色 
data.user.created_at | Number | 创建时间 （Unix 时间戳） 
data.user.updated_at | Number | 更新时间（Unix 时间戳） 
data.permission.role | Number | 用户角色，0-普通用户；9-超管
data.permission.read | Array | 拥有只读权限的任务ID
data.permission.write | Array | 拥有读写权限的任务ID

## 用户手机号更新-/user/updatephone

`PUT /user/updatephone`

**Request Headers:**

- Content-Type: application/json

**Request Parameters:**

`无`

**Request Body:**

```json
{
    "uid": 1, // 用户ID，工号取整
    "phone": "19812345678" // 手机号
}
```

**Response:**

```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "user": {
            "uid": 2,
            "username": "another",
            "pinyin": "another",
            "user": "another",
            "email": "another@foo.bar",
            "department": "部门",
            "phone": "18711124774",
            "wechatid": "",
            "role": 9,
            "created_at": 1594011385,
            "updated_at": 1595909028
        }
    }
}
```

Field | Type | Comment
--- | --- | ---
code | Number | 状态码：0-成功；其他-失败
msg | String | 错误信息，以 `code` 的值为准
data | Object | 响应结果
data.user | Object | 用户信息 
data.user.uid | Number | 工号 
data.user.username | Number | 姓名 
data.user.pinyin | String | 姓名拼音 
data.user.user | String | 英文账号 
data.user.email | String | 邮箱 
data.user.department | String | 所属部门 
data.user.phone | String | 电话号 
data.user.wechatid | String | 微信号 
data.user.role | Number | 用户角色 
data.user.created_at | Number | 创建时间 （Unix 时间戳） 
data.user.updated_at | Number | 更新时间 （Unix 时间戳） 


## 告警任务详情-/alarmtask/show

`GET /alarmtask/show`

**Request Headers:**

- Content-Type: application/json

**Request Parameters:**

| 参数名称  | 是否必须 | 示例                             | 备注       |
| :-------- | :------- | :------------------------------- | :--------- |
| id        | 是       | 105                              | 告警任务ID |
| timestamp | 是       | 1584671913                       | 鉴权时间戳 |
| sign      | 是       | 6e673c6de3a0ed4a9257d4ea4d907fea | 鉴权签名   |

**Request Body:**

`无`

**Response:**

::: details 点击查看响应参数

```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "task": { // 任务详情
            "id": 266, // 任务ID
            "name": "完整示例", // 任务名称
            "pinyin": "rizhizhongxin", // 任务名称拼音
            "token": "d3213fe78d9f81f448141495a274e0c700ad1c25", // 任务token，调用告警接口使用
            "secret": "637ed6563aa17197438cf8cc173f910a7f00bcc4", // 任务secret，调用OpenAPI使用
            "department_id": 1, // 部门ID
            "flag_save_db": 1, // 是否入库：1-入库；0-不入库
            "status": 1, // 状态：1-运行中；0-已停止；2-已暂停
            "created_by": 1, // 创建人
            "created_at": 1595338356, // 创建时间，时间戳（单位秒）
            "updated_at": 1595996005, // 更新时间，时间戳（单位秒）
            "department": { // 部门信息
                "id": 1, // 部门ID
                "name": "部门" // 部门名称
            },
            "creator": { // 创建人信息
                "uid": 1, // UID
                "username": "ethananony", // 姓名
                "email": "ethananony@aliyun.com", // 邮箱
                "department": "部门" // 部门
            },
            "permission": { // 权限信息
                "rw": [ // 读写权限用户列表
                    {
                        "uid": 1,
                        "username": "ethananony",
                        "email": "ethananony@aliyun.com",
                        "department": "部门"
                    }
                ],
                "ro": [ // 只读权限用户列表
                    {
                        "uid": 1,
                        "username": "ethananony",
                        "email": "ethananony@aliyun.com",
                        "department": "部门"
                    }
                ]
            },
            "receiver": { // 通知人配置
                "alarmgroup": [], // 告警组配置
                "channels": { // 通知渠道配置
                    "sms": [ // 短信渠道
                        {
                            "uid": 1,
                            "username": "ethananony",
                            "email": "ethananony@aliyun.com",
                            "department": "部门"
                        }
                    ],
                    "email": [ // 邮件渠道
                        {
                            "uid": 1,
                            "username": "ethananony",
                            "email": "ethananony@aliyun.com",
                            "department": "部门"
                        }
                    ],
                    "phone": [ // 电话渠道
                        {
                            "uid": 1,
                            "username": "ethananony",
                            "email": "ethananony@aliyun.com",
                            "department": "部门"
                        }
                    ],
                    "dingworker": [ // 钉钉工作通知渠道
                        {
                            "uid": 1,
                            "username": "ethananony",
                            "email": "ethananony@aliyun.com",
                            "department": "部门"
                        }
                    ],
                    "dinggroup": [ // 钉钉机器人（钉钉群）渠道
                        {
                            // 机器人的webhook中的token参数
                            "webhook": "1dadee4018526bb63b21d84d6d4e42c96c1e1c4ef218540fdcebf499daef3462",\
                            // 点击机器人加签生产的secret
                            "secret": "SECf5a89f004d59a1d3acc916ed745fc8efaf0ee889d8f09709cba21b07174a8a7b"
                        }
                    ],
                    "yachgroup": [ // 知音楼机器人（知音楼群）渠道
                        {
                            // 机器人的webhook中的token参数
                            "webhook": "1dadee4018526bb63b21d84d6d4e42c96c1e1c4ef218540fdcebf499daef3462",
                            // 机器人的secret
                            "secret": "SECf5a89f004d59a1d3acc916ed745fc8efaf0ee889d8f09709cba21b07174a8a7b"
                        }
                    ],
                    "yachworker": [ // 知音楼工作通知渠道
                        {
                            "uid": 1,
                            "username": "ethananony",
                            "email": "ethananony@aliyun.com",
                            "department": "部门"
                        }
                    ],
                    "webhook": { // webhook渠道
                        "url": "http://foo.domain.com/callback"
                    }
                },
                "dispatch": [ // 分级告警配置
                    {
                        "conditions": [ // 分级条件
                            {
                                "rule": [ // 规则
                                    {
                                        "field": "ctn.key", // 字段
                                        "operator": "eq", // 操作符
                                        "threshold": "123" // 阈值
                                    }
                                ]
                            },
                            {
                                "rule": [
                                    {
                                        "field": "ctn.key2",
                                        "operator": "gt",
                                        "threshold": "1"
                                    }
                                ]
                            }
                        ],
                        "receiver": { // 分级告警的通知人配置
                            "alarmgroup": [],
                            "channels": {
                                "sms": [],
                                "email": [],
                                "phone": [],
                                "dingworker": [
                                    {
                                        "uid": 1,
                                        "username": "ethananony",
                                        "email": "ethananony@aliyun.com",
                                        "department": "部门"
                                    }
                                ],
                                "dinggroup": [],
                                "yachgroup": [
                                    {
                                        "webhook": "eHhpemFUVTA4b1l3255436W9XNlMvZjVuREVDTmMzZmRGdzBsNTN2UHNndG9GZVJKL1FUNllyWkkzK2x3Nw",
                                        "secret": "333332465465467756"
                                    }
                                ],
                                "yachworker": [
                                    {
                                        "uid": 1,
                                        "username": "ethananony",
                                        "email": "ethananony@aliyun.com",
                                        "department": "部门"
                                    }
                                ],
                                "webhook": {
                                    "url": ""
                                }
                            }
                        }
                    }
                ],
                "mode": 1 // 分级告警模式：1-懒惰模式；2-非懒惰模式
            },
            "workflow": { // 工作流配置
                "reminds": [ // 工作流提醒配置
                    {
                        "interval": 10, // 时间间隔：10分钟
                        "status": 1, // 工作流状态：0-待处理；1-处理中
                        "mode": "once", // 是否周期循环：once-不循环；cycle-循环
                        "reuse_receiver": 1 // 复用通知人
                    },
                    {
                        "interval": 30,
                        "status": 0,
                        "mode": "cycle",
                        "reuse_receiver": 0, // 不复用通知人
                        "receiver": { // 自定义的提醒通知人
                            "alarmgroup": [],
                            "channels": {
                                "sms": [
                                    {
                                        "uid": 1,
                                        "username": "ethananony",
                                        "email": "ethananony@aliyun.com",
                                        "department": "部门"
                                    }
                                ],
                                "email": [
                                    {
                                        "uid": 1,
                                        "username": "ethananony",
                                        "email": "ethananony@aliyun.com",
                                        "department": "部门"
                                    }
                                ],
                                "phone": [
                                    {
                                        "uid": 1,
                                        "username": "ethananony",
                                        "email": "ethananony@aliyun.com",
                                        "department": "部门"
                                    }
                                ],
                                "dingworker": [
                                    {
                                        "uid": 1,
                                        "username": "ethananony",
                                        "email": "ethananony@aliyun.com",
                                        "department": "部门"
                                    }
                                ],
                                "dinggroup": [
                                    {
                                        "webhook": "1dadee4018526bb63b21d84d6d4e42c96c1e1c4ef218540fdcebf499daef3462",
                                        "secret": "SECf5a89f004d59a1d3acc916ed745fc8efaf0ee889d8f09709cba21b07174a8a7b"
                                    }
                                ],
                                "yachgroup": [],
                                "yachworker": [],
                                "webhook": {
                                    "url": ""
                                }
                            }
                        }
                    }
                ],
                "enable": true // 是否开启工作流
            },
            "filter": { // 告警过滤
                "not_match": 1, // 不匹配操作：1-直接入库；0-丢弃告警
                "mode": 1, // 模式：1-白名单；2-黑名单
                "conditions": [ // 过滤条件
                    {
                        "rule": [ // 规则
                            {
                                "field": "ctn.cpu_used",
                                "operator": "gt",
                                "threshold": "80"
                            }
                        ],
                        "level": 0 // 告警级别：0-通知；1—警告；2-错误；3-紧急；9-继承
                    }
                ],
                "enable": true // 是否开启告警过滤
            },
            "upgrade": { // 告警升级
                "strategies": [ // 升级策略配置
                    {
                        "interval": 10, // 统计时间间隔
                        "count": 10, // 统计条数
                        "level": 0, // 告警级别：0-通知；1—警告；2-错误；3-紧急；
                        "reuse_receiver": 1 // 是否复用告警通知人：1-复用；0-不复用
                    },
                    {
                        "interval": 1,
                        "count": 10,
                        "level": 2,
                        "reuse_receiver": 0,
                        "receiver": { // 不复用时自定义的通知人
                            "alarmgroup": [],
                            "channels": {
                                "sms": [
                                    {
                                        "uid": 1,
                                        "username": "ethananony",
                                        "email": "ethananony@aliyun.com",
                                        "department": "部门"
                                    }
                                ],
                                "email": [
                                    {
                                        "uid": 1,
                                        "username": "ethananony",
                                        "email": "ethananony@aliyun.com",
                                        "department": "部门"
                                    }
                                ],
                                "phone": [
                                    {
                                        "uid": 1,
                                        "username": "ethananony",
                                        "email": "ethananony@aliyun.com",
                                        "department": "部门"
                                    }
                                ],
                                "dingworker": [
                                    {
                                        "uid": 1,
                                        "username": "ethananony",
                                        "email": "ethananony@aliyun.com",
                                        "department": "部门"
                                    }
                                ],
                                "dinggroup": [
                                    {
                                        "webhook": "1dadee4018526bb63b21d84d6d4e42c96c1e1c4ef218540fdcebf499daef3462",
                                        "secret": "SECf5a89f004d59a1d3acc916ed745fc8efaf0ee889d8f09709cba21b07174a8a7b"
                                    }
                                ],
                                "yachgroup": [],
                                "yachworker": [],
                                "webhook": {
                                    "url": ""
                                }
                            }
                        }
                    }
                ],
                "enable": true // 是否开启告警升级
            },
            "compress": { // 告警收敛配置
                "conditions": [ // 收敛条件
                    {
                        "rule": [ // 收敛规则
                            {
                                "field": "ctn.cpu_used",
                                "operator": "gt",
                                "threshold": "80"
                            }
                        ]
                    }
                ],
                "method": 1, // 收敛方式：1-条件收敛；3-内容收敛；4-全量收敛
                "strategy": 3, // 收敛策略：1-周期收敛；2-延迟收敛；3-周期次数收敛；4-次数周期收敛；5-次数收敛
                "strategy_cycle": 10, // 收敛周期
                "strategy_count": 50, // 收敛次数
                "not_match": 1, // 未收敛操作：1-入库；0-直接发送
                "enable": true // 是否开启告警收敛
            },
            "recovery": { // 告警恢复
                "conditions": [ // 恢复条件
                    {
                        "rule": [
                            {
                                "field": "ctn.cpu_used",
                                "operator": "gt",
                                "threshold": "80"
                            }
                        ]
                    }
                ],
                "mode": 1, // 恢复方式：1-条件恢复
                "enable": true // 是否开启恢复
            },
            "template": { // 告警模板配置
                "template_id": 3, // 模板ID
                "type": 1, // 0-系统默认；1-预定义；2-自定义
                "template": { // 模板详情
                    "id": 3, // 模板ID
                    "name": "ethananony测试", // 模板名称
                    "pinyin": "ethananonyceshi", // 模板拼音
                    "remark": "", // 模板备注
                    "template": { // 模板详情
                        "compressed": { // 告警收敛时场景
                            "sms": { // 短信渠道
                                "type": 0, // 模板类型：0-系统默认；1-预定义；2-自定义
                                "format": 1, // 模板格式：1-文本；2-Markdown；3-HTML
                                // 模板内容
                                "template": "{common.env}您有一个【{task.compress_method}-{task.compress_type}收敛-命中】告警\n\n任务：{task.name}发生了告警\n级别：{history.level}\n内容：{history.ctn},\n主机名：{history.ctn.hostname}"
                            },
                            "email": {
                                "type": 0,
                                "format": 1,
                                "template": "{common.env}您有一个【{task.compress_method}-{task.compress_type}收敛-命中】告警\n\n任务：{task.name}发生了告警\n级别：{history.level}\n内容：{history.ctn},\n主机名：{history.ctn.hostname}"
                            },
                            "phone": {
                                "type": 0,
                                "format": 1,
                                "template": "{common.env}您有一个【{task.compress_method}-{task.compress_type}收敛-命中】告警\n\n任务：{task.name}发生了告警\n级别：{history.level}\n内容：{history.ctn},\n主机名：{history.ctn.hostname}"
                            },
                            "dingworker": {
                                "type": 1,
                                "format": 1,
                                "template": "test"
                            },
                            "dinggroup": {
                                "type": 0,
                                "format": 1,
                                "template": "{common.env}您有一个【{task.compress_method}-{task.compress_type}收敛-命中】告警\n\n任务：{task.name}发生了告警\n级别：{history.level}\n内容：{history.ctn}\n主机名：{history.ctn.hostname}"
                            },
                            "yachworker": {
                                "type": 0,
                                "format": 1,
                                "template": "{common.env}您有一个【{task.compress_method}-{task.compress_type}收敛-命中】告警\n\n任务：{task.name}发生了告警\n级别：{history.level}\n内容：{history.ctn},\n主机名：{history.ctn.hostname}"
                            },
                            "yachgroup": {
                                "type": 0,
                                "format": 1,
                                "template": "{common.env}您有一个【{task.compress_method}-{task.compress_type}收敛-命中】告警\n\n任务：{task.name}发生了告警\n级别：{history.level}\n内容：{history.ctn},\n主机名：{history.ctn.hostname}"
                            }
                        },
                        "not_compress": { // 告警未收敛场景
                            "sms": {
                                "type": 0,
                                "format": 1,
                                "template": "{common.env}您有一个新告警\n    \n任务：{task.name}发生了告警\n级别：{history.level}\n内容：{history.ctn}"
                            },
                            "email": {
                                "type": 0,
                                "format": 1,
                                "template": "{common.env}您有一个新告警\n    \n任务：{task.name}发生了告警\n级别：{history.level}\n内容：{history.ctn}"
                            },
                            "phone": {
                                "type": 0,
                                "format": 1,
                                "template": "{common.env}您有一个新告警\n    \n任务：{task.name}发生了告警\n级别：{history.level}\n内容：{history.ctn}"
                            },
                            "dingworker": {
                                "type": 0,
                                "format": 1,
                                "template": "{common.env}您有一个新告警\n    \n任务：{task.name}发生了告警\n级别：{history.level}\n内容：{history.ctn}"
                            },
                            "dinggroup": {
                                "type": 0,
                                "format": 1,
                                "template": "{common.env}您有一个新告警\n    \n任务：{task.name}发生了告警\n级别：{history.level}\n内容：{history.ctn}"
                            },
                            "yachworker": {
                                "type": 0,
                                "format": 1,
                                "template": "{common.env}您有一个新告警\n    \n任务：{task.name}发生了告警\n级别：{history.level}\n内容：{history.ctn}"
                            },
                            "yachgroup": {
                                "type": 0,
                                "format": 1,
                                "template": "{common.env}您有一个新告警\n    \n任务：{task.name}发生了告警\n级别：{history.level}\n内容：{history.ctn}"
                            }
                        },
                        "upgrade": { // 告警升级
                            "sms": {
                                "type": 0,
                                "format": 1,
                                "template": "{common.env}您有一个告警升级\n\n任务：{task.name}触发了{context.rule.interval}分钟{context.rule.count}条的告警升级，告警次数为：{context.zcount}\n级别：{history.level}\n内容：{history.ctn},\n主机名：{history.ctn.hostname}"
                            },
                            "email": {
                                "type": 0,
                                "format": 1,
                                "template": "{common.env}您有一个告警升级\n\n任务：{task.name}触发了{context.rule.interval}分钟{context.rule.count}条的告警升级，告警次数为：{context.zcount}\n级别：{history.level}\n内容：{history.ctn},\n主机名：{history.ctn.hostname}"
                            },
                            "phone": {
                                "type": 0,
                                "format": 1,
                                "template": "{common.env}您有一个告警升级\n\n任务：{task.name}触发了{context.rule.interval}分钟{context.rule.count}条的告警升级，告警次数为：{context.zcount}\n级别：{history.level}\n内容：{history.ctn},\n主机名：{history.ctn.hostname}"
                            },
                            "dingworker": {
                                "type": 0,
                                "format": 1,
                                "template": "{common.env}您有一个告警升级\n\n任务：{task.name}触发了{context.rule.interval}分钟{context.rule.count}条的告警升级，告警次数为：{context.zcount}\n级别：{history.level}\n内容：{history.ctn},\n主机名：{history.ctn.hostname}"
                            },
                            "dinggroup": {
                                "type": 0,
                                "format": 1,
                                "template": "{common.env}您有一个告警升级\n\n任务：{task.name}触发了{context.rule.interval}分钟{context.rule.count}条的告警升级，告警次数为：{context.zcount}\n级别：{history.level}\n内容：{history.ctn},\n主机名：{history.ctn.hostname}"
                            },
                            "yachworker": {
                                "type": 0,
                                "format": 1,
                                "template": "{common.env}您有一个告警升级\n\n任务：{task.name}触发了{context.rule.interval}分钟{context.rule.count}条的告警升级，告警次数为：{context.zcount}\n级别：{history.level}\n内容：{history.ctn},\n主机名：{history.ctn.hostname}"
                            },
                            "yachgroup": {
                                "type": 0,
                                "format": 1,
                                "template": "{common.env}您有一个告警升级\n\n任务：{task.name}触发了{context.rule.interval}分钟{context.rule.count}条的告警升级，告警次数为：{context.zcount}\n级别：{history.level}\n内容：{history.ctn},\n主机名：{history.ctn.hostname}"
                            }
                        },
                        "recovery": { // 告警恢复
                            "sms": {
                                "type": 0,
                                "format": 1,
                                "template": "{common.env}您有一个告警恢复\n\n任务：{task.name}触发了告警恢复\n级别：{history.level}\n内容：{history.ctn},\n主机名：{history.ctn.hostname}"
                            },
                            "email": {
                                "type": 0,
                                "format": 1,
                                "template": "{common.env}您有一个告警恢复\n\n任务：{task.name}触发了告警恢复\n级别：{history.level}\n内容：{history.ctn},\n主机名：{history.ctn.hostname}"
                            },
                            "phone": {
                                "type": 0,
                                "format": 1,
                                "template": "{common.env}您有一个告警恢复\n\n任务：{task.name}触发了告警恢复\n级别：{history.level}\n内容：{history.ctn},\n主机名：{history.ctn.hostname}"
                            },
                            "dingworker": {
                                "type": 0,
                                "format": 1,
                                "template": "{common.env}您有一个告警恢复\n\n任务：{task.name}触发了告警恢复\n级别：{history.level}\n内容：{history.ctn},\n主机名：{history.ctn.hostname}"
                            },
                            "dinggroup": {
                                "type": 0,
                                "format": 1,
                                "template": "{common.env}您有一个告警恢复\n\n任务：{task.name}触发了告警恢复\n级别：{history.level}\n内容：{history.ctn},\n主机名：{history.ctn.hostname}"
                            },
                            "yachworker": {
                                "type": 0,
                                "format": 1,
                                "template": "{common.env}您有一个告警恢复\n\n任务：{task.name}触发了告警恢复\n级别：{history.level}\n内容：{history.ctn},\n主机名：{history.ctn.hostname}"
                            },
                            "yachgroup": {
                                "type": 0,
                                "format": 1,
                                "template": "{common.env}您有一个告警恢复\n\n任务：{task.name}触发了告警恢复\n级别：{history.level}\n内容：{history.ctn},\n主机名：{history.ctn.hostname}"
                            }
                        }
                    },
                    "created_by": 1, // 创建人UID
                    "created_at": 1585452020, // 创建时间，时间戳
                    "updated_at": 1585452020, // 更新时间，时间戳
                    "permission": [ // 权限信息，在权限列表内才可以对模板进行编辑
                        {
                            "uid": 1,
                            "user": "ethananony",
                            "email": "ethananony@aliyun.com",
                            "username": "ethananony",
                            "department": "部门"
                        }
                    ],
                    "creator": { // 创建人信息
                        "uid": 1,
                        "username": "ethananony",
                        "email": "ethananony@aliyun.com",
                        "department": "部门"
                    }
                }
            },
            "task_tags": [ // 告警任务标签
                {
                    "id": 1, // 标签ID
                    "name": "标签1", // 标签名称
                    "remark": "", // 标签备注
                    "created_by": 1, // 创建人
                    "creator": { // 创建人信息
                        "uid": 1,
                        "username": "ethananony",
                        "user": "ethananony",
                        "email": "ethananony@aliyun.com",
                        "department": "部门"
                    }
                }
            ]
        }
    }
}
```

:::


## 告警任务创建-/alarmtask/store

`POST /alarmtask/store`

**Request Headers:**

- Content-Type: application/json

**Request Parameters:**

`无`

**Request Body:**

::: details 点击查看请求参数

```json
{
    "created_by": 1, // 创建人uid，工号不带0
    "task_tags":[74, 11]， // 关联的标签ID 非必填
    "name": "日志中心", // 告警任务名称，必填，字符串，100字以内
    "department_id": 8, // 部门ID，必填，数字
    "flag_save_db": 1, // 是否入库存储，必填，枚举，0-不入库；1-入库
    "permission": { // 权限列表，非必填
        "rw": [1, 999999], // 读写权限用户列表，非必填，用户ID列表，用户ID为工号不带0
        "ro": [1] // 只读权限用户列表，非必填（读写权限包含读，没必要重复添加，文档仅示例数据格式
    },
    "receiver": { // 告警通知人，必填
        "alarmgroup": [1, 3], // 告警通知组ID，要求告警通知组与下方channels通知渠道至少填一个
        "channels": { // 告警通知渠道，与告警通知组至少填一个
            "dinggroup": [ // 钉钉机器人，可以填写多个，单个群最多可以添加6个，建议填写6个
                {
                    "webhook": "1dadee4018526bb63b21d84d6d4e42c96c1e1c4ef218540fdcebf499daef3462", // webhook中的access_token参数的值，必填，字符串
                    "secret": "SECf5a89f004d59a1d3acc916ed745fc8efaf0ee889d8f09709cba21b07174a8a7b" // 机器人安全配置secret，必填，建议填写，字符串
                }
            ],
            "dingworker": [1], // 钉钉工作通知配置，用户ID列表，非必填
            "yachgroup": [ // YACH机器人，可以填写多个，单个群最多可以添加6个，建议填写6个
                {
                    "webhook": "1dadee4018526bb63b21d84d6d4e42c96c1e1c4ef218540fdcebf499daef3462", // webhook中的access_token参数的值，必填，字符串
                    "secret": "SECf5a89f004d59a1d3acc916ed745fc8efaf0ee889d8f09709cba21b07174a8a7b" // 机器人安全配置secret，必填，建议填写，字符串
                }
            ],
            "yachworker": [1], // YACH工作通知配置，用户ID列表，非必填
            "email": [1], // 邮件通知配置，用户ID列表，非必填
            "sms": [1], // 短信通知配置，用户ID列表，非必填，必须在哮天犬配置手机号才可使用
            "wechat": [1], // 微信通知配置，用户ID列表，非必填
            "phone": [1], // 电话通知配置，用户ID列表，非必填，必须在哮天犬配置手机号才可使用
            "webhook": "http://www.baidu.com", // Webhook通知，必须为有效的URL地址，非必填
        },
        "dispatch":  [ // 分级告警配置，选填
            {
                "conditions": [
                    {
                        "rule": [
                            {
                                "field": "sd",
                                "operator": "eq",
                                "threshold": "ddd"
                            }
                        ]
                    },
                    {
                        "rule": [
                            {
                                "field": "sdfd",
                                "operator": "gt",
                                "threshold": "e"
                            }
                        ]
                    }
                ],
                "receiver": { // 同通知人配置
                    "channels": {
                        "dingworker": [
                            1
                        ],
                        "yachgroup": [
                            {
                                "webhook": "eHhpemFUVTA4b1l3255436W9XNlMvZjVuREVDTmMzZmRGdzBsNTN2UHNndG9GZVJKL1FUNllyWkkzK2x3Nw",
                                "secret": "333332465465467756"
                            }
                        ],
                        "yachworker": [
                            1
                        ]
                    }
                }
            },
        ],
    },
    "workflow": { // 告警工作流配置，非必填
        "enable": true, // 是否开启工作流配置，非必填，boolean类型，默认false
        "reminds": [ // 工作流提醒配置，非必填
            {
                "mode": "once", // 提醒模式，如果配置了提醒则必填，否则非必填，once-单次提醒；cycle-周期提醒
                "status": 1, // 提醒的状态，如果配置了提醒则必填，参见文档枚举类型：https://wiki.zhiyinlou.com/pages/viewpage.action?pageId=50971872
                "interval": 10, // 提醒时间，如果配置了提醒则必填，大于0的整数
                "reuse_receiver": 1 // 是否复用告警通知人，1-复用；0-不复用，如果配置了提醒则必填
            },
            {
                "mode": "cycle",
                "status": 0,
                "interval": 30,
                "reuse_receiver": 0,
                "receiver": { // 提醒通知人，如果选择了不复用，则必填，否则不必填
                    "alarmgroup": [1, 3], // 告警通知组ID，要求告警通知组与下方channels通知渠道至少填一个
                    "channels": { // 告警通知渠道，与告警通知组至少填一个
                        "dinggroup": [ // 钉钉机器人，可以填写多个，单个群最多可以添加6个，建议填写6个
                            {
                                "webhook": "1dadee4018526bb63b21d84d6d4e42c96c1e1c4ef218540fdcebf499daef3462", // webhook中的access_token参数的值，必填，字符串
                                "secret": "SECf5a89f004d59a1d3acc916ed745fc8efaf0ee889d8f09709cba21b07174a8a7b" // 机器人安全配置secret，非必填，建议填写，字符串
                            }
                        ],
                        "dingworker": [1], // 钉钉工作通知配置，用户ID列表，非必填
                        "email": [1], // 邮件通知配置，用户ID列表，非必填
                        "sms": [1], // 短信通知配置，用户ID列表，非必填，必须在哮天犬配置手机号才可使用
                        "wechat": [1], // 微信通知配置，用户ID列表，非必填
                        "phone": [1] // 电话通知配置，用户ID列表，非必填，必须在哮天犬配置手机号才可使用
                    }
                }
            }
        ]
    },
    "filter": { // 告警过滤配置，非必填
        "enable": true, // 是否开启，非必填，boolean类型，默认false
        "mode": 1, // 过滤模式：1-白名单；2-黑名单，开启了告警过滤必填
        "conditions": [ // 过滤条件，至少配置一个条件
            {
                "level": 0, // 告警级别，0、1、2、3、9四种值可选，参考枚举数据类型：https://wiki.zhiyinlou.com/pages/viewpage.action?pageId=50971872
                "rule": [
                    {
                        "field": "ctn.cpu_used", // 字段名称
                        "operator": "gt", // 条件操作符，参考枚举数据类型：https://wiki.zhiyinlou.com/pages/viewpage.action?pageId=50971872
                        "threshold": "80" // 阈值
                    }
                ]
            }   
        ],
        "not_match": 1 // 未命中过滤：1-直接入库；0-丢弃告警
    },
    "upgrade": { // 告警升级配置，非必填
        "enable": true, // 是否开启告警升级配置
        "strategies": [ // 告警升级策略，至少填写一个
            {
                "interval": 10, // 几分钟内，单位：分钟
                "count": 10, // 达到多少条，单位：条
                "level": 1, // 告警级别：升级的告警级别
                "reuse_receiver": 1 // 是否复用告警接收人
            },
            {
                "interval": 1,
                "count": 10,
                "level": 4,
                "reuse_receiver": 0, // 是否复用告警接收人
                "receiver": {
                    "alarmgroup": [1, 3], // 告警通知组ID，要求告警通知组与下方channels通知渠道至少填一个
                    "channels": { // 告警通知渠道，与告警通知组至少填一个
                        "dinggroup": [ // 钉钉机器人，可以填写多个，单个群最多可以添加6个，建议填写6个
                            {
                                "webhook": "1dadee4018526bb63b21d84d6d4e42c96c1e1c4ef218540fdcebf499daef3462", // webhook中的access_token参数的值，必填，字符串
                                "secret": "SECf5a89f004d59a1d3acc916ed745fc8efaf0ee889d8f09709cba21b07174a8a7b" // 机器人安全配置secret，非必填，建议填写，字符串
                            }
                        ],
                        "dingworker": [1], // 钉钉工作通知配置，用户ID列表，非必填
                        "email": [1], // 邮件通知配置，用户ID列表，非必填
                        "sms": [1], // 短信通知配置，用户ID列表，非必填，必须在哮天犬配置手机号才可使用
                        "wechat": [1], // 微信通知配置，用户ID列表，非必填
                        "phone": [1] // 电话通知配置，用户ID列表，非必填，必须在哮天犬配置手机号才可使用
                    }
                }
            }
        ]
    },
    "compress": { // 选填，不填写不开启告警收敛
        "enable": true,
        "method": 1, // 收敛指标（收敛方式）：1-条件收敛；2-智能收敛；3-全量收敛
        "conditions": [
            {
                "rule": [
                    {
                        "field": "ctn.cpu_used", // 字段名称
                        "operator": "gt", // 条件操作符，参考枚举数据类型：https://wiki.zhiyinlou.com/pages/viewpage.action?pageId=50971872
                        "threshold": "80" // 阈值
                    }
                ] 
            }     
        ],
        "strategy": 3, // 收敛策略：1-周期收敛；2-延迟收敛；3-周期次数收敛
        "strategy_cycle": 10, // 周期时间，单位：min
        "strategy_count": 50, // 周期条数：单位：条
        "not_match": 1 // 1-直接发送；0-丢弃告警
    },
    "recovery": { // 告警自动恢复，非必填
        "enable": true,
        "mode": 1, // 过滤方式：1-条件恢复；2-延迟恢复
        "conditions": [ // 条件恢复才有该字段
            {
                "rule": [
                    {
                        "field": "ctn.cpu_used", // 字段名称
                        "operator": "gt", // 条件操作符，参考枚举数据类型：https://wiki.zhiyinlou.com/pages/viewpage.action?pageId=50971872
                        "threshold": "80" // 阈值
                    }
                ]
            }    
        ],
        "delay_interval": 10 // 延迟恢复时间，延迟恢复才有
    },
    "template": { // 选填，不填写为系统默认模板
        "template_id": "@integer(1, 999999)",
        "udf": { // 仅template_id才有该数据，User Defined - 自定义
            "compressed": {
                "dinggroup": {
                    "format": 1, // 模板类型：1-TEXT；2-MARKDOWN；3-HTML；4-ActionCard
                    "template": "模板内容", // 模板内容，仅需要时填写，全部非必填
                },
                "dingworker": {
                    "format": 1, // 模板类型：1-TEXT；2-MARKDOWN；3-HTML；4-ActionCard
                    "template": "模板内容", // 模板内容，仅需要时填写，全部非必填
                },
                "email": {
                    "format": 1, // 模板类型：1-TEXT；2-MARKDOWN；3-HTML；4-ActionCard
                    "template": "模板内容", // 模板内容，仅需要时填写，全部非必填
                },
                "sms": {
                    "format": 1, // 模板类型：1-TEXT；2-MARKDOWN；3-HTML；4-ActionCard
                    "template": "模板内容", // 模板内容，仅需要时填写，全部非必填
                },
                "wechat": {
                    "format": 1, // 模板类型：1-TEXT；2-MARKDOWN；3-HTML；4-ActionCard
                    "template": "模板内容", // 模板内容，仅需要时填写，全部非必填
                },
                "phone": {
                    "format": 1, // 模板类型：1-TEXT；2-MARKDOWN；3-HTML；4-ActionCard
                    "template": "模板内容", // 模板内容，仅需要时填写，全部非必填
                },
                "yachgroup": {
                    "format": 1, // 模板类型：1-TEXT；2-MARKDOWN；3-HTML；4-ActionCard
                    "template": "模板内容", // 模板内容，仅需要时填写，全部非必填
                },
                "yachworker": {
                    "format": 1, // 模板类型：1-TEXT；2-MARKDOWN；3-HTML；4-ActionCard
                    "template": "模板内容", // 模板内容，仅需要时填写，全部非必填
                },
            },
            "not_compress": {
                // 同上
            },
            "upgrade": {
                // 同上
            },
            "recovery": {
                // 同上
            }
        }
    }
}
```

:::

**Response:**


```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "task": {
            "name": "another测试2212",
            "token": "290b58d01dec90feea8bf7e7dbd053ea819690f4",
            "secret": "59f431d917078f9facdce98f2f061f6874611d76",
            "department_id": 1,
            "status": 1,
            "created_by": 2,
            "created_at": 1595924880,
            "id": 403,
            "department": {
                "id": 1,
                "name": "部门"
            },
            "creator": {
                "uid": 2,
                "username": "another",
                "email": "another@foo.bar",
                "department": "部门"
            }
        },
        "nullPhoneUsers": [ // 电话或短信渠道中没有设置电话号的用户
            {
                "uid": 2,
                "user": "another",
                "username": "another",
                "email": "another@foo.bar",
                "department": "部门"
            }
        ] 
    }
}
```

## 告警任务更新-/alarmtask/update

`PUT /alarmtask/update`

**Request Headers:**

- Content-Type: application/json

**Request Parameters:**

`无`

**Request Body:**

::: details 点击查看请求参数

```json
{
    "id": 105, // 告警任务ID
    "timestamp": "1584671913", // 用于鉴权的时间戳
    "sign": "6e673c6de3a0ed4a9257d4ea4d907fea", // 用于鉴权的签名
    "name": "日志中心", // 告警任务名称，必填，字符串，100字以内
    "department_id": 8, // 部门ID，必填，数字
    "flag_save_db": 1, // 是否入库存储，必填，枚举，0-不入库；1-入库
    "permission": { // 权限列表，非必填
        "rw": [1, 999999], // 读写权限用户列表，非必填，用户ID列表，用户ID为工号不带0
        "ro": [1] // 只读权限用户列表，非必填（读写权限包含读，没必要重复添加，文档仅示例数据格式
    },
    "receiver": { // 告警通知人，必填
        "alarmgroup": [1, 3], // 告警通知组ID，要求告警通知组与下方channels通知渠道至少填一个
        "channels": { // 告警通知渠道，与告警通知组至少填一个
            "dinggroup": [ // 钉钉机器人，可以填写多个，单个群最多可以添加6个，建议填写6个
                {
                    "webhook": "1dadee4018526bb63b21d84d6d4e42c96c1e1c4ef218540fdcebf499daef3462", // webhook中的access_token参数的值，必填，字符串
                    "secret": "SECf5a89f004d59a1d3acc916ed745fc8efaf0ee889d8f09709cba21b07174a8a7b" // 机器人安全配置secret，必填，建议填写，字符串
                }
            ],
            "dingworker": [1], // 钉钉工作通知配置，用户ID列表，非必填
            "yachgroup": [ // YACH机器人，可以填写多个，单个群最多可以添加6个，建议填写6个
                {
                    "webhook": "1dadee4018526bb63b21d84d6d4e42c96c1e1c4ef218540fdcebf499daef3462", // webhook中的access_token参数的值，必填，字符串
                    "secret": "SECf5a89f004d59a1d3acc916ed745fc8efaf0ee889d8f09709cba21b07174a8a7b" // 机器人安全配置secret，必填，建议填写，字符串
                }
            ],
            "yachworker": [1], // YACH工作通知配置，用户ID列表，非必填
            "email": [1], // 邮件通知配置，用户ID列表，非必填
            "sms": [1], // 短信通知配置，用户ID列表，非必填，必须在哮天犬配置手机号才可使用
            "wechat": [1], // 微信通知配置，用户ID列表，非必填
            "phone": [1], // 电话通知配置，用户ID列表，非必填，必须在哮天犬配置手机号才可使用
            "webhook": "http://www.baidu.com", // Webhook通知，必须为有效的URL地址，非必填
        },
        "dispatch":  [ // 分级告警配置，选填
            {
                "conditions": [
                    {
                        "rule": [
                            {
                                "field": "sd",
                                "operator": "eq",
                                "threshold": "ddd"
                            }
                        ]
                    },
                    {
                        "rule": [
                            {
                                "field": "sdfd",
                                "operator": "gt",
                                "threshold": "e"
                            }
                        ]
                    }
                ],
                "receiver": { // 同通知人配置
                    "channels": {
                        "dingworker": [
                            1
                        ],
                        "yachgroup": [
                            {
                                "webhook": "eHhpemFUVTA4b1l3255436W9XNlMvZjVuREVDTmMzZmRGdzBsNTN2UHNndG9GZVJKL1FUNllyWkkzK2x3Nw",
                                "secret": "333332465465467756"
                            }
                        ],
                        "yachworker": [
                            1
                        ]
                    }
                }
            },
        ],
    },
    "workflow": { // 告警工作流配置，非必填
        "enable": true, // 是否开启工作流配置，非必填，boolean类型，默认false
        "reminds": [ // 工作流提醒配置，非必填
            {
                "mode": "once", // 提醒模式，如果配置了提醒则必填，否则非必填，once-单次提醒；cycle-周期提醒
                "status": 1, // 提醒的状态，如果配置了提醒则必填，参见文档枚举类型：https://wiki.zhiyinlou.com/pages/viewpage.action?pageId=50971872
                "interval": 10, // 提醒时间，如果配置了提醒则必填，大于0的整数
                "reuse_receiver": 1 // 是否复用告警通知人，1-复用；0-不复用，如果配置了提醒则必填
            },
            {
                "mode": "cycle",
                "status": 0,
                "interval": 30,
                "reuse_receiver": 0,
                "receiver": { // 提醒通知人，如果选择了不复用，则必填，否则不必填
                    "alarmgroup": [1, 3], // 告警通知组ID，要求告警通知组与下方channels通知渠道至少填一个
                    "channels": { // 告警通知渠道，与告警通知组至少填一个
                        "dinggroup": [ // 钉钉机器人，可以填写多个，单个群最多可以添加6个，建议填写6个
                            {
                                "webhook": "1dadee4018526bb63b21d84d6d4e42c96c1e1c4ef218540fdcebf499daef3462", // webhook中的access_token参数的值，必填，字符串
                                "secret": "SECf5a89f004d59a1d3acc916ed745fc8efaf0ee889d8f09709cba21b07174a8a7b" // 机器人安全配置secret，非必填，建议填写，字符串
                            }
                        ],
                        "dingworker": [1], // 钉钉工作通知配置，用户ID列表，非必填
                        "email": [1], // 邮件通知配置，用户ID列表，非必填
                        "sms": [1], // 短信通知配置，用户ID列表，非必填，必须在哮天犬配置手机号才可使用
                        "wechat": [1], // 微信通知配置，用户ID列表，非必填
                        "phone": [1] // 电话通知配置，用户ID列表，非必填，必须在哮天犬配置手机号才可使用
                    }
                }
            }
        ]
    },
    "filter": { // 告警过滤配置，非必填
        "enable": true, // 是否开启，非必填，boolean类型，默认false
        "mode": 1, // 过滤模式：1-白名单；2-黑名单，开启了告警过滤必填
        "conditions": [ // 过滤条件，至少配置一个条件
            {
                "level": 0, // 告警级别，0、1、2、3、9四种值可选，参考枚举数据类型：https://wiki.zhiyinlou.com/pages/viewpage.action?pageId=50971872
                "rule": [
                    {
                        "field": "ctn.cpu_used", // 字段名称
                        "operator": "gt", // 条件操作符，参考枚举数据类型：https://wiki.zhiyinlou.com/pages/viewpage.action?pageId=50971872
                        "threshold": "80" // 阈值
                    }
                ]
            }   
        ],
        "not_match": 1 // 未命中过滤：1-直接入库；0-丢弃告警
    },
    "upgrade": { // 告警升级配置，非必填
        "enable": true, // 是否开启告警升级配置
        "strategies": [ // 告警升级策略，至少填写一个
            {
                "interval": 10, // 几分钟内，单位：分钟
                "count": 10, // 达到多少条，单位：条
                "level": 1, // 告警级别：升级的告警级别
                "reuse_receiver": 1 // 是否复用告警接收人
            },
            {
                "interval": 1,
                "count": 10,
                "level": 4,
                "reuse_receiver": 0, // 是否复用告警接收人
                "receiver": {
                    "alarmgroup": [1, 3], // 告警通知组ID，要求告警通知组与下方channels通知渠道至少填一个
                    "channels": { // 告警通知渠道，与告警通知组至少填一个
                        "dinggroup": [ // 钉钉机器人，可以填写多个，单个群最多可以添加6个，建议填写6个
                            {
                                "webhook": "1dadee4018526bb63b21d84d6d4e42c96c1e1c4ef218540fdcebf499daef3462", // webhook中的access_token参数的值，必填，字符串
                                "secret": "SECf5a89f004d59a1d3acc916ed745fc8efaf0ee889d8f09709cba21b07174a8a7b" // 机器人安全配置secret，非必填，建议填写，字符串
                            }
                        ],
                        "dingworker": [1], // 钉钉工作通知配置，用户ID列表，非必填
                        "email": [1], // 邮件通知配置，用户ID列表，非必填
                        "sms": [1], // 短信通知配置，用户ID列表，非必填，必须在哮天犬配置手机号才可使用
                        "wechat": [1], // 微信通知配置，用户ID列表，非必填
                        "phone": [1] // 电话通知配置，用户ID列表，非必填，必须在哮天犬配置手机号才可使用
                    }
                }
            }
        ]
    },
    "compress": { // 选填，不填写不开启告警收敛
        "enable": true,
        "method": 1, // 收敛指标（收敛方式）：1-条件收敛；2-智能收敛；3-全量收敛
        "conditions": [
            {
                "rule": [
                    {
                        "field": "ctn.cpu_used", // 字段名称
                        "operator": "gt", // 条件操作符，参考枚举数据类型：https://wiki.zhiyinlou.com/pages/viewpage.action?pageId=50971872
                        "threshold": "80" // 阈值
                    }
                ] 
            }     
        ],
        "strategy": 3, // 收敛策略：1-周期收敛；2-延迟收敛；3-周期次数收敛
        "strategy_cycle": 10, // 周期时间，单位：min
        "strategy_count": 50, // 周期条数：单位：条
        "not_match": 1 // 1-直接发送；0-丢弃告警
    },
    "recovery": { // 告警自动恢复，非必填
        "enable": true,
        "mode": 1, // 过滤方式：1-条件恢复；2-延迟恢复
        "conditions": [ // 条件恢复才有该字段
            {
                "rule": [
                    {
                        "field": "ctn.cpu_used", // 字段名称
                        "operator": "gt", // 条件操作符，参考枚举数据类型：https://wiki.zhiyinlou.com/pages/viewpage.action?pageId=50971872
                        "threshold": "80" // 阈值
                    }
                ]
            }    
        ],
        "delay_interval": 10 // 延迟恢复时间，延迟恢复才有
    },
    "template": { // 选填，不填写为系统默认模板
        "template_id": "@integer(1, 999999)",
        "udf": { // 仅template_id才有该数据，User Defined - 自定义
            "compressed": {
                "dinggroup": {
                    "format": 1, // 模板类型：1-TEXT；2-MARKDOWN；3-HTML；4-ActionCard
                    "template": "模板内容", // 模板内容，仅需要时填写，全部非必填
                },
                "dingworker": {
                    "format": 1, // 模板类型：1-TEXT；2-MARKDOWN；3-HTML；4-ActionCard
                    "template": "模板内容", // 模板内容，仅需要时填写，全部非必填
                },
                "email": {
                    "format": 1, // 模板类型：1-TEXT；2-MARKDOWN；3-HTML；4-ActionCard
                    "template": "模板内容", // 模板内容，仅需要时填写，全部非必填
                },
                "sms": {
                    "format": 1, // 模板类型：1-TEXT；2-MARKDOWN；3-HTML；4-ActionCard
                    "template": "模板内容", // 模板内容，仅需要时填写，全部非必填
                },
                "wechat": {
                    "format": 1, // 模板类型：1-TEXT；2-MARKDOWN；3-HTML；4-ActionCard
                    "template": "模板内容", // 模板内容，仅需要时填写，全部非必填
                },
                "phone": {
                    "format": 1, // 模板类型：1-TEXT；2-MARKDOWN；3-HTML；4-ActionCard
                    "template": "模板内容", // 模板内容，仅需要时填写，全部非必填
                },
                "yachgroup": {
                    "format": 1, // 模板类型：1-TEXT；2-MARKDOWN；3-HTML；4-ActionCard
                    "template": "模板内容", // 模板内容，仅需要时填写，全部非必填
                },
                "yachworker": {
                    "format": 1, // 模板类型：1-TEXT；2-MARKDOWN；3-HTML；4-ActionCard
                    "template": "模板内容", // 模板内容，仅需要时填写，全部非必填
                },
            },
            "not_compress": {
                // 同上
            },
            "upgrade": {
                // 同上
            },
            "recovery": {
                // 同上
            }
        }
    }
}
```

:::


**Response:**

```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "task": {
            "id": 402,
            "name": "another测试2212",
            "token": "a118971afebf95fee84d2599f0e521b8f24f3885",
            "secret": "7d00c3d896118bcb3ee390b2426aab7511872362",
            "department_id": 1,
            "status": 1,
            "created_by": 2,
            "created_at": 1595923897,
            "department": {
                "id": 1,
                "name": "部门"
            },
            "creator": {
                "uid": 2,
                "username": "another",
                "email": "another@foo.bar",
                "department": "部门"
            }
        },
        "nullPhoneUsers": []
    }
}
```


## 告警任务部分更新-/alarmtask/updatefields

`PUT /alarmtask/updatefields`

**Request Headers:**

- Content-Type: application/json

**Request Parameters:**

`无`

**Request Body:**

::: details 点击查看请求参数

```json
{
    // 只更新过滤的字段，id, timestamp, sign, filter_fields必填，其他字段根据filter_fileds的条件要求是否必填
    "filter_fields": ["name", "template.udf.compressed", "receiver.channels.dingworker"],
    "id": 105, // 告警任务ID
	"timestamp": "1584671913", // 用于鉴权的时间戳
	"sign": "6e673c6de3a0ed4a9257d4ea4d907fea", // 用于鉴权的签名
    "name": "日志中心", // 告警任务名称，根据filter_fields要求，字符串，100字以内
    "department_id": 8, // 部门ID，根据filter_fields要求，数字
    "flag_save_db": 1, // 是否入库存储，根据filter_fields要求，枚举，0-不入库；1-入库
    "permission": { // 权限列表，非必填
        "rw": [1, 999999], // 读写权限用户列表，非必填，用户ID列表，用户ID为工号不带0
        "ro": [1] // 只读权限用户列表，非必填（读写权限包含读，没必要重复添加，文档仅示例数据格式
    },
    "receiver": { // 告警通知人，必填
        "alarmgroup": [1, 3], // 告警通知组ID，要求告警通知组与下方channels通知渠道至少填一个
        "channels": { // 告警通知渠道，与告警通知组至少填一个
            "dinggroup": [ // 钉钉机器人，可以填写多个，单个群最多可以添加6个，建议填写6个
                {
                    "webhook": "1dadee4018526bb63b21d84d6d4e42c96c1e1c4ef218540fdcebf499daef3462", // webhook中的access_token参数的值，必填，字符串
                    "secret": "SECf5a89f004d59a1d3acc916ed745fc8efaf0ee889d8f09709cba21b07174a8a7b" // 机器人安全配置secret，必填，建议填写，字符串
                }
            ],
            "dingworker": [1], // 钉钉工作通知配置，用户ID列表，非必填
            "yachgroup": [ // YACH机器人，可以填写多个，单个群最多可以添加6个，建议填写6个
                {
                    "webhook": "1dadee4018526bb63b21d84d6d4e42c96c1e1c4ef218540fdcebf499daef3462", // webhook中的access_token参数的值，必填，字符串
                    "secret": "SECf5a89f004d59a1d3acc916ed745fc8efaf0ee889d8f09709cba21b07174a8a7b" // 机器人安全配置secret，必填，建议填写，字符串
                }
            ],
            "yachworker": [1], // YACH工作通知配置，用户ID列表，非必填
            "email": [1], // 邮件通知配置，用户ID列表，非必填
            "sms": [1], // 短信通知配置，用户ID列表，非必填，必须在哮天犬配置手机号才可使用
            "wechat": [1], // 微信通知配置，用户ID列表，非必填
            "phone": [1], // 电话通知配置，用户ID列表，非必填，必须在哮天犬配置手机号才可使用
            "webhook": "http://www.baidu.com", // Webhook通知，必须为有效的URL地址，非必填
        },
        "dispatch":  [ // 分级告警配置，选填
            {
                "conditions": [
                    {
                        "rule": [
                            {
                                "field": "sd",
                                "operator": "eq",
                                "threshold": "ddd"
                            }
                        ]
                    },
                    {
                        "rule": [
                            {
                                "field": "sdfd",
                                "operator": "gt",
                                "threshold": "e"
                            }
                        ]
                    }
                ],
                "receiver": { // 同通知人配置
                    "channels": {
                        "dingworker": [
                            1
                        ],
                        "yachgroup": [
                            {
                                "webhook": "eHhpemFUVTA4b1l3255436W9XNlMvZjVuREVDTmMzZmRGdzBsNTN2UHNndG9GZVJKL1FUNllyWkkzK2x3Nw",
                                "secret": "333332465465467756"
                            }
                        ],
                        "yachworker": [
                            1
                        ]
                    }
                }
            },
        ],
    },
    "workflow": { // 告警工作流配置，非必填
        "enable": true, // 是否开启工作流配置，非必填，boolean类型，默认false
        "reminds": [ // 工作流提醒配置，非必填
            {
                "mode": "once", // 提醒模式，如果配置了提醒则必填，否则非必填，once-单次提醒；cycle-周期提醒
                "status": 1, // 提醒的状态，如果配置了提醒则必填，参见文档枚举类型：https://wiki.zhiyinlou.com/pages/viewpage.action?pageId=50971872
                "interval": 10, // 提醒时间，如果配置了提醒则必填，大于0的整数
                "reuse_receiver": 1 // 是否复用告警通知人，1-复用；0-不复用，如果配置了提醒则必填
            },
            {
                "mode": "cycle",
                "status": 0,
                "interval": 30,
                "reuse_receiver": 0,
                "receiver": { // 提醒通知人，如果选择了不复用，则必填，否则不必填
                    "alarmgroup": [1, 3], // 告警通知组ID，要求告警通知组与下方channels通知渠道至少填一个
                    "channels": { // 告警通知渠道，与告警通知组至少填一个
                        "dinggroup": [ // 钉钉机器人，可以填写多个，单个群最多可以添加6个，建议填写6个
                            {
                                "webhook": "1dadee4018526bb63b21d84d6d4e42c96c1e1c4ef218540fdcebf499daef3462", // webhook中的access_token参数的值，必填，字符串
                                "secret": "SECf5a89f004d59a1d3acc916ed745fc8efaf0ee889d8f09709cba21b07174a8a7b" // 机器人安全配置secret，非必填，建议填写，字符串
                            }
                        ],
                        "dingworker": [1], // 钉钉工作通知配置，用户ID列表，非必填
                        "email": [1], // 邮件通知配置，用户ID列表，非必填
                        "sms": [1], // 短信通知配置，用户ID列表，非必填，必须在哮天犬配置手机号才可使用
                        "wechat": [1], // 微信通知配置，用户ID列表，非必填
                        "phone": [1] // 电话通知配置，用户ID列表，非必填，必须在哮天犬配置手机号才可使用
                    }
                }
            }
        ]
    },
    "filter": { // 告警过滤配置，非必填
        "enable": true, // 是否开启，非必填，boolean类型，默认false
        "mode": 1, // 过滤模式：1-白名单；2-黑名单，开启了告警过滤必填
        "conditions": [ // 过滤条件，至少配置一个条件
            {
                "level": 0, // 告警级别，0、1、2、3、9四种值可选，参考枚举数据类型：https://wiki.zhiyinlou.com/pages/viewpage.action?pageId=50971872
                "rule": [
                    {
                        "field": "ctn.cpu_used", // 字段名称
                        "operator": "gt", // 条件操作符，参考枚举数据类型：https://wiki.zhiyinlou.com/pages/viewpage.action?pageId=50971872
                        "threshold": "80" // 阈值
                    }
                ]
            }   
        ],
        "not_match": 1 // 未命中过滤：1-直接入库；0-丢弃告警
    },
    "upgrade": { // 告警升级配置，非必填
        "enable": true, // 是否开启告警升级配置
        "strategies": [ // 告警升级策略，至少填写一个
            {
                "interval": 10, // 几分钟内，单位：分钟
                "count": 10, // 达到多少条，单位：条
                "level": 1, // 告警级别：升级的告警级别
                "reuse_receiver": 1 // 是否复用告警接收人
            },
            {
                "interval": 1,
                "count": 10,
                "level": 4,
                "reuse_receiver": 0, // 是否复用告警接收人
                "receiver": {
                    "alarmgroup": [1, 3], // 告警通知组ID，要求告警通知组与下方channels通知渠道至少填一个
                    "channels": { // 告警通知渠道，与告警通知组至少填一个
                        "dinggroup": [ // 钉钉机器人，可以填写多个，单个群最多可以添加6个，建议填写6个
                            {
                                "webhook": "1dadee4018526bb63b21d84d6d4e42c96c1e1c4ef218540fdcebf499daef3462", // webhook中的access_token参数的值，必填，字符串
                                "secret": "SECf5a89f004d59a1d3acc916ed745fc8efaf0ee889d8f09709cba21b07174a8a7b" // 机器人安全配置secret，非必填，建议填写，字符串
                            }
                        ],
                        "dingworker": [1], // 钉钉工作通知配置，用户ID列表，非必填
                        "email": [1], // 邮件通知配置，用户ID列表，非必填
                        "sms": [1], // 短信通知配置，用户ID列表，非必填，必须在哮天犬配置手机号才可使用
                        "wechat": [1], // 微信通知配置，用户ID列表，非必填
                        "phone": [1] // 电话通知配置，用户ID列表，非必填，必须在哮天犬配置手机号才可使用
                    }
                }
            }
        ]
    },
    "compress": { // 选填，不填写不开启告警收敛
        "enable": true,
        "method": 1, // 收敛指标（收敛方式）：1-条件收敛；2-智能收敛；3-全量收敛
        "conditions": [
            {
                "rule": [
                    {
                        "field": "ctn.cpu_used", // 字段名称
                        "operator": "gt", // 条件操作符，参考枚举数据类型：https://wiki.zhiyinlou.com/pages/viewpage.action?pageId=50971872
                        "threshold": "80" // 阈值
                    }
                ] 
            }     
        ],
        "strategy": 3, // 收敛策略：1-周期收敛；2-延迟收敛；3-周期次数收敛
        "strategy_cycle": 10, // 周期时间，单位：min
        "strategy_count": 50, // 周期条数：单位：条
        "not_match": 1 // 1-直接发送；0-丢弃告警
    },
    "recovery": { // 告警自动恢复，非必填
        "enable": true,
        "mode": 1, // 过滤方式：1-条件恢复；2-延迟恢复
        "conditions": [ // 条件恢复才有该字段
            {
                "rule": [
                    {
                        "field": "ctn.cpu_used", // 字段名称
                        "operator": "gt", // 条件操作符，参考枚举数据类型：https://wiki.zhiyinlou.com/pages/viewpage.action?pageId=50971872
                        "threshold": "80" // 阈值
                    }
                ]
            }    
        ],
        "delay_interval": 10 // 延迟恢复时间，延迟恢复才有
    },
    "template": { // 选填，不填写为系统默认模板
        "template_id": "@integer(1, 999999)",
        "udf": { // 仅template_id才有该数据，User Defined - 自定义
            "compressed": {
                "dinggroup": {
                    "format": 1, // 模板类型：1-TEXT；2-MARKDOWN；3-HTML；4-ActionCard
                    "template": "模板内容", // 模板内容，仅需要时填写，全部非必填
                },
                "dingworker": {
                    "format": 1, // 模板类型：1-TEXT；2-MARKDOWN；3-HTML；4-ActionCard
                    "template": "模板内容", // 模板内容，仅需要时填写，全部非必填
                },
                "email": {
                    "format": 1, // 模板类型：1-TEXT；2-MARKDOWN；3-HTML；4-ActionCard
                    "template": "模板内容", // 模板内容，仅需要时填写，全部非必填
                },
                "sms": {
                    "format": 1, // 模板类型：1-TEXT；2-MARKDOWN；3-HTML；4-ActionCard
                    "template": "模板内容", // 模板内容，仅需要时填写，全部非必填
                },
                "wechat": {
                    "format": 1, // 模板类型：1-TEXT；2-MARKDOWN；3-HTML；4-ActionCard
                    "template": "模板内容", // 模板内容，仅需要时填写，全部非必填
                },
                "phone": {
                    "format": 1, // 模板类型：1-TEXT；2-MARKDOWN；3-HTML；4-ActionCard
                    "template": "模板内容", // 模板内容，仅需要时填写，全部非必填
                },
                "yachgroup": {
                    "format": 1, // 模板类型：1-TEXT；2-MARKDOWN；3-HTML；4-ActionCard
                    "template": "模板内容", // 模板内容，仅需要时填写，全部非必填
                },
                "yachworker": {
                    "format": 1, // 模板类型：1-TEXT；2-MARKDOWN；3-HTML；4-ActionCard
                    "template": "模板内容", // 模板内容，仅需要时填写，全部非必填
                },
            },
            "not_compress": {
                // 同上
            },
            "upgrade": {
                // 同上
            },
            "recovery": {
                // 同上
            }
        }
    }
}
```
:::


**Response**

```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "task": {
            "id": 402,
            "name": "anotherhahahha",
            "token": "a118971afebf95fee84d2599f0e521b8f24f3885",
            "secret": "7d00c3d896118bcb3ee390b2426aab7511872362",
            "department_id": 1,
            "status": 1,
            "created_by": 2,
            "created_at": 1595923897,
            "department": {
                "id": 1,
                "name": "部门"
            },
            "creator": {
                "uid": 2,
                "username": "another",
                "email": "another@foo.bar",
                "department": "部门"
            }
        },
        "nullPhoneUsers": []
    }
}
```


## 告警任务删除-/alarmtask

`DELETE /alarmtask`

**Request Headers:**

- Content-Type: application/x-www-form-urlencoded

**Request Parameters:**

| 参数名称  | 是否必须 | 示例                             | 备注             |
| :-------- | :------- | :------------------------------- | :--------------- |
| id        | 是       | 1                                | 告警任务ID       |
| timestamp | 是       | 1595926163                       | 鉴权 Unix 时间戳 |
| sign      | 是       | a5b24a99c2b008d148bb9c8dd0d9bc37 | 鉴权签名         |


**Request Body:**

`无`

**Response:**

```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "id": 403
    }
}
```


## 告警任务停止-/alarmtask/stop

`PUT /alarmtask/stop`

**Request Headers:**

- Content-Type: application/json

**Request Parameters:**

`无`

**Request Body:**

```json
{
    "id": 104, // 任务ID
    "timestamp": "1584672789", // 鉴权时间戳
    "sign": "415ccad4c8d33f2e4f158ec37e230223" // 鉴权签名
}
```

**Response:**

```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "id": 104
    }
}
```



## 告警任务开启- /alarmtask/start

`PUT /alarmtask/start`

**Request Headers:**

- Content-Type: application/json

**Request Parameters:**

`无`

**Request Body:**

```json
{
    "id": 104, // 任务ID
    "timestamp": "1584672789", // 鉴权时间戳
    "sign": "415ccad4c8d33f2e4f158ec37e230223" // 鉴权签名
}
```

**Response:**

```json
{
  "code": 0,
  "msg": "success",
  "data": {
    "id": 104
  }
}
```

## 告警任务挂起-/alarmtask/pause

`PUT /alarmtask/pause`

**Request Headers:**

- Content-Type: application/json

**Request Parameters:**

`无`

**Request Body:**

```json
{
    "id": 104, // 任务ID
    "timestamp": "1584672789", // 鉴权时间戳
    "sign": "415ccad4c8d33f2e4f158ec37e230223", // 鉴权签名
    "time": 10 // 暂停的时间，单位：分钟
}
```

**Response:**

```json
{
  "code": 0,
  "msg": "success",
  "data": {
    "id": 104,
    "time": 10
  }
}
```



## 工作流详情-/workflow/show

`GET /workflow/show`

**Request Headers:**

- Content-Type: application/json

**Request Parameters:**

| 参数名称 | 是否必须 | 示例 | 备注     |
| :------- | :------- | :--- | :------- |
| id       | 是       | 1    | 工作流ID |

**Request Body:**

`无`

**Response:**

```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "workflow": { // 工作流信息
            "id": 402, // 工作流ID
            "task_id": 141, // 告警任务ID
            // 告警收敛指标
            "metric": "6d00f7400f67792f5122e099ee2401765b444683",
            "history_id": 100596, // 告警记录ID
            "status": 0, // 状态：0-待处理；1-处理中；2-处理完成；9-关闭
            "created_at": 1589524980, // 创建时间
            "updated_at": 1589524980, // 更新时间
            "pipelines": [ // 流程记录
                {
                    "status": 3, // 状态：0-待处理；1-处理中；2-处理完成；3-提醒；4-指派；5-重新激活；9-关闭
                    "remark": "提醒", // 备注
                    "props": { // 记录属性
                        "remind": { // 提醒配置
                            "interval": 10, // 提醒时间间隔
                            "status": 0 // 状态：0-待处理；1-处理中；2-处理完成；9-关闭
                        }
                    },
                    "created_by": 0, // 创建人
                    "created_at": 1589525584, // 创建时间
                    "creator": null // 创建人信息，null表示不存在，存在时为Object
                }
            ],
            "task": { // 任务信息
                "id": 141, // 任务ID
                "name": "another-同比环比-mysql数据源测试", // 任务名称
                "department_id": 2, // 部门ID
                "department": { // 部门信息
                    "id": 2, // 部门ID
                    "name": "质量研发部" // 部门名称
                }
            },
            "history": { // 告警记录信息
                "id": 100596, // 告警记录ID
                "uuid": "34ec840c-fb09-48fc-9cce-5edfd14a8fb7", // 告警记录uuid
                "batch": 872381664, // 收敛批次
                "metric": "6d00f7400f67792f5122e099ee2401765b444683", // 收敛指标
                "notice_time": 1589524980, // 通知时间
                "level": 1, // 通知级别
                "ctn": "{\"school_id\":\"8.0000\",\"user_id\":65}", // 告警内容，JSON字符串格式
                "created_at": 1589524980 // 创建时间
            }
        }
    }
}
```

## 工作流认领-/workflow/claim

`PUT /workflow/claim`

**Request Headers:**

- Content-Type: application/json

**Request Parameters:**

`无`

**Request Body:**

```json
{       
	"ids": [89, 22], // 此值是工作流的主键ID，可以批量(ID保持唯一，别重复)
    "created_by": 2, // 工作流认领人
	"remark": "" // 认领备注 可不填
}
```

**Response:**

```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "workflows": [
            {
                "id": 22, // 工作流ID
                "status": 1 // 状态：0-待处理；1-处理中；2-处理完成；9-关闭
            },
            {
                "id": 89, 
                "status": 1
            }
        ]
    }
}
```



## 工作流指派-/workflow/assign

`PUT /workflow/assign`

**Request Headers:**

- Content-Type: application/json

**Request Parameters:**

`无`

**Request Body:**

```json
{
	"ids": [1, 2, 3], // 不能重复，必填
	"remark": "", // 指派备注 必填
	"assignto": [2, 22112], // 被指派人用户ID
	"created_by": 2 // 操作人用户ID
}
```

**Response:**

```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "workflows": []
    }
}
```

## 工作流处理完成-/workflow/processed

`PUT /workflow/processed`

**Request Headers:**

- Content-Type: application/json

**Request Parameters:**

`无`

**Request Body:**

```json
{
    "ids": [
        89
    ], // 工作流ID，不可重复
    "created_by": 2, // 必填
    "remark": "test" // 备注 必填
}
```

**Response:**

```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "workflows": [
            {
                "id": 89,
                "status": 2
            }
        ]
    }
}
```


## 工作流重新激活-/workflow/reactive

`PUT /workflow/reactive`

**Request Headers:**

- Content-Type: application/json

**Request Parameters:**

`无`

**Request Body:**

```json
{
    "ids": [1, 2, 3], // 不能重复，必填
    "remark": "", // 备注 必填 
    "created_by": 2,
}
```

**Response:**

```json
{
   "code": 0,
   "msg": "success",
   "data": {
        "workflows": [
            {
                "id": 159,
                "status": 0
            }
        ]
   }
}
```


## 工作流关闭-/workflow/close

`PUT /workflow/close`

**Request Headers:**

- Content-Type: application/json

**Request Parameters:**

`无`

**Request Body:**

```json
{
    "ids": [1, 2, 3], // 不能重复，必填
    "remark": "", // 备注 必填
    "created_by": 2,
}
```

**Response:**

```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "workflows": [
            {
                "id": 159,
                "status": 9
            }
        ]
    }
}
```

