var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt')
var userModel = require('../models/users')
var tokenHelper = require('../helper/token')
var tokenSecret = process.env.ACCESS_TOKEN_SECRET;
var tokenLife = process.env.ACCESS_TOKEN_LIFE;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/auth/login', function(req, res, next) {
  let data = req.body;
  userModel.findOne({email: data.email})
  .then((user)=>{
    if(!user) return res.status(500).json({
      message:"User doesn't exist!"
    })
    else{
      bcrypt.compare(data.password,user.password)
      .then( async (isMatch)=>{
        if(isMatch) {
          let dataInToken ={
            _id:user._id,
            email: user.email,
            firstName: user.firstName,
            lastName : user.lastName
          }
          const token = await tokenHelper.generateToken(dataInToken,tokenSecret,parseInt(tokenLife));
          return res.json({
            accessToken: token
          })
        }else{
          res.status(400).json({
            message: "Password is incorrect !"
          })
        }
        
        
      })
    }
  })

  
});
router.post('/auth/register', function(req, res, next) {
  let user = req.body;
  let email= user.email.toLowerCase();
  userModel.findOne({email: email})
  .then((data)=>{
    if(data) return res.status(500).json({
      message:"Register fail, user exists !"
    })
    else {
      let password = user.password;
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
            
            user.password = hash;
            let data = new userModel(user);
            data.save().then(()=>{
                res.status(201).json({
                    message:"Register user successfully!"
                })
            }).catch((err)=>{
                res.status(500).json({
                    message:"Register user fail!",
                    err
                })
            })
            
        })})
    
    }
  })

});

module.exports = router;
