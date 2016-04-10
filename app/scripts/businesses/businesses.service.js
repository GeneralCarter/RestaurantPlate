(function () {
  'use strict';

  angular
		.module('restaurant.businesses')
		.factory('businessesService', businessesService);

  businessesService.$inject = ['_', 'dataService', 'mapService'];

  /* @ngInject */
  function businessesService(_, dataService, mapService) {
    var service = {
      getFeaturedCategories: getFeaturedCategories,
      getFeaturedProducts: getFeaturedProducts,
      getBusinesses: getBusinesses
    };
    return service;

    // ***************************************************************

    function getFeaturedCategories() {
      return dataService.getFeaturedCategories();
    }

    function getFeaturedProducts() {
      return dataService.getFeaturedProducts();
    }

    function getBusinesses() {
      return dataService.getBusinesses()
        .then(function (businessInfo) {
          return _.map(businessInfo, mapService.getMarkers);
        });
    }
  }

})();
