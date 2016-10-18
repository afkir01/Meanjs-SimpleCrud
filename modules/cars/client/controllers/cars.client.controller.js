(function () {
  'use strict';

  angular
    .module('cars')
    .controller('CarsController', ArticlesController);

  ArticlesController.$inject = ['$scope'];

  function ArticlesController($scope) {
    var vm = this;

  }
}());
