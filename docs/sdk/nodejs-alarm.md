---
title: NodeJs脚本发送告警示例
---

# NodeJs脚本发送告警示例

需要安装依赖 `urllib`：

```shell
yarn add urllib

# 或者
npm install urllib --save
```

脚本示例如下，请根据自身情况修改使用：

```js
var md5 = require('crypto').createHash('md5')
var urllib = require('urllib');

var taskid = 189; // 告警任务ID
var token = 'xxxxxx'; // 告警任务token
var [timestamp, sign] = gen_sign(taskid, token)
var options = {
  method: 'POST',
  dataType: 'json',
  headers: {
    'Content-Type': 'application/json'
  },
  content: JSON.stringify({
    taskid: 189,
    timestamp: timestamp,
    sign: sign,
    ctn: {
      say: 'hello world'
    }
  })
}
urllib.request('https://alarm-dog-service.domain.com/alarm/report', options, function (err, data, res) {
  if (err) {
    throw err; // you need to handle error
  }
  console.log(res.statusCode);
  console.log(res.headers);
  // data is Buffer instance
  console.log(data);
});

/**
 * 生成签名
 * @param {Number} taskid 
 * @param {String} token 
 */
function gen_sign(taskid, token)
{
  var timestamp = parseInt(Date.now() / 1000)

  var str = `${taskid}&${timestamp}${token}`
  var sign = md5.update(str).digest('hex')
  
  return [timestamp, sign]
}

```

将脚本保存为 `alarm.js`，然后执行 `node alarm.js`，可能输出以下示例：

```
200
{
  server: 'Tengine',
  'content-type': 'application/json; charset=utf-8',
  'content-length': '117',
  connection: 'keep-alive',
  date: 'Sun, 09 Aug 2020 09:08:09 GMT',
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  'access-control-allow-credentials': 'true',
  'access-control-allow-headers': '*,DNT,Keep-Alive,User-Agent,Cache-Control,Content-Type,Authorization',
  'access-control-expose-headers': '*',
  'access-control-max-age': '86400',
  'xes-app': 'openresty/1.15.8.1, xes-dny-sjhl-60-36',
  via: 'vcache11.cn2639[21,0]',
  'timing-allow-origin': '*',
  eagleid: '014791a115969640893543749e'
}
{
  data: {
    uuid: '64f6401a-2818-4a0e-a10b-7f53380b5e4d',
    report_time: '2020-08-09 17:08:09'
  },
  msg: 'success',
  code: 0
}
```
