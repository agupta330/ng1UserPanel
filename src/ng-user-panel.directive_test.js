'use strict';

describe('ng1UserPanel module', function () {
  beforeEach(module('ng1UserPanel'));
  beforeEach(function () {
    this.addMatchers({
      toHaveClass: function (cls) {
        this.message = function () {
          return "Expected '" + angular.mock.dump(this.actual) + "' to have class '" + cls + "'.";
        };

        return this.actual.hasClass(cls);
      }
    });
    this.addMatchers({
      toHaveFocus: function () {
        this.message = function () {
          return 'Expected \'' + angular.mock.dump(this.actual) + '\' to have focus';
        };

        return document.activeElement === this.actual[0];
      }
    });
  });

  describe('copy-text directive', function () {
    it('should print current version', function () {
      inject(function ($compile, $rootScope, $timeout) {
        var element = angular.element($compile('<span data-copy-text>TEXT TO COPY</span>')($rootScope));
        element.triggerHandler('click');
        expect(element.text()).toEqual('TEXT TO COPY');
        expect(element).toHaveClass('ng-isolate-scope');
      });
    });
  });
});
