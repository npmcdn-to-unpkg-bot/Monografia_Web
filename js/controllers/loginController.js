
angular.module("appLogin").controller("loginController", function ($scope, loginAPI) {
    loginAPI.getUsuarios().success(function (data) {
    	console.log("chegou no controller");
		$scope.myRequest = data;
	});
    
});