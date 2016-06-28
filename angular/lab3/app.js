'use strict';


(function  () {
	
	angular.module("avion",["ngRoute"])
	    .constant("estados",[{"label":"Retrasado","valor":1},{"label":"En hora","valor":0}])
	    .constant("url","http://localhost:3000/admin")
	    .filter("maskDelayed",function(){
	    	return	function  (valor) {
	    				return parseInt(valor) === 0 ? "En hora" : "Retrasado";
	    			};	    	
	    }).config(["$routeProvider",function ($routeProvider){
				$routeProvider.when('/',{
						templateUrl: './templates/manageAvion.html',
						controller:'altaAvionesController'
				}).when('/listado',{
					templateUrl:'./templates/listadoAviones.html',
					controller:'listadoController'
				}).when('/:id',{
						templateUrl: './templates/manageAvion.html',
						controller:'updateAvionesController'
				}).otherwise({
					redirectTo: '/'
				});
			}]);


})();