---
title: PHP告警SDK
---

# PHP告警SDK

该SDK为哮天犬监控告警平台告警接口的PHP实现，增加了非常友好的方式使用，开箱即用。


## 特性

- 支持协程/非协程模式自动切换
- 支持 Laravel5 ~ Laravel7 开箱即用
- 支持 Lumen5 ~ Lumen7 开箱即用
- 支持 Hyperf1.1 ~ Hyperf2.0 开箱即用
- 支持任意场景、框架使用
- 支持告警请求发送失败重试
- 支持记录请求日志


## 代码仓库

[https://github.com/tal-tech/alarm-dog-php-sdk](https://github.com/tal-tech/alarm-dog-php-sdk)

最新文档请参考代码仓库的 `README.md` 文件说明


## 安装

```shell
# composer安装依赖
composer require alarm-dog/alarm
```


## 使用

### Hyperf

### 协程版Guzzle依赖安装

```
composer require hyperf/guzzle
```


#### 配置文件发布

```
$ php bin/hyperf.php vendor:publish alarm-dog/alarm

Scanning app ...
Scan app completed, took 171.40197753906 milliseconds.
Detected an available cache, skip the vendor scan process.
[DEBUG] Event Hyperf\Framework\Event\BootApplication handled by Hyperf\Config\Listener\RegisterPropertyHandlerListener listener.
[DEBUG] Event Hyperf\Framework\Event\BootApplication handled by Hyperf\Paginator\Listener\PageResolverListener listener.
[DEBUG] Event Hyperf\Framework\Event\BootApplication handled by Hyperf\Di\Listener\BootApplicationListener listener.
[DEBUG] Event Hyperf\Framework\Event\BootApplication handled by Hyperf\DbConnection\Listener\RegisterConnectionResolverListener listener.
[dog/alarm] publishes [config] successfully.
```

配置文件在 `config/autoload/dog.php`，配置说明请参考下面章节 [配置项说明](#配置项说明)


#### 告警发送

```php
use Dog\Alarm\Alarm;
use Dog\Alarm\Exception\AlarmException;

$content = [
    'errno' => 10086,
    'error' => '您的余额已不足',
];

/**
 * 方法一：直接实例化
 */
$alarm = new Alarm();

try {
    /** 
     * Alarm::report 方法返回 \Psr\Http\Message\ResponseInterface 对象
     * @var \Psr\Http\Message\ResponseInterface $response
     */
    $response = $alarm->report($content);
    $array = $alarm->resolveResponse($response);
    /**
    $array 的结构请参考下方数组：
    array(3) {
    ["data"]=>
    array(2) {
        ["uuid"]=>
        string(36) "74bfd2d8-a1c9-434b-9098-50efc0f08ee2"
        ["report_time"]=>
        string(19) "2020-06-26 20:50:19"
    }
    ["msg"]=>
    string(7) "success"
    ["code"]=>
    int(0)
    }
    */

    // 如果要一气呵成，直接返回数组，可以使用
    $array = $alarm->resolveResponse($alarm->report($content));
} catch (AlarmException $e) {
    // 告警发送失败会抛出该异常
}

// 指定通知时间：
$alarm->report($content, time());

// 指定告警级别
$alarm->report($content, null, Alarm::LEVEL_ERROR);

// 指定临时通知人
$alarmGroups = [1, 2];

$channelDingGroup = new DingGroup([
    ['webhook' => 'webhook1', 'secret' => 'secret1'],
    ['webhook' => 'webhook2', 'secret' => 'secret2'],
]);

$channelYachGroup = new YachGroup();
$channelYachGroup->addRobot('webhook1', 'secret1')->addRobot('webhook2', 'secret2')
    ->addRobots([
        ['webhook' => 'webhook3', 'secret' => 'secret3'],
        ['webhook' => 'webhook4', 'secret' => 'secret4'],
    ]); // 第二个参数为true是会进行全量替换，覆盖之前的，默认为false

$channelDingWorker = new DingWorker([1, 98665]);

$channelEmail = new Email();
$channelEmail->addUid(1)->addUid(98665)->addUids([98666, 98667]);

$channels = [$channelDingGroup, $channelYachGroup];

$receiver = new Receiver($alarmGroups, $channels);
// 或者 $receiver = new Receiver([], $channels);
// 或者 $receiver = new Receiver($alarmGroups);
// 或者 $receiver = new Receiver();
$receiver->addAlarmGroup(1)
    ->addAlarmGroup(3)
    ->addAlarmGroups([1, 5], true) // 第二个参数为true是会进行全量替换，覆盖之前的，默认为false
    ->addChannel($channelDingWorker)
    ->addChannel(new DingWorker([1]))
    ->addChannels($channels);

// 以上仅用于展示SDK所有支持的方法

// 指定临时通知人
$alarm->report($content, null, null, $receiver);

/**
 * 方法二：使用make
 */
// 剩下使用方法同方法一
$alarm = make(Alarm::class);

/**
 * 方法三：使用@Inject注解，推荐
 */

/**
 * 注意Inject的命名空间引入
 * @Inject
 * @var Alarm
 */
protected $alarm;
// 剩下使用方法同方法一
$this->alarm->report($content);

/**
 * 方法四：使用容器Container，推荐
 */
// 剩下使用方法同方法一
$alarm = ApplicationContext::getContainer()->get(Alarm::class);
// 或者
$alarm = $container->get(Alarm::class);
// 或者
$alarm = $this->container->get(Alarm::class);


/**
 * 测试告警发送
 * 用于验证taskid、token是否合法，不真实发送告警
 */

try {
    $result = $alarm->test();

    // 测试成功
} catch (Throwable $e) {
    // 测试失败
    $errMsg = $e->getMessage();
}
```


### Laravel

#### 配置文件发布

```
$ php artisan vendor:publish --provider="Dog\Alarm\Provider\LaravelServiceProvider"

Copied File [/alarm-dog-php-sdk/config/dog.php] To [/config/dog.php]
Publishing complete.
```

配置文件在 `config/dog.php`，配置说明请参考下面章节 [配置项说明](#配置项说明)


#### 告警发送

```php
/**
 * 方法一：直接实例化
 */
// 请参考Hyperf中直接实例化

/**
 * 方法二：使用app()助手函数，推荐
 */
// 剩下使用方法同Hyperf章节中的方法一
$alarm = app(Alarm::class);

/**
 * 方法三：使用门面Facade，推荐
 */
use Dog\Alarm\Provider\Laravel\AlarmFacade;
$response = AlarmFacade::report($content);
$array = AlarmFacade::resolveResponse($response);
$array = AlarmFacade::resolveResponse(AlarmFacade::report($content));
// 可以看出 AlarmFacade 和 new Alarm() 使用方式一样，不过Facade提供静态方法访问，剩下使用方法同Hyperf章节中的方法一
```


### Lumen

#### 配置文件发布

Lumen框架不支持配置文件自动发布，需要在 `bootstrap/app.php` 中配置 `$app->register(Dog\Alarm\Provider\LumenServiceProvider::class);`，例如：

```php
/*
|--------------------------------------------------------------------------
| Register Service Providers
|--------------------------------------------------------------------------
|
| Here we will register all of the application's service providers which
| are used to bind services into the container. Service providers are
| totally optional, so you are not required to uncomment this line.
|
*/

// $app->register(App\Providers\AppServiceProvider::class);
// $app->register(App\Providers\AuthServiceProvider::class);
// $app->register(App\Providers\EventServiceProvider::class);
$app->register(Dog\Alarm\Provider\LumenServiceProvider::class);

/*
|--------------------------------------------------------------------------
| Load The Application Routes
|--------------------------------------------------------------------------
|
| Next we will include the routes file so that they can all be added to
| the application. This will provide all of the URLs the application
| can respond to, as well as the controllers that may handle them.
|
*/
```

`mkdir config && cp vendor/dog/alarm/config/dog.php config/`

配置文件在 `config/dog.php`，配置说明请参考下面章节 [配置项说明](#配置项说明)


#### 告警发送

```php
/**
 * 方法一：直接实例化
 */
// 请参考Hyperf中直接实例化

/**
 * 方法二：使用app()助手函数，推荐
 */
// 剩下使用方法同Hyperf章节中的方法一
$alarm = app(Alarm::class);

/**
 * 方法三：使用门面Facade，必须Lumen开启了对Facade的支持才行，推荐
 */
use Dog\Alarm\Provider\Laravel\AlarmFacade;
$response = AlarmFacade::report($content);
$array = AlarmFacade::resolveResponse($response);
$array = AlarmFacade::resolveResponse(AlarmFacade::report($content));
// 可以看出 AlarmFacade 和 new Alarm() 使用方式一样，不过Facade提供静态方法访问，剩下使用方法同Hyperf章节中的方法一
```


### 无框架或者其他框架

不在自动支持的框架范围内，可以直接实例化，然后手动配置，例如：

```php
$alarm = new Alarm();
$alarm->setTaskid(1);
$alarm->setToken('token');
// 如果需要修改调用域名，可以调用 $alarm->setBaseUri('https://alarm-dog-service.domain.com/alarm/report');
// 如果需要配置guzzle，可以调用 $alarm->setGuzzleConfig($guzzleConfig); 配置格式请参考config/dog.php中guzzle下面的数组

// 剩下使用方法同Hyperf章节中的方法一
$response = $alarm->report($content);
```


## 配置项说明

默认配置文件使用了 `env` 函数，不是所有的框架都有该函数，请根据情况修改。

在 Hyperf/Laravel/Lumen 框架中，直接在 `.env` 文件中配置正确的 `DOG_TASKID`、`DOG_TOKEN` 即可直接开始使用告警功能。


```php
<?php

use GuzzleHttp\MessageFormatter;
use GuzzleHttp\Middleware;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;

/**
 * 哮天犬配置文件
 */

return [
    // 告警任务ID
    'taskid' => (int) env('DOG_TASKID'),
    // 告警任务token
    // 获取方法请参考：https://alarm-dog.domain.com/docs/quick-start/alarm.html#step4%EF%BC%9A%E5%91%8A%E8%AD%A6%E6%8E%A5%E5%8F%A3%E6%B5%8B%E8%AF%95
    'token' => env('DOG_TOKEN'),
    // 告警地址，默认为：https://alarm-dog-service.domain.com
    // 请参考文档中的环境说明：https://alarm-dog.domain.com/docs/alarm/alarm-api.html
    'base_uri' => env('DOG_BASE_URI'),
    /**
     * GuzzleHttp配置
     */
    'guzzle' => [
        // guzzle原生配置选项,请参考文档：https://guzzle-cn.readthedocs.io/zh_CN/latest/request-options.html
        'options' => [
            'http_errors' => false,
            'connect_timeout' => 0,
            'timeout' => 0,
            // hyperf集成guzzle的swoole配置选项
            'swoole' => [
                'timeout' => 10,
                'socket_buffer_size' => 1024 * 1024 * 2,
            ],
        ],
        // guzzle中间件配置，请参考文档：https://guzzle-cn.readthedocs.io/zh_CN/latest/handlers-and-middleware.html
        'middlewares' => [
            // 失败重试中间件
            'retry' => function ($container = null) {
                return Middleware::retry(function ($retries, RequestInterface $request, ResponseInterface $response = null) {
                    if (
                        (! $response || $response->getStatusCode() >= 500) && 
                        $retries < 1
                    ) {
                        return true;
                    }
                    return false;
                }, function () {
                    return 10;
                });
            },
            // // 请求日志记录中间件
            // 'logger' => function ($container = null) {
            //     // $format中{response}调用$response->getBody()会导致没有结果输出
            //     $format = ">>>>>>>>\n{request}\n<<<<<<<<\n{res_headers}\n--------\n{error}";
            //     $formatter = new MessageFormatter($format);
            //     // 在其他框架将$logger进行正确替换即可
            //     // hyperf框架请使用下发方式获得Logger
            //     // $logger = \Hyperf\Utils\ApplicationContext::getContainer()
            //     //     ->get(\Hyperf\Logger\LoggerFactory::class)
            //     //     ->get('influx-guzzle');
            //     // laravel框架请使用下发方式获得Logger
            //     // $logger = \Illuminate\Support\Facades\Log::getLogger();

            //     return Middleware::log($logger, $formatter, 'debug');
            // }
        ],
        // hyperf集成guzzle的连接池配置选项，非hyperf框架忽略
        // 连接池可以参考hyperf官方的文档：https://hyperf.wiki/2.0/#/zh-cn/guzzle
        'pool' => [
            'option' => [
                'max_connections' => 200,
            ]
        ]
    ],
];

```


