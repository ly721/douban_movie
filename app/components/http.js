(function(angular){
	'user strict';
	var http = angular.module('movies.services.http',['ngRoute'])
	http.service('httpService',['$document','$window',function($document,$window){
		this.jsonp = function(url,params,callback){
			
			//2.将参数转换成字符串格式{id:1,name:2}
			var queryStr = url.indexOf('?') == -1 ? '?' : '&'
			for (var key in params){
				queryStr += key + '=' + params[key] + '&'
			}
			//1.挂载回调函数
			var funcName = 'my_jsonp_cb'+Math.random().toString().replace('.','')
			 queryStr += 'callback=' + funcName
			//3.创建script元素
			var scriptEle = $document[0].createElement('script')
			scriptEle.src = url + queryStr
			$window[funcName] = function(data){
				callback(data)
				$document[0].body.removeChild(scriptEle)
			}
			//4.追加到HTML中
			$document[0].body.appendChild(scriptEle)
		}
	}])
	
})(angular)