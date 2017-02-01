angular.module('LoginModule')
.directive('loginDirective', ['LoginService', function(LoginService){
	return {
		restrict: 'EA',
		templateUrl: 'components/login/loginDirectiveTemplate.html',
		link: function(scope, element, attrs){
			scope.username = LoginService.username1;
			scope.password = LoginService.password1;
		}
	}
}])