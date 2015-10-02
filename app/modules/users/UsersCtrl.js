module.exports = angular.module('foosApp.modules.users.UsersCtrl', [])
	.controller('UsersCtrl', function($scope, UserService) {
		$scope.users = [];

		UserService.getAll().then(function(data) {
			$scope.users = data;
		}, function(data) {
			console.error('Error', data);
		});

		console.log('UsersCtrl init');
	});