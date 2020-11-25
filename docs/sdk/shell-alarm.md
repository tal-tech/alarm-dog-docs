---
title: Shell脚本发送告警示例
---

# Shell脚本发送告警示例

脚本示例如下，请根据自身情况修改使用：

```shell
#!/bin/bash

taskid=189 # 告警任务ID
token="46fae93eaagc34f41a90c716168ba3b212b14ddd" # 告警任务token（示例token）

# 生成签名
function genSign() {
    local taskid=$1
    local timestamp=$2
    local token=$3
    if [ `uname -s` == "Darwin" ]; then
        echo -n "$taskid&$timestamp$token" | md5
    else
        echo -n "$taskid&$timestamp$token" | md5sum | awk '{printf $1}'
    fi
}

# 转义特殊字符
function escape() {
    local w=${1//\"/\\\"}
    echo $w
}

# 生成签名
timestamp=`date +%s`
sign=`genSign "$taskid" "$timestamp" "$token"`

# 请求参数
errno=10086
error="您的余额已不足"
body='{
        "taskid": "'${taskid}'",
        "timestamp": "'${timestamp}'",
        "sign": "'${sign}'",
        "ctn": {
            "errno": '${errno}',
            "error": "'`escape "$error"`'"
        }
    }'

echo 'request body is:'
echo $body

# 发送请求
curl -X POST 'https://alarm-dog-service.domain.com/alarm/report' \
    -H 'Content-Type: application/json' \
    -d "$body"

```

将脚本保存为 `dog.sh`，然后添加可执行权限 `chmod a+x dog.sh`，然后执行 `./dog.sh`，可能输出以下示例：

```
request body is:
{ "taskid": "189", "timestamp": "1596210687", "sign": "7abe4822773ca649dffc6bd431bca8e5", "ctn": { "errno": 10086, "error": "您的余额已不足" } }
{"data":{"uuid":"0be874d8-1a1f-4592-8163-5aa072166b47","report_time":"2020-07-31 23:51:34"},"msg":"success","code":0}
```
