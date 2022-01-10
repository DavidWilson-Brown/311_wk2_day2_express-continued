/**
 * Bring in the vehicles from the data folder
 */
 const vehicles = require('../data/vehicles');

 /**
  * GET all vehicles
  */
 const list = function(req, res) {
    console.log("GET all vehicles");
    res.json(vehicles);
 }

 /**
 * GET an individual vehicle by its ID
 */
  const show = function(req, res) {
    console.log("GET an individual vehicle by ID");
    // ????????? 
    let foundVehicle = req.params.id;
    if(foundVehicle) {
        res.json(vehicles.find(foundvehicle)); 
    } else {
    res.status(400).json({msg: 'No vehicle found with the ID of ${req.params.id}'})
    }
}

/**
 * POST or add a new contact
 */
 const create = function(req, res) {
    req.body = {
        "_id" : products.length + 1,
        "year" : req.body.year,
        "make" : req.body.make,
        "model" : req.body.model,
        "postId" : 1
    }
    vehicles.push(req.body);
    /**
     * Send back the added contact
     */
    res.json(create);
}

module.exports = {list, show, create}