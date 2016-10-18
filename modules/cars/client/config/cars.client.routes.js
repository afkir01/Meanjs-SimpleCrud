(function () {
  'use strict';

  angular
    .module('cars')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('cars', {
        abstract: true,
        url: '/cars',
        template: '<ui-view/>'
      })
      .state('cars.list', {
        url: '',
        templateUrl: '/modules/cars/client/views/list.client.view.html',
        controller: 'CarsController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Car List'
        }
      });
  }

}());
