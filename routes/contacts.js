/**
 * Bring in the express library
*/
const express = require('express');
const router = express.Router();

/**
 * Bring in the controllers/contacts folder and file
*/
const contactsController = require('../controllers/contacts');


 /**
  * GET all contacts
*/
console.log('GET /contacts', contactsController.list)
router.get('/contacts', contactsController.list);


 /**
  * GET an individual contact by the ID
  */
 console.log('GET /contacts/:id', contactsController.show);
 router.get('/contacts/:id', contactsController.show);

 /**
  * POST add a new contact
  */
 console.log('POST /contacts', contactsController.create);

 /**
  * Make this router available for use
  */
 module.exports = router;