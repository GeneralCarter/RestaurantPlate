'use strict';

describe('Controller: BusinessesCtrl', function () {

  // load the controller's module
  beforeEach(module('restaurantApp'));

  var BusinessesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BusinessesCtrl = $controller('BusinessesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BusinessesCtrl.awesomeThings.length).toBe(3);
  });
});
