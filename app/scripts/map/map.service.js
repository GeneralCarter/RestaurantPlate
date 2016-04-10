(function() {
	'use strict';

	angular
		.module('restaurant.map')
		.factory('mapService', mapService);

	mapService.$inject = ['dataService'];

	/* @ngInject */
	function mapService(dataService) {

		var service ={
		  getBusiness: dataService.getBusiness,
      getMarkers: getMarkers
		}

		function getMarkers(businessInfo) {
		  businessInfo.map.markers = [];
		  for (var i = 0; i < businessInfo.map.annotations.length; i++) {
		    var annotation = businessInfo.map.annotations[i];
		    businessInfo.map.markers.push({
		      name: annotation.title,
		      lat: annotation.latitude,
		      lon: annotation.longitude
		    });
		  }
		  return businessInfo;
		}

		return service;
	}
})();
