// vim: sts=2:ts=2:sw=2
(function (global, factory) {
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define([
    ], factory);
    define(
      [
        './data_networks',
      ], function (
        data_networks) {
        return factory(
          data_networks
        ).Market; } );

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

  function getDigioptionsUrlMarket(network, marketsAddr, marketFactHash){
    var data_network = data_networks[network];
    if ((typeof(data_network) === 'undefined') || (typeof(data_network.digioptionsMarketUrl) === 'undefined'))
      return null;
    return data_network.digioptionsMarketUrl.
      replace('{marketsAddr}', normalizeMarketsAddr(marketsAddr)).
      replace('{marketFactHash}', normalizeMarketFactHash(marketFactHash));
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

  function getXmppPath(network, marketsAddr, marketFactHash){
    var data_network = data_networks[network];
    if ((typeof(data_network) === 'undefined') || (typeof(data_network.xmppPath) === 'undefined'))
      return null;
    return data_network.xmppPath.
      replace('{marketsAddr}', normalizeMarketsAddr(marketsAddr)).
      replace('{marketFactHash}', normalizeMarketFactHash(marketFactHash));
  }

  return {
    'getDigioptionsUrlMarket': getDigioptionsUrlMarket,
    'getEtherscanUrlContract': getEtherscanUrlContract,
    'getEtherscanUrlTx': getEtherscanUrlTx,
    'getXmppPath': getXmppPath
  };
});
