# Micronaut Web

Micronaut Web 应用的组合 Module。依赖图以 [`module.norm`](micronaut/web/module.norm) 为唯一声明源，公开的类型化配置与自动生命周期入口见 [`Application.norm`](micronaut/web/Application.norm)。`DataSources()` 使用内存数据库；`h2DataSource(storage: H2Storage.File)` 在应用 EXE 所在目录保存 `application` 数据库，源码运行时使用入口源码目录。显式 `database` 路径按原值传给 H2。配置树通过 `std.configuration` 自动映射为 Micronaut 属性，端到端验收见 [`micronaut-bbs`](https://github.com/normlanguage/Norm/tree/main/docs/examples/micronaut-bbs)。

要求 Norm 0.21.2 或更新版本。配置验收见 [`examples/tests/Main.norm`](examples/tests/Main.norm)，本地运行 `node scripts/test.mjs <Norm CLI 路径>`。
