# Micronaut Web

`micronaut.web@3` 是 Micronaut Web 应用的组合 Module。依赖图以 [`module.norm`](micronaut/web/module.norm) 为唯一声明源，公开的类型化配置与自动生命周期入口见 [`Application.norm`](micronaut/web/Application.norm)。`MicronautApplication()` 使用 `MicronautConfig()` 的类型化默认值；`DataSources()` 默认使用 `./.norm/data/application` 下的 H2 文件库，需要数据库、静态资源或安全策略时只传入局部覆盖。配置树通过 `std.configuration` 自动映射为 Micronaut 属性，端到端验收见 [`micronaut-bbs`](https://github.com/normlanguage/Norm/tree/main/docs/examples/micronaut-bbs)。
