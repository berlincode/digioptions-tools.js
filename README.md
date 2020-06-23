digioptions-tools.js
====================

[![Version](https://img.shields.io/github/v/tag/berlincode/digioptions-tools.js.svg?label=version&sort=semver&logo=github)](https://github.com/berlincode/digioptions-tools.js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?label=license)](https://github.com/berlincode/digioptions-tools.js/blob/master/LICENSE)

Common base fuctions for building applications for DigiOptions' ecosystem (javascript)


Components:
-----------

 * data_networks.js: basic definitions for ethereum compatible networks
 * data_networks_utils.js: some utilities on top of data_networks.js (create urls etc.)
 * quote_provider.js: connect to real time quote providers (websocket push)
 * offer_normalize.js: normalize / validate offers
 * pubsub.js: publish-subscribe for offers (uses strophe.pubsub.js from https://raw.githubusercontent.com/strophe/strophejs-plugin-pubsub/fc12f60570bdd2b73cc87077a884a102bc32f3be/src/strophe.pubsub.js (added a case for nodejs))


Related packages
----------------

Following packages belong to DigiOptions' ecosystem.

| Package                                                                                                              | Version                                                                                                                                                                                            | Description                                                                                       |
|----------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| [`digioptions/digioptions-app-dist`](https://github.com/digioptions/digioptions-app-dist)                                      | [![Version](https://img.shields.io/github/v/tag/digioptions/digioptions-app-dist.svg?label=version&sort=semver&logo=github)](https://github.com/digioptions/digioptions-app-dist)        | Distributed app / web GUI for DigiOptions (html / javascript) |
| [`digioptions/digioptions-viewer-dist`](https://github.com/digioptions/digioptions-viewer-dist)                                | [![Version](https://img.shields.io/github/v/tag/digioptions/digioptions-viewer-dist.svg?label=version&sort=semver&logo=github)](https://github.com/digioptions/digioptions-viewer-dist)  | Embeddable web widget to view DigiOptions markets and order book (html / javascript) |
| [`berlincode/digioptions-contracts.js`](https://github.com/berlincode/digioptions-contracts.js)                      | [![Version](https://img.shields.io/github/v/tag/berlincode/digioptions-contracts.js.svg?label=version&sort=semver&logo=github)](https://github.com/berlincode/digioptions-contracts.js)            | Freedex peer to peer protocol for decentralized markets on DigiOptions (javascript / solidity) |
| [`berlincode/digioptions-contracts-web-examples`](https://github.com/berlincode/digioptions-contracts-web-examples)  | [![Version](https://img.shields.io/github/v/tag/berlincode/digioptions-contracts-web-examples.svg?label=version&sort=semver&logo=github)](https://github.com/berlincode/digioptions-contracts-web-examples)  |  Browser based interface for creating and settling DigiOptions markets (html / javascript) |
| [`berlincode/digioptions-trader.js`](https://github.com/berlincode/digioptions-trader.js)                            | [![Version](https://img.shields.io/github/v/tag/berlincode/digioptions-trader.js.svg?label=version&sort=semver&logo=github)](https://github.com/berlincode/digioptions-trader.js)                  | Customizable automatic trading system for DigiOptions (javascript) |
| [`berlincode/digioptions-tools.js`](https://github.com/berlincode/digioptions-tools.js)                              | [![Version](https://img.shields.io/github/v/tag/berlincode/digioptions-tools.js.svg?label=version&sort=semver&logo=github)](https://github.com/berlincode/digioptions-tools.js)                    | Common base fuctions for building applications for DigiOptions' ecosystem (javascript) |
| [`berlincode/factsigner`](https://github.com/berlincode/factsigner)                                                  | [![Version](https://img.shields.io/github/v/tag/berlincode/factsigner.svg?label=version&sort=semver&logo=github)](https://github.com/berlincode/factsigner)                                        | Provable signatures of real life events (javascript / solidity) |
| [`berlincode/factsigner-go`](https://github.com/berlincode/factsigner-go)                                            | [![Version](https://img.shields.io/github/v/tag/berlincode/factsigner-go.svg?label=version&sort=semver&logo=github)](https://github.com/berlincode/factsigner-go)                                  | Provable signatures of real life events (go) |


Public repository
-----------------

https://github.com/berlincode/digioptions-tools.js

Copyright and license
---------------------

Code and documentation copyright Ulf Bartel. Code is licensed under the
[MIT license](./LICENSE).
