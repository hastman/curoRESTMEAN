'use strict';

(function(){

	angular.module("sampleApp",['ngRoute'])
		.constant("backendLocation","http://localhost:3005/users")
		.constant("routesFolder","templates")
		.config(["$routeProvider",function ($routeProvider){
			$routeProvider.when('/alta',{
					templateUrl: './templates/formUser.html',
					controller:'loginController'
			}).when('/listado',{
				templateUrl:'./templates/listado.html',
				controller:'listadoController'
			}).otherwise({
				redirectTo: '/alta'
			});
		}]).filter("encode",function(){
			return function  (text) {
				return btoa(text);
			}
	});
})();