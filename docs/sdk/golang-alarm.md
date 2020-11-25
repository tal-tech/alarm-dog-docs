---
title: Golang告警SDK
---

# Golang告警SDK

该SDK为哮天犬监控告警平台告警接口的Golang版本的实现，增加了非常友好的方式使用，开箱即用。感谢 [@codinghuang](https://github.com/huanghantao) 老师贡献SDK源码。


## 代码仓库

[https://github.com/tal-tech/alarm-dog-go-sdk](https://github.com/tal-tech/alarm-dog-go-sdk)

最新文档请参考代码仓库的 `README.md` 文件说明


## 如何安装此SDK

```bash
go get github.com/tal-tech/alarm-dog-go-sdk
```

如果显示要输入密码，并且一直输入都没有效，可以尝试先`clone`一下，然后再次执行`go get`命令。如下：

```bash
git clone https://github.com/tal-tech/alarm-dog-go-sdk.git

go get github.com/tal-tech/alarm-dog-go-sdk
```

如果拉取失败，请尝试加上`-u`参数，命令如下：

```bash
go get -u github.com/tal-tech/alarm-dog-go-sdk
```


## 使用例子

### 基本例子

```go
package main

import "github.com/tal-tech/alarm-dog-go-sdk/alarm"

func main() {
    a := alarm.New()
    a.SetTaskID(637).SetToken("349f44f37cdde77b2c393c7761e667f382387b0d")

    var content = make(map[string]string)
    content["errno"] = "10086"
    content["error"] = "您的余额已不足"

    reportBody := alarm.ReportBody{
        Ctn: content,
    }

    response := a.Report(reportBody)
    println(response)
}
```


## 开发指南

想要高效的进行`Channel`添加和修改，我们可以使用`receiver/channel`目录下的`channel.template`模板来生成代码。使用例子：


### 安装工具

```bash
go get -u github.com/cheekybits/genny
```


### 代码生成

```bash
genny -in=channel.template -out=qq.go gen "ChannelType=QQ"
```

此时，会生成一个名字叫做`QQ`的`Channel`。

同时，我们可以生成对应的测试文件：

```bash
genny -in=channel_test.template -out=qq_test.go gen "ChannelType=QQ"
```


### 执行测试

```bash
go test -timeout 30s ./... -count=1
```


#### 手机告警测试

请确保在哮天犬后台配置了手机号。[详情参考](../faq/cannot-receiver-sms-phone.html)
