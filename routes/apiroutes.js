// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// Require our Ninja model
// Requiring our models
var db = require("../models");

//Routes
//==============================================================
module.exports = function(app){
    //Get all character Ninja routes
    app.get('/api/allusers', function(req,res){
        db.ninjaTables.findAll({}).then(function(dbUser){
            console.log(dbUser)
            res.json(dbUser)
        })

    });

    //send scores
    app.post('/api/scores', (req,res) => {
        console.log(`scores: ${req}`);
        res.send(req.body);
    })

    //Get specific character route

    //Add a ninja username 

    //Delete a ninja username

}