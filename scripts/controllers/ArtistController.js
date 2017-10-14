(function() {
	angular
		.module('folioGenericApp')
		.controller('ArtistController', ['$scope', '$location', '$anchorScroll',
			function($scope, $location, $anchorScroll) {
				// set page class
				$scope.pageClass = 'artist';

				// image data array
				$scope.images = [
					{
						"caption":"Inner Turmoil - Copic Marker on Smooth Bristol",
						"url":"dist/images/illustrator/artworks/innerturmoil.png",
						"alt":"Inner Turmoil Copic Marker Illustration"
					},
					{
						"caption":"Submission - Copic Marker and Washi Tape on Smooth Bristol",
						"url":"dist/images/illustrator/artworks/Submission.png",
						"alt":"Submission Copic Marker Washi Tape Illustration"
					},
					{
						"caption":"Corvus - Colored Pencil",
						"url":"dist/images/illustrator/artworks/corvus.png",
						"alt":"Corvus Colored Pencil Illustration"
					},
					{
						"caption":"Iris - Copic Marker on Smooth Bristol",
						"url":"dist/images/illustrator/artworks/iris.png",
						"alt":"Iris Copic Marker Illustration"
					}
				];
				
				// utility function for linking between views
				$scope.go = function ( path ) {
				  $location.path( path );
				};

				// utility function to set viewport to the top of the page on element click
				$scope.backToTop = function() {
					$anchorScroll();
				};
			}
		]);
})();