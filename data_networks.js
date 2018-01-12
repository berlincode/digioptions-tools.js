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
      digioptionsContractsUrl: '/#/main/{marketsAddr}',
      digioptionsMarketUrl: '/#/main/{marketsAddr}/{marketFactHash}',
      etherscanApiUrl: 'https://api.etherscan.io/api',
      etherscanAddressUrl: 'https://etherscan.io/address/{contractAddr}',
      etherscanTxUrl: 'https://etherscan.io/address/{tx}',
      marketsAddresses: [],
      xmppProtocol: 'wss',
      xmppHost: 'mainnet.xmpp.digioptions.com',
      xmppPath: '/v1/mainnet/{marketsAddr}/{marketFactHash}',
      xmppPorts: [5280],
      ethProvider: 'https://mainnet.infura.io:443', // see https://infura.io/docs/#endpoints
      ethProviderType: 'HttpProvider', // 'HttpProvider' / 'WebsocketProvider'
      chainId: 0 // TODO
    },

    'ropsten': {
      description: 'Test network',
      testnet: true,
      digioptionsContractsUrl: '/#/ropsten/{marketsAddr}',
      digioptionsMarketUrl: '/#/ropsten/{marketsAddr}/{marketFactHash}',
      etherscanApiUrl: 'https://ropsten.etherscan.io/api',
      etherscanAddressUrl: 'https://ropsten.etherscan.io/address/{contractAddr}',
      etherscanTxUrl: 'https://ropsten.etherscan.io/address/{tx}',
      marketsAddresses: [],
      xmppProtocol: 'wss',
      xmppHost: 'ropsten.xmpp.digioptions.com',
      xmppPath: '/v1/ropsten/{marketsAddr}/{marketFactHash}',
      xmppPorts: [5280],
      ethProvider: 'https://ropsten.infura.io:443',
      ethProviderType: 'HttpProvider',
      chainId: 0 // TODO
    },

    'kovan': {
      description: 'Proof-of-authority test network',
      testnet: true,
      digioptionsContractsUrl: '/#/kovan/{marketsAddr}',
      digioptionsMarketUrl: '/#/kovan/{marketsAddr}/{marketFactHash}',
      etherscanApiUrl: 'https://kovan.etherscan.io/api',
      etherscanAddressUrl: 'https://kovan.etherscan.io/address/{contractAddr}',
      etherscanTxUrl: 'https://kovan.etherscan.io/address/{tx}',
      marketsAddresses: [],
      xmppProtocol: 'wss',
      xmppHost: 'kovan.xmpp.digioptions.com',
      xmppPath: '/v1/kovan/{marketsAddr}/{marketFactHash}',
      xmppPorts: [5280],
      ethProvider: 'https://kovan.infura.io:443',
      ethProviderType: 'HttpProvider',
      chainId: 0 // TODO
    },

    'rinkeby': {
      description: 'Clique-consensus test network',
      testnet: true,
      digioptionsContractsUrl: '/#/rinkeby/{marketsAddr}',
      digioptionsMarketUrl: '/#/rinkeby/{marketsAddr}/{marketFactHash}',
      etherscanApiUrl: 'https://rinkeby.etherscan.io/api',
      etherscanAddressUrl: 'https://rinkeby.etherscan.io/address/{contractAddr}',
      etherscanTxUrl: 'https://rinkeby.etherscan.io/address/{tx}',
      marketsAddresses: [],
      xmppProtocol: 'wss',
      xmppHost: 'rinkeby.xmpp.digioptions.com',
      xmppPath: '/v1/rinkeby/{marketsAddr}/{marketFactHash}',
      xmppPorts: [5280],
      ethProvider: 'https://rinkeby.infura.io:443',
      ethProviderType: 'HttpProvider',
      chainId: 0 // TODO
    }

  };
});
