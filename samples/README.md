# Micronaut Web samples

[English](README.md) | [简体中文](README.zh-CN.md)

[hello.norm](hello.norm) is an independent consumer of the [Micronaut Web module](../micronaut/web/module.norm). It starts a loopback server and exposes a query-driven GET route and a form POST route. The sample binds only to `127.0.0.1:18767`.

From the repository root, run:

```sh
norm run samples/hello.norm
```

In another terminal, exercise both routes:

```sh
curl 'http://127.0.0.1:18767/sample/hello?name=Norm'
curl -X POST -d 'message=Hello+from+Norm' 'http://127.0.0.1:18767/sample/echo'
```

Expected HTTP 200 bodies: `Hello, Norm` and `Received: Hello from Norm`. Stop the server with Ctrl+C. The existing [HTML and template acceptance app](../examples/acceptance/) remains the integration test for file and inline templates.
