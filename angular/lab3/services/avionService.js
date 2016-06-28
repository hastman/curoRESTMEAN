angular.module("avion").service("avionService",["$http","url",function  ($http,url) {
	
	this.createAvion = function(avionData){
		return $http.post(url,avionData).then(function(result){
			return result.headers();
		});
	}

	this.listar = function  () {
		return $http.get(url).then(function(result){
			return result.data;
		})
	}

	this.byId = function(id){
		return $http.get(url+"/"+id).then(function(result){
			return result.data;
		})	
	}

	this.modifyAvion = function  (avion) {
		return $http.put(url+"/"+avion._id,avion).then(function(result){
			return result.status;
		});
	}


}]);