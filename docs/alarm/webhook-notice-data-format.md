---
title: WebHook通知数据交互格式
---

## 约定

哮天犬发送webhook通知，约定请求方式为 **POST**，请求Header中 **User-Agent** 包含 `dog/` ，例如 `User-Agent: dog/1.0`，请求参数使用body部分传输 json，即请求header中包含 `Content-Type: application/json`，json的内容格式约定如下：

```json
{
  "event": "{EVENT}",
  "type": "{TYPE}",
  "data": {
    // 提交的data数据
  },
  "extra": {
    // 其他附加字段
  }
}
```

约定webhook响应状态码为 `200` 即为成功，无论响应的数据是什么。

调用webhook的超时时间为`200毫秒`，请注意优化webhook性能，避免超时。

### 格式

以上body部分的取值请参考：

<table>
    <thead>
        <tr>
            <th>event (String)</th>
            <th>type (String)</th>
            <th>body (Object)</th>
            <th>extra (Object)</th>
            <th>说明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>PING</td>
            <td>ping</td>
            <td>无</td>
            <td></td>
            <td>用于测试该webhook是否可用</td>
        </tr>
        <tr>
            <td rowspan="4">ALARM</td>
            <td>not_save_db</td>
            <td>
task | Object | 告警任务信息 <br/>
task.id | Number | 告警任务ID <br/>
task.name | String | 告警任务名称 <br/>
msg | Object | 消息体 <br/>
msg.uuid | String | 该告警唯一ID <br/>
msg.leve | Number | 告警级别 <br/>
msg.ctn | Object | 告警内容 <br/>
msg.notice_time | Number | 告警通知时间，时间戳秒
            </td>
            <td></td>
            <td>未入库告警通知</td>
        </tr>
        <tr>
            <td>compressed</td>
            <td>
task | Object | 告警任务信息 <br/>
task.id | Number | 告警任务ID <br/>
task.name | String | 告警任务名称 <br/>
history | Object | 消息体 <br/>
history.id | Number | 消息自增ID <br/>
history.batch | Number | 收敛批次ID <br/>
history.metric | String | 收敛指标 <br/>
history.uuid | String | 该告警唯一ID <br/>
history.leve | Number | 告警级别 <br/>
history.ctn | Object | 告警内容 <br/>
history.notice_time | Number | 告警通知时间，时间戳
            </td>
            <td></td>
            <td>收敛告警通知</td>
        </tr>
        <tr>
            <td>compress_not_match</td>
            <td>
task | Object | 告警任务信息 <br/>
task.id | Number | 告警任务ID <br/>
task.name | String | 告警任务名称 <br/>
history | Object | 消息体 <br/>
history.id | Number | 消息自增ID <br/>
history.uuid | String | 该告警唯一ID <br/>
history.leve | Number | 告警级别 <br/>
history.ctn | Object | 告警内容 <br/>
history.notice_time | Number | 告警通知时间，时间戳秒
            </td>
            <td></td>
            <td>未收敛告警通知</td>
        </tr>
        <tr>
            <td>compress_disable</td>
            <td>
task | Object | 告警任务信息 <br/>
task.id | Number | 告警任务ID <br/>
task.name | String | 告警任务名称 <br/>
history | Object | 消息体 <br/>
history.id | Number | 消息自增ID <br/>
history.uuid | String | 该告警唯一ID <br/>
history.leve | Number | 告警级别 <br/>
history.ctn | Object | 告警内容 <br/>
history.notice_time | Number | 告警通知时间，时间戳秒
            </td>
            <td></td>
            <td>未开启收敛功能告警通知</td>
        </tr>
        <tr>
            <td>UPGRADE</td>
            <td>upgrade</td>
            <td>
task | Object | 告警任务信息 <br/>
task.id | Number | 告警任务ID <br/>
task.name | String | 告警任务名称 <br/>
history | Object | 消息体 <br/>
history.id | Number | 消息自增ID <br/>
history.uuid | String | 该告警唯一ID <br/>
history.leve | Number | 告警级别 <br/>
history.ctn | Object | 告警内容 <br/>
history.notice_time | Number | 告警通知时间，时间戳秒
            </td>
            <td></td>
            <td>告警升级通知</td>
        </tr>
        <tr>
            <td rowspan="2">RECOVERY</td>
            <td>not_save_db</td>
            <td>
task | Object | 告警任务信息 <br/>
task.id | Number | 告警任务ID <br/>
task.name | String | 告警任务名称 <br/>
msg | Object | 消息体 <br/>
msg.uuid | String | 该告警唯一ID <br/>
msg.leve | Number | 告警级别 <br/>
msg.ctn | Object | 告警内容 <br/>
msg.notice_time | Number | 告警通知时间，时间戳秒
            </td>
            <td></td>
            <td>告警恢复通知（不入库类型）</td>
        </tr>
        <tr>
            <td>recovery</td>
            <td>
