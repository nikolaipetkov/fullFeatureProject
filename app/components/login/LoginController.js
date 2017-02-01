angular.module('LoginModule', [])
.controller('LoginController', ['$scope', '$rootScope', '$state', 'LoginService', function($scope, $rootScope, $state, LoginService){
	$scope.greeting = "Hi from Loggin Controller";
}])