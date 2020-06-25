// 'use strict';

// // Declare app level module which depends on views, and components
// var module=angular.module('movies', [
//   'ngRoute',
//   'movies.in_theaters',
//   'movies.coming_soon',
//   'movies.top250',
// ])
// module.config(['$routeProvider', function($routeProvider) {
//   $routeProvider.otherwise({redirectTo: '/top250/1'});
// }]);



'use strict';

var module=angular.module('movies', [
  'ngRoute',
  'movies.movie_detail',
  'movies.movie_list',
  'movies.directives.auto-focus'
])

module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/in_theaters/1'})
}])

module.controller('searchCtrl',['$scope','$route',function($scope,$route){
	$scope.input = ''
	$scope.search = function(){
		$route.updateParams({category: 'search',q:$scope.input})
	}
}])

// module.controller('navCtrl',['$scope','$location',function($scope,$location){
// 	$scope.$location = $location
// 	$scope.$watch('$location.path()',function(now){
// 		if(now.startsWith('/in_theaters')){
// 			$scope.current='in_theaters'
// 		}else if(now.startsWith('/coming_soon')){
// 			$scope.current='coming_soon'
// 		}else if(now.startsWith('/top250')){
// 			$scope.current='top250'
// 		}
// 	})
// }])
