(function () {
  'use strict';

  angular
    .module('cars.routes')
    .controller('CarsController', CarsController);

  CarsController.$inject = ['$scope'];

  function CarsController($scope) {
    console.info('Cars Controller Loaded!');

    var vm = this;

    vm.cars = [
      {
        name: 'Audi'
      },
      {
        name: 'Mercedes'
      },
      {
        name: 'BMW'
      }
    ];

    vm.addCar = function() {
      console.info('Saving car...');

      console.log('VALUE OF NAME: ', vm.car_name);



    };

  }
}());
