/*样式一*/
// (function($){})(jQuery)参数为$的匿名函数，实参为jQuery
(function($){
	$.fn.snow = function(options){
	var $flake = $('<div id="snowbox" />').css({'position': 'absolute','z-index':'9999', 'top': '-50px'}).html('&#10052;'),
	documentHeight 	= $(document).height(),
	documentWidth	= $(document).width(),
	defaults = {
	// 雪花最小、最大尺寸、出现频率、雪花颜色
		minSize		: 10,
		maxSize		: 20,
		newOn		: 1000,
		flakeColor	: "#83CCEF"
		//flakeColor	: "#AFDAEF" /* 此处可以定义雪花颜色，若要白色可以改为#FFFFFF */
		
	},
	    
	// 将一个新的空对象（{}）做为$.extend的第一个参数，defaults和用户传递的参数对象紧随其后，这样做的好处是所有值被合并到这个空对象上，保护了插件里面的默认值。
	options	= $.extend({}, defaults, options);
	 //setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
	var interval= setInterval( function(){
	var startPositionLeft = Math.random() * documentWidth - 100,
	startOpacity = 0.5 + Math.random(),
	sizeFlake = options.minSize + Math.random() * options.maxSize,
	endPositionTop = documentHeight - 200,
	endPositionLeft = startPositionLeft - 500 + Math.random() * 500,
	   //自由下落持续时间
	durationFall = documentHeight * 10 + Math.random() * 5000;
		
	 //appendTo():在body内部结尾处插入flake的克隆，并设置css样式，opacity:透明度，0——100；
	$flake.clone().appendTo('body').css({
		left: startPositionLeft,
		//opacity: startOpacity,
		opacity: 100,
		'font-size': sizeFlake,
		color: options.flakeColor
	}).animate({
		top: endPositionTop,
		left: endPositionLeft,
		opacity: 0.2
	},durationFall,'linear',function(){
		$(this).remove()
	});
	}, options.newOn);
    };
})(jQuery);
//$(function(){})页面载入后执行其中的代码，完整形式为$(document).ready(function(){})
//$.fn.snow({})
$(function(){
    $.fn.snow({ 
	    minSize: 5, /* 定义雪花最小尺寸 */
	    maxSize: 50,/* 定义雪花最大尺寸 */
	    newOn: 300  /* 定义密集程度，数字越小越密集 */
    });
});
