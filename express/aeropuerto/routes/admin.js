var express = require('express');
var router = express.Router();
var Avion = require('../models/avion');

router.get('/',function  (req,res,next) {
	
	Avion.find({},function(err,result){
		if (err){
			console.log(err);
			return next(new Error({message:"Error al obtener los datos de los aviones"}));
		}
		if (result.length===0){
			return next();
		}
		res.json(result);
	})

});

router.post("/",function  (req,res,next) {
	
	Avion.create(req.body,function  (err,result) {
		if (err){
			console.log(err);
			return next(new Error({message:"Error al guardar el avion"}));
		}
		res.location(result._id)
		res.sendStatus("201");

	})

});

router.get('/:id',function  (req,res,next) {

	Avion.find({"_id":req.params.id},function(err,result){
		if (err){
			console.log(err);
			return next(new Error({message:"Error al obtener los datos de los aviones"}));
		}
		if (result.length===0){
			return next();
		}
		res.json(result[0]);
	})
	
});

router.put('/:id',function  (req,res,next) {
	delete req.body._id;
	Avion.findOneAndUpdate({"_id":req.params.id},req.body,function(err,result){
		if (err){
			console.log(err);
			return next(new Error({message:"Error al actualizar los datos de los aviones"}));
		}
		if (result.length===0){
			return next();
		}
		res.sendStatus("204");

	});

});


router.delete('/:id',function  (req,res,next) {

	Avion.findOneAndRemove({"_id":req.params.id},req.body,function(err,result){
		if (err){
			console.err(err);
			return next(new Error({message:"Error al eliminar los datos de los aviones"}));
		}
		if (result.length===0){
			return next();
		}
		res.sendStatus("204");

	});
	
});

module.exports = router;