/**
 * Bring in the express library
 */
 const express = require('express');
 const router = express.Router();

 /**
 * Bring in the controllers/products folder and file
*/
 const productsController = require('../controllers/products');

 /**
  * GET all products
  */
 console.log('GET /products', productsController.list);
 router.get('/products', productsController.list);

 /**
  * GET an individual product by its ID
  */
 console.log('GET /products/:id', productsController.show);
 router.get('/products/:id', productsController.show);

 /**
  * POST or add a new product
  */
 console.log('POST /products', productsController.create);
 router.post('/products', productsController.create);

 /**
  * Make this router available for use
  */
 module.exports = router;