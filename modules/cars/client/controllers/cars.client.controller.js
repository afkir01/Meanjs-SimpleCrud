

(function () {
  'use strict';

  angular
    .module('cars')
    .controller('CarsController',  function CarsController($scope, $http, $state) {
      console.info('Cars Controller Loaded!');

      var vm = this;

      // get all cars from database
      $http({
        method: 'GET',
        url: '/api/cars'
      })
        .success(function (resp) {
          console.info(resp);
          vm.cars = resp;
        })
        .error(function (resp) {
          console.warn(resp);
        });

      vm.addCar = function () {


        // get all cars from database
        $http({
          method: 'POST',
          url: '/api/cars',
          data: {
            name: vm.car_name
          }
        })
          .success(function (resp) {
            $state.go('cars.list');
          })
          .error(function (resp) {
            console.warn(resp);
          });


        // delete car from database

        vm.deleteCar = function () {
          $http({
            method: 'DELETE',
            url: '/api/cars/carId: car._id',
            data: {
              name: vm.car_name
            }
          })
            .success(function (resp) {
              $state.go('cars.list');
            })
            .error(function (resp) {
              console.warn(resp);
            });

        };

        vm.updateCar = function (id) {
          $http({
            method: 'PUT',
            url: '/api/cars/carId: car._id',
            data: {
              name: vm.car_name
            }
          })
            .success(function (resp) {
              $state.go('cars.list');
            })
            .error(function (resp) {
              console.warn(resp);
            });
        };

      };
    });

  // CarsController.$inject = ['$scope', '$http', '$state'];



});
