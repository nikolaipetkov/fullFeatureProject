angular.module('LoginModule')
.service('LoginService', function($rootScope){
	var loginServiceObject = {
	username1: 'admin',
	password1: 'admin'
	};

	return loginServiceObject;
})