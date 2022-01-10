/**
 * Bring in the express library
 */
const express = require('express');
const router = express.Router();

/**
 * Bring in the controllers/comments folder and file
 */
const commentsController = require('../controllers/comments');

/**
 * This will GET all comments
 */
//
console.log('GET /comments')
router.get('/comments', commentsController.list);

/**
 * This will GET one comment by the ID
 */
console.log('GET /comments/:id');
router.get('/comments/:id', commentsController.show);

/**
 * This will POST/ADD a new comment
 */
console.log('POST /comments');
router.post('/comments', commentsController.create);

/**
  * Make this router available for use
  */
module.exports = router;