const User = require("../models/user");

module.exports = function(app){

  // Renders all users
  app.get("/api/user/", function(req, res){
    
    User.find({}, (error, data) => {
     
      if (error) {
        console.log(error);
      }
      else {
      
        res.json(data);
      }
    });
  })

  // Renders a specific user at this url
  app.get("/api/user/:id", function(req, res){
    
    User.findOne({_id: req.params.id}, (error, data) => {
      if (error) {
        console.log(error);
      }
      else {
      
        res.json(data);
      }
    });
  })

  // Creates a new user 
  app.post("/api/user/", function(req, res) {
    
    console.log(req.body);

    User.create(req.body)
    .then(() => {
      res.json(true);
    })
    .catch((err) => {
      res.json(err);
    });
  });

  // Adds launch data to the user's followed launches.
  app.post("/api/user/:id", function(req, res){
    
    User.updateOne({_id: req.params.id}, {$push: {launches: req.body.launch}})
    .then(() => {
      res.json(true);
    })
    .catch((err) => {
      res.json(err);
    });
  })

  // Removes specific launch from user's followed launches
  app.put("/api/user/:id", function(req, res){
    
    User.updateOne({_id: req.params.id}, {$pull: {launches: {id: req.body.id}}})
    .then(() => {
      res.json(true);
    })
    .catch((err) => {
      res.json(err);
    });
  })
}