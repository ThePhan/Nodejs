var user = require('./app/models/user');

module.exports.initialize = function(app, router){
  router.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    var url = req.url;
    if( url.length == 1){ 
      res.json({message:'Manager User'});
    }else{
      // next the other router
      next();
    }
  });
  router.get('/user', user.listUser);
  router.post('/user', user.addUser);
  router.put('/user', user.editUser);
  router.delete('/user', user.deleteUser);
  app.use('/', router);
}
