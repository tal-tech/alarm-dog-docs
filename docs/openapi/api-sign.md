---
title: 接口签名
---

# 接口签名

## 鉴权说明

OpenAPI 是操作告警任务等哮天犬后台数据的相关接口。与告警接口不同，鉴权方式也稍有不同

主要分为两步：

- 应用鉴权（必须）
- 任务鉴权（非告警任务操作不需要任务鉴权）

应用鉴权是必须的，如果存在应用鉴权，则两种鉴权需要一起使用。


## 应用鉴权

**OpenAPI 涉及的所有接口都必须使用应用鉴权**

为了减少误解及不必要的学习成本，该规则采用API网关鉴权相同的规则，即：

`sign = md5(appid + '&' + timestamp + token) `

> appid 和 token 需要向系统管理员申请
>
> 此处 `+` 符号表示字符串连接符
> 
> timestamp（单位秒、Unix 时间戳），要求与哮天犬系统时间差不超过 30 分钟

然后将三个参数放入请求Header参数中：

```shell
curl -X GET http://localhost:9501/openapi/department \
  -H 'X-Dog-Appid: 385732' \
  -H 'X-Dog-TimeStamp: 1595847866' \
  -H 'X-Dog-Sign: d7d45f31a245abb9125f3xxxxxx'
```

[在线签名生成](http://10.90.101.114/gateway.php)，AppID 处填写 appid，AppKey 处填写 token


## 任务鉴权

**OpenAPI 任务相关操作需要任务鉴权**

此任务是哮天犬告警平台的告警任务。即存在告警任务、操作告警任务时才有该鉴权。

- 例：创建告警任务、部门列表等接口调用时应不存在具体应用，所以**不需要**任务鉴权。

- 例：编辑告警任务、删除告警任务接口调用时存在具体应用，所以**需要**任务鉴权。

为了减少误解及不必要的学习成本，该规则采用API网关鉴权相同的规则，即：

`sign = md5(id + '&' + timestamp + secret)`

> id: 任务生成的参数id
>
> secret: 创建任务后生成的secret
> 
> timestamp（单位秒、Unix 时间戳），要求与哮天犬系统时间差不超过 30 分钟。

然后将三个参数放入请求参数中：

```shell
curl -X POST http://myopenapi.com \
  -H 'Content-Type: application/json' \
  -d '{ "id": id, "timestamp": timestamp, "sign": sign }'
```

> 以上三个参数可以放在请求参数的 query、body 参数中

[在线签名生成](http://10.90.101.114/gateway.php)，AppID 处填写 appid，AppKey 处填写 secret
