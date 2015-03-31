(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require('./src/hyper-validator-base');
require('./src/providers/hyper-validator-base');

},{"./src/hyper-validator-base":2,"./src/providers/hyper-validator-base":3}],2:[function(require,module,exports){
module.exports = angular.module('hyper-input-validator', []);

},{}],3:[function(require,module,exports){
require('../hyper-validator-base');

module.exports = angular.module('hyper-validator-base', [])
  .provider("HyperValidator", function() {
    var validators = {}

    var HyperValidator = {
      validate: function(type, viewValue, char) {
        return validators[type](viewValue, char);
      }
    }

    this.addValidator = function(key, validationFn) {
      validators[key] = validationFn;
    }

    this.$get = function() {
      return HyperValidator;
    }
  });


},{"../hyper-validator-base":2}]},{},[1]);
