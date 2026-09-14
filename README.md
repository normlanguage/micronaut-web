# Micronaut Web

Micronaut HTTP 应用的基础组合模块。HTML 示例通过独立的 `micronaut.views.jstachio` 包选择模板引擎。

- [模块与依赖声明](micronaut/web/module.norm)
- [类型化配置与应用生命周期](micronaut/web/Application.norm)
- [构建工具链版本](.github/workflows/package.yml)
- [HTML 示例的依赖声明](examples/acceptance/module.norm)
- [Controller 与页面模型](examples/acceptance/pages.norm)
- [HTML 模板](examples/acceptance/resources/templates/home.mustache)

运行 HTML 示例：

```shell
norm run examples/acceptance/default.norm
```

访问 <http://127.0.0.1:8080>。配置与 HTTP 验证入口见 [scripts/test.mjs](scripts/test.mjs)。
