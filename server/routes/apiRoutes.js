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
    
    User.find({email: req.body.email})
    .then(response => {
      if (response === '') {
        res.json(response);
      } else {
        User.create(req.body)
        .then((result) => {
          res.json(true);
        })
      }
    })
    .catch((err) => {
      res.json(err);
    });
  });

  app.post("/api/user/:id", function(req, res){

    User.updateOne({_id: req.params.id}, {$set: {favLaunches: req.body}})
    .then(() => {
      res.json(true);
    })
    .catch((err) => {
      res.json(err);
    });
  })
}