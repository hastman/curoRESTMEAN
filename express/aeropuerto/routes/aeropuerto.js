var express = require('express');
var router = express.Router();
var Avion = require('../models/avion');



router.get("",function  (req,res,next) {
	
	var query = {};

	if (req.query.origen){
		query.origin = req.query.origen;
	}

	if (req.query.destino){
		query.destination = req.query.destino;
	}

	if (req.query.estado){
		query.delayed = req.query.estado === 'retrasado' ?  1 : 0;
	}

	Avion.find(query,function(err,results){
		if (err){
			console.err(err);
			return next(new Error({message:"Error al obtener los datos de los aviones"}));
		}
		if (results.length===0){
			return next();
		}
		res.json(results);

	});

});

module.exports = router;