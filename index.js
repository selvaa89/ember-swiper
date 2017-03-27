/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-swiper',
  init: function(name) {
    this._super.init && this._super.init.apply(this, arguments);

    var assets_path = require('path').join('dist', 'js', 'swiper.js');
    this.treePaths['vendor'] = require.resolve('swiper').replace(assets_path, '');
  },
  included: function(app) {
  	var target;
  	while (app.app) {
  		app = app.app
  	}
    target = app;

    var options = target.options.swiperOptions || {enabled: true};
    if (options.enabled) {
        target.import('vendor/dist/js/swiper.min.js');
        target.import('vendor/dist/css/swiper.min.css');
    }
  }
};
