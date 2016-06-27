var express = require('express');
var router = express.Router();
var Repo = require('../repo/fakeRepo');


router.get('/', function (req, res, next) { 	
	Repo.allData('animal',function (result){		
		res.json(result)
	});
});

router.post('/',function (req,res,next){

	Repo.addData('animal',req.body,function  (result) {
		res.json(result);
	});
	
})

router.get('/:id',function (req,res,next){	
	
	Repo.byId('animal',req.params.id,function (result) {
		 res.json(result);
	});
});

router.put('/:id',function (req,res,next) {
	req.body.id=req.params.id;
	Repo.update('animal',req.body,function (result) {
		res.json(result);
	});
});

router.delete('/:id' ,function  (req,res,next) {
	Repo.delete('animal',req.params.id,function  (result) {
		res.json(result);
	})
})

module.exports = router;
