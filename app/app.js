var angular = require('angular');
require('angular-ui-router');
// var Lazy = require('lazy.js'),
	routes = require('./routes/index.js'),
	config = require('./assets/helpers/config.js'),
	services = require('./services'),
	modules = require('./modules');


angular.module('foosApp.app', [
	'ui.router',
	services.name,
	config.name,
	routes.name,
	modules.name
])

.run(function($rootScope, $state, $config) {
	console.log($config);
	$rootScope.$state = $state;
})