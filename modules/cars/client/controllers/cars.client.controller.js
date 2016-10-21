(function () {
  'use strict';

  angular
    .module('cars.routes')
    .controller('CarsController', CarsController);

  CarsController.$inject = ['$scope', '$http', '$state', '$filter', '$stateParams'];

  function CarsController($scope, $http, $state, $filter, $stateParams) {
    console.info('Cars Controller Loaded!');

    console.log($stateParams);

    var vm = this;
    vm.selectedCar = null;

    if ($stateParams.carId) {
      $http({
        method: 'GET',
        url: '/api/cars/'+$stateParams.carId
      })
        .success(function(resp) {

          vm.selectedCar = resp;
        })
        .error(function(resp) {
          console.warn(resp);
        });

    }

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

    //  Add a car to the database

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

    //  delete a car from the database

    vm.deleteCar = function(car) {
      console.info('Delete car...');

      console.log('VALUE OF car: ', car);

      // delete a car from database
      $http({
        method: 'DELETE',
        url: '/api/cars/' +car._id,
        data: car

      })
        .success(function(resp) {

          vm.cars = $filter('filter')(vm.cars, { _id: "!" +car._id });

        })
        .error(function(resp) {
          console.warn(resp);
        });

    };

    // edit a car in the database

    vm.editCar = function(car) {

      $http({
        method: 'PUT',
        url: '/api/cars/' +car._id,
        data: car
      })
        .success(function(resp) {

          // loop trough cars

          for (var i = 0; i <= vm.cars.length -1; i++) {
            var car_temp = vm.cars[i];
            if (car._id === car_temp._id){
              car_temp = car;
            }
          }

        })
        .error(function(resp) {
          console.warn(resp);
        });

    };

  }
}());
