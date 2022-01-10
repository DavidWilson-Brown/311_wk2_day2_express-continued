/**
 * Bring in the contacts from the data folder
 */
const contacts = require('../data/contacts');

/**
 * GET all contacts
 */
const list = function (req, res) {
    console.log("GET all contacts");
    res.json(contacts);
}

/**
 * GET an individual comment by its ID
 */
 const show = function(req, res) {
    console.log("GET an individual contact by ID");
    // ????????? 
    let foundContact = req.params.id;
    if(foundContact) {
        res.json(contacts.find(foundContact)); 
    } else {
    res.status(400).json({msg: 'No contacts found with the ID of ${req.params.id}'})
    }
}

/**
 * POST or add a new contact
 */
 const create = function(req, res) {
    req.body = {
        "_id" : contacts.length + 1,
        "name" : req.body.name,
        "occupation" : req.body.occupation,
        "avatar" : req.body.avatar,
        "postId" : 1
    }
    contacts.push(req.body);
}

module.exports = {list, show, create}