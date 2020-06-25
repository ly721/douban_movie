(function(angular){
	'use strict';
	var module=angular.module('movies.movie_detail',[
		'ngRoute',
		'movies.services.http'])
	
	module.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/subject/:id',{
			templateUrl:'movie_detail/view.html',
			controller:'moviesDetailCtrl'
		})
	}])
	
	module.controller('moviesDetailCtrl',[
		'$scope',
		'$route',
		'$routeParams',
		'httpService',
		function($scope,$route,$routeParams,httpService){
			$scope.movie = {}
			$scope.loading = true
			var id = $routeParams.id
			var urlAdd = 'https://api.douban.com/v2/movie/subject/'+id
			//获取电影详情网址:
// https://api.douban.com/v2/movie/subject/30261964?apikey=0df993c66c0c636e29ecbb5344252a4a
		httpService.jsonp(urlAdd,
			{apikey:'0df993c66c0c636e29ecbb5344252a4a'},
			function(data){
				console.log(data)
				$scope.movie = data
				$scope.loading = false
				$scope.$apply()
			})
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
