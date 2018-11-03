// vim: sts=2:ts=2:sw=2
/* eslint-env es6 */

/*
    Copyright (c) digioptions.com (https://www.digioptions.com)
*/

/** File: quote_provider.js
 *  A helper ...
 */
// TODO add limit > 100 to display 24h at 5m interval
// TODO add bitfinex key


(function (root, factory) {
  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define(
      [
        './xhr-request-promise'
      ], function (
        request
      ) {
        return factory(
          request
        );
      });

  } else if ( typeof module !== 'undefined' && module.exports ) {
    // Node and other environments that support module.exports
    module.exports = factory(
      require('xhr-request-promise')
    );
  } else {
    // Browser
    root.quote_provider = factory(
      this.XhrRequestPromise
    );
  }
})(this, function(request){

  var KeyTimestampMs = 'timestampMs';
  var KeyValue = 'value';


  function BitfinexProvider(symbol){
    this.symbol = symbol;
    this.websocketUrl = 'wss://api.bitfinex.com/ws/2';
    //this.urlBase = 'https://api.bitfinex.com';
    this.urlBase = 'https://xmpp.digioptions.com:8086'; // temporary proxy to binfinex
    this.urlPathLast = '/v2/candles/trade:{timeFrame}:{symbolEncoded}/last';
    this.urlPathHist = '/v2/candles/trade:{timeFrame}:{symbolEncoded}/hist?end={endUtcMilliSeconds}&start={startUtcMilliSeconds}&sort=1';
    this.timeFrame = '5m';
    this.ws = null;
  }

  BitfinexProvider.prototype.realtime = function(realtimeCallback)
  {
    this.ws = new WebSocket(this.websocketUrl);

    var that = this;
    this.ws.onopen = function() {
      that.ws.send(JSON.stringify({'event': 'conf', flags: 32768})); // TODO 32768 TIMESTAMP as const
      that.ws.send(JSON.stringify({'event': 'subscribe', 'channel': 'ticker', 'symbol': that.symbol}));
    };

    this.ws.onmessage = function(msg) {
      var response = JSON.parse(msg.data);
      if (Array.isArray(response) && (response.length >= 3)){
        // we are receiving objects (on subscribtion) and array for subscribed values
        // response[1] might be 'hb' for heartbeat
        //console.log(response);
        if (Array.isArray(response[1])){
          var quote = {};
          quote[KeyTimestampMs] = response[2];
          quote[KeyValue] = response[1][6]; // TODO 6 use constants (ie 'MTS')
          realtimeCallback(quote);
        }
      }
    };
  };

  BitfinexProvider.prototype.getLast = function() {
    var symbolEncoded = encodeURIComponent(this.symbol);
    var pathLast = this.urlPathLast
      .replace('{symbolEncoded}', symbolEncoded)
      .replace('{timeFrame}', this.timeFrame);
    var urlLast = this.urlBase + pathLast;
    return request(urlLast, {method: 'GET'})
      .then(function(response){
        var resp = JSON.parse(response);
        var quote = {};
        quote[KeyTimestampMs] = resp[0];
        //quote[KeyValue] = response[...]; // TODO

        return Promise.resolve(quote);
      })
      .catch(function(error){
        console.log('quote_provider getLast', error); // TODO handle
      });
  };

  BitfinexProvider.prototype.loadHistory = function(historyCallback, lastDtMilliseconds)
  {
    var symbolEncoded = encodeURIComponent(this.symbol);
    var that = this;
    this.getLast()
      .then(function(quote) {
        var lastDtMsBitfinex = quote[KeyTimestampMs];
        if (lastDtMsBitfinex > lastDtMilliseconds){
          // if last timestamp from bitfinex is newer than lastDtMilliseconds
          lastDtMsBitfinex = lastDtMilliseconds;
        }
        var pathHist = that.urlPathHist
          .replace('{symbolEncoded}', symbolEncoded)
          .replace('{timeFrame}', that.timeFrame)
          .replace('{startUtcMilliSeconds}', lastDtMsBitfinex - 1000*3600*8) // we should not exceed 100 data points in total
          .replace('{endUtcMilliSeconds}', lastDtMsBitfinex);
        var urlHist = that.urlBase + pathHist;
        return request(urlHist, {method: 'GET'});
      })
      .then(function(answer) {
        var resp = JSON.parse(answer);
        historyCallback(resp);
      })
      .catch(function(error){
        console.log('quote_provider loadHistory', error); // TODO handle
      });
  };

  BitfinexProvider.prototype.close = function()
  {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  };

  BitfinexProvider.prototype.info = function()
  {
    return {
      name: 'bitfinex',
      url: 'https://www.bitfinex.com/'
    };
  };


  function QuoteProvider(symbol, lastDtMilliseconds, historyCallback, realtimeCallback){
    'use strict';

    this.symbol = symbol;
    this.lastDtMilliseconds = lastDtMilliseconds;
    this.historyCallback = historyCallback;
    this.realtimeCallback = realtimeCallback;
    this.provider = this.getProviderFromSymbol(symbol);

    if (this.provider){
      this.provider.realtime(this.realtime.bind(this));
      this.provider.loadHistory(this.history.bind(this), this.lastDtMilliseconds);
    }
  }

  QuoteProvider.prototype.getProviderFromSymbol = function(symbol){
    var provider;

    if (symbol === 'BTC/USD'){
      //symbol = 'tETHUSD'; // TODO
      symbol = 'tBTCUSD'; // TODO
      provider = new BitfinexProvider(symbol);
    }
    return provider;
  };

  QuoteProvider.prototype.getProvider = function()
  {
    // to check if a provider for symbol was found
    return this.provider;
  };

  QuoteProvider.prototype.realtime = function(resp)
  {
    // we push the quote (once) even if > lastDtMilliseconds
    // so we know that the marked is due for settlement
    if (this.realtimeCallback)
      this.realtimeCallback(this.symbol, resp);

    if (resp[KeyTimestampMs] > this.lastDtMilliseconds){
      this.close();
    }
  };

  QuoteProvider.prototype.history = function(resp)
  {
    if (this.historyCallback)
      this.historyCallback(this.symbol, resp);
  };

  QuoteProvider.prototype.close = function()
  {
    if (this.provider) {
      this.provider.close();
    }
  };

  QuoteProvider.prototype.info = function()
  {
    if (this.provider)
      return this.provider.info();
    return null;
  };

  return {
    'QuoteProvider': QuoteProvider,
    'BitfinexProvider': BitfinexProvider,
    'KeyTimestampMs': KeyTimestampMs,
    'KeyValue': KeyValue
  };
});
