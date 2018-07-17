// vim: sts=2:ts=2:sw=2
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([
      './pubsub',
      './order_normalize',
      './data_networks',
      './data_networks_utils',
      './data_config'
    ], factory);
  } else if (typeof module !== 'undefined' && module.exports) {
    // CommonJS (node and other environments that support module.exports)
    module.exports = factory(
      require('./pubsub'),
      require('./order_normalize'),
      require('./data_networks'),
      require('./data_networks_utils'),
      require('./data_config')
    );
  }else {
    // Global (browser)
    root.digioptionsTools = factory(
      root.PubSub,
      root.order_normalize,
      root.data_networks,
      root.data_networks_utils,
      root.data_config
    );
  }
}(this, function (PubSub, orderNormalize, data_networks, data_networks_utils, data_config) {
  return {
    PubSub: PubSub,
    orderNormalize: orderNormalize,
    data_networks: data_networks,
    data_networks_utils: data_networks_utils,
    data_config: data_config
  };
}));
