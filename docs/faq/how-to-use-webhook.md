---
title: Webhook通知渠道怎么用
---

# Webhook通知渠道怎么用

在告警通知人里面的 `WebHook` 通知渠道怎么用？是填写钉钉或者知音楼的 `WebHook` 吗？其实这个跟钉钉、知音楼没有关系，他是一个特殊的通知渠道，他通知的不是人，是系统。比如这里填写一个URL之后，当该任务触发告警之后，会向这个URL里面发送通知，达到通知对应系统的目的。


## WebHook通知数据格式

请参考 [WebHook通知数据交互格式约定](../alarm/webhook-notice-data-format.md)

通知的示例报文如下：

```
POST /alarm/callback HTTP/1.1
Host: 127.0.0.1:9988
Connection: keep-alive
User-Agent: GuzzleHttp/6.5.3 curl/7.68.0 PHP/7.2.26
Content-Type: application/json
Accept-Encoding: gzip, deflate
Content-Length: 259

{"event":"ALARM","type":"compress_disable","data":{"task":{"id":1,"name":"\u7530\u7247\u6d4b\u8bd5"},"history":{"id":"","batch":0,"metric":"","uuid":"94c598d1-95ab-4398-aa7e-7f007af37b26","level":0,"ctn":"{\"test\":123}","notice_time":1596177364}},"extra":[]}
```


## WebHook配置

如下图所示，配置一个有效的URL地址即可，且保证网络是可通的

![图 1](../../images/b6caa26f285d97b9244f1e778a23d4d90c18a0ccaa6a3ce5e09245a149b4c464.png)  
