// Generated by CoffeeScript 1.4.0
(function() {
  'use strict';

  require('./node_modules/shadowsocks/lib/shadowsocks/local').main();


  var load, restartServer, saveChanges;

  saveChanges = function() {
    var config;
    config = {};
    $('input').each(function() {
      var key;
      key = $(this).attr('data-key');
      return config[key] = this.value;
    });
    chrome.storage.local.set(config, function() {
      return console.log('config saved.');
    });
    restartServer(config);
    return false;
  };

  load = function() {
    var config;
    config = {};
    $('input').each(function() {
      var key;
      key = $(this).attr('data-key');
      return config[key] = this.value;
    });
    return chrome.storage.local.get(config, function(data) {
      $('input').each(function() {
        var key;
        key = $(this).attr('data-key');
        return this.value = data[key] || '';
      });
      return restartServer(data);
    });
  };

  restartServer = function(config) {
    if (config.server && +config.server_port && config.password && +config.local_port) {
      if (window.local != null) {
        window.local.close();
      }
      window.local = new Local(config);
      return $('#divError').hide();
    } else {
      return $('#divError').show();
    }
  };

  $('#buttonSave').on('click', saveChanges);

  load();

}).call(this);