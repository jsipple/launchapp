const User = require("../models/User");

module.exports = function(app){

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

  app.post("/api/user/:id", function(req, res){
    console.log(req.body.launch);

    User.updateOne({_id: req.params.id}, {$push: {launches: req.body.launch}})
    .then(() => {
      res.json(true);
    })
    .catch((err) => {
      res.json(err);
    });
  })
}