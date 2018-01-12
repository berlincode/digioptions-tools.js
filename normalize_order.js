// vim: sts=2:ts=2:sw=2
(function (global, factory) {
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( function () { return factory(); } );

  } else if ( typeof module != 'undefined' && module.exports ) {
    // Node and other environments that support module.exports
    module.exports = factory();

  } else {
    // Browser
    global.normalize_order = factory();
  }
})(this, function(){

  function orderNormalize(order){
  /*
  order data example:
  {
      "addr": "0x0000000000000000000000000000000000000000",
      "blockExpires": 1234567,
      "marketFactHash": "0x1111111111111111111111111111111111111111111111111111111111111111",
      "marketsAddr": "0x0000000000000000000000000000000000000000",
      "optionID": 0,
      "orderID": 4321098765,
      "price": 0,
      "r": "0x1111111111111111111111111111111111111111111111111111111111111111",
      "s": "0x2222222222222222222222222222222222222222222222222222222222222222",
      "size": 1000000000000000000,
      "v": 27
  }
  */
    var idx, key, list, normalized_order = {};
    //console.log("normalize", order);
    list = ['addr', 'marketsAddr'];
    for (idx=0 ; idx < list.length ; ++idx){
      key = list[idx];
      if ((typeof(order[key]) != 'string') || (order[key].length != 42) || (! order[key].startsWith('0x')))
        return null;

      normalized_order[key] = order[key].toLowerCase();
    }
    list = ['r', 's', 'marketFactHash'];
    for (idx=0 ; idx < list.length ; ++idx){
      key = list[idx];
      if ((typeof(order[key]) != 'string') || (order[key].length != 66) || (! order[key].startsWith('0x')))
        return null;

      normalized_order[key] = order[key].toLowerCase();
    }
    list = ['blockExpires', 'optionID', 'orderID', 'price', 'size', 'v'];
    for (idx=0 ; idx < list.length ; ++idx){
      key = list[idx];
      if (typeof(order[key]) != 'number')
        return null;

      normalized_order[key] = order[key];
    }

    return normalized_order;
  }

  function orderUniqueKey(order){
    // now return a unique key
    return JSON.stringify([
      order.addr,
      order.blockExpires,
      order.marketsAddr,
      order.marketFactHash,
      order.optionID,
      order.orderID,
      order.price,
      order.r,
      order.s,
      order.size,
      order.v
    ]);
  }

  return {
    'orderNormalize': orderNormalize,
    'orderUniqueKey': orderUniqueKey
  };
});
