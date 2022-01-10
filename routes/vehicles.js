/**
 * Bring in the express library
 */
 const express = require('express');
 const router = express.Router();

 /**
 * Bring in the controllers/contacts folder and file
*/
const vehiclesController = require('../controllers/vehicles');

/**
 * GET all vehicles
 */
console.log('GET /vehicles', vehiclesController.list);
router.get('/vehicles', vehiclesController.list);

/**
 * GET a single vehicle by its ID
 */
console.log('GET /vehicles/:id', vehiclesController.show);
router.get('/vehicles/:id', vehiclesController.show);

/**
 * POST or add a new vehicle
 */
console.log('POST /vehicles', vehiclesController.create);
router.post('vehicles', vehiclesController.create);

/**
  * Make this router available for use
  */
 module.exports = router;