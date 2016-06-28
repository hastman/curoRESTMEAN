angular.module("avion").directive("listado",[function  () {
	return {
		restrict:'E',
		templateUrl:'directives/listado.html',
		link: function  ($scope,elemt,attrs) {
			console.log(elemt);
		}
	}
}])