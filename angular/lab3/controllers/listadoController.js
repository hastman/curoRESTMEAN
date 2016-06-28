angular.module("avion").controller("listadoController",["$scope","avionService",
	function  ($scope,avionService) {
			
		$scope.listado;

		avionService.listar().then(function  (result) {
			$scope.listado = result;
		})	;

		$scope.delayed = function  (value) {
			return parseInt(value) === 0 ? "colorblue":"colorred";
		}

		
}])