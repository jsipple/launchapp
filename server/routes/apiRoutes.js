const User = require("../models/user");

module.exports = function(app){

  // Renders all users


  // Renders a specific user at this url
  // app.get("/api/user/:id", function(req, res){
    
  //   User.findOne({_id: req.params.id}, (error, data) => {
  //     if (error) {
  //       console.log(error);
  //     }
  //     else {
      
  //       res.json(data);
  //     }
  //   });
  // })

  // Creates a new user 
  app.post("/api/user/", function(req, res) {
    
    User.find({email: req.body.email})
    .then(response => {
      if (response != '') {
        res.json(response);
      } else {
        User.create(req.body)
        .then((result) => {
          res.json(result);
        })
      }
    })
    .catch((err) => {
      res.json(err);
    });
  });

  app.post("/api/launch/:id", function(req, res){
    console.log(req.params.id)
    User.findOneAndUpdate({email: req.params.id}, {$push: {favLaunches: req.body}})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
  })


app.put('/api/launch/delete/:id', (req, res) => {
  console.log('testing')
  User.findOneAndUpdate({email: req.params.id}, {$pull: {favLaunches: req.body}})
    .then(() => {
      console.log('test')
      res.json()
    })
})
}