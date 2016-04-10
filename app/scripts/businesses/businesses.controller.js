(function () {
  'use strict';

  angular
		.module('restaurant.businesses')
		.controller('BusinessesController', BusinessesController);

  BusinessesController.$inject = ['$state', 'businessesService', '$ionicSlideBoxDelegate'];

  /* @ngInject */
  function BusinessesController($state, businessesService, $ionicSlideBoxDelegate) {
    var vm = angular.extend(this, {
      categories: [],
      businesses: [],
      showProducts: showProducts,
      showProductDetails: showProductDetails,
      storeName: ''
    });

    (function activate() {
      loadCategories();
      loadBusinesses();
    })();

    // ******************************************************

    function loadCategories() {
      businessesService.getFeaturedCategories()
				.then(function (categories) {
				  vm.categories = categories;
				});
    }

    function loadBusinessInfo() {
      businessesService.getBusiness()
				.then(function (businessInfo) {
				  vm.storeName = businessInfo.storeName;
				});
    }

    function showProductDetails(product) {
      $state.go('app.featured-product', {
        productId: product.guid
      });
    }

    function showProducts(category) {
      $state.go('app.products', {
        categoryId: category.guid,
        categoryName: category.title
      });
    }

    function loadBusinesses() {
      businessesService.getBusinesses()
      .then(function (businesses) {
        vm.businesses = [businesses.pop()];
      });
    }

  }
})();
