angular.module("avion").controller("altaAvionesController",["$scope","estados","avionService",
	function  ($scope,estados,avionService) {
	
	$scope.avion = {};

	$scope.departTimeStr;

	$scope.estados = estados;

	$scope.enviar = function(){
		avionService.createAvion($scope.avion).then(function  (result) {
			console.log(result);
		});
		$scope.avion = {};
		$scope.departTimeStr = "";
	}

	$scope.$watch("departTimeStr",function (newValue) {
		
		var departTime = new Date(newValue);
		$scope.avion.departTime = departTime.getTime();
	})


}]);