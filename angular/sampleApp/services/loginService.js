angular.module("sampleApp").service("loginService",["$http","backendLocation",function  ($http,backendLocation) {
	
	this.create = function(user,pass){
		$http.post(backendLocation,{"name":user,"pass":pass});
	}

	this.listar = function(){
		return $http.get(backendLocation).then(function(result){
			return result.data;
		});
	}




}])