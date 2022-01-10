/**
 * Bring in the express library
 */
const express = require("express");
const contacts = require("./routes/contacts");
const vehicles = require("./routes/vehicles");
const comments = require("./routes/comments");
const products = require("./routes/products");

/**
 * Create an app to instantiate the express module
 */
const app = express();

/**
 * Designate the PORT for the server
 */
const port = process.env.PORT || 4001;

/**
 * Use express with the static files in the public folder
 * Tell express to use json() format
 */
app.use(express.static("public"));
app.use(express.json());

/**
 * Import and use the routers from the Routes folder
 */

app.use(contacts);
app.use(vehicles);
app.use(comments);
app.use(products);


/**
 * Print out that the server is active and is listening on designated PORT
 */
app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});