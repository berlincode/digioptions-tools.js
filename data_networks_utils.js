// vim: sts=2:ts=2:sw=2
/*
    This program is distributed under the terms of the MIT license.
    Please see the LICENSE file for details.

    Copyright (c) digioptions.com (https://www.digioptions.com)
*/

(function (global, factory) {
  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define(
      [
        './data_networks',
      ], function (
        data_networks
      ) {
        return factory(
          data_networks
        ).Market;
      });

  } else if ( typeof module != 'undefined' && module.exports ) {
    // Node and other environments that support module.exports
    module.exports = factory(
      require('./data_networks')
    );

  } else {
    // Browser
    global.data_networks_utils = factory(
      global.data_networks
    );
  }
})(this, function(data_networks){

  function normalizeHexValue(value, bytes){
    value = value.replace(/^0x/, '').toLowerCase();
    while (value.length < bytes*2) value = '0' + value; // pad leading zeros
    return '0x' + value;
  }

  function normalizeMarketsAddr(addr){
    return normalizeHexValue(addr, 20);
  }

  function normalizeMarketFactHash(addr){
    return normalizeHexValue(addr, 32);
  }

  function getDigioptionsUrlNetwork(network, relativeUrl){
    var data_network = data_networks[network];
    if ((typeof(data_network) === 'undefined') || (typeof(data_network.digioptionsNetworkUrl) === 'undefined'))
      return null;
    var url = data_network.digioptionsNetworkUrl;
    if (relativeUrl)
      return url;
    return data_network.digioptionsBaseUrl + url;
  }

  function getDigioptionsUrlContract(network, marketsAddr, relativeUrl){
    var data_network = data_networks[network];
    if ((typeof(data_network) === 'undefined') || (typeof(data_network.digioptionsContractsUrl) === 'undefined'))
      return null;
    var url = data_network.digioptionsContractsUrl.
      replace('{marketsAddr}', normalizeMarketsAddr(marketsAddr));
    if (relativeUrl)
      return url;
    return data_network.digioptionsBaseUrl + url;
  }

  function getDigioptionsUrlMarket(network, marketsAddr, marketFactHash, relativeUrl){
    var data_network = data_networks[network];
    if ((typeof(data_network) === 'undefined') || (typeof(data_network.digioptionsMarketUrl) === 'undefined'))
      return null;
    var url = data_network.digioptionsMarketUrl.
      replace('{marketsAddr}', normalizeMarketsAddr(marketsAddr)).
      replace('{marketFactHash}', normalizeMarketFactHash(marketFactHash));
    if (relativeUrl)
      return url;
    return data_network.digioptionsBaseUrl + url;
  }
  
  function getPubSubXmppUrl(network, marketsAddr, marketFactHash){
//  "https://berlincode.github.io/digioptions-tools.js/css/styles.css"
  }

  function getEtherscanUrlContract(network, contractAddr){
    var data_network = data_networks[network];
    if ((typeof(data_network) === 'undefined') || (typeof(data_network.etherscanAddressUrl) === 'undefined'))
      return null;
    return data_network.etherscanAddressUrl.
      replace('{contractAddr}', normalizeMarketsAddr(contractAddr));
  }

  function getEtherscanUrlTx(network, tx){
    var data_network = data_networks[network];
    if ((typeof(data_network) === 'undefined') || (typeof(data_network.etherscanTxUrl) === 'undefined'))
      return null;
    return data_network.etherscanTxUrl.replace('{tx}', tx);
  }

  function getXmppUrlsWebsocket(network){
    var data_network = data_networks[network];
    if ((typeof(data_network) === 'undefined') || (typeof(data_network.xmppUrlWebsocket) === 'undefined') || (! data_network.xmppPortsWebsocket))
      return null;
    var urls = [];
    for (var i = 0; i < data_network.xmppPortsWebsocket.length; i++) {
      urls.push(data_network.xmppUrlWebsocket.replace('{port}', data_network.xmppPortsWebsocket[i]));
    }
    return urls;
  }

  function getXmppUrlsHttpBind(network){
    var data_network = data_networks[network];
    if ((typeof(data_network) === 'undefined') || (typeof(data_network.xmppUrlHttpBind) === 'undefined') || (! data_network.xmppPortsHttpBind))
      return null;
    var urls = [];
    for (var i = 0; i < data_network.xmppPortsHttpBind.length; i++) {
      urls.push(data_network.xmppUrlHttpBind.replace('{port}', data_network.xmppPortsHttpBind[i]));
    }
    return urls;
  }

  function getXmppPubsubNodePath(network, marketsAddr, marketFactHash){
    var data_network = data_networks[network];
    //if ((typeof(data_network) === 'undefined') || (typeof(data_network.xmppPubsubNodePath) === 'undefined'))
    //  return null;
    return data_network.xmppPubsubNodePath.
      replace('{marketsAddr}', normalizeMarketsAddr(marketsAddr)).
      replace('{marketFactHash}', normalizeMarketFactHash(marketFactHash));
  }

  function getXmppJidPassword(network){
    var data_network = data_networks[network];
    if ((typeof(data_network) === 'undefined') || (typeof(data_network.xmppJidPassword) === 'undefined'))
      return [null, null];
    return data_network.xmppJidPassword;
  }

  function getProvider(Web3, network){
    var data_network = data_networks[network];
    if (data_network.ethProviderType === 'HttpProvider'){
      return new Web3.providers.HttpProvider(data_network.ethProvider);
    }
    else if (data_network.ethProviderType === 'WebsocketProvider'){
      return new Web3.providers.WebsocketProvider(data_network.ethProvider);
    }
    throw 'unknown providerType: ' + data_network.ethProviderType;
  }

  return {
    'normalizeMarketsAddr': normalizeMarketsAddr,
    'normalizeMarketFactHash': normalizeMarketFactHash,
    'getDigioptionsUrlNetwork': getDigioptionsUrlNetwork,
    'getDigioptionsUrlContract': getDigioptionsUrlContract,
    'getDigioptionsUrlMarket': getDigioptionsUrlMarket,
    'getEtherscanUrlContract': getEtherscanUrlContract,
    'getEtherscanUrlTx': getEtherscanUrlTx,
    'getXmppUrlsWebsocket': getXmppUrlsWebsocket,
    'getXmppUrlsHttpBind': getXmppUrlsHttpBind,
    'getXmppPubsubNodePath': getXmppPubsubNodePath,
    'getXmppJidPassword': getXmppJidPassword,
    'getProvider': getProvider
  };
});
