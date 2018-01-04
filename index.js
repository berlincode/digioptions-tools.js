// vim: sts=2:ts=2:sw=2
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([
      './pubsub',
      './normalize_order',
      './data_networks',
      './data_networks_utils',
      './data_config'
    ], factory);
  } else if (typeof module !== 'undefined' && module.exports) {
    // CommonJS (node and other environments that support module.exports)
    module.exports = factory(
      require('./pubsub'),
      require('./normalize_order'),
      require('./data_networks'),
      require('./data_networks_utils'),
      require('./data_config')
    );
  }else {
    // Global (browser)
    root.digioptionsTools = factory(
      root.PubSub,
      root.normalize_order,
      root.data_networks,
      root.data_networks_utils,
      root.data_config
    );
  }
}(this, function (PubSub, normalize_order, data_networks, data_networks_utils, data_config) {
  return {
    PubSub: PubSub,
    normalize_order: normalize_order,
    data_networks: data_networks,
    data_networks_utils: data_networks_utils,
    data_config: data_config,
    //    getUrlBase: function(){
    //      return 'https://www.digioptions.com';
    //    },
    //    getUrl: function(data_network, contractsAddr, marketAddr /*optional*/, queryParamDict /*optional*/ ){
    // optional query parameters
    //      var queryParams = Object.keys(queryParamDict)
    //        .map(function(k) {return encodeURIComponent(k) + '=' + encodeURIComponent(queryParamDict[k]);})
    //        .join('&');
    //      if (queryParams)
    //        queryParams = '?' + queryParams;

    //      if (contractsAddr && marketAddr){
    //        if (data_network.digioptionsMarketUrl)
    //          return data_network.digioptionsMarketUrl.replace('{contractContractsAddr}', contractsAddr).replace('{marketAddr}', marketAddr) + queryParams;

    //      } else if (contractsAddr){
    //        if (data_network.digioptionsContractsUrl)
    //          return data_network.digioptionsContractsUrl.replace('{contractContractsAddr}', contractsAddr) + queryParams;

    //      }
    //      return undefined;
    //    },
    getProvider: function(Web3, data_network){
      if (data_network.ethProviderType === 'HttpProvider'){
        return new Web3.providers.HttpProvider(data_network.ethProvider);
      }
      else if (data_network.ethProviderType === 'WebsocketProvider'){
        return new Web3.providers.WebsocketProvider(data_network.ethProvider);
      }
      throw 'unknown providerType: ' + data_network.ethProviderType;
    }
  };
}));
