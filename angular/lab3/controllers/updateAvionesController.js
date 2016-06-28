angular.module("avion").controller("updateAvionesController",["$scope","$routeParams","avionService","estados",
	function  ($scope,$routeParams,avionService,estados) {
	

		$scope.avion = {};

		$scope.departTimeStr;

		$scope.estados = estados;

		avionService.byId($routeParams.id).then(function  (result) {
			$scope.avion = result;
			$scope.departTimeStr = new Date(result.departTime);
		})

		$scope.enviar = function(){
			console.log($scope.avion);
			avionService.modifyAvion($scope.avion).then(function  (result) {
				console.log(result);
			});
			
		}

		$scope.$watch("departTimeStr",function (newValue) {			
			var departTime = new Date(newValue);
			$scope.avion.departTime = departTime.getTime();
		})


}])