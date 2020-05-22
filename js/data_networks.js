// vim: sts=2:ts=2:sw=2
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(function () {return factory();});
  } else if (typeof module !== 'undefined' && module.exports) {
    // CommonJS (node and other environments that support module.exports)
    module.exports = factory();
  } else {
    // Global (browser)
    root.data_networks = factory();
  }
})(this, function(){

  // supported networks (see also: https://chainid.network/):
  // * 'ethereum-mainnet'
  // * 'ethereum-testnet-ropsten'
  // * 'ethereum-testnet-kovan'
  // * 'ethereum-testnet-rinkeby'
  // * 'ethereum-testnet-goerli'
  // * 'thundercore-mainnet'
  // * 'thundercore-testnet'

  return {

    'main': {
    //'ethereum-mainnet': { // TODO
      name: 'Ethereum Mainnet',
      description: 'Main network',
      testnet: false,
      public: true,
      digioptionsBaseUrl: 'https://www.digioptions.com/redirect.html',
      explorer: [
        {
          name: 'Etherscan',
          urlAddress: 'https://etherscan.io/address/{contractAddr}',
          urlTx: 'https://etherscan.io/tx/{tx}'
        }
      ],
      etherscanAddressUrl: 'https://etherscan.io/address/{contractAddr}', // deprecated TODO remove
      etherscanTxUrl: 'https://etherscan.io/tx/{tx}', // deprecated TODO remove
      contractDescriptions: [
        //e.g. {addr: '0x0000000000000000000000000000000000000000', name: '<your contract name>', foreign: false},
        {
          addr: '0xaf15cB5c8c2a73e8C5161f3b8066502188B239CC', // points to 0xE9809c4a9f2926CF5276d4EfdF492F9f543E39
          name: 'Preview',
          foreign: false
        },
      ],
      xmppUrlWebsocket: 'wss://mainnet.xmpp.digioptions.com:{port}/websocket', // TODO
      xmppUrlHttpBind: 'https://mainnet.xmpp.digioptions.com:{port}/http-bind', // TODO
      xmppPortsWebsocket: [5280],
      xmppPortsHttpBind: [5280],
      xmppPubsubNodePath: '/v1/mainnet/{marketsAddr}/{marketHash}',
      xmppJidPassword: ['anon@mainnet.xmpp.digioptions.com', 'password'],
      xmppPubsubViewer: 'https://berlincode.github.io/digioptions-tools.js/pubsub.html?network=ethereum-mainnet&marketsAddr={marketsAddr}&marketHash={marketHash}',
      ethProviderRPC: 'https://mainnet.infura.io/v3/{infuraApiKey}',
      ethProvider: 'wss://mainnet.infura.io/ws/v3/{infuraApiKey}', // for WebsocketProvider
      netId: 1,
      chainId: null
    },

    'ropsten': {
    //'ethereum-testnet-ropsten': {  // TODO
      name: 'Ethereum Testnet Ropsten',
      description: 'Test network',
      testnet: true,
      public: true,
      digioptionsBaseUrl: 'https://www.digioptions.com/redirect.html',
      explorer: [
        {
          name: 'Etherscan',
          urlAddress: 'https://ropsten.etherscan.io/address/{contractAddr}',
          urlTx: 'https://ropsten.etherscan.io/tx/{tx}'
        }
      ],
      etherscanAddressUrl: 'https://ropsten.etherscan.io/address/{contractAddr}', // deprecated TODO remove
      etherscanTxUrl: 'https://ropsten.etherscan.io/tx/{tx}', // deprecated TODO remove
      contractDescriptions: [
        //e.g. {addr: '0x0000000000000000000000000000000000000000', name: '<your contract name>', foreign: false},
        {
          addr: '0xA01DdAfE79342E8A98b7f972DF1C87ADd426DbfE', // points to 0x612CCe54Fb350739363F4F050A113E80427B881C
          name: 'Test contract',
          foreign: false
        },
      ],
      xmppUrlWebsocket: 'wss://ropsten.xmpp.digioptions.com:{port}/websocket', // TODO
      xmppUrlHttpBind: 'https://ropsten.xmpp.digioptions.com:{port}/http-bind', // TODO
      xmppPortsWebsocket: [5280],
      xmppPortsHttpBind: [5280],
      xmppPubsubNodePath: '/v1/ropsten/{marketsAddr}/{marketHash}',
      xmppJidPassword: ['anon@ropsten.xmpp.digioptions.com', 'password'],
      xmppPubsubViewer: 'https://berlincode.github.io/digioptions-tools.js/pubsub.html?network=ethereum-testnet-ropsten&marketsAddr={marketsAddr}&marketHash={marketHash}',
      ethProviderRPC: 'https://ropsten.infura.io/v3/{infuraApiKey}',
      ethProvider: 'wss://ropsten.infura.io/ws/v3/{infuraApiKey}', // for WebsocketProvider
      netId: 3,
      chainId: null
    },

    'ethereum-testnet-kovan': {
      name: 'Ethereum Testnet Kovan',
      description: 'Proof-of-authority test network',
      testnet: true,
      public: true,
      digioptionsBaseUrl: 'https://www.digioptions.com/redirect.html',
      explorer: [
        {
          name: 'Etherscan',
          urlAddress: 'https://kovan.etherscan.io/address/{contractAddr}',
          urlTx: 'https://kovan.etherscan.io/tx/{tx}'
        }
      ],
      etherscanAddressUrl: 'https://kovan.etherscan.io/address/{contractAddr}', // deprecated TODO remove
      etherscanTxUrl: 'https://kovan.etherscan.io/tx/{tx}', // deprecated TODO remove
      contractDescriptions: [
        //e.g. {addr: '0x0000000000000000000000000000000000000000', name: '<your contract name>', foreign: false},
      ],
      xmppUrlWebsocket: 'wss://ethereum-testnet-kovan.xmpp.digioptions.com:{port}/websocket',
      xmppUrlHttpBind: 'https://ethereum-testnet-kovan.xmpp.digioptions.com:{port}/http-bind',
      xmppPortsWebsocket: [5280],
      xmppPortsHttpBind: [5280],
      xmppPubsubNodePath: '/v1/kovan/{marketsAddr}/{marketHash}',
      xmppJidPassword: ['anon@kovan.xmpp.digioptions.com', 'password'],
      xmppPubsubViewer: 'https://berlincode.github.io/digioptions-tools.js/pubsub.html?network=ethereum-testnet-kovan&marketsAddr={marketsAddr}&marketHash={marketHash}',
      ethProviderRPC: 'https://kovan.infura.io/v3/{infuraApiKey}',
      ethProvider: 'wss://kovan.infura.io/ws/v3/{infuraApiKey}', // for WebsocketProvider
      netId: 42,
      chainId: null
    },

    'ethereum-testnet-rinkeby': {
      name: 'Ethereum Testnet Rinkeby',
      description: 'Clique-consensus test network',
      testnet: true,
      public: true,
      digioptionsBaseUrl: 'https://www.digioptions.com/redirect.html',
      explorer: [
        {
          name: 'Etherscan',
          urlAddress: 'https://rinkeby.etherscan.io/address/{contractAddr}',
          urlTx: 'https://rinkeby.etherscan.io/tx/{tx}'
        }
      ],
      etherscanAddressUrl: 'https://rinkeby.etherscan.io/address/{contractAddr}', // deprecated TODO remove
      etherscanTxUrl: 'https://rinkeby.etherscan.io/tx/{tx}', // deprecated TODO remove
      contractDescriptions: [
        //e.g. {addr: '0x0000000000000000000000000000000000000000', name: '<your contract name>', foreign: false},
      ],
      xmppUrlWebsocket: 'wss://ethereum-testnet-rinkeby.xmpp.digioptions.com:{port}/websocket',
      xmppUrlHttpBind: 'https://ethereum-testnet-rinkeby.xmpp.digioptions.com:{port}/http-bind',
      xmppPortsWebsocket: [5280],
      xmppPortsHttpBind: [5280],
      xmppPubsubNodePath: '/v1/rinkeby/{marketsAddr}/{marketHash}',
      xmppJidPassword: ['anon@rinkeby.xmpp.digioptions.com', 'password'],
      xmppPubsubViewer: 'https://berlincode.github.io/digioptions-tools.js/pubsub.html?network=ethereum-testnet-rinkeby&marketsAddr={marketsAddr}&marketHash={marketHash}',
      ethProviderRPC: 'https://rinkeby.infura.io/v3/{infuraApiKey}',
      ethProvider: 'wss://rinkeby.infura.io/ws/v3/{infuraApiKey}', // for WebsocketProvider
      netId: 4,
      chainId: null
    },

    'ethereum-testnet-goerli': {
      name: 'Ethereum Testnet Goerli',
      description: 'Cross-client proof-of-authority test network',
      testnet: true,
      public: true,
      digioptionsBaseUrl: 'https://www.digioptions.com/redirect.html',
      explorer: [
        {
          name: 'Etherscan',
          urlAddress: 'https://goerli.etherscan.io/address/{contractAddr}',
          urlTx: 'https://goerli.etherscan.io/tx/{tx}'
        }
      ],
      etherscanAddressUrl: 'https://goerli.etherscan.io/address/{contractAddr}', // deprecated TODO remove
      etherscanTxUrl: 'https://goerli.etherscan.io/tx/{tx}', // deprecated TODO remove
      contractDescriptions: [
        //{addr: '0x0000000000000000000000000000000000000000', name: 'Test Contract', foreign: false}
      ],
      xmppUrlWebsocket: 'wss://ethereum-testnet-goerli.xmpp.digioptions.com:{port}/websocket',
      xmppUrlHttpBind: 'https://ethereum-testnet-goerli.xmpp.digioptions.com:{port}/http-bind',
      xmppPortsWebsocket: [5280],
      xmppPortsHttpBind: [5280],
      xmppPubsubNodePath: '/v1/goerli/{marketsAddr}/{marketHash}',
      xmppJidPassword: ['anon@ethereum-testnet-goerli.xmpp.digioptions.com', 'password'],
      xmppPubsubViewer: 'https://berlincode.github.io/digioptions-tools.js/pubsub.html?network=ethereum-testnet-goerli&marketsAddr={marketsAddr}&marketHash={marketHash}',
      ethProviderRPC: 'https://goerli.infura.io/v3/{infuraApiKey}',
      ethProvider: 'wss://goerli.infura.io/ws/v3/{infuraApiKey}', // for WebsocketProvider
      netId: 5,
      chainId: null
    },

    'thundercore-mainnet': {
      name: 'ThunderCore Mainnet',
      description: 'ThunderCore Mainnet', // TODO
      testnet: false,
      public: true,
      digioptionsBaseUrl: 'https://www.digioptions.com/redirect.html',
      explorer: [
        {
          name: 'ThunderScan',
          urlAddress: 'https://scan.thundercore.com/address/{contractAddr}',
          urlTx: 'https://scan.thundercore.com/transactions/{tx}'
        }
      ],
      etherscanAddressUrl: 'https://scan.thundercore.com/address/{contractAddr}', // deprecated TODO remove
      etherscanTxUrl: 'https://scan.thundercore.com/transactions/{tx}', // deprecated TODO remove
      contractDescriptions: [
        //{addr: '0x0000000000000000000000000000000000000000', name: 'Test Contract', foreign: false}
      ],
      xmppUrlWebsocket: 'wss://thundercore-mainnet.xmpp.digioptions.com:{port}/websocket',
      xmppUrlHttpBind: 'https://thundercore-mainnet.xmpp.digioptions.com:{port}/http-bind',
      xmppPortsWebsocket: [5280],
      xmppPortsHttpBind: [5280],
      xmppPubsubNodePath: '/v1/thundercore-mainnet/{marketsAddr}/{marketHash}',
      xmppJidPassword: ['anon@thundercore-mainnet.xmpp.digioptions.com', 'password'],
      xmppPubsubViewer: 'https://berlincode.github.io/digioptions-tools.js/pubsub.html?network=thundercore-mainnet&marketsAddr={marketsAddr}&marketHash={marketHash}',
      ethProviderRPC: 'https://mainnet-rpc.thundercore.com',
      ethProvider: 'wss://mainnet-ws.thundercore.com', // for WebsocketProvider
      netId: 108,
      chainId: null
    },

    'thundercore-testnet': {
      name: 'ThunderCore Testnet',
      description: 'ThunderCore Testnet', // TODO
      testnet: true,
      public: true,
      digioptionsBaseUrl: 'https://www.digioptions.com/redirect.html',
      explorer: [
        {
          name: 'ThunderScan',
          urlAddress: 'https://scan-testnet.thundercore.com/address/{contractAddr}',
          urlTx: 'https://scan-testnet.thundercore.com/transactions/{tx}'
        }
      ],
      etherscanAddressUrl: 'https://scan-testnet.thundercore.com/address/{contractAddr}', // deprecated TODO remove
      etherscanTxUrl: 'https://scan-testnet.thundercore.com/transactions/{tx}', // deprecated TODO remove
      contractDescriptions: [
        {addr: '0xd54e5e0b0656fb54845fd435e4ed48a06863d195', name: 'ThunderCore Test Contract', foreign: false}
      ],
      xmppUrlWebsocket: 'wss://thundercore-testnet.xmpp.digioptions.com:{port}/websocket',
      xmppUrlHttpBind: 'https://thundercore-testnet.xmpp.digioptions.com:{port}/http-bind',
      xmppPortsWebsocket: [5280],
      xmppPortsHttpBind: [5280],
      xmppPubsubNodePath: '/v1/thundercore-testnet/{marketsAddr}/{marketHash}',
      xmppJidPassword: ['anon@thundercore-testnet.xmpp.digioptions.com', 'password'],
      xmppPubsubViewer: 'https://berlincode.github.io/digioptions-tools.js/pubsub.html?network=thundercore-testnet&marketsAddr={marketsAddr}&marketHash={marketHash}',
      ethProviderRPC: 'https://testnet-rpc.thundercore.com',
      ethProvider: 'wss://testnet-ws.thundercore.com', // for WebsocketProvider  // TODO rename ethProviderWs
      netId: 18,
      chainId: null
    }
  };
});
