// wrap in an IIFE to remove variables from global scope
(function () {
	'use strict';

	angular.module('folioGenericApp', ['ui.router', 'responsive-images'])
		.config(function ($stateProvider, $urlRouterProvider, $compileProvider, $locationProvider) {

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
				})
				.state('keep-my-casa', {
					url: '/keep-my-casa',
					templateUrl: 'templates/projects/project-keep-my-casa.html',
					controller: 'DeveloperController'
				})
				.state('u-know-health', {
					url: '/u-know-health',
					templateUrl: 'templates/projects/project-u-know-health.html',
					controller: 'DeveloperController'
				})
				.state('medidata', {
					url: '/medidata',
					templateUrl: 'templates/projects/project-medidata.html',
					controller: 'DeveloperController'
				})
				.state('sickbay', {
					url: '/sickbay',
					templateUrl: 'templates/projects/project-sickbay.html',
					controller: 'DeveloperController'
				});

			$urlRouterProvider.otherwise('/developer');
		});
})();