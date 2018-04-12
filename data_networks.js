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

  return {

    /* we use the network names from web3/getNetworkType() as keys */ 
    'main': {
      description: 'Main network',
      testnet: false,
      digioptionsBaseUrl: 'https://www.digioptions.com/',
      digioptionsRootUrl: 'index.html#',
      digioptionsNetworkUrl: 'index.html#/main',
      digioptionsContractsUrl: 'index.html#/main/{marketsAddr}',
      digioptionsMarketUrl: 'index.html#/main/{marketsAddr}/{marketFactHash}',
      etherscanApiUrl: 'https://api.etherscan.io/api',
      etherscanAddressUrl: 'https://etherscan.io/address/{contractAddr}',
      etherscanTxUrl: 'https://etherscan.io/address/{tx}',
      marketsAddresses: [],
      xmppUrlWebsocket: 'wss://mainnet.xmpp.digioptions.com:{port}/websocket',
      xmppUrlHttpBind: 'https://mainnet.xmpp.digioptions.com:{port}/http-bind',
      xmppPortsWebsocket: [5280],
      xmppPortsHttpBind: [5280],
      xmppPubsubNodePath: '/v1/mainnet/{marketsAddr}/{marketFactHash}',
      xmppJidPassword: ['anon@mainnet.xmpp.digioptions.com', 'password'],
      ethProvider: 'https://mainnet.infura.io:443', // see https://infura.io/docs/#endpoints
      ethProviderType: 'HttpProvider', // 'HttpProvider' / 'WebsocketProvider'
      factsignerContract: true,
      chainId: 0 // TODO
    },

    'ropsten': {
      description: 'Test network',
      testnet: true,
      digioptionsBaseUrl: 'https://www.digioptions.com/',
      digioptionsRootUrl: 'index.html#',
      digioptionsNetworkUrl: 'index.html#/ropsten',
      digioptionsContractsUrl: 'index.html#/ropsten/{marketsAddr}',
      digioptionsMarketUrl: 'index.html#/ropsten/{marketsAddr}/{marketFactHash}',
      etherscanApiUrl: 'https://ropsten.etherscan.io/api',
      etherscanAddressUrl: 'https://ropsten.etherscan.io/address/{contractAddr}',
      etherscanTxUrl: 'https://ropsten.etherscan.io/address/{tx}',
      marketsAddresses: [],
      xmppUrlWebsocket: 'wss://ropsten.xmpp.digioptions.com:{port}/websocket',
      xmppUrlHttpBind: 'https://ropsten.xmpp.digioptions.com:{port}/http-bind',
      xmppPortsWebsocket: [5280],
      xmppPortsHttpBind: [5280],
      xmppPubsubNodePath: '/v1/ropsten/{marketsAddr}/{marketFactHash}',
      xmppJidPassword: ['anon@ropsten.xmpp.digioptions.com', 'password'],
      ethProvider: 'https://ropsten.infura.io:443',
      ethProviderType: 'HttpProvider',
      factsignerContract: true,
      chainId: 0 // TODO
    },

    'kovan': {
      description: 'Proof-of-authority test network',
      testnet: true,
      digioptionsBaseUrl: 'https://www.digioptions.com/',
      digioptionsRootUrl: 'index.html#',
      digioptionsNetworkUrl: 'index.html#/kovan',
      digioptionsContractsUrl: 'index.html#/kovan/{marketsAddr}',
      digioptionsMarketUrl: 'index.html#/kovan/{marketsAddr}/{marketFactHash}',
      etherscanApiUrl: 'https://kovan.etherscan.io/api',
      etherscanAddressUrl: 'https://kovan.etherscan.io/address/{contractAddr}',
      etherscanTxUrl: 'https://kovan.etherscan.io/address/{tx}',
      marketsAddresses: [],
      xmppUrlWebsocket: 'wss://kovan.xmpp.digioptions.com:{port}/websocket',
      xmppUrlHttpBind: 'https://kovan.xmpp.digioptions.com:{port}/http-bind',
      xmppPortsWebsocket: [5280],
      xmppPortsHttpBind: [5280],
      xmppPubsubNodePath: '/v1/kovan/{marketsAddr}/{marketFactHash}',
      xmppJidPassword: ['anon@kovan.xmpp.digioptions.com', 'password'],
      ethProvider: 'https://kovan.infura.io:443',
      ethProviderType: 'HttpProvider',
      factsignerContract: true,
      chainId: 0 // TODO
    },

    'rinkeby': {
      description: 'Clique-consensus test network',
      testnet: true,
      digioptionsBaseUrl: 'https://www.digioptions.com/',
      digioptionsRootUrl: 'index.html#',
      digioptionsNetworkUrl: 'index.html#/rinkeby',
      digioptionsContractsUrl: 'index.html#/rinkeby/{marketsAddr}',
      digioptionsMarketUrl: 'index.html#/rinkeby/{marketsAddr}/{marketFactHash}',
      etherscanApiUrl: 'https://rinkeby.etherscan.io/api',
      etherscanAddressUrl: 'https://rinkeby.etherscan.io/address/{contractAddr}',
      etherscanTxUrl: 'https://rinkeby.etherscan.io/address/{tx}',
      marketsAddresses: [],
      xmppUrlWebsocket: 'wss://rinkeby.xmpp.digioptions.com:{port}/websocket',
      xmppUrlHttpBind: 'https://rinkeby.xmpp.digioptions.com:{port}/http-bind',
      xmppPortsWebsocket: [5280],
      xmppPortsHttpBind: [5280],
      xmppPubsubNodePath: '/v1/rinkeby/{marketsAddr}/{marketFactHash}',
      xmppJidPassword: ['anon@rinkeby.xmpp.digioptions.com', 'password'],
      ethProvider: 'https://rinkeby.infura.io:443',
      ethProviderType: 'HttpProvider',
      factsignerContract: true,
      chainId: 0 // TODO
    }

  };
});
