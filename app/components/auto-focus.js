(function(angular){
	angular.module('movies.directives.auto-focus',[])
	.directive('autoFocus',['$location',function($location){
		return {
			restrict: 'A',
			link: function($scope,iEle,iAttrs,controller){
				$scope.$location = $location
				$scope.$watch('$location.path()',function(now){
					var aLink = iEle.attr("href")
				    //会跳转但是没有样式
				    var current = aLink.split('/')[1]
				    if(now.startsWith('/'+current)){
				    	iEle.parent().parent().children().children().removeClass("active")
				    	iEle.addClass("active")
				    }
				})
				window.ele=iEle
			}
		}
	}])
})(angular)
