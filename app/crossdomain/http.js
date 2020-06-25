(function(window,document,undefined){
	'use strict';
	var jsonp = function(url,params,callback){
		//1.挂载回调函数
		var funcName = 'my_jsonp_cb'+Math.random().toString().replace('.','')
		window[funcName] = callback
		//2.将参数转换成字符串格式{id:1,name:2}
		var queryStr = url.indexOf('?') == -1 ? '?' : '&'
		for (var key in params){
			queryStr += key + '=' + params[key] + '&'
		}
		 queryStr += 'callback=' + funcName
		//3.创建script元素
		var scriptEle = document.createElement('script')
		scriptEle.src = url + queryStr
		//4.追加到HTML中
		document.body.appendChild(scriptEle)
	}
	window.$jsonp = jsonp
})(window,document)