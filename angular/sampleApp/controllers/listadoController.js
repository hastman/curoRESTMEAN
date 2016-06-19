angular.module("sampleApp").controller("listadoController",["$scope","loginService",function  ($scope,loginService) {
	
	$scope.listado ;

	
	loginService.listar().then(function(result){
		$scope.listado=result;
	});



}]);