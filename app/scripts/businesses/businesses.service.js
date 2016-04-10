(function () {
  'use strict';

  angular
		.module('restaurant.businesses')
		.factory('businessesService', businessesService);

  businessesService.$inject = ['dataService'];

  /* @ngInject */
  function businessesService(dataService) {
    var service = {
      getFeaturedCategories: getFeaturedCategories,
      getFeaturedProducts: getFeaturedProducts,
      getBusiness: dataService.getBusiness
    };
    return service;

    // ***************************************************************

    function getFeaturedCategories() {
      return dataService.getFeaturedCategories();
    }

    function getFeaturedProducts() {
      return dataService.getFeaturedProducts();
    }
  }

})();
