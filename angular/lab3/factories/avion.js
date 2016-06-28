angular.module("avion").factory("avionFactory",[function  () {
	
	var model = {
		company : "",
		origin:"",
		destination:"",
		departTime:-1
		delayed:0,
		_id:"",
		build : function  (param) {
			this.company = param.company;
			this.origin = param.origin;
			this.destination = param.destination;
			this.departTime = param.departTime;
			this.delayed = param.delayed;
			this._id = param._id;
		},
		setDepartTime:function(departTimeStr){
			var departTime = new Date(departTimeStr);
			this.departTime = departTime.getTime();
		}
	}

	return model;


}]);