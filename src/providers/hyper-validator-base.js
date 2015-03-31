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

