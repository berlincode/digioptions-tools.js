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
      description: 'Main network',
      testnet: false,
      digioptionsContractsUrl: '/#/mainnet/{marketsAddr}',
      digioptionsMarketUrl: '/#/mainnet/{marketsAddr}/{marketFactHash}',
      etherscanApiUrl: 'https://api.etherscan.io/api',
      etherscanAddressUrl: 'https://etherscan.io/address/{contractAddr}',
      etherscanTxUrl: 'https://etherscan.io/address/%s',
      marketsAddresses: [],
      xmppProtocol: 'wss',
      xmppHost: 'mainnet.xmpp.digioptions.com',
      xmppPath: '/v1/mainnet/%s',
      xmppPorts: [5280],
      provider: 'https://mainnet.infura.io', // see https://infura.io/docs/#endpoints
      providerType: 'HttpProvider', // 'HttpProvider' / 'WebsocketProvider'
      chainId: 0 // TODO
    },

    'ropsten': {
      description: 'Test network',
      testnet: true,
      digioptionsContractsUrl: '/#/ropsten/{marketsAddr}',
      digioptionsMarketUrl: '/#/ropsten/{marketsAddr}/{marketFactHash}',
      etherscanApiUrl: 'https://ropsten.etherscan.io/api',
      etherscanAddressUrl: 'https://ropsten.etherscan.io/address/{contractAddr}',
      etherscanTxUrl: 'https://ropsten.etherscan.io/address/%s',
      marketsAddresses: ['0x5f79b8585cea4847364c0cd052344eb455e2457b'],
      xmppProtocol: 'wss',
      xmppHost: 'ropsten.xmpp.digioptions.com',
      xmppPath: '/v1/ropsten/%s',
      xmppPorts: [5280],
      provider: 'https://ropsten.infura.io',
      providerType: 'HttpProvider',
      chainId: 0 // TODO
    },

    'kovan': {
      description: 'Proof-of-authority test network',
      testnet: true,
      digioptionsContractsUrl: '/#/kovan/{marketsAddr}',
      digioptionsMarketUrl: '/#/kovan/{marketsAddr}/{marketFactHash}',
      etherscanApiUrl: 'https://kovan.etherscan.io/api',
      etherscanAddressUrl: 'https://kovan.etherscan.io/address/{contractAddr}',
      etherscanTxUrl: 'https://kovan.etherscan.io/address/%s',
      marketsAddresses: [],
      xmppProtocol: 'wss',
      xmppHost: 'kovan.xmpp.digioptions.com',
      xmppPath: '/v1/kovan/%s',
      xmppPorts: [5280],
      provider: 'https://kovan.infura.io',
      providerType: 'HttpProvider',
      chainId: 0 // TODO
    },

    'rinkeby': {
      description: 'Clique-consensus test network',
      testnet: true,
      digioptionsContractsUrl: '/#/rinkeby/{marketsAddr}',
      digioptionsMarketUrl: '/#/rinkeby/{marketsAddr}/{marketFactHash}',
      etherscanApiUrl: 'https://rinkeby.etherscan.io/api',
      etherscanAddressUrl: 'https://rinkeby.etherscan.io/address/{contractAddr}',
      etherscanTxUrl: 'https://rinkeby.etherscan.io/address/%s',
      marketsAddresses: [],
      xmppProtocol: 'wss',
      xmppHost: 'rinkeby.xmpp.digioptions.com',
      xmppPath: '/v1/rinkeby/%s',
      xmppPorts: [5280],
      provider: 'https://rinkeby.infura.io',
      providerType: 'HttpProvider',
      chainId: 0 // TODO
    }

  };
});
