// vim: sts=2:ts=2:sw=2
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([
      './pubsub',
      './offer_normalize',
      './data_networks',
      './data_networks_utils',
      './data_config',
      './quote_provider',
    ], factory);
  } else if (typeof module !== 'undefined' && module.exports) {
    // CommonJS (node and other environments that support module.exports)
    module.exports = factory(
      require('./pubsub'),
      require('./offer_normalize'),
      require('./data_networks'),
      require('./data_networks_utils'),
      require('./data_config'),
      require('./quote_provider.js')
    );
  }else {
    // Global (browser)
    root.digioptionsTools = factory(
      root.PubSub,
      root.offer_normalize,
      root.data_networks,
      root.data_networks_utils,
      root.data_config,
      root.quote_provider
    );
  }
}(this, function (PubSub, offerNormalize, dataNetworks, dataNetworksUtils, dataConfig, quoteProvider) {

  function typeDurationToString(typeDuration){
    var duration;
    switch (typeDuration) {
    case 0: duration = 'yearly'; break;
    case 1: duration = 'monthly'; break;
    case 2: duration = 'weekly'; break;
    case 3: duration = 'daily'; break;
    case 4: duration = 'hourly'; break;
    case 5: duration = 'short term'; break; // TODO better name
    default: duration = '-' ; break;
    }
    return duration;
  }

  function padZero(i) {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }

  var dateStringUTCTOD = function(date) {
    return (
      padZero(date.getUTCHours()) +
      ':' +
      padZero(date.getUTCMinutes()) +
      ':' +
      padZero(date.getUTCSeconds())
    );
  };

  var dateStringUTC = function(date) {
    return (
      date.getUTCFullYear() +
      '-' +
      padZero(date.getUTCMonth() + 1) +
      '-' +
      padZero(date.getUTCDate()) +
      ' ' +
      dateStringUTCTOD(date)
    );
  };

  var dateStringUTCTZ = function(date) {
    return dateStringUTC(date) + '+00';
  };

  var dateStringLocalTOD = function(date) {
    return (
      padZero(date.getHours()) +
      ':' +
      padZero(date.getMinutes()) +
      ':' +
      padZero(date.getSeconds())
    );
  };

  var dateStringLocal = function(date) {
    return (
      date.getFullYear() +
      '-' +
      padZero(date.getMonth() + 1) +
      '-' +
      padZero(date.getDate()) +
      ' ' +
      dateStringLocalTOD(date)
    );
  };

  var dateStringLocalTZ = function(date) {
    var tzOffset = -date.getTimezoneOffset()/60;
    return dateStringLocal(date) + (tzOffset < 0 ? '-' : '+') + padZero(Math.abs(tzOffset));
  };

  return {
    PubSub: PubSub,
    offerNormalize: offerNormalize,
    dataNetworks: dataNetworks,
    dataNetworksUtils: dataNetworksUtils,
    dataConfig: dataConfig,
    quoteProvider: quoteProvider,
    typeDurationToString: typeDurationToString,
    dateStringUTCTOD: dateStringUTCTOD,
    dateStringUTC: dateStringUTC,
    dateStringUTCTZ: dateStringUTCTZ,
    dateStringLocalTOD: dateStringLocalTOD,
    dateStringLocal: dateStringLocal,
    dateStringLocalTZ: dateStringLocalTZ
  };
}));
