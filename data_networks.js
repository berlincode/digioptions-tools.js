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

    'mainnet': {
      testnet: false,
      digioptionsContractsUrl: '/index.html#!/mainnet/{contractContractsAddr}',
      digioptionsMarketUrl: '/index.html#!/mainnet/{contractContractsAddr}/{marketAddr}',
      etherscanApiUrl: 'https://api.etherscan.io/api',
      etherscanAddressUrl: 'https://etherscan.io/address/{contractAddr}',
      etherscanTxUrl: 'https://etherscan.io/address/%s',
      contractContractsAddr: [],
      xmppProtocol: 'wss',
      xmppHost: 'mainnet.xmpp.digioptions.com',
      xmppPath: '/v1/mainnet/%s',
      provider: 'https://mainnet.infura.io', // see https://infura.io/docs/#endpoints
      providerType: 'HttpProvider', // 'HttpProvider' / 'WebsocketProvider'
      chainId: 0 // TODO
    },

    'ropsten': {
      testnet: true,
      digioptionsContractsUrl: '/index.html#!/ropsten/{contractContractsAddr}',
      digioptionsMarketUrl: '/index.html#!/ropsten/{contractContractsAddr}/{marketAddr}',
      etherscanApiUrl: 'https://ropsten.etherscan.io/api',
      etherscanAddressUrl: 'https://ropsten.etherscan.io/address/{contractAddr}',
      etherscanTxUrl: 'https://ropsten.etherscan.io/address/%s',
      contractContractsAddr: [],
      xmppProtocol: 'wss',
      xmppHost: 'ropsten.xmpp.digioptions.com',
      xmppPath: '/v1/ropsten/%s',
      provider: 'https://ropsten.infura.io',
      providerType: 'HttpProvider',
      chainId: 0 // TODO
    },

    'kovan': {
      testnet: true,
      digioptionsContractsUrl: '/index.html#!/kovan/{contractContractsAddr}',
      digioptionsMarketUrl: '/index.html#!/kovan/{contractContractsAddr}/{marketAddr}',
      etherscanApiUrl: 'https://kovan.etherscan.io/api',
      etherscanAddressUrl: 'https://kovan.etherscan.io/address/{contractAddr}',
      etherscanTxUrl: 'https://kovan.etherscan.io/address/%s',
      contractContractsAddr: [],
      xmppProtocol: 'wss',
      xmppHost: 'kovan.xmpp.digioptions.com',
      xmppPath: '/v1/kovan/%s',
      provider: 'https://kovan.infura.io',
      providerType: 'HttpProvider',
      chainId: 0 // TODO
    },

    'rinkeby': {
      testnet: true,
      digioptionsContractsUrl: '/index.html#!/rinkeby/{contractContractsAddr}',
      digioptionsMarketUrl: '/index.html#!/rinkeby/{contractContractsAddr}/{marketAddr}',
      etherscanApiUrl: 'https://rinkeby.etherscan.io/api',
      etherscanAddressUrl: 'https://rinkeby.etherscan.io/address/{contractAddr}',
      etherscanTxUrl: 'https://rinkeby.etherscan.io/address/%s',
      contractContractsAddr: [],
      xmppProtocol: 'wss',
      xmppHost: 'rinkeby.xmpp.digioptions.com',
      xmppPath: '/v1/rinkeby/%s',
      provider: 'https://rinkeby.infura.io',
      providerType: 'HttpProvider',
      chainId: 0 // TODO
    }

  };
});
