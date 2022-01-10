/**
 * Bring in the comments from the data folder
 */
const comments = require('../data/comments');

/**
 * GET all comments
 */
const list = function(req, res) {
    console.log("GET all comments");
    res.json(comments);
}

/**
 * GET an individual comment by its ID
 */
const show = function(req, res) {
    console.log("GET an individual comment by ID");
    // ????????? 
    let foundComment = req.params.id;
    if(foundComment) {
        res.json(comments.find(foundComment)); 
    } else {
    res.status(400).json({msg: 'No comments found with the ID of ${req.params.id}'})
    }
}

/**
 * POST or add a new comment
 */

const create = function(req, res) {
    req.body = {
        "_id" : comments.length + 1,
        "body" : req.body.body,
        "postId" : 1
    }
    comments.push(req.body);
}

module.exports = {list, show, create}