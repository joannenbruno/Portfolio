// wrap in an IIFE to remove variables from global scope
(function() {
	'use strict';

	angular.module('folioGenericApp', ['ui.router', 'responsive-images'])
		.config(function($stateProvider, $urlRouterProvider, $compileProvider, $locationProvider) {

			$compileProvider.debugInfoEnabled(false);

			$stateProvider
			.state('developer', {
				url: '/developer',
				templateUrl: 'templates/main/developer.html',
				controller: 'DeveloperController'
			})
			.state('artist', {
				url: '/artist',
				templateUrl: 'templates/main/artist.html',
				controller: 'ArtistController'
			})
			.state('demo-photoshoot', {
				url: '/demo-photoshoot',
				templateUrl: 'templates/photoshoots/demo-photoshoot.html',
				controller: 'ArtistController'
			})
			.state('demo-project', {
				url: '/demo-project',
				templateUrl: 'templates/projects/demo-project.html',
				controller: 'DeveloperController'
			})
			.state('demo-project-two', {
				url: '/demo-project-two',
				templateUrl: 'templates/projects/demo-project-two.html',
				controller: 'DeveloperController'
			});

			$urlRouterProvider.otherwise('/developer');

			$locationProvider.html5Mode({
				enabled: true,
				requireBase: true
			});
		});
})();