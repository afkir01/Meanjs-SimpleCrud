(function () {
  'use strict';

  angular
    .module('cars.routes')
    .controller('CarsController', CarsController);

  CarsController.$inject = ['$scope', '$http', '$state'];

  function CarsController($scope, $http, $state) {
    console.info('Cars Controller Loaded!');

    var vm = this;

    // get all cars from database
    $http({
      method: 'GET',
      url: '/api/cars'
    })
    .success(function(resp) {
      console.info(resp);
      vm.cars = resp;
    })
    .error(function(resp) {
      console.warn(resp);
    });

    vm.addCar = function() {
      console.info('Saving car...');

      console.log('VALUE OF NAME: ', vm.car_name);

        // get all cars from database
        $http({
          method: 'POST',
          url: '/api/cars',
          data: {
            name: vm.car_name
          }
        })
        .success(function(resp) {
          $state.go('cars.list');
        })
        .error(function(resp) {
          console.warn(resp);
        });

    };

  }
}());
