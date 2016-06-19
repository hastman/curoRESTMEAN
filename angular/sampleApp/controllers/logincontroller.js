angular.module("sampleApp").controller("loginController",["$scope","loginService",function  ($scope,loginService) {
	
	$scope.model = {};
	

	$scope.enviar = function  () {		
		loginService.create($scope.model.name,$scope.model.pass);
	}

}]);