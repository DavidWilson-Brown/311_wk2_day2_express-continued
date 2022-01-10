/**
 * Bring in the products from the data folder
 */
 const products = require('../data/products');

 /**
  * GET all products
  */
 const list = function(req, res) {
    console.log("GET all products");
    res.json(products);
 }

 /**
 * GET an individual product by its ID
 */
  const show = function(req, res) {
    console.log("GET an individual product by ID");
    // ????????? 
    let foundProduct = req.params.id;
    if(foundProduct) {
        res.json(products.find(foundProduct)); 
    } else {
    res.status(400).json({msg: 'No products found with the ID of ${req.params.id}'})
    }
}

/**
 * POST or add a new contact
 */
 const create = function(req, res) {
    req.body = {
        "_id" : products.length + 1,
        "name" : req.body.name,
        "description" : req.body.description,
        "postId" : 1
    }
    products.push(req.body);
}

module.exports = {list, show, create}