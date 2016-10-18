'use strict';

/**
 * Module dependencies
 */
var cars = require('../controllers/cars.server.controller');

module.exports = function (app) {
  // Cars collection routes
  app.route('/api/cars')
    .get(cars.list)
    .post(cars.create);

  // Single car routes
  app.route('/api/cars/:carId')
    .get(cars.read)
    .put(cars.update)
    .delete(cars.delete);

  // Finish by binding the article middleware
  app.param('carId', cars.carByID);
};
