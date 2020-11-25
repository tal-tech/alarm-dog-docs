---
title: Java告警SDK
---

# Java告警SDK

该SDK为哮天犬监控告警平台告警接口的java版本的实现，增加了非常友好的方式使用，开箱即用。感谢 `@白宇（baiyu10）` 老师贡献SDK源码。


## 代码仓库

[https://github.com/tal-tech/alarm-dog-java-sdk](https://github.com/tal-tech/alarm-dog-java-sdk)

最新文档请参考代码仓库的 `README.md` 文件说明


## 下载并导入jar包到你的项目

支持JDK1.8及以上版本，jar包在 `release` 目录下，直达链接如下：

[https://github.com/tal-tech/alarm-dog-java-sdk/tree/master/release](https://github.com/tal-tech/alarm-dog-java-sdk/tree/master/release)


## 使用方法

### Step1 导包

```java
import com.xesv5.dog.Alarm;
import com.xesv5.dog.AlarmLevel;
import com.xesv5.dog.AlarmResponse;
import com.xesv5.dog.exceptions.AlarmException;
```

### Step2 实例化Alarm

`new`一个`Alarm`类的实例，并用`Builder`模式初始化参数
`taskid：Integer或int类型` `token: String`



1.简单使用

```java
Alarm alarm = new Alarm.Builder(taskid, "token").build();
```



2.设置其他可选参数

```java
ArrayList<Integer> userUids = new ArrayList<>(Arrays.asList(204077, 100001, 088821));
Alarm alarm = new Alarm.Builder(504,
        "8c9db98a9ba4431e313762232")
        .setAlarmGroups(userUids)
        .setWeChat(userUids)
        .setYachWorker(userUids)
        .setEmail(userUids)
        .setPhone(userUids)
        .setSms(userUids)
        .setDingWorker(userUids)
        .setDingGroup("token", "secret")
        .setYachGroup("token", "secret")
        .setBaseUri("https://alarm-dog-service.domain.com")
        .build();
```

### Step3 调用方法

测试`SDK`

```java
AlarmResponse resp = alarm.test();
```


告警通知内容：`content:Map对象`

```java
Map<String, Object> content = new HashMap<String, Object>(){
    {
        put("我是key", "value");
        put("age", 20);
    }
};
// 默认通知级别：Notice 通知，默认通知时间：当前时间戳
AlarmResponse resp = alarm.report(content);
```

指定告警级别，通知时间，暂不支持临时通知渠道
```java
Map<String, Object> content = new HashMap<String, Object>() {{
            put("key", "value");
            put("喜欢", "你");
        }};

AlarmResponse resp = alarm.report(content, AlarmLevel.WARNING, null);
```

## 使用实例完整代码

```java
import com.xesv5.dog.Alarm;
import com.xesv5.dog.AlarmLevel;
import com.xesv5.dog.AlarmResponse;
import com.xesv5.dog.exceptions.AlarmException;
import java.util.*;


public class Test {

    public static void main(String[] args) throws AlarmException {

        ArrayList<Integer> userUids = new ArrayList<>(Arrays.asList(44, 45, 22));

        Alarm alarm = new Alarm.Builder(504,
                "8c9db98a9ba443f9cb762232")
//                .setAlarmGroups(userUids)
//                .setWeChat(userUids)
//                .setYachWorker(userUids)
//                .setEmail(userUids)
//                .setPhone(userUids)
//                .setSms(userUids)
//                .setDingWorker(userUids)
//                .setDingGroup("122223", "123")
//                .setYachGroup("789", "222")
                .setBaseUri("https://alarm-dog-service.domain.com")
                .build();

        Map<String, Object> content = new HashMap<String, Object>() {{
            put("number", 1);
            put("喜欢", "你");
        }};
        
        AlarmResponse resp = alarm.report(content);
        AlarmResponse resp2 = alarm.report(content, AlarmLevel.ERROR, null);

        System.out.println(resp.getCode());
        System.out.println(resp2.getCode());

    }
}
```
