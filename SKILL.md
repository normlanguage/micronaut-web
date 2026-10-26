# micronaut.web Skill

Use Norm module `micronaut.web` version 13. The module declaration in `micronaut/web/module.norm` is the single source of truth for dependencies and the exported `Application` API.

The module packages the Micronaut HTTP, client, runtime, AOP, serialization, validation, security, Reactor, and Netty integrations used by the examples. Keep all dependency versions aligned with the module declaration and update the declaration when an upstream ABI is republished.

The acceptance module in `examples/acceptance` is the runtime verification path. The tests module in `examples/tests` covers the exported application surface. Run the package workflow after changes; do not add compatibility aliases or retain old ABI versions.
