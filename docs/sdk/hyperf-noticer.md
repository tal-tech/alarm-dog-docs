---
title: 哮天犬通知SDK
---

# 哮天犬通知组件

适配Hyperf框架的通知组件，支持短信、电话、邮件、钉钉工作通知、钉钉机器人、知音楼工作通知、知音楼机器人等通知渠道。

该SDK可以用于项目中直接往以上七种通知渠道发送通知，不是告警通知SDK，请注意区分，告警通知SDK请移步：[PHP告警SDK](./php-alarm.md)。

::: warning
该SDK只适配过 `Hyperf1.1`、`Hyperf2.0` 框架，未适配其他框架，其他框架请测试是否可用之后再用于生产环境
:::


## 代码仓库

[https://github.com/tal-tech/alarm-dog-noticer](https://github.com/tal-tech/alarm-dog-noticer)

最新文档请参考代码仓库的 `README.md` 文件说明


## 安装

```shell
# composer安装依赖
composer require alarm-dog/noticer
```


## 配置

使用Hyperf框架工具生成默认配置：

```shell
php bin/hyperf.php vendor:publish alarm-dog/noticer
```

默认配置文件将会被拷贝到框架根目录 `config/autoload/noticer.php`

::: warning
注意修改配置文件中的 `env` 环境变量配置
:::


## 使用

### 邮件通知

```php
use Dog\Noticer\Channel\Email;
use Dog\Noticer\Exception\NoticeException;

/**
 * @var Email
 */
$mail = make(Email::class);
// $mail = $this->container->make(Email::class); // 效果一样

try {
    // 发送纯文本
    $mail->to('yourname@foo.bar', '你的名字')
        ->subject('test')
        ->text('<h1>title1</h1>')
        ->send();
} catch (NoticeException $e) {
    // do something for exception
}

// 发送html
$mail->init()
    // ->to('yourname@foo.bar', '你的名字')
    ->to('yourname@foo.bar') // 第二个参数可以省略
    ->subject('test')
    ->html('<h1>title1</h1>')
    ->send();

// 一行一行文本发送
$mail->init()
    // ->to('yourname@foo.bar', '你的名字')
    ->to(['yourname@foo.bar' => '你的名字']) // 可以通过数组格式给多个人发
    ->subject('test')
    ->line('<h1>title1</h1>')
    ->line('<h1>title2</h1>')
    ->line('<h1>title3</h1>')
    ->send();

// 发送视图
$mail->init()
    ->to('yourname@foo.bar', '你的名字')
    ->subject('test')
    ->view('mail', ['name' => '参数值'])
    ->send();
// 视图配置
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hyperf</title>
</head>
<body>
Hello, {{ $name }}. You are using blade template now.
</body>
</html>
*/

// 指定blade模板引擎发送视图
$mail->init()
    ->to('yourname@foo.bar', '你的名字')
    ->subject('test')
    ->blade('mail', ['name' => '参数值'])
    ->send();

// 给多个人发送
// 指定blade模板引擎发送视图
$mail->init()
    ->to([
        'yourname@foo.bar' => '你的名字1',
        'yourname2@foo.bar' => '你的名字2',
    ])
    ->subject('test')
    ->view('mail', ['name' => '参数值'])
    ->send();

// 每次发送之后如果仍使用同一个实例，务必重置，否则可能出现问题
$mail->init()
    ->to('yourname@foo.bar', '你的名字')
    ->subject('test')
    ->html('<h1>重置完成</h1>')
    ->send();

// 更多功能请扒源码
```


### 短信通知

```php
use Dog\Noticer\Channel\Sms;

/**
 * @var Sms
 */
$sms = make(Sms::class);
// $sms = $this->container->make(Sms::class); // 效果一样

try {
    $tplId = '111111111';
    $param = ['name' => '张三'];
    $receivers = ['131xxxxxxxx', '132xxxxxxxx'];
    $sms->send($tplId, $param, $receivers);
} catch (NoticeException $e) {
    // do something for exception
}
```


### 电话通知

```php
use Dog\Noticer\Channel\Phone;

/**
 * @var Phone
 */
$phone = make(Phone::class);
// $phone = $this->container->make(Phone::class); // 效果一样

try {
    $content = '您的验证码为：123456';
    $receiver = '131xxxxxxxx'; // 只能单个发送
    $phone->send($content, $receiver);
} catch (NoticeException $e) {
    // do something for exception
}
```


### 钉钉工作通知

```php
use Dog\Noticer\Channel\DingWorker;
use Dog\Noticer\Channel\DingWorker\MsgType\Text;
use Dog\Noticer\Channel\DingWorker\MsgType\Markdown;
use Dog\Noticer\Channel\DingWorker\MsgType\ActionCard;

/**
 * @var DingWorker
 */
$dingworker = make(DingWorker::class);
// $dingworker = $this->container->make(DingWorker::class); // 效果一样

// 发送文本
try {
    // 注意：工作通知相同内容只能一天给一个人发一次，每个人最多一天收到50条消息，为了让通知内容不会因为相同被拦截，可以加上当前发送的时间
    // 其他所有格式都一样，相同会被拦截，建议都加上时间，包括markdown、actionCard
    // $text = new Text('通知内容' . "\n" . date('Y-m-d H:i:s'));
    $text = new Text('通知内容');
    $options = [
        'emails' => 'yourname@foo.bar', // 多一个以|分隔，例如 'emails' => 'yourname@foo.bar|yourname2@foo.bar',
        // 'workcodes' => '01', // 多一个以|分隔，必须带前面0，与邮箱填一个即可
    ];
    $dingworker->send($text, $options);
} catch (NoticeException $e) {
    // do something for exception
}

// 发送markdown，仅支持markdown子集，具体请参考：https://ding-doc.dingtalk.com/doc#/serverapi2/qf2nxq/9e91d73c
$markdown = new Markdown('标题', "
# title1
# title2
---

**加粗** 不加粗
");
$options = [
    'emails' => 'yourname@foo.bar', // 多一个以|分隔，例如 'emails' => 'yourname@foo.bar|yourname2@foo.bar',
    // 'workcodes' => '01', // 多一个以|分隔，必须带前面0，与邮箱填一个即可
];
$dingworker->send($markdown, $options);

// 发送ActionCard
$actionCard = new ActionCard('标题', "
# markdown文本，主体内容
# ---
");
// 单个button
$actionCard->single('button标题', 'button跳转url');
// 或者多个button
$actionCard->btn('button标题1', 'button跳转url1')
    >btn('button标题2', 'button跳转url2')
    >btn('button标题3', 'button跳转url3');
// 或者通过数组设置多个button
$actionCard->btns([
    ['title' => 'button标题1', 'action_url' => 'button跳转url1'],
    ['title' => 'button标题2', 'action_url' => 'button跳转url2'],
]);
// 默认button为横向排列，如果需要竖向，可设置：
$actionCard->setVertical(true);
$dingworker->send($actionCard, $options);

// 更多消息类型请扒源码
```


### 钉钉机器人（钉钉群）通知

```php
use Dog\Noticer\Channel\DingGroup;
use Dog\Noticer\Channel\DingGroup\MsgType\Text;
use Dog\Noticer\Channel\DingGroup\MsgType\Markdown;
use Dog\Noticer\Channel\DingGroup\MsgType\ActionCard;

/**
 * @var DingGroup
 */
$dinggroup = make(DingGroup::class);
// $dinggroup = $this->container->make(DingGroup::class); // 效果一样

$robots = [
    ['webhook' => '钉钉机器人webhook中的access_token的值', 'secret' => '此参数非必填'],
    ['webhook' => '另外一个机器人'],
];
$options = [

]
// 发送文本
try {
    $text = new Text('通知内容');
    $dinggroup->send($text, $robots, $options);
} catch (NoticeException $e) {
    // do something for exception
}

// 发送markdown，仅支持markdown子集，具体请参考：https://ding-doc.dingtalk.com/doc#/serverapi2/qf2nxq/9e91d73c
$markdown = new Markdown('标题', "
# title1
# title2
---

**加粗** 不加粗
");
$dinggroup->send($markdown, $robots, $options);

// 发送ActionCard
$actionCard = new ActionCard('标题', "
# markdown文本，主体内容
# ---
");
// 单个button
$actionCard->single('button标题', 'button跳转url');
// 或者多个button
$actionCard->btn('button标题1', 'button跳转url1')
    >btn('button标题2', 'button跳转url2')
    >btn('button标题3', 'button跳转url3');
// 或者通过数组设置多个button
$actionCard->btns([
    ['title' => 'button标题1', 'action_url' => 'button跳转url1'],
    ['title' => 'button标题2', 'action_url' => 'button跳转url2'],
]);
// 默认button为横向排列，如果需要竖向，可设置：
$actionCard->setVertical(true);
$dinggroup->send($actionCard, $robots, $options);

// 更多消息类型请扒源码
```


### 知音楼机器人（知音楼群）通知

```php
use Dog\Noticer\Channel\YachGroup;
use Dog\Noticer\Channel\YachGroup\MsgType\Text;
use Dog\Noticer\Channel\YachGroup\MsgType\Markdown;
use Dog\Noticer\Channel\YachGroup\MsgType\ActionCard;

/**
 * @var YachGroup
 */
$yachgroup = make(YachGroup::class);
// $yachgroup = $this->container->make(YachGroup::class); // 效果一样

$robots = [
    ['webhook' => 'yach机器人webhook中的access_token的值', 'secret' => '此参数必填'],
];
// 发送文本
try {
    $text = new Text('通知内容');
    $yachgroup->send($text, $robots);
} catch (NoticeException $e) {
    // do something for exception
}

// 发送markdown，仅支持markdown子集，具体请参考（Yach和钉钉差不多）：https://ding-doc.dingtalk.com/doc#/serverapi2/qf2nxq/9e91d73c
$markdown = new Markdown('标题', "
# title1
# title2
---

**加粗** 不加粗
");
$yachgroup->send($markdown, $robots);

// 发送markdown，并带图片地址
$markdown = new Markdown('标题', "
# title1
# title2
---

**加粗** 不加粗
", 'http://bpit-public.oss-cn-beijing.aliyuncs.com/note_1_1572593268.jpg');
$yachgroup->send($markdown, $robots);

// 发送ActionCard
$actionCard = new ActionCard('标题', "
# markdown文本，主体内容
# ---
", $image = '', $contentTitle = ''); // 此处可以填下image和contentTitle的参数
// 单个button
$actionCard->single('button标题', 'button跳转url');
// 或者多个button
$actionCard->btn('button标题1', 'button跳转url1')
    >btn('button标题2', 'button跳转url2')
    >btn('button标题3', 'button跳转url3');
// 或者通过数组设置多个button
$actionCard->btns([
    ['title' => 'button标题1', 'action_url' => 'button跳转url1'],
    ['title' => 'button标题2', 'action_url' => 'button跳转url2'],
]);
// 默认button为横向排列，如果需要竖向，可设置：
$actionCard->setVertical(true);
$yachgroup->send($actionCard, $robots);

// 更多消息类型请扒源码
```


### 知音楼工作通知

```php
use Dog\Noticer\Channel\YachWorker;
use Dog\Noticer\Channel\YachWorker\MsgType\Text;
use Dog\Noticer\Channel\YachWorker\MsgType\Markdown;
use Dog\Noticer\Channel\YachWorker\MsgType\ActionCard;

/**
 * @var YachWorker
 */
$yachworker = make(YachWorker::class);
// $yachworker = $this->container->make(YachWorker::class); // 效果一样

$options = [
    // 通过邮箱发送（推荐）
    'user_type' => 'email',
    // 多个以|分隔
    'userid_list' => 'ethananony@aliyun.com|xxxxxxxxxx@foo.bar',
    // // 通过工号发送
    // 'user_type' => 'workcode',
    // // 多个以|分隔
    // 'userid_list' => '01|999999',
];
// 发送文本
try {
    $text = new Text('通知内容');
    $yachworker->send($text, $options);
} catch (NoticeException $e) {
    // do something for exception
}

// 发送markdown，仅支持markdown子集，具体请参考（Yach和钉钉差不多）：https://ding-doc.dingtalk.com/doc#/serverapi2/qf2nxq/9e91d73c
$markdown = new Markdown('标题', "
# title1
# title2
---

**加粗** 不加粗
");
$yachworker->send($markdown, $options);

// 发送markdown，并带图片地址
$markdown = new Markdown('标题', "
# title1
# title2
---

**加粗** 不加粗
", 'http://bpit-public.oss-cn-beijing.aliyuncs.com/note_1_1572593268.jpg');
$yachworker->send($markdown, $options);

// 发送ActionCard
$actionCard = new ActionCard('标题', "
# markdown文本，主体内容
# ---
", $image = '', $contentTitle = ''); // 此处可以填下image和contentTitle的参数
// 单个button
$actionCard->single('button标题', 'button跳转url');
// 或者多个button
$actionCard->btn('button标题1', 'button跳转url1')
    >btn('button标题2', 'button跳转url2')
    >btn('button标题3', 'button跳转url3');
// 或者通过数组设置多个button
$actionCard->btns([
    ['title' => 'button标题1', 'action_url' => 'button跳转url1'],
    ['title' => 'button标题2', 'action_url' => 'button跳转url2'],
]);
// 默认button为横向排列，如果需要竖向，可设置：
$actionCard->setVertical(true);
$yachworker->send($actionCard, $options);

// 更多消息类型请扒源码
```
