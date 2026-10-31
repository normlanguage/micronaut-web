# Micronaut Web

Built with [Norm](https://github.com/normlanguage/Norm).

[English](README.md) | [简体中文](README.zh-CN.md)

The base composition module for Micronaut HTTP applications. The HTML example selects its template engine through the separate `micronaut.views.jstachio` package.

[Samples](samples/README.md) start a loopback server with GET and form POST routes.

- [Application logging configuration](https://github.com/normlanguage/Norm/blob/main/docs/stdlib/logging.md)
- [Module and dependency declaration](micronaut/web/module.norm)
- [Typed configuration and application lifecycle](micronaut/web/Application.norm)
- [Build toolchain versions](.github/workflows/package.yml)
- [HTML example dependencies](examples/acceptance/module.norm)
- [Controller and page model](examples/acceptance/pages.norm)
- [HTML template](examples/acceptance/resources/templates/home.mustache)

Run the HTML example:

```shell
norm run examples/acceptance/default.norm
```

Visit <http://127.0.0.1:8080>. See [scripts/test.mjs](scripts/test.mjs) for the configuration and HTTP verification entry point.