task | Object | 告警任务信息 <br/>
task.id | Number | 告警任务ID <br/>
task.name | String | 告警任务名称 <br/>
history | Object | 消息体 <br/>
history.id | Number | 消息自增ID <br/>
history.uuid | String | 该告警唯一ID <br/>
history.leve | Number | 告警级别 <br/>
history.ctn | Object | 告警内容 <br/>
history.notice_time | Number | 告警通知时间，时间戳秒
            </td>
            <td></td>
            <td>告警恢复通知（入库类型）</td>
        </tr>
        <tr>
            <td rowspan="8">WORKFLOW</td>
            <td>remind_pending</td>
            <td>
task | Object | 告警任务信息 <br/>
task.id | Number | 告警任务ID <br/>
task.name | String | 告警任务名称 <br/>
history | Object | 消息体 <br/>
history.id | Number | 消息自增ID <br/>
history.uuid | String | 该告警唯一ID <br/>
history.leve | Number | 告警级别 <br/>
history.ctn | Object | 告警内容 <br/>
history.notice_time | Number | 告警通知时间，时间戳秒 <br/>
workflow | Object | 工作流信息 <br/>
workflow.id | Number | 工作流ID
            </td>
            <td></td>
            <td>待认领工作流提醒通知</td>
        </tr>
        <tr>
            <td>remind_processing</td>
            <td>
task | Object | 告警任务信息 <br/>
task.id | Number | 告警任务ID <br/>
task.name | String | 告警任务名称 <br/>
history | Object | 消息体 <br/>
history.id | Number | 消息自增ID <br/>
history.uuid | String | 该告警唯一ID <br/>
history.leve | Number | 告警级别 <br/>
history.ctn | Object | 告警内容 <br/>
history.notice_time | Number | 告警通知时间，时间戳秒 <br/>
workflow | Object | 工作流信息 <br/>
workflow.id | Number | 工作流ID
            </td>
            <td></td>
            <td>待处理完成工作流提醒通知</td>
        </tr>
        <tr>
            <td>generated</td>
            <td>
task | Object | 告警任务信息 <br/>
task.id | Number | 告警任务ID <br/>
task.name | String | 告警任务名称 <br/>
history | Object | 消息体 <br/>
history.id | Number | 消息自增ID <br/>
history.uuid | String | 该告警唯一ID <br/>
history.leve | Number | 告警级别 <br/>
history.ctn | Object | 告警内容 <br/>
history.notice_time | Number | 告警通知时间，时间戳秒 <br/>
workflow | Object | 工作流信息 <br/>
workflow.id | Number | 工作流ID
            </td>
            <td></td>
            <td>工作流创建提醒</td>
        </tr>
        <tr>
            <td>claim</td>
            <td>
task | Object | 告警任务信息 <br/>
task.id | Number | 告警任务ID <br/>
task.name | String | 告警任务名称 <br/>
history | Object | 消息体 <br/>
history.id | Number | 消息自增ID <br/>
history.uuid | String | 该告警唯一ID <br/>
history.leve | Number | 告警级别 <br/>
history.ctn | Object | 告警内容 <br/>
history.notice_time | Number | 告警通知时间，时间戳秒 <br/>
workflow | Object | 工作流信息 <br/>
workflow.id | Number | 工作流ID <br/>
pipeline | Object | 工作流流程信息 <br/>
pipeline.remark | String | 备注 <br/>
pipeline.user | Object | 操作工作流的用户信息 <br/>
pipeline.user.uid | Number | 用户工号，去零整数 <br/>
pipeline.user.username | String | 用户姓名 <br/>
pipeline.user.user | String | 邮箱前缀
            </td>
            <td></td>
            <td>工作流认领通知</td>
        </tr>
        <tr>
            <td>assign</td>
            <td>
task | Object | 告警任务信息 <br/>
task.id | Number | 告警任务ID <br/>
task.name | String | 告警任务名称 <br/>
history | Object | 消息体 <br/>
history.id | Number | 消息自增ID <br/>
history.uuid | String | 该告警唯一ID <br/>
history.leve | Number | 告警级别 <br/>
history.ctn | Object | 告警内容 <br/>
history.notice_time | Number | 告警通知时间，时间戳秒 <br/>
workflow | Object | 工作流信息 <br/>
workflow.id | Number | 工作流ID <br/>
pipeline | Object | 工作流流程信息 <br/>
pipeline.remark | String | 备注 <br/>
pipeline.user | Object | 操作工作流的用户信息 <br/>
pipeline.user.uid | Number | 用户工号，去零整数 <br/>
pipeline.user.username | String | 用户姓名 <br/>
pipeline.user.user | String | 邮箱前缀 <br/>
pipeline.assignto | Array | 被指派人信息 <br/>
pipeline.assignto.*.uid | Number | 工号 <br/>
pipeline.assignto.*.username | Number | 姓名 <br/>
pipeline.assignto.*.user | Number | 邮箱前缀
            </td>
            <td></td>
            <td>工作流指派通知</td>
        </tr>
        <tr>
            <td>processed</td>
            <td>
