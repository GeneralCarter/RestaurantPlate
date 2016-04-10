'use strict';

describe('Service: businesses.service', function () {

  // load the service's module
  beforeEach(module('restaurantApp'));

  // instantiate service
  var businessesservice;
  beforeEach(inject(function (_businessesservice_) {
    businesses.service = _businessesservice_;
  }));

  it('should do something', function () {
    expect(!!businesses.service).toBe(true);
  });

});
