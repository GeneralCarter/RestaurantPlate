(function () {
  'use strict';

  angular
		.module('restaurant.businesses', [
			'ionic',
			'ngCordova',
			'restaurant.common'
		])
		.config(function ($stateProvider) {
		  $stateProvider
				.state('app.businesses', {
				  url: '/businesses',
				  views: {
				    'menuContent': {
				      templateUrl: 'scripts/businesses/businesses.html',
				      controller: 'BusinessesController as vm'
				    }
				  }
				});
		});
})();
