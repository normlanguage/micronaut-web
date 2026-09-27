# Micronaut Web 示例

[English](README.md) | [简体中文](README.zh-CN.md)

[hello.norm](hello.norm) 是 `micronaut.web@7` 的独立消费者，启动仅监听 `127.0.0.1:18767` 的本地服务，提供带查询参数的 GET 路由和接收表单的 POST 路由。

在仓库根目录运行：

```sh
norm run samples/hello.norm
```

在另一终端请求两个路由：

```sh
curl 'http://127.0.0.1:18767/sample/hello?name=Norm'
curl -X POST -d 'message=Hello+from+Norm' 'http://127.0.0.1:18767/sample/echo'
```

预期两次 HTTP 200 的正文分别是 `Hello, Norm` 与 `Received: Hello from Norm`。按 Ctrl+C 停止服务。现有[HTML 与模板集成验收应用](../examples/acceptance/)继续负责文件模板与内联模板的回归测试。
