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
						"caption":"Demo Photo",
						"url":"dist/images/illustrator/artworks/Submission.jpg",
						"alt":"Demo Photo One"
					},
					{
						"caption":"Demo Photo",
						"url":"dist/images/illustrator/artworks/innerturmoil.jpg",
						"alt":"Demo Photo Two"
					},
					{
						"caption":"Demo Photo",
						"url":"dist/images/illustrator/artworks/corvus.jpg",
						"alt":"Demo Photo Three"
					},
					{
						"caption":"Demo Photo",
						"url":"dist/images/illustrator/artworks/iris.JPG",
						"alt":"Demo Photo Four"
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