task | Object | 告警任务信息 <br/>
task.id | Number | 告警任务ID <br/>
task.name | String | 告警任务名称 <br/>
history | Object | 消息体 <br/>
history.id | Number | 消息自增ID <br/>
history.uuid | String | 该告警唯一ID <br/>
history.leve | Number | 告警级别 <br/>
history.ctn | Object | 告警内容 <br/>
history.notice_time | Number | 告警通知时间，时间戳秒 <br/>
workflow | Object | 工作流信息 <br/>
workflow.id | Number | 工作流ID <br/>
pipeline | Object | 工作流流程信息 <br/>
pipeline.remark | String | 备注 <br/>
pipeline.user | Object | 操作工作流的用户信息 <br/>
pipeline.user.uid | Number | 用户工号，去零整数 <br/>
pipeline.user.username | String | 用户姓名 <br/>
pipeline.user.user | String | 邮箱前缀
            </td>
            <td></td>
            <td>工作流处理完成通知</td>
        </tr>
        <tr>
            <td>reactive</td>
            <td>
task | Object | 告警任务信息 <br/>
task.id | Number | 告警任务ID <br/>
task.name | String | 告警任务名称 <br/>
history | Object | 消息体 <br/>
history.id | Number | 消息自增ID <br/>
history.uuid | String | 该告警唯一ID <br/>
history.leve | Number | 告警级别 <br/>
history.ctn | Object | 告警内容 <br/>
history.notice_time | Number | 告警通知时间，时间戳秒 <br/>
workflow | Object | 工作流信息 <br/>
workflow.id | Number | 工作流ID <br/>
pipeline | Object | 工作流流程信息 <br/>
pipeline.remark | String | 备注 <br/>
pipeline.user | Object | 操作工作流的用户信息 <br/>
pipeline.user.uid | Number | 用户工号，去零整数 <br/>
pipeline.user.username | String | 用户姓名 <br/>
pipeline.user.user | String | 邮箱前缀
            </td>
            <td></td>
            <td>工作流被重新激活通知</td>
        </tr>
        <tr>
            <td>close</td>
            <td>
task | Object | 告警任务信息 <br/>
task.id | Number | 告警任务ID <br/>
task.name | String | 告警任务名称 <br/>
history | Object | 消息体 <br/>
history.id | Number | 消息自增ID <br/>
history.uuid | String | 该告警唯一ID <br/>
history.leve | Number | 告警级别 <br/>
history.ctn | Object | 告警内容 <br/>
history.notice_time | Number | 告警通知时间，时间戳秒 <br/>
workflow | Object | 工作流信息 <br/>
workflow.id | Number | 工作流ID <br/>
pipeline | Object | 工作流流程信息 <br/>
pipeline.remark | String | 备注 <br/>
pipeline.user | Object | 操作工作流的用户信息 <br/>
pipeline.user.uid | Number | 用户工号，去零整数 <br/>
pipeline.user.username | String | 用户姓名 <br/>
pipeline.user.user | String | 邮箱前缀
            </td>
            <td></td>
            <td>工作流关闭通知</td>
        </tr>
    </tbody>
</table>

说明：上表中 task.id、task.name 表示的是JSON中的Object：

```json
{
    "task": {
        "id": 123,
        "name": "哮天犬测试"
    }
}
```

上表中 pipeline.assignto.*.uid、pipeline.assignto.*.username 表示的是JSON中的Array：

```json
{
    "pipeline": {
        "assignto": [
            {
                "uid": 123,
                "username": "张三"
            },
            {
                "uid": 456,
                "username": "李四"
            }
        ]
    }
}
```

## 示例请求

```http
POST /admin HTTP/1.1
Content-Length: 467
User-Agent: dog/1.0
Content-Type: application/json
Host: localhost:9501

{"event":"WORKFLOW","type":"close","data":{"workflow":{"id":1,"task_id":102,"history_id":3,"created_at":"1970-01-06 08:07:12","status":"\u5904\u7406\u4e2d"},"task":{"id":102,"name":"\u7530\u7247\u6d4b\u8bd5"},"history":{"id":3,"uuid":"e3c25704-a54b-40ab-ab08-0e2009d9673e","level":"\u9519\u8bef"},"pipeline":{"remark":"423","created_at":"2020-05-02 23:27:51","user":{"uid":1,"username":"ethananony","email":"ethananony@aliyun.com","user":"ethananony"}}},"extra":{}}
```


