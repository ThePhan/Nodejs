var mongoose        = require('mongoose');
var connectDB       = require('../../connect_mongo');
var User           = require('./user_schema');
var Schema = mongoose.Schema;
  mongoose = connectDB.initialize(mongoose);
  module.exports = {
  	listUser:function(req, res){
  		User.find(function(err, data){
  			if (err) {
  				res.status(404).json({'Warning': 'no data was found'});
  			}
  			res.status(200).json(data);
  		})

  	},

  	addUser:function(req, res){
  		var user = new User(req.body);
  		user._id = new Date().getTime();
  		user.save(function(err, data){
  			if (err) {
  				res.status(304).json({'message': 'err'});
  			}
  			res.status(200).json(data);
  		});

  	},

  	editUser:function(req, res){
  		var idUser = req.body._id;
  		User.findById(idUser, function(err, data){
  			if (!data) {
  				res.status(404).json({'Warning': 'User not exit'});
  			}
  			else{
  				data.firstName=req.body.firstName;
  				data.lastName=req.body.lastName;
  				data.photo=req.body.photo;
  				data.save(function(err, newvalue){
  					if (err) {
  						res.status(304).json({'message': 'Update user faild'});
  					}
  					res.status(200).json({'message': 'Update sucess'});
  				});
  			}
  		});

  	},
  	deleteUser:function(req, res){
  		var idUser = req.body._id;
  		User.findById(idUser, function(err, user){
  			if (!user) {
  				res.status(404).json({'Warning':'Noone was found'});
  			}
  			else{
  				user.remove(function(err){
  					if (err) {
  						res.status(304).json({'Warning':'Delete user faild'});
  					}
  					res.status(200).json({'message':'Sucess'});
  				});
  			}
  		});
  	}
  }
