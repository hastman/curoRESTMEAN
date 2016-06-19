var express = require('express');
var router = express.Router();
var User = require('../models/user');


router.get('/', function (req, res, next) { 	
	User.find({},function (err,result){
		if (err){
			console.error("Error al listar los usuarios",err);
		}
		res.json(result)
	});
});

router.post('/',function (req,res,next){

	var newUser = new User({"name":req.body.name,"pass":req.body.pass});
	newUser.save(function  (err,result) {
		return res.json(result);
	});
})

router.get('/:nombre',function (req,res,next){	
	User.findOne({"name":req.params.nombre},function (err,result) {
		return res.json(result);
	});
});

router.put('/:nombre',function (req,res,next) {
	
	User.findOneAndUpdate({"name":req.params.nombre},{"name":req.body.name,"pass":req.body.pass},function (result){
		return res.json(result);
	});
});

router.delete('/:nombre', function  (req,res,next) {
	User.findOneAndRemove({"name":req.params.nombre},function  (err,result) {
		return res.json(result);
	})
})

module.exports = router;
