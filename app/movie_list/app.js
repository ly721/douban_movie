(function(angular){
	'use strict';
	var module=angular.module('movies.movie_list',[
		'ngRoute',
		'movies.services.http'])
	
	module.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/:category/:page',{
			templateUrl:'movie_list/view.html',
			controller:'moviesListCtrl'
		})
	}])
	
	module.controller('moviesListCtrl',[
		'$scope',
		'$route',
		'$routeParams',
		'httpService',
		function($scope,$route,$routeParams,httpService){
			var count = 3
			var page = parseInt($routeParams.page) || 1
			var start = (page-1)*count
		    $scope.title = 'Loading'
		    $scope.subjects = []
		    $scope.total = 0
		    $scope.totalPages = 0
		    $scope.currentPage = 0
			$scope.loading = true
		    httpService.jsonp('http://api.douban.com/v2/movie/'+$routeParams.category,
		    {apikey:'0df993c66c0c636e29ecbb5344252a4a',
			count:count,
			start:start,
			q:$routeParams.q},
		    function(data){
		    	$scope.title = data.title
		    	$scope.subjects = data.subjects
		    	$scope.total = data.total
				$scope.loading = false
				$scope.totalPages = Math.ceil($scope.total/count)
				$scope.currentPage = page
				$scope.$apply()
		    })
			$scope.go = function (page){
			  if(page >=1 && page <= $scope.totalPages){
				$route.updateParams({page:page})
			 }
			}
	}])
})(angular)



		
// 		//这只是模拟数据，不是直接从doubanapi获取，所以要进行跨域请求
// 	  //    $http.get('/app/public/data/in_theaters.json')
// 	  //    .then(function(res){
// 			//  if(res.status == 200){
// 			// 	 $scope.subjects = res.data
// 			//  }else{
// 			// 	$scope.message = '获取数据失败' + res.statusText
// 			// 	console.log(res)
// 			//  }
// 	  //    },function(err){
// 	  //    	$scope.message = '获取数据失败' + err.statusText
// 			// console.log(err)
// 	  //    })
