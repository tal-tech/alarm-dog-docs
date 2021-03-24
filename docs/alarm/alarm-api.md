---
告警接口API
---

# 告警接口API

哮天犬提供了不同语言的告警SDK，SDK实现了所有的告警接口，建议您优先使用SDK，告警SDK请移步：[哮天犬告警SDK](../sdk/summary-alarm.md)。

使用告警接口或者告警SDK之前，请注意区分环境，测试环境后台创建的任务请使用测试环境的告警接口，生产环境后台创建的告警任务请使用生产环境的告警接口，接口环境说明请移步：[接口环境说明](./api-env.md)。


## 告警上报接口-/alarm/report

`POST /alarm/report`

用于发送告警，所有告警全部使用该接口。

**Request Headers:**
- Content-Type: application/json

**Request Parameters:**

Field | Type | Required | Comment
--- | --- | --- | ---
taskid | Number | Y | 告警任务ID，创建告警任务获得
timestamp | Number | Y | 时间戳，单位秒，与标准时间前后误差不能超过30分钟
sign | String | Y | 接口签名，根据 `md5(taskid+"&"+timestamp+token)` 算法生成，具体请参考附录： [对外API接口鉴权规则说明](#_1-对外api接口鉴权规则说明)
ctn | Object | Y | 告警内容，Json对象格式，可以根据业务情况填任意字段，**建议**至少包含errno、error、trace三个字段
notice_time | Number | N | 告警通知时间，时间戳，单位秒，默认为告警平台接收到告警生成的时间戳
level | Number | N | 告警级别，仅做标记或者告警中条件判断，枚举类型，0-通知；1-警告；2-错误；3-紧急；
receiver | Object | N | 自定义告警接收人，不推荐使用，指定告警接收人之后会**强制覆盖**任务中预定义的告警接收人，会导致通过后台配置的告警通知人失效，适用于网关、日志中心这种综合性平台的特殊场景
receiver.alarmgroup | Array | N | 告警组ID列表，如果告警组和下方自定义的通知渠道同时使用，将取并集进行发送告警
receiver.channels | Object | N | 自定义告警渠道配置信息
receiver.channels.dinggroup | Array | N | 告警接收钉钉机器人，每个item为 webhook 和 secret 的配置
receiver.channels.dinggroup.*.webhook | String | N | 钉钉机器人webhook的access_token的值
receiver.channels.dinggroup.*.secret | String | N | 钉钉机器人安全设置中加密下面一行的密钥
receiver.channels.dingworker | Array | N | 钉钉工作通知，用户工号列表，不带前面数字0，比如01写为1
receiver.channels.email | Array | N | 邮件通知，用户工号列表，不带前面数字0，比如01写为1
receiver.channels.sms | Array | N | 短信通知，用户工号列表，不带前面数字0，比如01写为1
receiver.channels.phone | Array | N | 电话通知，用户工号列表，不带前面数字0，比如01写为1
receiver.channels.wechat | Array | N | 微信通知（暂不支持），用户工号列表，不带前面数字0，比如01写为1
receiver.channels.webhook | String | N | Webhook通知，必须以http/https协议开头的有效URL

**Request Body:**
```json
{
    "taskid": 100001,
    "timestamp": 1582650647,
    "sign": "md5(taskid+"&"+timestamp+token)",
    "ctn": {
        "errno": 10086,
        "error": "网络信号不好",
        "hostname": "bj-sjhl-alarm-online"
    },
    "notice_time": 1583230743,
    "level": 1,
    "receiver": {
        "alarmgroup": [12, 23],
        "channels": {
            "dinggroup": [
                {
                    "webhook": "xxxxxxxxxxxxxxxxxx",
                    "secret": "XXXXXXXXXXXXXXXXXXX"
                }
            ],
            "dingworker": [
                98333,
                33333
            ],
            "email": [
                98333,
                33333
            ],
            "sms": [
                98333,
                33333
            ],
            "wechat": [
                98333,
                33333
            ],
            "phone": [
                98333,
                33333
            ]
        }
   }
}
```

**Response:**
```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "uuid": "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
        "report_time": "2020-02-02 12:12:12"
    }
}
```
Field | Type | Comment
--- | --- | ---
code | Number | 状态码：0-成功；其他-失败
msg | String | 错误信息，以 `code` 的值为准
data | Object | 响应结果
data.uuid | String | 该告警信息唯一ID，基于uuid v4版本生成
data.report_time | String | 告警上报时间，即告警平台接收到告警的实际


## 告警测试接口-/alarm/test

`POST /alarm/test`

用于测试签名是否正确，可以用于刚接入哮天犬告警接口时签名调试工作，用于平台化配置哮天犬告警场景，例如k8s构建通知可以配置哮天犬告警通知，为了避免任务ID `taskid` 和 `token` 填写错误，可以调用此接口验证 `taskid` 和 `token` 是否填写正确，但不会实际发生告警。

**Request Headers:**
- Content-Type: application/json

**Request Parameters:**

Field | Type | Required | Comment
--- | --- | --- | ---
taskid | Number | Y | 告警任务ID，创建告警任务获得
timestamp | Number | Y | 时间戳，单位秒，与标准时间前后误差不能超过30分钟
sign | String | Y | 接口签名，根据 `md5(taskid+"&"+timestamp+token)` 算法生成，具体请参考附录： [对外API接口鉴权规则说明](#_1-对外api接口鉴权规则说明)

**Request Body:**
```json
{
    "taskid": 100001,
    "timestamp": 1582650647,
    "sign": "md5(taskid+\"&\"+timestamp+token)"
}
```

**Response:**
```json
{
    "code": 0,
    "msg": "success",
    "data": {}
}
```
Field | Type | Comment
--- | --- | ---
code | Number | 状态码：0-成功；其他-失败
msg | String | 错误信息，以 `code` 的值为准
data | Object | 响应结果，此处为空

失败时返回：

```json
{
    "data": {},
    "msg": "signature invalid",
    "code": 401
}
```


## 附录

### 1. 对外API接口鉴权规则说明

该鉴权需要`taskid`和`token`两个字段，任务创建之后可以获得，并且如果泄露，可以前往哮天犬平台重置

为了减少误解及不必要的学习成本，该规则采用API网关鉴权相同的规则，即：

`sign = md5(taskid+"&"+timestamp+token)` ，其中 `taskid` 为任务ID，`timestamp` 为当前系统时间戳，单位秒，与哮天犬系统时间相差不超过半小时，`token` 为创建任务之后生成

然后将三个参数放入请求参数中：

```shell
curl -X POST 'https://alarm-dog-service.domain.com/alarm/report' \
    -H 'Content-Type: application/json' \
    -d '{
        "taskid": taskid,
        "timestamp": timestamp,
        "sign": "sign",
        "ctn": {
        
        }
    }'
```

在线签名生成，AppID处填写taskid，AppKey处填写token：[http://10.90.101.114/gateway.php](http://10.90.101.114/gateway.php)（此处只需要使用该算法即可，不用加上Header（X-Auth-APPID））

