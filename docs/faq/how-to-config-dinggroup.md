---
title: 怎么配置钉钉机器人
---

# 怎么配置钉钉机器人（钉钉群）通知

在创建告警任务或者告警通知组时，您可能会遇到要配置钉钉机器人（钉钉群）的告警通知，例如下面这样：

![图 29](../../images/67140110993a91a96859f84fb90a8eb03dbbcd298ca8d74716321a126e47694e.png)  

首先点击添加机器人，页面会出现 `WebToken` 和 `Secret` 两个配置，如果下图所示：

![图 30](../../images/a89708b923c66ac46e7de5e421c2e54cffc06b3436dd050e9bbaeea25fb68a3a.png)  

下面讲解如何配置钉钉机器人。


## 钉钉机器人配置

进入到钉钉，找一个群，没有则创建，然后点击群右上角群设置，点击智能群助手展开机器人配置：

![图 31](../../images/51e5a2786926a1ccf11dc04d5da4f5407e3429c9cc730b4f55ca03c959e3f92b.png)  

点击添加机器人创建按钮：

![图 32](../../images/89d2f12f2938e73ea46289aa60ca515290fc7127d9ad8ff2b76f8b3a5c2b52fc.png)  

然后点击如下图所示位置：

![图 33](../../images/47aab321332d81fc62daf157db596160f7160f4200575504ec0f22ee0a023e86.png)  

选择自定义：

![图 34](../../images/1054d7ca1c784308a83e9095aa51080e763266308c560d7b6579b6e8a50adee3.png)  

然后点添加，机器人名称自定义，根据实际情况填写，例如 `哮天犬监控告警平台`

![图 35](../../images/c19483e1a5129e097e0f2bdd6142e1330a7bff22b8f1b0e185fc1fb087133b4f.png)  

如上图所示，将截图中指的 `加签` 下方的Secret复制到浏览器页面：

![图 36](../../images/8c7cb538de614d0854650e2158726ba96a63fe07fd544568bd373432242dda5c.png)  

接着回到钉钉添加机器人页面，点击完成，得到如下面截图所示的Webhook，然后复制：

![图 37](../../images/ddf74867c5cb8243188c61c0c3d947e94c4b1f76ea53ada21bd3ecb903a35d2a.png)  

然后回到浏览器粘贴复制的Webhook的值，当浏览器输入框失去焦点时会自动提取Webhook的中的 `access_token` 的值：

![图 38](../../images/018b8afb8d0e7a6d688b833ae12f972993dd947e04d662fbc6d371e869d83bcf.png)  

![图 39](../../images/4e020d07ed7ce291f83b90a9002e368ad505b435482e710e18adc5ecf478e8f8.png)  

至此，一个机器人就配置好了，下面我们可以测试一下我们的配置是否正确，点击绿色的测试按钮，如果成功，机器人会发送一条测试通知，如果失败，浏览器端会提示具体错误：

![图 40](../../images/a2960c86ac0a125ac38057127461ed99a76ec9821957ecabe0f9152654b63aef.png)  

测试成功，机器人会收到如下通知：

![图 41](../../images/ee06db6b3f8ad72a05e4ec48d32c3a42b01c5ba33bf0a94fe2d1b260081f2e32.png)  

至此，一个机器人的配置及测试全部完成。


## 多个机器人的配置

如果你需要配置多个机器人，只需要点击添加机器人按钮创建多个机器人配置项，然后重复上面的步骤重复 [钉钉机器人配置](#钉钉机器人配置) 创建多个机器人，一个钉钉群可以配置最多5个自定义机器人。


## 为什么要配置多个机器人

钉钉官方对单个机器人进行了限制，每个机器人一分钟最多允许发送20个通知，如果超过则会限流，甚至禁言10分钟。为了减少这种事情发生，哮天犬支持配置多个机器人，这多个机器人并不是说发送通知时给这些机器人一起发送，而是优先第一个发送，当第一个机器人一分钟发送超过了19次，则进入 `sleep` 状态，使用下一个机器人发送，依次类推，如果配置5个机器人，则一分钟最多可以接收 19*5 = 95 条告警，较之前多5倍，这样就从侧面增加了群接收告警的能力。


## 怎样能让告警同时给多个群发送

由于前期设计未考虑这种情况，所以这种场景原则上是不支持的，但是可以利用 `分级告警` 功能去实现这种功能。

![图 42](../../images/3c70ed4c73d2debdc912a957ebd8cd0192c43809e061b3f65c1423ab1e032f5c.png)  

按照上面截图中所示进行配置，即可实现告警通知发给多个机器人，如果需要配置更多个，重复上面的分级告警即可，添加多个分级条件组。


## 为什么收不到告警通知

1. 检查钉钉机器人配置是否正确，可以按照 [钉钉机器人配置](#钉钉机器人配置) 中的机器人测试来检查，如果存在问题，请修改，最多20s即可生效；
2. 检查钉钉机器人是不是短时间已发送大量告警通知，查看群中1分钟内机器人发送的告警的数量是否超过 `N * 19` ，其中 `N` 为在哮天犬配置的机器人的个数；
3. 有可能因哮天犬服务端大量发送告警通知，导致服务端IP被封，该问题目前暂时无法解决，建议您同时配置知音楼机器人避免钉钉封掉告警通知；


## 备注说明

钉钉工作通知和机器人通知限制特别严重，请配置好告警收敛减少重复类告警发送（告警收敛请移步 [告警收敛](../advance-function/compress.md)），请配置知音楼告警通知作为保底。
