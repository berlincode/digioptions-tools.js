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
    global.order_unique_key = factory();
  }
})(this, function(){

  function orderUniqueKey(order){
    // now return a unique key
    return JSON.stringify([
      order.addr,
      order.marketsAddr,
      order.marketFactHash,
      order.optionID,
      order.price,
      order.blockExpires,
      order.size,
      order.orderID
    ]);
  }

  return orderUniqueKey;
});
