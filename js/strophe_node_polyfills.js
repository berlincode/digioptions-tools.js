#!/usr/bin/env node
// vim: sts=2:ts=2:sw=2
/* eslint-env node, es6 */
/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */

(function() {

  // TODO fake window.console?
  // fake browser document and window for strophe.js
  var JSDOM = require('jsdom').JSDOM;
  document = new JSDOM('test').window.document; // eslint-disable-line no-global-assign
  window = {}; // eslint-disable-line no-global-assign

  // create a XMLHttpRequest object which can parse xml via jsom and sets responseXML
  var XMLHttpRequestOrig = require('xhr2').XMLHttpRequest;
  var XMLHttpRequest = function () {
    /* create object with original constructor */
    var xhr = new XMLHttpRequestOrig();

    var onreadystatechange = null;

    /* intercept 'open' method to modify onreadystatechange */
    var open_orig = xhr.open;
    xhr.open = function () {
      onreadystatechange = xhr.onreadystatechange;
      xhr.onreadystatechange = function(){};
      return open_orig.apply(xhr, arguments);
    };

    /* hook into the processing */
    var addEventListener_orig = xhr.addEventListener;
    xhr.addEventListener('readystatechange', function () {
      if (xhr.readyState === this.DONE) {

        var JSDOM = require('jsdom').JSDOM;
        try {
          var dom = new JSDOM(xhr.responseText, {contentType: 'text/xml'});
          xhr.responseXML = dom.window.document;
        } catch(err) {
          // maybe no xml content? (Error: socket hang up)
          console.log('xml parse error:', xhr.responseText);
        }

        if (onreadystatechange !== null)
          onreadystatechange();
      }
    });

    this.addEventListener = function(event, callback) {
      if (event === 'readystatechange')
        this.onreadystatechange = callback;
      else
        addEventListener_orig(event, callback);
    };

    //var removeEventListener_orig = xhr.addEventListener;
    //this.removeEventListener = function(event, callback) {
    //  console.log('removeEventListener');
    //  if (event !== 'readystatechange')
    //    return removeEventListener_orig(event, callback);

    //  var bool = this.onreadystatechange == callback;
    //  this.onreadystatechange = null;
    //  return bool;
    //};

    /* provide a simple way to control debug messages */
    xhr.debug = false;

    return xhr;
  };
  window.XMLHttpRequest = XMLHttpRequest;
  global.XMLHttpRequest = XMLHttpRequest;

  global.WebSocket = require('ws');
  global.DOMParser = function() {
    'use strict';

    this.parseFromString= function(data, contentType){
      var dom = new JSDOM(data, {contentType: contentType || 'text/xml'});
      return dom.window.document;
    };
  };

})();
