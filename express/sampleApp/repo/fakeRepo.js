

var FakeRepo = function  () {

};

FakeRepo.db = {};


FakeRepo.addData= function(collectionName,data,callback){

	if (!FakeRepo.db[collectionName]){
		FakeRepo.db[collectionName]=[];
	}
	var index = FakeRepo.db[collectionName].length;
	data.id = ++index;
	FakeRepo.db[collectionName].push(data);
	callback({"id":data.id});	

}

FakeRepo.allData=function(collectionName,callback){


	if (!FakeRepo.db[collectionName]){
		return callback([])
	}

	callback(FakeRepo.db[collectionName]);
}


FakeRepo.byId=function(collectionName,id,callback){

	if (!FakeRepo.db[collectionName]){
		return callback({})
	}

	FakeRepo.db[collectionName].forEach(function(data){
					console.log(data);

		if (data.id===parseInt(id)){
			return callback(data);
		}
	});
	callback({});

}

FakeRepo.delete=function (collectionName,id,callback) {
	if (!FakeRepo.db[collectionName]){
		return callback({})
	}

	for (var i = 0; i < FakeRepo.db[collectionName].length; i++) {
		 if (FakeRepo.db[collectionName][i].id===parseInt(id)){
			FakeRepo.db[collectionName].splice(i,1);
		 }
	};
	callback({"id":id});

}


FakeRepo.update=function (collectionName,data,callback) {
	if (!FakeRepo.db[collectionName]){
		return callback({})
	}

	for (var i = 0; i < FakeRepo.db[collectionName].length; i++) {
		 if (FakeRepo.db[collectionName][i].id===data.id){
			FakeRepo.db[collectionName][i]=data;
		 }
	};
	callback(data);

}

module.exports = FakeRepo;