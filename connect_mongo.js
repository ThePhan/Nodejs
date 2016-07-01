// var mongoose = require('mongoose');
// mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o')
module.exports.initialize = function(mongoose){
  // mongoose = mongoose.createConnection('mongodb://localhost/users');
  mongoose = mongoose.createConnection('mongodb://the:123456@ds011785.mlab.com:11785/usersthe');
  return mongoose;
}
