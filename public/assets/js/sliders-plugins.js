/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

/*
 * jQuery FlexSlider v2.5.0
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */!function($){$.flexslider=function(e,t){var a=$(e);a.vars=$.extend({},$.flexslider.defaults,t);var n=a.vars.namespace,i=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,s=("ontouchstart"in window||i||window.DocumentTouch&&document instanceof DocumentTouch)&&a.vars.touch,r="click touchend MSPointerUp keyup",o="",l,c="vertical"===a.vars.direction,d=a.vars.reverse,u=a.vars.itemWidth>0,v="fade"===a.vars.animation,p=""!==a.vars.asNavFor,m={},f=!0;$.data(e,"flexslider",a),m={init:function(){a.animating=!1,a.currentSlide=parseInt(a.vars.startAt?a.vars.startAt:0,10),isNaN(a.currentSlide)&&(a.currentSlide=0),a.animatingTo=a.currentSlide,a.atEnd=0===a.currentSlide||a.currentSlide===a.last,a.containerSelector=a.vars.selector.substr(0,a.vars.selector.search(" ")),a.slides=$(a.vars.selector,a),a.container=$(a.containerSelector,a),a.count=a.slides.length,a.syncExists=$(a.vars.sync).length>0,"slide"===a.vars.animation&&(a.vars.animation="swing"),a.prop=c?"top":"marginLeft",a.args={},a.manualPause=!1,a.stopped=!1,a.started=!1,a.startTimeout=null,a.transitions=!a.vars.video&&!v&&a.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var n in t)if(void 0!==e.style[t[n]])return a.pfx=t[n].replace("Perspective","").toLowerCase(),a.prop="-"+a.pfx+"-transform",!0;return!1}(),a.ensureAnimationEnd="",""!==a.vars.controlsContainer&&(a.controlsContainer=$(a.vars.controlsContainer).length>0&&$(a.vars.controlsContainer)),""!==a.vars.manualControls&&(a.manualControls=$(a.vars.manualControls).length>0&&$(a.vars.manualControls)),""!==a.vars.customDirectionNav&&(a.customDirectionNav=2===$(a.vars.customDirectionNav).length&&$(a.vars.customDirectionNav)),a.vars.randomize&&(a.slides.sort(function(){return Math.round(Math.random())-.5}),a.container.empty().append(a.slides)),a.doMath(),a.setup("init"),a.vars.controlNav&&m.controlNav.setup(),a.vars.directionNav&&m.directionNav.setup(),a.vars.keyboard&&(1===$(a.containerSelector).length||a.vars.multipleKeyboard)&&$(document).bind("keyup",function(e){var t=e.keyCode;if(!a.animating&&(39===t||37===t)){var n=39===t?a.getTarget("next"):37===t?a.getTarget("prev"):!1;a.flexAnimate(n,a.vars.pauseOnAction)}}),a.vars.mousewheel&&a.bind("mousewheel",function(e,t,n,i){e.preventDefault();var s=a.getTarget(0>t?"next":"prev");a.flexAnimate(s,a.vars.pauseOnAction)}),a.vars.pausePlay&&m.pausePlay.setup(),a.vars.slideshow&&a.vars.pauseInvisible&&m.pauseInvisible.init(),a.vars.slideshow&&(a.vars.pauseOnHover&&a.hover(function(){a.manualPlay||a.manualPause||a.pause()},function(){a.manualPause||a.manualPlay||a.stopped||a.play()}),a.vars.pauseInvisible&&m.pauseInvisible.isHidden()||(a.vars.initDelay>0?a.startTimeout=setTimeout(a.play,a.vars.initDelay):a.play())),p&&m.asNav.setup(),s&&a.vars.touch&&m.touch(),(!v||v&&a.vars.smoothHeight)&&$(window).bind("resize orientationchange focus",m.resize),a.find("img").attr("draggable","false"),setTimeout(function(){a.vars.start(a)},200)},asNav:{setup:function(){a.asNav=!0,a.animatingTo=Math.floor(a.currentSlide/a.move),a.currentItem=a.currentSlide,a.slides.removeClass(n+"active-slide").eq(a.currentItem).addClass(n+"active-slide"),i?(e._slider=a,a.slides.each(function(){var e=this;e._gesture=new MSGesture,e._gesture.target=e,e.addEventListener("MSPointerDown",function(e){e.preventDefault(),e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1),e.addEventListener("MSGestureTap",function(e){e.preventDefault();var t=$(this),n=t.index();$(a.vars.asNavFor).data("flexslider").animating||t.hasClass("active")||(a.direction=a.currentItem<n?"next":"prev",a.flexAnimate(n,a.vars.pauseOnAction,!1,!0,!0))})})):a.slides.on(r,function(e){e.preventDefault();var t=$(this),i=t.index(),s=t.offset().left-$(a).scrollLeft();0>=s&&t.hasClass(n+"active-slide")?a.flexAnimate(a.getTarget("prev"),!0):$(a.vars.asNavFor).data("flexslider").animating||t.hasClass(n+"active-slide")||(a.direction=a.currentItem<i?"next":"prev",a.flexAnimate(i,a.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){a.manualControls?m.controlNav.setupManual():m.controlNav.setupPaging()},setupPaging:function(){var e="thumbnails"===a.vars.controlNav?"control-thumbs":"control-paging",t=1,i,s;if(a.controlNavScaffold=$('<ol class="'+n+"control-nav "+n+e+'"></ol>'),a.pagingCount>1)for(var l=0;l<a.pagingCount;l++){if(s=a.slides.eq(l),i="thumbnails"===a.vars.controlNav?'<img src="'+s.attr("data-thumb")+'"/>':"<a>"+t+"</a>","thumbnails"===a.vars.controlNav&&!0===a.vars.thumbCaptions){var c=s.attr("data-thumbcaption");""!==c&&void 0!==c&&(i+='<span class="'+n+'caption">'+c+"</span>")}a.controlNavScaffold.append("<li>"+i+"</li>"),t++}a.controlsContainer?$(a.controlsContainer).append(a.controlNavScaffold):a.append(a.controlNavScaffold),m.controlNav.set(),m.controlNav.active(),a.controlNavScaffold.delegate("a, img",r,function(e){if(e.preventDefault(),""===o||o===e.type){var t=$(this),i=a.controlNav.index(t);t.hasClass(n+"active")||(a.direction=i>a.currentSlide?"next":"prev",a.flexAnimate(i,a.vars.pauseOnAction))}""===o&&(o=e.type),m.setToClearWatchedEvent()})},setupManual:function(){a.controlNav=a.manualControls,m.controlNav.active(),a.controlNav.bind(r,function(e){if(e.preventDefault(),""===o||o===e.type){var t=$(this),i=a.controlNav.index(t);t.hasClass(n+"active")||(a.direction=i>a.currentSlide?"next":"prev",a.flexAnimate(i,a.vars.pauseOnAction))}""===o&&(o=e.type),m.setToClearWatchedEvent()})},set:function(){var e="thumbnails"===a.vars.controlNav?"img":"a";a.controlNav=$("."+n+"control-nav li "+e,a.controlsContainer?a.controlsContainer:a)},active:function(){a.controlNav.removeClass(n+"active").eq(a.animatingTo).addClass(n+"active")},update:function(e,t){a.pagingCount>1&&"add"===e?a.controlNavScaffold.append($("<li><a>"+a.count+"</a></li>")):1===a.pagingCount?a.controlNavScaffold.find("li").remove():a.controlNav.eq(t).closest("li").remove(),m.controlNav.set(),a.pagingCount>1&&a.pagingCount!==a.controlNav.length?a.update(t,e):m.controlNav.active()}},directionNav:{setup:function(){var e=$('<ul class="'+n+'direction-nav"><li class="'+n+'nav-prev"><a class="'+n+'prev" href="#">'+a.vars.prevText+'</a></li><li class="'+n+'nav-next"><a class="'+n+'next" href="#">'+a.vars.nextText+"</a></li></ul>");a.customDirectionNav?a.directionNav=a.customDirectionNav:a.controlsContainer?($(a.controlsContainer).append(e),a.directionNav=$("."+n+"direction-nav li a",a.controlsContainer)):(a.append(e),a.directionNav=$("."+n+"direction-nav li a",a)),m.directionNav.update(),a.directionNav.bind(r,function(e){e.preventDefault();var t;(""===o||o===e.type)&&(t=a.getTarget($(this).hasClass(n+"next")?"next":"prev"),a.flexAnimate(t,a.vars.pauseOnAction)),""===o&&(o=e.type),m.setToClearWatchedEvent()})},update:function(){var e=n+"disabled";1===a.pagingCount?a.directionNav.addClass(e).attr("tabindex","-1"):a.vars.animationLoop?a.directionNav.removeClass(e).removeAttr("tabindex"):0===a.animatingTo?a.directionNav.removeClass(e).filter("."+n+"prev").addClass(e).attr("tabindex","-1"):a.animatingTo===a.last?a.directionNav.removeClass(e).filter("."+n+"next").addClass(e).attr("tabindex","-1"):a.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var e=$('<div class="'+n+'pauseplay"><a></a></div>');a.controlsContainer?(a.controlsContainer.append(e),a.pausePlay=$("."+n+"pauseplay a",a.controlsContainer)):(a.append(e),a.pausePlay=$("."+n+"pauseplay a",a)),m.pausePlay.update(a.vars.slideshow?n+"pause":n+"play"),a.pausePlay.bind(r,function(e){e.preventDefault(),(""===o||o===e.type)&&($(this).hasClass(n+"pause")?(a.manualPause=!0,a.manualPlay=!1,a.pause()):(a.manualPause=!1,a.manualPlay=!0,a.play())),""===o&&(o=e.type),m.setToClearWatchedEvent()})},update:function(e){"play"===e?a.pausePlay.removeClass(n+"pause").addClass(n+"play").html(a.vars.playText):a.pausePlay.removeClass(n+"play").addClass(n+"pause").html(a.vars.pauseText)}},touch:function(){function t(t){t.stopPropagation(),a.animating?t.preventDefault():(a.pause(),e._gesture.addPointer(t.pointerId),w=0,p=c?a.h:a.w,f=Number(new Date),l=u&&d&&a.animatingTo===a.last?0:u&&d?a.limit-(a.itemW+a.vars.itemMargin)*a.move*a.animatingTo:u&&a.currentSlide===a.last?a.limit:u?(a.itemW+a.vars.itemMargin)*a.move*a.currentSlide:d?(a.last-a.currentSlide+a.cloneOffset)*p:(a.currentSlide+a.cloneOffset)*p)}function n(t){t.stopPropagation();var a=t.target._slider;if(a){var n=-t.translationX,i=-t.translationY;return w+=c?i:n,m=w,y=c?Math.abs(w)<Math.abs(-n):Math.abs(w)<Math.abs(-i),t.detail===t.MSGESTURE_FLAG_INERTIA?void setImmediate(function(){e._gesture.stop()}):void((!y||Number(new Date)-f>500)&&(t.preventDefault(),!v&&a.transitions&&(a.vars.animationLoop||(m=w/(0===a.currentSlide&&0>w||a.currentSlide===a.last&&w>0?Math.abs(w)/p+2:1)),a.setProps(l+m,"setTouch"))))}}function s(e){e.stopPropagation();var t=e.target._slider;if(t){if(t.animatingTo===t.currentSlide&&!y&&null!==m){var a=d?-m:m,n=t.getTarget(a>0?"next":"prev");t.canAdvance(n)&&(Number(new Date)-f<550&&Math.abs(a)>50||Math.abs(a)>p/2)?t.flexAnimate(n,t.vars.pauseOnAction):v||t.flexAnimate(t.currentSlide,t.vars.pauseOnAction,!0)}r=null,o=null,m=null,l=null,w=0}}var r,o,l,p,m,f,g,h,S,y=!1,x=0,b=0,w=0;i?(e.style.msTouchAction="none",e._gesture=new MSGesture,e._gesture.target=e,e.addEventListener("MSPointerDown",t,!1),e._slider=a,e.addEventListener("MSGestureChange",n,!1),e.addEventListener("MSGestureEnd",s,!1)):(g=function(t){a.animating?t.preventDefault():(window.navigator.msPointerEnabled||1===t.touches.length)&&(a.pause(),p=c?a.h:a.w,f=Number(new Date),x=t.touches[0].pageX,b=t.touches[0].pageY,l=u&&d&&a.animatingTo===a.last?0:u&&d?a.limit-(a.itemW+a.vars.itemMargin)*a.move*a.animatingTo:u&&a.currentSlide===a.last?a.limit:u?(a.itemW+a.vars.itemMargin)*a.move*a.currentSlide:d?(a.last-a.currentSlide+a.cloneOffset)*p:(a.currentSlide+a.cloneOffset)*p,r=c?b:x,o=c?x:b,e.addEventListener("touchmove",h,!1),e.addEventListener("touchend",S,!1))},h=function(e){x=e.touches[0].pageX,b=e.touches[0].pageY,m=c?r-b:r-x,y=c?Math.abs(m)<Math.abs(x-o):Math.abs(m)<Math.abs(b-o);var t=500;(!y||Number(new Date)-f>t)&&(e.preventDefault(),!v&&a.transitions&&(a.vars.animationLoop||(m/=0===a.currentSlide&&0>m||a.currentSlide===a.last&&m>0?Math.abs(m)/p+2:1),a.setProps(l+m,"setTouch")))},S=function(t){if(e.removeEventListener("touchmove",h,!1),a.animatingTo===a.currentSlide&&!y&&null!==m){var n=d?-m:m,i=a.getTarget(n>0?"next":"prev");a.canAdvance(i)&&(Number(new Date)-f<550&&Math.abs(n)>50||Math.abs(n)>p/2)?a.flexAnimate(i,a.vars.pauseOnAction):v||a.flexAnimate(a.currentSlide,a.vars.pauseOnAction,!0)}e.removeEventListener("touchend",S,!1),r=null,o=null,m=null,l=null},e.addEventListener("touchstart",g,!1))},resize:function(){!a.animating&&a.is(":visible")&&(u||a.doMath(),v?m.smoothHeight():u?(a.slides.width(a.computedW),a.update(a.pagingCount),a.setProps()):c?(a.viewport.height(a.h),a.setProps(a.h,"setTotal")):(a.vars.smoothHeight&&m.smoothHeight(),a.newSlides.width(a.computedW),a.setProps(a.computedW,"setTotal")))},smoothHeight:function(e){if(!c||v){var t=v?a:a.viewport;e?t.animate({height:a.slides.eq(a.animatingTo).height()},e):t.height(a.slides.eq(a.animatingTo).height())}},sync:function(e){var t=$(a.vars.sync).data("flexslider"),n=a.animatingTo;switch(e){case"animate":t.flexAnimate(n,a.vars.pauseOnAction,!1,!0);break;case"play":t.playing||t.asNav||t.play();break;case"pause":t.pause()}},uniqueID:function(e){return e.filter("[id]").add(e.find("[id]")).each(function(){var e=$(this);e.attr("id",e.attr("id")+"_clone")}),e},pauseInvisible:{visProp:null,init:function(){var e=m.pauseInvisible.getHiddenProp();if(e){var t=e.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(t,function(){m.pauseInvisible.isHidden()?a.startTimeout?clearTimeout(a.startTimeout):a.pause():a.started?a.play():a.vars.initDelay>0?setTimeout(a.play,a.vars.initDelay):a.play()})}},isHidden:function(){var e=m.pauseInvisible.getHiddenProp();return e?document[e]:!1},getHiddenProp:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}},setToClearWatchedEvent:function(){clearTimeout(l),l=setTimeout(function(){o=""},3e3)}},a.flexAnimate=function(e,t,i,r,o){if(a.vars.animationLoop||e===a.currentSlide||(a.direction=e>a.currentSlide?"next":"prev"),p&&1===a.pagingCount&&(a.direction=a.currentItem<e?"next":"prev"),!a.animating&&(a.canAdvance(e,o)||i)&&a.is(":visible")){if(p&&r){var l=$(a.vars.asNavFor).data("flexslider");if(a.atEnd=0===e||e===a.count-1,l.flexAnimate(e,!0,!1,!0,o),a.direction=a.currentItem<e?"next":"prev",l.direction=a.direction,Math.ceil((e+1)/a.visible)-1===a.currentSlide||0===e)return a.currentItem=e,a.slides.removeClass(n+"active-slide").eq(e).addClass(n+"active-slide"),!1;a.currentItem=e,a.slides.removeClass(n+"active-slide").eq(e).addClass(n+"active-slide"),e=Math.floor(e/a.visible)}if(a.animating=!0,a.animatingTo=e,t&&a.pause(),a.vars.before(a),a.syncExists&&!o&&m.sync("animate"),a.vars.controlNav&&m.controlNav.active(),u||a.slides.removeClass(n+"active-slide").eq(e).addClass(n+"active-slide"),a.atEnd=0===e||e===a.last,a.vars.directionNav&&m.directionNav.update(),e===a.last&&(a.vars.end(a),a.vars.animationLoop||a.pause()),v)s?(a.slides.eq(a.currentSlide).css({opacity:0,zIndex:1}),a.slides.eq(e).css({opacity:1,zIndex:2}),a.wrapup(f)):(a.slides.eq(a.currentSlide).css({zIndex:1}).animate({opacity:0},a.vars.animationSpeed,a.vars.easing),a.slides.eq(e).css({zIndex:2}).animate({opacity:1},a.vars.animationSpeed,a.vars.easing,a.wrapup));else{var f=c?a.slides.filter(":first").height():a.computedW,g,h,S;u?(g=a.vars.itemMargin,S=(a.itemW+g)*a.move*a.animatingTo,h=S>a.limit&&1!==a.visible?a.limit:S):h=0===a.currentSlide&&e===a.count-1&&a.vars.animationLoop&&"next"!==a.direction?d?(a.count+a.cloneOffset)*f:0:a.currentSlide===a.last&&0===e&&a.vars.animationLoop&&"prev"!==a.direction?d?0:(a.count+1)*f:d?(a.count-1-e+a.cloneOffset)*f:(e+a.cloneOffset)*f,a.setProps(h,"",a.vars.animationSpeed),a.transitions?(a.vars.animationLoop&&a.atEnd||(a.animating=!1,a.currentSlide=a.animatingTo),a.container.unbind("webkitTransitionEnd transitionend"),a.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(a.ensureAnimationEnd),a.wrapup(f)}),clearTimeout(a.ensureAnimationEnd),a.ensureAnimationEnd=setTimeout(function(){a.wrapup(f)},a.vars.animationSpeed+100)):a.container.animate(a.args,a.vars.animationSpeed,a.vars.easing,function(){a.wrapup(f)})}a.vars.smoothHeight&&m.smoothHeight(a.vars.animationSpeed)}},a.wrapup=function(e){v||u||(0===a.currentSlide&&a.animatingTo===a.last&&a.vars.animationLoop?a.setProps(e,"jumpEnd"):a.currentSlide===a.last&&0===a.animatingTo&&a.vars.animationLoop&&a.setProps(e,"jumpStart")),a.animating=!1,a.currentSlide=a.animatingTo,a.vars.after(a)},a.animateSlides=function(){!a.animating&&f&&a.flexAnimate(a.getTarget("next"))},a.pause=function(){clearInterval(a.animatedSlides),a.animatedSlides=null,a.playing=!1,a.vars.pausePlay&&m.pausePlay.update("play"),a.syncExists&&m.sync("pause")},a.play=function(){a.playing&&clearInterval(a.animatedSlides),a.animatedSlides=a.animatedSlides||setInterval(a.animateSlides,a.vars.slideshowSpeed),a.started=a.playing=!0,a.vars.pausePlay&&m.pausePlay.update("pause"),a.syncExists&&m.sync("play")},a.stop=function(){a.pause(),a.stopped=!0},a.canAdvance=function(e,t){var n=p?a.pagingCount-1:a.last;return t?!0:p&&a.currentItem===a.count-1&&0===e&&"prev"===a.direction?!0:p&&0===a.currentItem&&e===a.pagingCount-1&&"next"!==a.direction?!1:e!==a.currentSlide||p?a.vars.animationLoop?!0:a.atEnd&&0===a.currentSlide&&e===n&&"next"!==a.direction?!1:a.atEnd&&a.currentSlide===n&&0===e&&"next"===a.direction?!1:!0:!1},a.getTarget=function(e){return a.direction=e,"next"===e?a.currentSlide===a.last?0:a.currentSlide+1:0===a.currentSlide?a.last:a.currentSlide-1},a.setProps=function(e,t,n){var i=function(){var n=e?e:(a.itemW+a.vars.itemMargin)*a.move*a.animatingTo,i=function(){if(u)return"setTouch"===t?e:d&&a.animatingTo===a.last?0:d?a.limit-(a.itemW+a.vars.itemMargin)*a.move*a.animatingTo:a.animatingTo===a.last?a.limit:n;switch(t){case"setTotal":return d?(a.count-1-a.currentSlide+a.cloneOffset)*e:(a.currentSlide+a.cloneOffset)*e;case"setTouch":return d?e:e;case"jumpEnd":return d?e:a.count*e;case"jumpStart":return d?a.count*e:e;default:return e}}();return-1*i+"px"}();a.transitions&&(i=c?"translate3d(0,"+i+",0)":"translate3d("+i+",0,0)",n=void 0!==n?n/1e3+"s":"0s",a.container.css("-"+a.pfx+"-transition-duration",n),a.container.css("transition-duration",n)),a.args[a.prop]=i,(a.transitions||void 0===n)&&a.container.css(a.args),a.container.css("transform",i)},a.setup=function(e){if(v)a.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===e&&(s?a.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+a.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(a.currentSlide).css({opacity:1,zIndex:2}):0==a.vars.fadeFirstSlide?a.slides.css({opacity:0,display:"block",zIndex:1}).eq(a.currentSlide).css({zIndex:2}).css({opacity:1}):a.slides.css({opacity:0,display:"block",zIndex:1}).eq(a.currentSlide).css({zIndex:2}).animate({opacity:1},a.vars.animationSpeed,a.vars.easing)),a.vars.smoothHeight&&m.smoothHeight();else{var t,i;"init"===e&&(a.viewport=$('<div class="'+n+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(a).append(a.container),a.cloneCount=0,a.cloneOffset=0,d&&(i=$.makeArray(a.slides).reverse(),a.slides=$(i),a.container.empty().append(a.slides))),a.vars.animationLoop&&!u&&(a.cloneCount=2,a.cloneOffset=1,"init"!==e&&a.container.find(".clone").remove(),a.container.append(m.uniqueID(a.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(m.uniqueID(a.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),a.newSlides=$(a.vars.selector,a),t=d?a.count-1-a.currentSlide+a.cloneOffset:a.currentSlide+a.cloneOffset,c&&!u?(a.container.height(200*(a.count+a.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){a.newSlides.css({display:"block"}),a.doMath(),a.viewport.height(a.h),a.setProps(t*a.h,"init")},"init"===e?100:0)):(a.container.width(200*(a.count+a.cloneCount)+"%"),a.setProps(t*a.computedW,"init"),setTimeout(function(){a.doMath(),a.newSlides.css({width:a.computedW,"float":"left",display:"block"}),a.vars.smoothHeight&&m.smoothHeight()},"init"===e?100:0))}u||a.slides.removeClass(n+"active-slide").eq(a.currentSlide).addClass(n+"active-slide"),a.vars.init(a)},a.doMath=function(){var e=a.slides.first(),t=a.vars.itemMargin,n=a.vars.minItems,i=a.vars.maxItems;a.w=void 0===a.viewport?a.width():a.viewport.width(),a.h=e.height(),a.boxPadding=e.outerWidth()-e.width(),u?(a.itemT=a.vars.itemWidth+t,a.minW=n?n*a.itemT:a.w,a.maxW=i?i*a.itemT-t:a.w,a.itemW=a.minW>a.w?(a.w-t*(n-1))/n:a.maxW<a.w?(a.w-t*(i-1))/i:a.vars.itemWidth>a.w?a.w:a.vars.itemWidth,a.visible=Math.floor(a.w/a.itemW),a.move=a.vars.move>0&&a.vars.move<a.visible?a.vars.move:a.visible,a.pagingCount=Math.ceil((a.count-a.visible)/a.move+1),a.last=a.pagingCount-1,a.limit=1===a.pagingCount?0:a.vars.itemWidth>a.w?a.itemW*(a.count-1)+t*(a.count-1):(a.itemW+t)*a.count-a.w-t):(a.itemW=a.w,a.pagingCount=a.count,a.last=a.count-1),a.computedW=a.itemW-a.boxPadding},a.update=function(e,t){a.doMath(),u||(e<a.currentSlide?a.currentSlide+=1:e<=a.currentSlide&&0!==e&&(a.currentSlide-=1),a.animatingTo=a.currentSlide),a.vars.controlNav&&!a.manualControls&&("add"===t&&!u||a.pagingCount>a.controlNav.length?m.controlNav.update("add"):("remove"===t&&!u||a.pagingCount<a.controlNav.length)&&(u&&a.currentSlide>a.last&&(a.currentSlide-=1,a.animatingTo-=1),m.controlNav.update("remove",a.last))),a.vars.directionNav&&m.directionNav.update()},a.addSlide=function(e,t){var n=$(e);a.count+=1,a.last=a.count-1,c&&d?void 0!==t?a.slides.eq(a.count-t).after(n):a.container.prepend(n):void 0!==t?a.slides.eq(t).before(n):a.container.append(n),a.update(t,"add"),a.slides=$(a.vars.selector+":not(.clone)",a),a.setup(),a.vars.added(a)},a.removeSlide=function(e){var t=isNaN(e)?a.slides.index($(e)):e;a.count-=1,a.last=a.count-1,isNaN(e)?$(e,a.slides).remove():c&&d?a.slides.eq(a.last).remove():a.slides.eq(e).remove(),a.doMath(),a.update(t,"remove"),a.slides=$(a.vars.selector+":not(.clone)",a),a.setup(),a.vars.removed(a)},m.init()},$(window).blur(function(e){focused=!1}).focus(function(e){focused=!0}),$.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",customDirectionNav:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},$.fn.flexslider=function(e){if(void 0===e&&(e={}),"object"==typeof e)return this.each(function(){var t=$(this),a=e.selector?e.selector:".slides > li",n=t.find(a);1===n.length&&e.allowOneSlide===!0||0===n.length?(n.fadeIn(400),e.start&&e.start(t)):void 0===t.data("flexslider")&&new $.flexslider(this,e)});var t=$(this).data("flexslider");switch(e){case"play":t.play();break;case"pause":t.pause();break;case"stop":t.stop();break;case"next":t.flexAnimate(t.getTarget("next"),!0);break;case"prev":case"previous":t.flexAnimate(t.getTarget("prev"),!0);break;default:"number"==typeof e&&t.flexAnimate(e,!0)}}}(jQuery);

 "function"!==typeof Object.create&&(Object.create=function(f){function g(){}g.prototype=f;return new g});
(function(f,g,k){var l={init:function(a,b){this.$elem=f(b);this.options=f.extend({},f.fn.owlCarousel.options,this.$elem.data(),a);this.userOptions=a;this.loadContent()},loadContent:function(){function a(a){var d,e="";if("function"===typeof b.options.jsonSuccess)b.options.jsonSuccess.apply(this,[a]);else{for(d in a.owl)a.owl.hasOwnProperty(d)&&(e+=a.owl[d].item);b.$elem.html(e)}b.logIn()}var b=this,e;"function"===typeof b.options.beforeInit&&b.options.beforeInit.apply(this,[b.$elem]);"string"===typeof b.options.jsonPath?
(e=b.options.jsonPath,f.getJSON(e,a)):b.logIn()},logIn:function(){this.$elem.data("owl-originalStyles",this.$elem.attr("style"));this.$elem.data("owl-originalClasses",this.$elem.attr("class"));this.$elem.css({opacity:0});this.orignalItems=this.options.items;this.checkBrowser();this.wrapperWidth=0;this.checkVisible=null;this.setVars()},setVars:function(){if(0===this.$elem.children().length)return!1;this.baseClass();this.eventTypes();this.$userItems=this.$elem.children();this.itemsAmount=this.$userItems.length;
this.wrapItems();this.$owlItems=this.$elem.find(".owl-item");this.$owlWrapper=this.$elem.find(".owl-wrapper");this.playDirection="next";this.prevItem=0;this.prevArr=[0];this.currentItem=0;this.customEvents();this.onStartup()},onStartup:function(){this.updateItems();this.calculateAll();this.buildControls();this.updateControls();this.response();this.moveEvents();this.stopOnHover();this.owlStatus();!1!==this.options.transitionStyle&&this.transitionTypes(this.options.transitionStyle);!0===this.options.autoPlay&&
(this.options.autoPlay=5E3);this.play();this.$elem.find(".owl-wrapper").css("display","block");this.$elem.is(":visible")?this.$elem.css("opacity",1):this.watchVisibility();this.onstartup=!1;this.eachMoveUpdate();"function"===typeof this.options.afterInit&&this.options.afterInit.apply(this,[this.$elem])},eachMoveUpdate:function(){!0===this.options.lazyLoad&&this.lazyLoad();!0===this.options.autoHeight&&this.autoHeight();this.onVisibleItems();"function"===typeof this.options.afterAction&&this.options.afterAction.apply(this,
[this.$elem])},updateVars:function(){"function"===typeof this.options.beforeUpdate&&this.options.beforeUpdate.apply(this,[this.$elem]);this.watchVisibility();this.updateItems();this.calculateAll();this.updatePosition();this.updateControls();this.eachMoveUpdate();"function"===typeof this.options.afterUpdate&&this.options.afterUpdate.apply(this,[this.$elem])},reload:function(){var a=this;g.setTimeout(function(){a.updateVars()},0)},watchVisibility:function(){var a=this;if(!1===a.$elem.is(":visible"))a.$elem.css({opacity:0}),
g.clearInterval(a.autoPlayInterval),g.clearInterval(a.checkVisible);else return!1;a.checkVisible=g.setInterval(function(){a.$elem.is(":visible")&&(a.reload(),a.$elem.animate({opacity:1},200),g.clearInterval(a.checkVisible))},500)},wrapItems:function(){this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');this.wrapperOuter=this.$elem.find(".owl-wrapper-outer");this.$elem.css("display","block")},
baseClass:function(){var a=this.$elem.hasClass(this.options.baseClass),b=this.$elem.hasClass(this.options.theme);a||this.$elem.addClass(this.options.baseClass);b||this.$elem.addClass(this.options.theme)},updateItems:function(){var a,b;if(!1===this.options.responsive)return!1;if(!0===this.options.singleItem)return this.options.items=this.orignalItems=1,this.options.itemsCustom=!1,this.options.itemsDesktop=!1,this.options.itemsDesktopSmall=!1,this.options.itemsTablet=!1,this.options.itemsTabletSmall=
!1,this.options.itemsMobile=!1;a=f(this.options.responsiveBaseWidth).width();a>(this.options.itemsDesktop[0]||this.orignalItems)&&(this.options.items=this.orignalItems);if(!1!==this.options.itemsCustom)for(this.options.itemsCustom.sort(function(a,b){return a[0]-b[0]}),b=0;b<this.options.itemsCustom.length;b+=1)this.options.itemsCustom[b][0]<=a&&(this.options.items=this.options.itemsCustom[b][1]);else a<=this.options.itemsDesktop[0]&&!1!==this.options.itemsDesktop&&(this.options.items=this.options.itemsDesktop[1]),
a<=this.options.itemsDesktopSmall[0]&&!1!==this.options.itemsDesktopSmall&&(this.options.items=this.options.itemsDesktopSmall[1]),a<=this.options.itemsTablet[0]&&!1!==this.options.itemsTablet&&(this.options.items=this.options.itemsTablet[1]),a<=this.options.itemsTabletSmall[0]&&!1!==this.options.itemsTabletSmall&&(this.options.items=this.options.itemsTabletSmall[1]),a<=this.options.itemsMobile[0]&&!1!==this.options.itemsMobile&&(this.options.items=this.options.itemsMobile[1]);this.options.items>this.itemsAmount&&
!0===this.options.itemsScaleUp&&(this.options.items=this.itemsAmount)},response:function(){var a=this,b,e;if(!0!==a.options.responsive)return!1;e=f(g).width();a.resizer=function(){f(g).width()!==e&&(!1!==a.options.autoPlay&&g.clearInterval(a.autoPlayInterval),g.clearTimeout(b),b=g.setTimeout(function(){e=f(g).width();a.updateVars()},a.options.responsiveRefreshRate))};f(g).resize(a.resizer)},updatePosition:function(){this.jumpTo(this.currentItem);!1!==this.options.autoPlay&&this.checkAp()},appendItemsSizes:function(){var a=
this,b=0,e=a.itemsAmount-a.options.items;a.$owlItems.each(function(c){var d=f(this);d.css({width:a.itemWidth}).data("owl-item",Number(c));if(0===c%a.options.items||c===e)c>e||(b+=1);d.data("owl-roundPages",b)})},appendWrapperSizes:function(){this.$owlWrapper.css({width:this.$owlItems.length*this.itemWidth*2,left:0});this.appendItemsSizes()},calculateAll:function(){this.calculateWidth();this.appendWrapperSizes();this.loops();this.max()},calculateWidth:function(){this.itemWidth=Math.round(this.$elem.width()/
this.options.items)},max:function(){var a=-1*(this.itemsAmount*this.itemWidth-this.options.items*this.itemWidth);this.options.items>this.itemsAmount?this.maximumPixels=a=this.maximumItem=0:(this.maximumItem=this.itemsAmount-this.options.items,this.maximumPixels=a);return a},min:function(){return 0},loops:function(){var a=0,b=0,e,c;this.positionsInArray=[0];this.pagesInArray=[];for(e=0;e<this.itemsAmount;e+=1)b+=this.itemWidth,this.positionsInArray.push(-b),!0===this.options.scrollPerPage&&(c=f(this.$owlItems[e]),
c=c.data("owl-roundPages"),c!==a&&(this.pagesInArray[a]=this.positionsInArray[e],a=c))},buildControls:function(){if(!0===this.options.navigation||!0===this.options.pagination)this.owlControls=f('<div class="owl-controls"/>').toggleClass("clickable",!this.browser.isTouch).appendTo(this.$elem);!0===this.options.pagination&&this.buildPagination();!0===this.options.navigation&&this.buildButtons()},buildButtons:function(){var a=this,b=f('<div class="owl-buttons"/>');a.owlControls.append(b);a.buttonPrev=
f("<div/>",{"class":"owl-prev",html:a.options.navigationText[0]||""});a.buttonNext=f("<div/>",{"class":"owl-next",html:a.options.navigationText[1]||""});b.append(a.buttonPrev).append(a.buttonNext);b.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(a){a.preventDefault()});b.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(b){b.preventDefault();f(this).hasClass("owl-next")?a.next():a.prev()})},buildPagination:function(){var a=this;a.paginationWrapper=
f('<div class="owl-pagination"/>');a.owlControls.append(a.paginationWrapper);a.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(b){b.preventDefault();Number(f(this).data("owl-page"))!==a.currentItem&&a.goTo(Number(f(this).data("owl-page")),!0)})},updatePagination:function(){var a,b,e,c,d,g;if(!1===this.options.pagination)return!1;this.paginationWrapper.html("");a=0;b=this.itemsAmount-this.itemsAmount%this.options.items;for(c=0;c<this.itemsAmount;c+=1)0===c%this.options.items&&
(a+=1,b===c&&(e=this.itemsAmount-this.options.items),d=f("<div/>",{"class":"owl-page"}),g=f("<span></span>",{text:!0===this.options.paginationNumbers?a:"","class":!0===this.options.paginationNumbers?"owl-numbers":""}),d.append(g),d.data("owl-page",b===c?e:c),d.data("owl-roundPages",a),this.paginationWrapper.append(d));this.checkPagination()},checkPagination:function(){var a=this;if(!1===a.options.pagination)return!1;a.paginationWrapper.find(".owl-page").each(function(){f(this).data("owl-roundPages")===
f(a.$owlItems[a.currentItem]).data("owl-roundPages")&&(a.paginationWrapper.find(".owl-page").removeClass("active"),f(this).addClass("active"))})},checkNavigation:function(){if(!1===this.options.navigation)return!1;!1===this.options.rewindNav&&(0===this.currentItem&&0===this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.addClass("disabled")):0===this.currentItem&&0!==this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.removeClass("disabled")):this.currentItem===
this.maximumItem?(this.buttonPrev.removeClass("disabled"),this.buttonNext.addClass("disabled")):0!==this.currentItem&&this.currentItem!==this.maximumItem&&(this.buttonPrev.removeClass("disabled"),this.buttonNext.removeClass("disabled")))},updateControls:function(){this.updatePagination();this.checkNavigation();this.owlControls&&(this.options.items>=this.itemsAmount?this.owlControls.hide():this.owlControls.show())},destroyControls:function(){this.owlControls&&this.owlControls.remove()},next:function(a){if(this.isTransition)return!1;
this.currentItem+=!0===this.options.scrollPerPage?this.options.items:1;if(this.currentItem>this.maximumItem+(!0===this.options.scrollPerPage?this.options.items-1:0))if(!0===this.options.rewindNav)this.currentItem=0,a="rewind";else return this.currentItem=this.maximumItem,!1;this.goTo(this.currentItem,a)},prev:function(a){if(this.isTransition)return!1;this.currentItem=!0===this.options.scrollPerPage&&0<this.currentItem&&this.currentItem<this.options.items?0:this.currentItem-(!0===this.options.scrollPerPage?
this.options.items:1);if(0>this.currentItem)if(!0===this.options.rewindNav)this.currentItem=this.maximumItem,a="rewind";else return this.currentItem=0,!1;this.goTo(this.currentItem,a)},goTo:function(a,b,e){var c=this;if(c.isTransition)return!1;"function"===typeof c.options.beforeMove&&c.options.beforeMove.apply(this,[c.$elem]);a>=c.maximumItem?a=c.maximumItem:0>=a&&(a=0);c.currentItem=c.owl.currentItem=a;if(!1!==c.options.transitionStyle&&"drag"!==e&&1===c.options.items&&!0===c.browser.support3d)return c.swapSpeed(0),
!0===c.browser.support3d?c.transition3d(c.positionsInArray[a]):c.css2slide(c.positionsInArray[a],1),c.afterGo(),c.singleItemTransition(),!1;a=c.positionsInArray[a];!0===c.browser.support3d?(c.isCss3Finish=!1,!0===b?(c.swapSpeed("paginationSpeed"),g.setTimeout(function(){c.isCss3Finish=!0},c.options.paginationSpeed)):"rewind"===b?(c.swapSpeed(c.options.rewindSpeed),g.setTimeout(function(){c.isCss3Finish=!0},c.options.rewindSpeed)):(c.swapSpeed("slideSpeed"),g.setTimeout(function(){c.isCss3Finish=!0},
c.options.slideSpeed)),c.transition3d(a)):!0===b?c.css2slide(a,c.options.paginationSpeed):"rewind"===b?c.css2slide(a,c.options.rewindSpeed):c.css2slide(a,c.options.slideSpeed);c.afterGo()},jumpTo:function(a){"function"===typeof this.options.beforeMove&&this.options.beforeMove.apply(this,[this.$elem]);a>=this.maximumItem||-1===a?a=this.maximumItem:0>=a&&(a=0);this.swapSpeed(0);!0===this.browser.support3d?this.transition3d(this.positionsInArray[a]):this.css2slide(this.positionsInArray[a],1);this.currentItem=
this.owl.currentItem=a;this.afterGo()},afterGo:function(){this.prevArr.push(this.currentItem);this.prevItem=this.owl.prevItem=this.prevArr[this.prevArr.length-2];this.prevArr.shift(0);this.prevItem!==this.currentItem&&(this.checkPagination(),this.checkNavigation(),this.eachMoveUpdate(),!1!==this.options.autoPlay&&this.checkAp());"function"===typeof this.options.afterMove&&this.prevItem!==this.currentItem&&this.options.afterMove.apply(this,[this.$elem])},stop:function(){this.apStatus="stop";g.clearInterval(this.autoPlayInterval)},
checkAp:function(){"stop"!==this.apStatus&&this.play()},play:function(){var a=this;a.apStatus="play";if(!1===a.options.autoPlay)return!1;g.clearInterval(a.autoPlayInterval);a.autoPlayInterval=g.setInterval(function(){a.next(!0)},a.options.autoPlay)},swapSpeed:function(a){"slideSpeed"===a?this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)):"paginationSpeed"===a?this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)):"string"!==typeof a&&this.$owlWrapper.css(this.addCssSpeed(a))},
addCssSpeed:function(a){return{"-webkit-transition":"all "+a+"ms ease","-moz-transition":"all "+a+"ms ease","-o-transition":"all "+a+"ms ease",transition:"all "+a+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(a){return{"-webkit-transform":"translate3d("+a+"px, 0px, 0px)","-moz-transform":"translate3d("+a+"px, 0px, 0px)","-o-transform":"translate3d("+a+"px, 0px, 0px)","-ms-transform":"translate3d("+
a+"px, 0px, 0px)",transform:"translate3d("+a+"px, 0px,0px)"}},transition3d:function(a){this.$owlWrapper.css(this.doTranslate(a))},css2move:function(a){this.$owlWrapper.css({left:a})},css2slide:function(a,b){var e=this;e.isCssFinish=!1;e.$owlWrapper.stop(!0,!0).animate({left:a},{duration:b||e.options.slideSpeed,complete:function(){e.isCssFinish=!0}})},checkBrowser:function(){var a=k.createElement("div");a.style.cssText="  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
a=a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);this.browser={support3d:null!==a&&1===a.length,isTouch:"ontouchstart"in g||g.navigator.msMaxTouchPoints}},moveEvents:function(){if(!1!==this.options.mouseDrag||!1!==this.options.touchDrag)this.gestures(),this.disabledEvents()},eventTypes:function(){var a=["s","e","x"];this.ev_types={};!0===this.options.mouseDrag&&!0===this.options.touchDrag?a=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:
!1===this.options.mouseDrag&&!0===this.options.touchDrag?a=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:!0===this.options.mouseDrag&&!1===this.options.touchDrag&&(a=["mousedown.owl","mousemove.owl","mouseup.owl"]);this.ev_types.start=a[0];this.ev_types.move=a[1];this.ev_types.end=a[2]},disabledEvents:function(){this.$elem.on("dragstart.owl",function(a){a.preventDefault()});this.$elem.on("mousedown.disableTextSelect",function(a){return f(a.target).is("input, textarea, select, option")})},
gestures:function(){function a(a){if(void 0!==a.touches)return{x:a.touches[0].pageX,y:a.touches[0].pageY};if(void 0===a.touches){if(void 0!==a.pageX)return{x:a.pageX,y:a.pageY};if(void 0===a.pageX)return{x:a.clientX,y:a.clientY}}}function b(a){"on"===a?(f(k).on(d.ev_types.move,e),f(k).on(d.ev_types.end,c)):"off"===a&&(f(k).off(d.ev_types.move),f(k).off(d.ev_types.end))}function e(b){b=b.originalEvent||b||g.event;d.newPosX=a(b).x-h.offsetX;d.newPosY=a(b).y-h.offsetY;d.newRelativeX=d.newPosX-h.relativePos;
"function"===typeof d.options.startDragging&&!0!==h.dragging&&0!==d.newRelativeX&&(h.dragging=!0,d.options.startDragging.apply(d,[d.$elem]));(8<d.newRelativeX||-8>d.newRelativeX)&&!0===d.browser.isTouch&&(void 0!==b.preventDefault?b.preventDefault():b.returnValue=!1,h.sliding=!0);(10<d.newPosY||-10>d.newPosY)&&!1===h.sliding&&f(k).off("touchmove.owl");d.newPosX=Math.max(Math.min(d.newPosX,d.newRelativeX/5),d.maximumPixels+d.newRelativeX/5);!0===d.browser.support3d?d.transition3d(d.newPosX):d.css2move(d.newPosX)}
function c(a){a=a.originalEvent||a||g.event;var c;a.target=a.target||a.srcElement;h.dragging=!1;!0!==d.browser.isTouch&&d.$owlWrapper.removeClass("grabbing");d.dragDirection=0>d.newRelativeX?d.owl.dragDirection="left":d.owl.dragDirection="right";0!==d.newRelativeX&&(c=d.getNewPosition(),d.goTo(c,!1,"drag"),h.targetElement===a.target&&!0!==d.browser.isTouch&&(f(a.target).on("click.disable",function(a){a.stopImmediatePropagation();a.stopPropagation();a.preventDefault();f(a.target).off("click.disable")}),
a=f._data(a.target,"events").click,c=a.pop(),a.splice(0,0,c)));b("off")}var d=this,h={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};d.isCssFinish=!0;d.$elem.on(d.ev_types.start,".owl-wrapper",function(c){c=c.originalEvent||c||g.event;var e;if(3===c.which)return!1;if(!(d.itemsAmount<=d.options.items)){if(!1===d.isCssFinish&&!d.options.dragBeforeAnimFinish||!1===d.isCss3Finish&&!d.options.dragBeforeAnimFinish)return!1;
!1!==d.options.autoPlay&&g.clearInterval(d.autoPlayInterval);!0===d.browser.isTouch||d.$owlWrapper.hasClass("grabbing")||d.$owlWrapper.addClass("grabbing");d.newPosX=0;d.newRelativeX=0;f(this).css(d.removeTransition());e=f(this).position();h.relativePos=e.left;h.offsetX=a(c).x-e.left;h.offsetY=a(c).y-e.top;b("on");h.sliding=!1;h.targetElement=c.target||c.srcElement}})},getNewPosition:function(){var a=this.closestItem();a>this.maximumItem?a=this.currentItem=this.maximumItem:0<=this.newPosX&&(this.currentItem=
a=0);return a},closestItem:function(){var a=this,b=!0===a.options.scrollPerPage?a.pagesInArray:a.positionsInArray,e=a.newPosX,c=null;f.each(b,function(d,g){e-a.itemWidth/20>b[d+1]&&e-a.itemWidth/20<g&&"left"===a.moveDirection()?(c=g,a.currentItem=!0===a.options.scrollPerPage?f.inArray(c,a.positionsInArray):d):e+a.itemWidth/20<g&&e+a.itemWidth/20>(b[d+1]||b[d]-a.itemWidth)&&"right"===a.moveDirection()&&(!0===a.options.scrollPerPage?(c=b[d+1]||b[b.length-1],a.currentItem=f.inArray(c,a.positionsInArray)):
(c=b[d+1],a.currentItem=d+1))});return a.currentItem},moveDirection:function(){var a;0>this.newRelativeX?(a="right",this.playDirection="next"):(a="left",this.playDirection="prev");return a},customEvents:function(){var a=this;a.$elem.on("owl.next",function(){a.next()});a.$elem.on("owl.prev",function(){a.prev()});a.$elem.on("owl.play",function(b,e){a.options.autoPlay=e;a.play();a.hoverStatus="play"});a.$elem.on("owl.stop",function(){a.stop();a.hoverStatus="stop"});a.$elem.on("owl.goTo",function(b,e){a.goTo(e)});
a.$elem.on("owl.jumpTo",function(b,e){a.jumpTo(e)})},stopOnHover:function(){var a=this;!0===a.options.stopOnHover&&!0!==a.browser.isTouch&&!1!==a.options.autoPlay&&(a.$elem.on("mouseover",function(){a.stop()}),a.$elem.on("mouseout",function(){"stop"!==a.hoverStatus&&a.play()}))},lazyLoad:function(){var a,b,e,c,d;if(!1===this.options.lazyLoad)return!1;for(a=0;a<this.itemsAmount;a+=1)b=f(this.$owlItems[a]),"loaded"!==b.data("owl-loaded")&&(e=b.data("owl-item"),c=b.find(".lazyOwl"),"string"!==typeof c.data("src")?
b.data("owl-loaded","loaded"):(void 0===b.data("owl-loaded")&&(c.hide(),b.addClass("loading").data("owl-loaded","checked")),(d=!0===this.options.lazyFollow?e>=this.currentItem:!0)&&e<this.currentItem+this.options.items&&c.length&&this.lazyPreload(b,c)))},lazyPreload:function(a,b){function e(){a.data("owl-loaded","loaded").removeClass("loading");b.removeAttr("data-src");"fade"===d.options.lazyEffect?b.fadeIn(400):b.show();"function"===typeof d.options.afterLazyLoad&&d.options.afterLazyLoad.apply(this,
[d.$elem])}function c(){f+=1;d.completeImg(b.get(0))||!0===k?e():100>=f?g.setTimeout(c,100):e()}var d=this,f=0,k;"DIV"===b.prop("tagName")?(b.css("background-image","url("+b.data("src")+")"),k=!0):b[0].src=b.data("src");c()},autoHeight:function(){function a(){var a=f(e.$owlItems[e.currentItem]).height();e.wrapperOuter.css("height",a+"px");e.wrapperOuter.hasClass("autoHeight")||g.setTimeout(function(){e.wrapperOuter.addClass("autoHeight")},0)}function b(){d+=1;e.completeImg(c.get(0))?a():100>=d?g.setTimeout(b,
100):e.wrapperOuter.css("height","")}var e=this,c=f(e.$owlItems[e.currentItem]).find("img"),d;void 0!==c.get(0)?(d=0,b()):a()},completeImg:function(a){return!a.complete||"undefined"!==typeof a.naturalWidth&&0===a.naturalWidth?!1:!0},onVisibleItems:function(){var a;!0===this.options.addClassActive&&this.$owlItems.removeClass("active");this.visibleItems=[];for(a=this.currentItem;a<this.currentItem+this.options.items;a+=1)this.visibleItems.push(a),!0===this.options.addClassActive&&f(this.$owlItems[a]).addClass("active");
this.owl.visibleItems=this.visibleItems},transitionTypes:function(a){this.outClass="owl-"+a+"-out";this.inClass="owl-"+a+"-in"},singleItemTransition:function(){var a=this,b=a.outClass,e=a.inClass,c=a.$owlItems.eq(a.currentItem),d=a.$owlItems.eq(a.prevItem),f=Math.abs(a.positionsInArray[a.currentItem])+a.positionsInArray[a.prevItem],g=Math.abs(a.positionsInArray[a.currentItem])+a.itemWidth/2;a.isTransition=!0;a.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":g+"px","-moz-perspective-origin":g+
"px","perspective-origin":g+"px"});d.css({position:"relative",left:f+"px"}).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){a.endPrev=!0;d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(d,b)});c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){a.endCurrent=!0;c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(c,e)})},clearTransStyle:function(a,
b){a.css({position:"",left:""}).removeClass(b);this.endPrev&&this.endCurrent&&(this.$owlWrapper.removeClass("owl-origin"),this.isTransition=this.endCurrent=this.endPrev=!1)},owlStatus:function(){this.owl={userOptions:this.userOptions,baseElement:this.$elem,userItems:this.$userItems,owlItems:this.$owlItems,currentItem:this.currentItem,prevItem:this.prevItem,visibleItems:this.visibleItems,isTouch:this.browser.isTouch,browser:this.browser,dragDirection:this.dragDirection}},clearEvents:function(){this.$elem.off(".owl owl mousedown.disableTextSelect");
f(k).off(".owl owl");f(g).off("resize",this.resizer)},unWrap:function(){0!==this.$elem.children().length&&(this.$owlWrapper.unwrap(),this.$userItems.unwrap().unwrap(),this.owlControls&&this.owlControls.remove());this.clearEvents();this.$elem.attr("style",this.$elem.data("owl-originalStyles")||"").attr("class",this.$elem.data("owl-originalClasses"))},destroy:function(){this.stop();g.clearInterval(this.checkVisible);this.unWrap();this.$elem.removeData()},reinit:function(a){a=f.extend({},this.userOptions,
a);this.unWrap();this.init(a,this.$elem)},addItem:function(a,b){var e;if(!a)return!1;if(0===this.$elem.children().length)return this.$elem.append(a),this.setVars(),!1;this.unWrap();e=void 0===b||-1===b?-1:b;e>=this.$userItems.length||-1===e?this.$userItems.eq(-1).after(a):this.$userItems.eq(e).before(a);this.setVars()},removeItem:function(a){if(0===this.$elem.children().length)return!1;a=void 0===a||-1===a?-1:a;this.unWrap();this.$userItems.eq(a).remove();this.setVars()}};f.fn.owlCarousel=function(a){return this.each(function(){if(!0===
f(this).data("owl-init"))return!1;f(this).data("owl-init",!0);var b=Object.create(l);b.init(a,this);f.data(this,"owlCarousel",b)})};f.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1E3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,
responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:g,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}})(jQuery,window,document);


(function(a){a.fn.camera=function(H,V){var N={alignment:"center",autoAdvance:true,mobileAutoAdvance:true,barDirection:"leftToRight",barPosition:"bottom",cols:6,easing:"easeInOutExpo",mobileEasing:"",fx:"random",mobileFx:"",gridDifference:250,height:"50%",imagePath:"images/",hover:true,loader:"pie",loaderColor:"#eeeeee",loaderBgColor:"#222222",loaderOpacity:0.8,loaderPadding:2,loaderStroke:7,minHeight:"200px",navigation:true,navigationHover:true,mobileNavHover:true,opacityOnGrid:false,overlayer:true,pagination:true,playPause:true,pauseOnClick:true,pieDiameter:38,piePosition:"rightTop",portrait:false,rows:4,slicedCols:12,slicedRows:8,slideOn:"random",thumbnails:false,time:7000,transPeriod:1500,onEndTransition:function(){},onLoaded:function(){},onStartLoading:function(){},onStartTransition:function(){}};function L(){if(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)){return true}}a.support.borderRadius=false;a.each(["borderRadius","BorderRadius","MozBorderRadius","WebkitBorderRadius","OBorderRadius","KhtmlBorderRadius"],function(){if(document.body.style[this]!==undefined){a.support.borderRadius=true}});var H=a.extend({},N,H);var ae=a(this).addClass("camera_wrap");ae.wrapInner('<div class="camera_src" />').wrapInner('<div class="camera_fakehover" />');var D=a(".camera_fakehover",ae);var W=(".camera_fakehover",ae);D.append('<div class="camera_target"></div>');if(H.overlayer==true){D.append('<div class="camera_overlayer"></div>')}D.append('<div class="camera_target_content"></div>');var C;if(H.loader=="pie"&&!a.support.borderRadius){C="bar"}else{C=H.loader}if(C=="pie"){D.append('<div class="camera_pie"></div>')}else{if(C=="bar"){D.append('<div class="camera_bar"></div>')}else{D.append('<div class="camera_bar" style="display:none"></div>')}}if(H.playPause==true){D.append('<div class="camera_commands"></div>')}if(H.navigation==true){D.append('<div class="camera_prev"><span></span></div>').append('<div class="camera_next"><span></span></div>')}if(H.thumbnails==true){ae.append('<div class="camera_thumbs_cont" />')}if(H.thumbnails==true&&H.pagination!=true){a(".camera_thumbs_cont",ae).wrap("<div />").wrap('<div class="camera_thumbs" />').wrap("<div />").wrap('<div class="camera_command_wrap" />')}if(H.pagination==true){ae.append('<div class="camera_pag"></div>')}ae.append('<div class="camera_loader"></div>');a(".camera_caption",ae).each(function(){a(this).wrapInner("<div />")});var q="pie_"+ae.index(),ag=a(".camera_src",ae),b=a(".camera_target",ae),s=a(".camera_target_content",ae),p=a(".camera_pie",ae),ah=a(".camera_bar",ae),am=a(".camera_prev",ae),r=a(".camera_next",ae),R=a(".camera_commands",ae),n=a(".camera_pag",ae),M=a(".camera_thumbs_cont",ae);var Z,aj;var X=new Array();a("> div",ag).each(function(){X.push(a(this).attr("data-src"))});var c=new Array();a("> div",ag).each(function(){if(a(this).attr("data-link")){c.push(a(this).attr("data-link"))}else{c.push("")}});var m=new Array();a("> div",ag).each(function(){if(a(this).attr("data-target")){m.push(a(this).attr("data-target"))}else{m.push("")}});var k=new Array();a("> div",ag).each(function(){if(a(this).attr("data-portrait")){k.push(a(this).attr("data-portrait"))}else{k.push("")}});var o=new Array();a("> div",ag).each(function(){if(a(this).attr("data-alignment")){o.push(a(this).attr("data-alignment"))}else{o.push("")}});var j=new Array();a("> div",ag).each(function(){if(a(this).attr("data-thumb")){j.push(a(this).attr("data-thumb"))}else{j.push("")}});var y=X.length;a(s).append('<div class="cameraContents" />');var J;for(J=0;J<y;J++){a(".cameraContents",s).append('<div class="cameraContent" />');if(c[J]!=""){var t=a("> div ",ag).eq(J).attr("data-box");if(typeof t!=="undefined"&&t!==false&&t!=""){t='data-box="'+a("> div ",ag).eq(J).attr("data-box")+'"'}else{t=""}a(".camera_target_content .cameraContent:eq("+J+")",ae).append('<a class="camera_link" href="'+c[J]+'" '+t+' target="'+m[J]+'"></a>')}}a(".camera_caption",ae).each(function(){var u=a(this).parent().index(),h=ae.find(".cameraContent").eq(u);a(this).appendTo(h)});b.append('<div class="cameraCont" />');var F=a(".cameraCont",ae);var e;for(e=0;e<y;e++){F.append('<div class="cameraSlide cameraSlide_'+e+'" />');var ak=a("> div:eq("+e+")",ag);b.find(".cameraSlide_"+e).clone(ak)}function z(){var h=a(M).width();a("li",M).removeClass("camera_visThumb");a("li",M).each(function(){var au=a(this).position(),u=a("ul",M).outerWidth(),w=a("ul",M).offset().left,aq=a("> div",M).offset().left,at=aq-w;if(at>0){a(".camera_prevThumbs",U).removeClass("hideNav")}else{a(".camera_prevThumbs",U).addClass("hideNav")}if((u-at)>h){a(".camera_nextThumbs",U).removeClass("hideNav")}else{a(".camera_nextThumbs",U).addClass("hideNav")}var ar=au.left,ap=au.left+(a(this).width());if(ap-at<=h&&ar-at>=0){a(this).addClass("camera_visThumb")}})}a(window).bind("load resize pageshow",function(){I();z()});F.append('<div class="cameraSlide cameraSlide_'+e+'" />');
var an;ae.show();var Z=b.width();var aj=b.height();var ai;a(window).bind("resize pageshow",function(){if(an==true){v()}a("ul",M).animate({"margin-top":0},0,I);if(!ag.hasClass("paused")){ag.addClass("paused");if(a(".camera_stop",U).length){a(".camera_stop",U).hide();a(".camera_play",U).show();if(C!="none"){a("#"+q).hide()}}else{if(C!="none"){a("#"+q).hide()}}clearTimeout(ai);ai=setTimeout(function(){ag.removeClass("paused");if(a(".camera_play",U).length){a(".camera_play",U).hide();a(".camera_stop",U).show();if(C!="none"){a("#"+q).fadeIn()}}else{if(C!="none"){a("#"+q).fadeIn()}}},1500)}});function v(){var h;function u(){Z=ae.width();if(H.height.indexOf("%")!=-1){var w=Math.round(Z/(100/parseFloat(H.height)));if(H.minHeight!=""&&w<parseFloat(H.minHeight)){aj=parseFloat(H.minHeight)}else{aj=w}ae.css({height:aj})}else{if(H.height=="auto"){aj=ae.height()}else{aj=parseFloat(H.height);ae.css({height:aj})}}a(".camerarelative",b).css({width:Z,height:aj});a(".imgLoaded",b).each(function(){var az=a(this),ay=az.attr("width"),ar=az.attr("height"),au=az.index(),at,aq,aw=az.attr("data-alignment"),ax=az.attr("data-portrait");if(typeof aw==="undefined"||aw===false||aw===""){aw=H.alignment}if(typeof ax==="undefined"||ax===false||ax===""){ax=H.portrait}if(ax==false||ax=="false"){if((ay/ar)<(Z/aj)){var ap=Z/ay;var av=(Math.abs(aj-(ar*ap)))*0.5;switch(aw){case"topLeft":at=0;break;case"topCenter":at=0;break;case"topRight":at=0;break;case"centerLeft":at="-"+av+"px";break;case"center":at="-"+av+"px";break;case"centerRight":at="-"+av+"px";break;case"bottomLeft":at="-"+av*2+"px";break;case"bottomCenter":at="-"+av*2+"px";break;case"bottomRight":at="-"+av*2+"px";break}az.css({height:ar*ap,"margin-left":0,"margin-right":0,"margin-top":at,position:"absolute",visibility:"visible",width:Z})}else{var ap=aj/ar;var av=(Math.abs(Z-(ay*ap)))*0.5;switch(aw){case"topLeft":aq=0;break;case"topCenter":aq="-"+av+"px";break;case"topRight":aq="-"+av*2+"px";break;case"centerLeft":aq=0;break;case"center":aq="-"+av+"px";break;case"centerRight":aq="-"+av*2+"px";break;case"bottomLeft":aq=0;break;case"bottomCenter":aq="-"+av+"px";break;case"bottomRight":aq="-"+av*2+"px";break}az.css({height:aj,"margin-left":aq,"margin-right":aq,"margin-top":0,position:"absolute",visibility:"visible",width:ay*ap})}}else{if((ay/ar)<(Z/aj)){var ap=aj/ar;var av=(Math.abs(Z-(ay*ap)))*0.5;switch(aw){case"topLeft":aq=0;break;case"topCenter":aq=av+"px";break;case"topRight":aq=av*2+"px";break;case"centerLeft":aq=0;break;case"center":aq=av+"px";break;case"centerRight":aq=av*2+"px";break;case"bottomLeft":aq=0;break;case"bottomCenter":aq=av+"px";break;case"bottomRight":aq=av*2+"px";break}az.css({height:aj,"margin-left":aq,"margin-right":aq,"margin-top":0,position:"absolute",visibility:"visible",width:ay*ap})}else{var ap=Z/ay;var av=(Math.abs(aj-(ar*ap)))*0.5;switch(aw){case"topLeft":at=0;break;case"topCenter":at=0;break;case"topRight":at=0;break;case"centerLeft":at=av+"px";break;case"center":at=av+"px";break;case"centerRight":at=av+"px";break;case"bottomLeft":at=av*2+"px";break;case"bottomCenter":at=av*2+"px";break;case"bottomRight":at=av*2+"px";break}az.css({height:ar*ap,"margin-left":0,"margin-right":0,"margin-top":at,position:"absolute",visibility:"visible",width:Z})}}})}if(an==true){clearTimeout(h);h=setTimeout(u,200)}else{u()}an=true}var aa,ac;var Y,d,ab,R,n;var P,S;if(L()&&H.mobileAutoAdvance!=""){d=H.mobileAutoAdvance}else{d=H.autoAdvance}if(d==false){ag.addClass("paused")}if(L()&&H.mobileNavHover!=""){ab=H.mobileNavHover}else{ab=H.navigationHover}if(ag.length!=0){var i=a(".cameraSlide",b);i.wrapInner('<div class="camerarelative" />');var E;var A=H.barDirection;var U=ae;a("iframe",D).each(function(){var h=a(this);var w=h.attr("src");h.attr("data-src",w);var u=h.parent().index(".camera_src > div");a(".camera_target_content .cameraContent:eq("+u+")",ae).append(h)});function af(){a("iframe",D).each(function(){a(".camera_caption",D).show();var w=a(this);var u=w.attr("data-src");w.attr("src",u);var aq=H.imagePath+"blank.gif";var h=new Image();h.src=aq;if(H.height.indexOf("%")!=-1){var ap=Math.round(Z/(100/parseFloat(H.height)));if(H.minHeight!=""&&ap<parseFloat(H.minHeight)){aj=parseFloat(H.minHeight)}else{aj=ap}}else{if(H.height=="auto"){aj=ae.height()}else{aj=parseFloat(H.height)}}w.after(a(h).attr({"class":"imgFake",width:Z,height:aj}));var ar=w.clone();w.remove();a(h).bind("click",function(){if(a(this).css("position")=="absolute"){a(this).remove();if(u.indexOf("vimeo")!=-1||u.indexOf("youtube")!=-1){if(u.indexOf("?")!=-1){autoplay="&autoplay=1"}else{autoplay="?autoplay=1"}}else{if(u.indexOf("dailymotion")!=-1){if(u.indexOf("?")!=-1){autoplay="&autoPlay=1"}else{autoplay="?autoPlay=1"}}}ar.attr("src",u+autoplay);S=true}else{a(this).css({position:"absolute",top:0,left:0,zIndex:10}).after(ar);ar.css({position:"absolute",top:0,left:0,zIndex:9})}})})}af();if(H.hover==true){if(!L()){D.hover(function(){ag.addClass("hovered")},function(){ag.removeClass("hovered")})}}if(ab==true){a(am,ae).animate({opacity:0},0);
a(r,ae).animate({opacity:0},0);a(R,ae).animate({opacity:0},0);if(L()){a(document).on("vmouseover",W,function(){a(am,ae).animate({opacity:1},200);a(r,ae).animate({opacity:1},200);a(R,ae).animate({opacity:1},200)});a(document).on("vmouseout",W,function(){a(am,ae).delay(500).animate({opacity:0},200);a(r,ae).delay(500).animate({opacity:0},200);a(R,ae).delay(500).animate({opacity:0},200)})}else{D.hover(function(){a(am,ae).animate({opacity:1},200);a(r,ae).animate({opacity:1},200);a(R,ae).animate({opacity:1},200)},function(){a(am,ae).animate({opacity:0},200);a(r,ae).animate({opacity:0},200);a(R,ae).animate({opacity:0},200)})}}U.on("click",".camera_stop",function(){d=false;ag.addClass("paused");if(a(".camera_stop",U).length){a(".camera_stop",U).hide();a(".camera_play",U).show();if(C!="none"){a("#"+q).hide()}}else{if(C!="none"){a("#"+q).hide()}}});U.on("click",".camera_play",function(){d=true;ag.removeClass("paused");if(a(".camera_play",U).length){a(".camera_play",U).hide();a(".camera_stop",U).show();if(C!="none"){a("#"+q).show()}}else{if(C!="none"){a("#"+q).show()}}});if(H.pauseOnClick==true){a(".camera_target_content",D).mouseup(function(){d=false;ag.addClass("paused");a(".camera_stop",U).hide();a(".camera_play",U).show();a("#"+q).hide()})}a(".cameraContent, .imgFake",D).hover(function(){P=true},function(){P=false});a(".cameraContent, .imgFake",D).bind("click",function(){if(S==true&&P==true){d=false;a(".camera_caption",D).hide();ag.addClass("paused");a(".camera_stop",U).hide();a(".camera_play",U).show();a("#"+q).hide()}})}function Q(u){for(var w,h,ap=u.length;ap;w=parseInt(Math.random()*ap),h=u[--ap],u[ap]=u[w],u[w]=h){}return u}function x(h){return Math.ceil(h)==Math.floor(h)}if(C!="pie"){ah.append('<span class="camera_bar_cont" />');a(".camera_bar_cont",ah).animate({opacity:H.loaderOpacity},0).css({position:"absolute",left:0,right:0,top:0,bottom:0,"background-color":H.loaderBgColor}).append('<span id="'+q+'" />');a("#"+q).animate({opacity:0},0);var l=a("#"+q);l.css({position:"absolute","background-color":H.loaderColor});switch(H.barPosition){case"left":ah.css({right:"auto",width:H.loaderStroke});break;case"right":ah.css({left:"auto",width:H.loaderStroke});break;case"top":ah.css({bottom:"auto",height:H.loaderStroke});break;case"bottom":ah.css({top:"auto",height:H.loaderStroke});break}switch(A){case"leftToRight":l.css({left:0,right:0,top:H.loaderPadding,bottom:H.loaderPadding});break;case"rightToLeft":l.css({left:0,right:0,top:H.loaderPadding,bottom:H.loaderPadding});break;case"topToBottom":l.css({left:H.loaderPadding,right:H.loaderPadding,top:0,bottom:0});break;case"bottomToTop":l.css({left:H.loaderPadding,right:H.loaderPadding,top:0,bottom:0});break}}else{p.append('<canvas id="'+q+'"></canvas>');var ad;var l=document.getElementById(q);l.setAttribute("width",H.pieDiameter);l.setAttribute("height",H.pieDiameter);var ao;switch(H.piePosition){case"leftTop":ao="left:0; top:0;";break;case"rightTop":ao="right:0; top:0;";break;case"leftBottom":ao="left:0; bottom:0;";break;case"rightBottom":ao="right:0; bottom:0;";break}l.setAttribute("style","position:absolute; z-index:1002; "+ao);var g;var f;if(l&&l.getContext){var B=l.getContext("2d");B.rotate(Math.PI*(3/2));B.translate(-H.pieDiameter,0)}}if(C=="none"||d==false){a("#"+q).hide();a(".camera_canvas_wrap",U).hide()}if(a(n).length){a(n).append('<ul class="camera_pag_ul" />');var O;for(O=0;O<y;O++){a(".camera_pag_ul",ae).append('<li class="pag_nav_'+O+'" style="position:relative; z-index:1002"><span><span>'+O+"</span></span></li>")}a(".camera_pag_ul li",ae).hover(function(){a(this).addClass("camera_hover");if(a(".camera_thumb",this).length){var u=a(".camera_thumb",this).outerWidth(),w=a(".camera_thumb",this).outerHeight(),h=a(this).outerWidth();a(".camera_thumb",this).show().css({top:"-"+w+"px",left:"-"+(u-h)/2+"px"}).animate({opacity:1,"margin-top":"-3px"},200);a(".thumb_arrow",this).show().animate({opacity:1,"margin-top":"-3px"},200)}},function(){a(this).removeClass("camera_hover");a(".camera_thumb",this).animate({"margin-top":"-20px",opacity:0},200,function(){a(this).css({marginTop:"5px"}).hide()});a(".thumb_arrow",this).animate({"margin-top":"-20px",opacity:0},200,function(){a(this).css({marginTop:"5px"}).hide()})})}if(a(M).length){var al;if(!a(n).length){a(M).append("<div />");a(M).before('<div class="camera_prevThumbs hideNav"><div></div></div>').before('<div class="camera_nextThumbs hideNav"><div></div></div>');a("> div",M).append("<ul />");a.each(j,function(h,w){if(a("> div",ag).eq(h).attr("data-thumb")!=""){var ap=a("> div",ag).eq(h).attr("data-thumb"),u=new Image();u.src=ap;a("ul",M).append('<li class="pix_thumb pix_thumb_'+h+'" />');a("li.pix_thumb_"+h,M).append(a(u).attr("class","camera_thumb"))}})}else{a.each(j,function(h,w){if(a("> div",ag).eq(h).attr("data-thumb")!=""){var ap=a("> div",ag).eq(h).attr("data-thumb"),u=new Image();u.src=ap;a("li.pag_nav_"+h,n).append(a(u).attr("class","camera_thumb").css({position:"absolute"}).animate({opacity:0},0));a("li.pag_nav_"+h+" > img",n).after('<div class="thumb_arrow" />');
a("li.pag_nav_"+h+" > .thumb_arrow",n).animate({opacity:0},0)}});ae.css({marginBottom:a(n).outerHeight()})}}else{if(!a(M).length&&a(n).length){ae.css({marginBottom:a(n).outerHeight()})}}var G=true;function I(){if(a(M).length&&!a(n).length){var w=a(M).outerWidth(),ap=a("ul > li",M).outerWidth(),au=a("li.cameracurrent",M).length?a("li.cameracurrent",M).position():"",u=(a("ul > li",M).length*a("ul > li",M).outerWidth()),ar=a("ul",M).offset().left,at=a("> div",M).offset().left,h;if(ar<0){h="-"+(at-ar)}else{h=at-ar}if(G==true){a("ul",M).width(a("ul > li",M).length*a("ul > li",M).outerWidth());if(a(M).length&&!a(n).lenght){ae.css({marginBottom:a(M).outerHeight()})}z();a("ul",M).width(a("ul > li",M).length*a("ul > li",M).outerWidth());if(a(M).length&&!a(n).lenght){ae.css({marginBottom:a(M).outerHeight()})}}G=false;var aq=a("li.cameracurrent",M).length?au.left:"",av=a("li.cameracurrent",M).length?au.left+(a("li.cameracurrent",M).outerWidth()):"";if(aq<a("li.cameracurrent",M).outerWidth()){aq=0}if(av-h>w){if((aq+w)<u){a("ul",M).animate({"margin-left":"-"+(aq)+"px"},500,z)}else{a("ul",M).animate({"margin-left":"-"+(a("ul",M).outerWidth()-w)+"px"},500,z)}}else{if(aq-h<0){a("ul",M).animate({"margin-left":"-"+(aq)+"px"},500,z)}else{a("ul",M).css({"margin-left":"auto","margin-right":"auto"});setTimeout(z,100)}}}}if(a(R).length){a(R).append('<div class="camera_play"></div>').append('<div class="camera_stop"></div>');if(d==true){a(".camera_play",U).hide();a(".camera_stop",U).show()}else{a(".camera_stop",U).hide();a(".camera_play",U).show()}}function K(){g=0;var h=a(".camera_bar_cont",U).width(),u=a(".camera_bar_cont",U).height();if(C!="pie"){switch(A){case"leftToRight":a("#"+q).css({right:h});break;case"rightToLeft":a("#"+q).css({left:h});break;case"topToBottom":a("#"+q).css({bottom:u});break;case"bottomToTop":a("#"+q).css({top:u});break}}else{B.clearRect(0,0,H.pieDiameter,H.pieDiameter)}}K();a(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom",D).each(function(){a(this).css("visibility","hidden")});H.onStartLoading.call(this);T();function T(aF){ag.addClass("camerasliding");S=false;var aZ=parseFloat(a("div.cameraSlide.cameracurrent",b).index());if(aF>0){var aK=aF-1}else{if(aZ==y-1){var aK=0}else{var aK=aZ+1}}var u=a(".cameraSlide:eq("+aK+")",b);var aL=a(".cameraSlide:eq("+(aK+1)+")",b).addClass("cameranext");if(aZ!=aK+1){aL.hide()}a(".cameraContent",D).fadeOut(600);a(".camera_caption",D).show();a(".camerarelative",u).append(a("> div ",ag).eq(aK).find("> div.camera_effected"));a(".camera_target_content .cameraContent:eq("+aK+")",ae).append(a("> div ",ag).eq(aK).find("> div"));if(!a(".imgLoaded",u).length){var aC=X[aK];var aJ=new Image();aJ.src=aC+"?"+new Date().getTime();u.css("visibility","hidden");u.prepend(a(aJ).attr("class","imgLoaded").css("visibility","hidden"));var au,ar;if(!a(aJ).get(0).complete||au=="0"||ar=="0"||typeof au==="undefined"||au===false||typeof ar==="undefined"||ar===false){a(".camera_loader",ae).delay(500).fadeIn(400);aJ.onload=function(){au=aJ.naturalWidth;ar=aJ.naturalHeight;a(aJ).attr("data-alignment",o[aK]).attr("data-portrait",k[aK]);a(aJ).attr("width",au);a(aJ).attr("height",ar);b.find(".cameraSlide_"+aK).hide().css("visibility","visible");v();T(aK+1)}}}else{if(X.length>(aK+1)&&!a(".imgLoaded",aL).length){var at=X[(aK+1)];var aA=new Image();aA.src=at+"?"+new Date().getTime();aL.prepend(a(aA).attr("class","imgLoaded").css("visibility","hidden"));aA.onload=function(){au=aA.naturalWidth;ar=aA.naturalHeight;a(aA).attr("data-alignment",o[aK+1]).attr("data-portrait",k[aK+1]);a(aA).attr("width",au);a(aA).attr("height",ar);v()}}H.onLoaded.call(this);if(a(".camera_loader",ae).is(":visible")){a(".camera_loader",ae).fadeOut(400)}else{a(".camera_loader",ae).css({visibility:"hidden"});a(".camera_loader",ae).fadeOut(400,function(){a(".camera_loader",ae).css({visibility:"visible"})})}var a0=H.rows,av=H.cols,aW=1,h=0,aD,aX,aI,aB,aN,az=new Array("simpleFade","curtainTopLeft","curtainTopRight","curtainBottomLeft","curtainBottomRight","curtainSliceLeft","curtainSliceRight","blindCurtainTopLeft","blindCurtainTopRight","blindCurtainBottomLeft","blindCurtainBottomRight","blindCurtainSliceBottom","blindCurtainSliceTop","stampede","mosaic","mosaicReverse","mosaicRandom","mosaicSpiral","mosaicSpiralReverse","topLeftBottomRight","bottomRightTopLeft","bottomLeftTopRight","topRightBottomLeft","scrollLeft","scrollRight","scrollTop","scrollBottom","scrollHorz");marginLeft=0,marginTop=0,opacityOnGrid=0;if(H.opacityOnGrid==true){opacityOnGrid=0}else{opacityOnGrid=1}var aw=a(" > div",ag).eq(aK).attr("data-fx");if(L()&&H.mobileFx!=""&&H.mobileFx!="default"){aB=H.mobileFx}else{if(typeof aw!=="undefined"&&aw!==false&&aw!=="default"){aB=aw}else{aB=H.fx}}if(aB=="random"){aB=Q(az);aB=aB[0]}else{aB=aB;if(aB.indexOf(",")>0){aB=aB.replace(/ /g,"");aB=aB.split(",");aB=Q(aB);aB=aB[0]}}dataEasing=a(" > div",ag).eq(aK).attr("data-easing");mobileEasing=a(" > div",ag).eq(aK).attr("data-mobileEasing");
if(L()&&H.mobileEasing!=""&&H.mobileEasing!="default"){if(typeof mobileEasing!=="undefined"&&mobileEasing!==false&&mobileEasing!=="default"){aN=mobileEasing}else{aN=H.mobileEasing}}else{if(typeof dataEasing!=="undefined"&&dataEasing!==false&&dataEasing!=="default"){aN=dataEasing}else{aN=H.easing}}aD=a(" > div",ag).eq(aK).attr("data-slideOn");if(typeof aD!=="undefined"&&aD!==false){aT=aD}else{if(H.slideOn=="random"){var aT=new Array("next","prev");aT=Q(aT);aT=aT[0]}else{aT=H.slideOn}}var aq=a(" > div",ag).eq(aK).attr("data-time");if(typeof aq!=="undefined"&&aq!==false&&aq!==""){aX=parseFloat(aq)}else{aX=H.time}var ap=a(" > div",ag).eq(aK).attr("data-transPeriod");if(typeof ap!=="undefined"&&ap!==false&&ap!==""){aI=parseFloat(ap)}else{aI=H.transPeriod}if(!a(ag).hasClass("camerastarted")){aB="simpleFade";aT="next";aN="";aI=400;a(ag).addClass("camerastarted")}switch(aB){case"simpleFade":av=1;a0=1;break;case"curtainTopLeft":if(H.slicedCols==0){av=H.cols}else{av=H.slicedCols}a0=1;break;case"curtainTopRight":if(H.slicedCols==0){av=H.cols}else{av=H.slicedCols}a0=1;break;case"curtainBottomLeft":if(H.slicedCols==0){av=H.cols}else{av=H.slicedCols}a0=1;break;case"curtainBottomRight":if(H.slicedCols==0){av=H.cols}else{av=H.slicedCols}a0=1;break;case"curtainSliceLeft":if(H.slicedCols==0){av=H.cols}else{av=H.slicedCols}a0=1;break;case"curtainSliceRight":if(H.slicedCols==0){av=H.cols}else{av=H.slicedCols}a0=1;break;case"blindCurtainTopLeft":if(H.slicedRows==0){a0=H.rows}else{a0=H.slicedRows}av=1;break;case"blindCurtainTopRight":if(H.slicedRows==0){a0=H.rows}else{a0=H.slicedRows}av=1;break;case"blindCurtainBottomLeft":if(H.slicedRows==0){a0=H.rows}else{a0=H.slicedRows}av=1;break;case"blindCurtainBottomRight":if(H.slicedRows==0){a0=H.rows}else{a0=H.slicedRows}av=1;break;case"blindCurtainSliceTop":if(H.slicedRows==0){a0=H.rows}else{a0=H.slicedRows}av=1;break;case"blindCurtainSliceBottom":if(H.slicedRows==0){a0=H.rows}else{a0=H.slicedRows}av=1;break;case"stampede":h="-"+aI;break;case"mosaic":h=H.gridDifference;break;case"mosaicReverse":h=H.gridDifference;break;case"mosaicRandom":break;case"mosaicSpiral":h=H.gridDifference;aW=1.7;break;case"mosaicSpiralReverse":h=H.gridDifference;aW=1.7;break;case"topLeftBottomRight":h=H.gridDifference;aW=6;break;case"bottomRightTopLeft":h=H.gridDifference;aW=6;break;case"bottomLeftTopRight":h=H.gridDifference;aW=6;break;case"topRightBottomLeft":h=H.gridDifference;aW=6;break;case"scrollLeft":av=1;a0=1;break;case"scrollRight":av=1;a0=1;break;case"scrollTop":av=1;a0=1;break;case"scrollBottom":av=1;a0=1;break;case"scrollHorz":av=1;a0=1;break}var aV=0;var a2=a0*av;var a1=Z-(Math.floor(Z/av)*av);var w=aj-(Math.floor(aj/a0)*a0);var aE;var aM;var aG=0;var aP=0;var ay=new Array();var aO=new Array();var aQ=new Array();while(aV<a2){ay.push(aV);aO.push(aV);F.append('<div class="cameraappended" style="display:none; overflow:hidden; position:absolute; z-index:1000" />');var ax=a(".cameraappended:eq("+aV+")",b);if(aB=="scrollLeft"||aB=="scrollRight"||aB=="scrollTop"||aB=="scrollBottom"||aB=="scrollHorz"){i.eq(aK).clone().show().appendTo(ax)}else{if(aT=="next"){i.eq(aK).clone().show().appendTo(ax)}else{i.eq(aZ).clone().show().appendTo(ax)}}if(aV%av<a1){aE=1}else{aE=0}if(aV%av==0){aG=0}if(Math.floor(aV/av)<w){aM=1}else{aM=0}ax.css({height:Math.floor((aj/a0)+aM+1),left:aG,top:aP,width:Math.floor((Z/av)+aE+1)});a("> .cameraSlide",ax).css({height:aj,"margin-left":"-"+aG+"px","margin-top":"-"+aP+"px",width:Z});aG=aG+ax.width()-1;if(aV%av==av-1){aP=aP+ax.height()-1}aV++}switch(aB){case"curtainTopLeft":break;case"curtainBottomLeft":break;case"curtainSliceLeft":break;case"curtainTopRight":ay=ay.reverse();break;case"curtainBottomRight":ay=ay.reverse();break;case"curtainSliceRight":ay=ay.reverse();break;case"blindCurtainTopLeft":break;case"blindCurtainBottomLeft":ay=ay.reverse();break;case"blindCurtainSliceTop":break;case"blindCurtainTopRight":break;case"blindCurtainBottomRight":ay=ay.reverse();break;case"blindCurtainSliceBottom":ay=ay.reverse();break;case"stampede":ay=Q(ay);break;case"mosaic":break;case"mosaicReverse":ay=ay.reverse();break;case"mosaicRandom":ay=Q(ay);break;case"mosaicSpiral":var aH=a0/2,aU,aS,aR,aY=0;for(aR=0;aR<aH;aR++){aS=aR;for(aU=aR;aU<av-aR-1;aU++){aQ[aY++]=aS*av+aU}aU=av-aR-1;for(aS=aR;aS<a0-aR-1;aS++){aQ[aY++]=aS*av+aU}aS=a0-aR-1;for(aU=av-aR-1;aU>aR;aU--){aQ[aY++]=aS*av+aU}aU=aR;for(aS=a0-aR-1;aS>aR;aS--){aQ[aY++]=aS*av+aU}}ay=aQ;break;case"mosaicSpiralReverse":var aH=a0/2,aU,aS,aR,aY=a2-1;for(aR=0;aR<aH;aR++){aS=aR;for(aU=aR;aU<av-aR-1;aU++){aQ[aY--]=aS*av+aU}aU=av-aR-1;for(aS=aR;aS<a0-aR-1;aS++){aQ[aY--]=aS*av+aU}aS=a0-aR-1;for(aU=av-aR-1;aU>aR;aU--){aQ[aY--]=aS*av+aU}aU=aR;for(aS=a0-aR-1;aS>aR;aS--){aQ[aY--]=aS*av+aU}}ay=aQ;break;case"topLeftBottomRight":for(var aS=0;aS<a0;aS++){for(var aU=0;aU<av;aU++){aQ.push(aU+aS)}}aO=aQ;break;case"bottomRightTopLeft":for(var aS=0;aS<a0;aS++){for(var aU=0;aU<av;aU++){aQ.push(aU+aS)}}aO=aQ.reverse();break;case"bottomLeftTopRight":for(var aS=a0;aS>0;aS--){for(var aU=0;
aU<av;aU++){aQ.push(aU+aS)}}aO=aQ;break;case"topRightBottomLeft":for(var aS=0;aS<a0;aS++){for(var aU=av;aU>0;aU--){aQ.push(aU+aS)}}aO=aQ;break}a.each(ay,function(a3,a5){if(a5%av<a1){aE=1}else{aE=0}if(a5%av==0){aG=0}if(Math.floor(a5/av)<w){aM=1}else{aM=0}switch(aB){case"simpleFade":height=aj;width=Z;opacityOnGrid=0;break;case"curtainTopLeft":height=0,width=Math.floor((Z/av)+aE+1),marginTop="-"+Math.floor((aj/a0)+aM+1)+"px";break;case"curtainTopRight":height=0,width=Math.floor((Z/av)+aE+1),marginTop="-"+Math.floor((aj/a0)+aM+1)+"px";break;case"curtainBottomLeft":height=0,width=Math.floor((Z/av)+aE+1),marginTop=Math.floor((aj/a0)+aM+1)+"px";break;case"curtainBottomRight":height=0,width=Math.floor((Z/av)+aE+1),marginTop=Math.floor((aj/a0)+aM+1)+"px";break;case"curtainSliceLeft":height=0,width=Math.floor((Z/av)+aE+1);if(a5%2==0){marginTop=Math.floor((aj/a0)+aM+1)+"px"}else{marginTop="-"+Math.floor((aj/a0)+aM+1)+"px"}break;case"curtainSliceRight":height=0,width=Math.floor((Z/av)+aE+1);if(a5%2==0){marginTop=Math.floor((aj/a0)+aM+1)+"px"}else{marginTop="-"+Math.floor((aj/a0)+aM+1)+"px"}break;case"blindCurtainTopLeft":height=Math.floor((aj/a0)+aM+1),width=0,marginLeft="-"+Math.floor((Z/av)+aE+1)+"px";break;case"blindCurtainTopRight":height=Math.floor((aj/a0)+aM+1),width=0,marginLeft=Math.floor((Z/av)+aE+1)+"px";break;case"blindCurtainBottomLeft":height=Math.floor((aj/a0)+aM+1),width=0,marginLeft="-"+Math.floor((Z/av)+aE+1)+"px";break;case"blindCurtainBottomRight":height=Math.floor((aj/a0)+aM+1),width=0,marginLeft=Math.floor((Z/av)+aE+1)+"px";break;case"blindCurtainSliceBottom":height=Math.floor((aj/a0)+aM+1),width=0;if(a5%2==0){marginLeft="-"+Math.floor((Z/av)+aE+1)+"px"}else{marginLeft=Math.floor((Z/av)+aE+1)+"px"}break;case"blindCurtainSliceTop":height=Math.floor((aj/a0)+aM+1),width=0;if(a5%2==0){marginLeft="-"+Math.floor((Z/av)+aE+1)+"px"}else{marginLeft=Math.floor((Z/av)+aE+1)+"px"}break;case"stampede":height=0;width=0;marginLeft=(Z*0.2)*(((a3)%av)-(av-(Math.floor(av/2))))+"px";marginTop=(aj*0.2)*((Math.floor(a3/av)+1)-(a0-(Math.floor(a0/2))))+"px";break;case"mosaic":height=0;width=0;break;case"mosaicReverse":height=0;width=0;marginLeft=Math.floor((Z/av)+aE+1)+"px";marginTop=Math.floor((aj/a0)+aM+1)+"px";break;case"mosaicRandom":height=0;width=0;marginLeft=Math.floor((Z/av)+aE+1)*0.5+"px";marginTop=Math.floor((aj/a0)+aM+1)*0.5+"px";break;case"mosaicSpiral":height=0;width=0;marginLeft=Math.floor((Z/av)+aE+1)*0.5+"px";marginTop=Math.floor((aj/a0)+aM+1)*0.5+"px";break;case"mosaicSpiralReverse":height=0;width=0;marginLeft=Math.floor((Z/av)+aE+1)*0.5+"px";marginTop=Math.floor((aj/a0)+aM+1)*0.5+"px";break;case"topLeftBottomRight":height=0;width=0;break;case"bottomRightTopLeft":height=0;width=0;marginLeft=Math.floor((Z/av)+aE+1)+"px";marginTop=Math.floor((aj/a0)+aM+1)+"px";break;case"bottomLeftTopRight":height=0;width=0;marginLeft=0;marginTop=Math.floor((aj/a0)+aM+1)+"px";break;case"topRightBottomLeft":height=0;width=0;marginLeft=Math.floor((Z/av)+aE+1)+"px";marginTop=0;break;case"scrollRight":height=aj;width=Z;marginLeft=-Z;break;case"scrollLeft":height=aj;width=Z;marginLeft=Z;break;case"scrollTop":height=aj;width=Z;marginTop=aj;break;case"scrollBottom":height=aj;width=Z;marginTop=-aj;break;case"scrollHorz":height=aj;width=Z;if(aZ==0&&aK==y-1){marginLeft=-Z}else{if(aZ<aK||(aZ==y-1&&aK==0)){marginLeft=Z}else{marginLeft=-Z}}break}var a6=a(".cameraappended:eq("+a5+")",b);if(typeof aa!=="undefined"){clearInterval(aa);clearTimeout(ac);ac=setTimeout(K,aI+h)}if(a(n).length){a(".camera_pag li",ae).removeClass("cameracurrent");a(".camera_pag li",ae).eq(aK).addClass("cameracurrent")}if(a(M).length){a("li",M).removeClass("cameracurrent");a("li",M).eq(aK).addClass("cameracurrent");a("li",M).not(".cameracurrent").find("img").animate({opacity:0.5},0);a("li.cameracurrent img",M).animate({opacity:1},0);a("li",M).hover(function(){a("img",this).stop(true,false).animate({opacity:1},150)},function(){if(!a(this).hasClass("cameracurrent")){a("img",this).stop(true,false).animate({opacity:0.5},150)}})}var a7=parseFloat(aI)+parseFloat(h);function a4(){a(this).addClass("cameraeased");if(a(".cameraeased",b).length>=0){a(M).css({visibility:"visible"})}if(a(".cameraeased",b).length==a2){I();a(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom",D).each(function(){a(this).css("visibility","hidden")});i.eq(aK).show().css("z-index","999").removeClass("cameranext").addClass("cameracurrent");i.eq(aZ).css("z-index","1").removeClass("cameracurrent");a(".cameraContent",D).eq(aK).addClass("cameracurrent");if(aZ>=0){a(".cameraContent",D).eq(aZ).removeClass("cameracurrent")}H.onEndTransition.call(this);if(a("> div",ag).eq(aK).attr("data-video")!="hide"&&a(".cameraContent.cameracurrent .imgFake",D).length){a(".cameraContent.cameracurrent .imgFake",D).click()}var bb=i.eq(aK).find(".fadeIn").length;var a8=a(".cameraContent",D).eq(aK).find(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom").length;
if(bb!=0){a(".cameraSlide.cameracurrent .fadeIn",D).each(function(){if(a(this).attr("data-easing")!=""){var bh=a(this).attr("data-easing")}else{var bh=aN}var bn=a(this);if(typeof bn.attr("data-outerWidth")==="undefined"||bn.attr("data-outerWidth")===false||bn.attr("data-outerWidth")===""){var bg=bn.outerWidth();bn.attr("data-outerWidth",bg)}else{var bg=bn.attr("data-outerWidth")}if(typeof bn.attr("data-outerHeight")==="undefined"||bn.attr("data-outerHeight")===false||bn.attr("data-outerHeight")===""){var bf=bn.outerHeight();bn.attr("data-outerHeight",bf)}else{var bf=bn.attr("data-outerHeight")}var bj=bn.position();var be=bj.left;var bk=bj.top;var bi=bn.attr("class");var bd=bn.index();var bl=bn.parents(".camerarelative").outerHeight();var bm=bn.parents(".camerarelative").outerWidth();if(bi.indexOf("fadeIn")!=-1){bn.animate({opacity:0},0).css("visibility","visible").delay((aX/bb)*(0.1*(bd-1))).animate({opacity:1},(aX/bb)*0.15,bh)}else{bn.css("visibility","visible")}})}a(".cameraContent.cameracurrent",D).show();if(a8!=0){a(".cameraContent.cameracurrent .moveFromLeft, .cameraContent.cameracurrent .moveFromRight, .cameraContent.cameracurrent .moveFromTop, .cameraContent.cameracurrent .moveFromBottom, .cameraContent.cameracurrent .fadeIn, .cameraContent.cameracurrent .fadeFromLeft, .cameraContent.cameracurrent .fadeFromRight, .cameraContent.cameracurrent .fadeFromTop, .cameraContent.cameracurrent .fadeFromBottom",D).each(function(){if(a(this).attr("data-easing")!=""){var be=a(this).attr("data-easing")}else{var be=aN}var bf=a(this);var bk=bf.position();var bi=bk.left;var bh=bk.top;var bj=bf.attr("class");var bg=bf.index();var bd=bf.outerHeight();if(bj.indexOf("moveFromLeft")!=-1){bf.css({left:"-"+(Z)+"px",right:"auto"});bf.css("visibility","visible").delay((aX/a8)*(0.1*(bg-1))).animate({left:bk.left},(aX/a8)*0.15,be)}else{if(bj.indexOf("moveFromRight")!=-1){bf.css({left:Z+"px",right:"auto"});bf.css("visibility","visible").delay((aX/a8)*(0.1*(bg-1))).animate({left:bk.left},(aX/a8)*0.15,be)}else{if(bj.indexOf("moveFromTop")!=-1){bf.css({top:"-"+aj+"px",bottom:"auto"});bf.css("visibility","visible").delay((aX/a8)*(0.1*(bg-1))).animate({top:bk.top},(aX/a8)*0.15,be,function(){bf.css({top:"auto",bottom:0})})}else{if(bj.indexOf("moveFromBottom")!=-1){bf.css({top:aj+"px",bottom:"auto"});bf.css("visibility","visible").delay((aX/a8)*(0.1*(bg-1))).animate({top:bk.top},(aX/a8)*0.15,be)}else{if(bj.indexOf("fadeFromLeft")!=-1){bf.animate({opacity:0},0).css({left:"-"+(Z)+"px",right:"auto"});bf.css("visibility","visible").delay((aX/a8)*(0.1*(bg-1))).animate({left:bk.left,opacity:1},(aX/a8)*0.15,be)}else{if(bj.indexOf("fadeFromRight")!=-1){bf.animate({opacity:0},0).css({left:(Z)+"px",right:"auto"});bf.css("visibility","visible").delay((aX/a8)*(0.1*(bg-1))).animate({left:bk.left,opacity:1},(aX/a8)*0.15,be)}else{if(bj.indexOf("fadeFromTop")!=-1){bf.animate({opacity:0},0).css({top:"-"+(aj)+"px",bottom:"auto"});bf.css("visibility","visible").delay((aX/a8)*(0.1*(bg-1))).animate({top:bk.top,opacity:1},(aX/a8)*0.15,be,function(){bf.css({top:"auto",bottom:0})})}else{if(bj.indexOf("fadeFromBottom")!=-1){bf.animate({opacity:0},0).css({bottom:"-"+bd+"px"});bf.css("visibility","visible").delay((aX/a8)*(0.1*(bg-1))).animate({bottom:"0",opacity:1},(aX/a8)*0.15,be)}else{if(bj.indexOf("fadeIn")!=-1){bf.animate({opacity:0},0).css("visibility","visible").delay((aX/a8)*(0.1*(bg-1))).animate({opacity:1},(aX/a8)*0.15,be)}else{bf.css("visibility","visible")}}}}}}}}}})}a(".cameraappended",b).remove();ag.removeClass("camerasliding");i.eq(aZ).hide();var a9=a(".camera_bar_cont",U).width(),bc=a(".camera_bar_cont",U).height(),ba;if(C!="pie"){ba=0.05}else{ba=0.005}a("#"+q).animate({opacity:H.loaderOpacity},200);aa=setInterval(function(){if(ag.hasClass("stopped")){clearInterval(aa)}if(C!="pie"){if(g<=1.002&&!ag.hasClass("stopped")&&!ag.hasClass("paused")&&!ag.hasClass("hovered")){g=(g+ba)}else{if(g<=1&&(ag.hasClass("stopped")||ag.hasClass("paused")||ag.hasClass("stopped")||ag.hasClass("hovered"))){g=g}else{if(!ag.hasClass("stopped")&&!ag.hasClass("paused")&&!ag.hasClass("hovered")){clearInterval(aa);af();a("#"+q).animate({opacity:0},200,function(){clearTimeout(ac);ac=setTimeout(K,a7);T();H.onStartLoading.call(this)})}}}switch(A){case"leftToRight":a("#"+q).animate({right:a9-(a9*g)},(aX*ba),"linear");break;case"rightToLeft":a("#"+q).animate({left:a9-(a9*g)},(aX*ba),"linear");break;case"topToBottom":a("#"+q).animate({bottom:bc-(bc*g)},(aX*ba),"linear");break;case"bottomToTop":a("#"+q).animate({bottom:bc-(bc*g)},(aX*ba),"linear");break}}else{f=g;B.clearRect(0,0,H.pieDiameter,H.pieDiameter);B.globalCompositeOperation="destination-over";B.beginPath();B.arc((H.pieDiameter)/2,(H.pieDiameter)/2,(H.pieDiameter)/2-H.loaderStroke,0,Math.PI*2,false);B.lineWidth=H.loaderStroke;B.strokeStyle=H.loaderBgColor;B.stroke();B.closePath();B.globalCompositeOperation="source-over";B.beginPath();B.arc((H.pieDiameter)/2,(H.pieDiameter)/2,(H.pieDiameter)/2-H.loaderStroke,0,Math.PI*2*f,false);
B.lineWidth=H.loaderStroke-(H.loaderPadding*2);B.strokeStyle=H.loaderColor;B.stroke();B.closePath();if(g<=1.002&&!ag.hasClass("stopped")&&!ag.hasClass("paused")&&!ag.hasClass("hovered")){g=(g+ba)}else{if(g<=1&&(ag.hasClass("stopped")||ag.hasClass("paused")||ag.hasClass("hovered"))){g=g}else{if(!ag.hasClass("stopped")&&!ag.hasClass("paused")&&!ag.hasClass("hovered")){clearInterval(aa);af();a("#"+q+", .camera_canvas_wrap",U).animate({opacity:0},200,function(){clearTimeout(ac);ac=setTimeout(K,a7);T();H.onStartLoading.call(this)})}}}}},aX*ba)}}if(aB=="scrollLeft"||aB=="scrollRight"||aB=="scrollTop"||aB=="scrollBottom"||aB=="scrollHorz"){H.onStartTransition.call(this);a7=0;a6.delay((((aI+h)/a2)*aO[a3]*aW)*0.5).css({display:"block",height:height,"margin-left":marginLeft,"margin-top":marginTop,width:width}).animate({height:Math.floor((aj/a0)+aM+1),"margin-top":0,"margin-left":0,width:Math.floor((Z/av)+aE+1)},(aI-h),aN,a4);i.eq(aZ).delay((((aI+h)/a2)*aO[a3]*aW)*0.5).animate({"margin-left":marginLeft*(-1),"margin-top":marginTop*(-1)},(aI-h),aN,function(){a(this).css({"margin-top":0,"margin-left":0})})}else{H.onStartTransition.call(this);a7=parseFloat(aI)+parseFloat(h);if(aT=="next"){a6.delay((((aI+h)/a2)*aO[a3]*aW)*0.5).css({display:"block",height:height,"margin-left":marginLeft,"margin-top":marginTop,width:width,opacity:opacityOnGrid}).animate({height:Math.floor((aj/a0)+aM+1),"margin-top":0,"margin-left":0,opacity:1,width:Math.floor((Z/av)+aE+1)},(aI-h),aN,a4)}else{i.eq(aK).show().css("z-index","999").addClass("cameracurrent");i.eq(aZ).css("z-index","1").removeClass("cameracurrent");a(".cameraContent",D).eq(aK).addClass("cameracurrent");a(".cameraContent",D).eq(aZ).removeClass("cameracurrent");a6.delay((((aI+h)/a2)*aO[a3]*aW)*0.5).css({display:"block",height:Math.floor((aj/a0)+aM+1),"margin-top":0,"margin-left":0,opacity:1,width:Math.floor((Z/av)+aE+1)}).animate({height:height,"margin-left":marginLeft,"margin-top":marginTop,width:width,opacity:opacityOnGrid},(aI-h),aN,a4)}}})}}if(a(am).length){a(am).click(function(){if(!ag.hasClass("camerasliding")){var h=parseFloat(a(".cameraSlide.cameracurrent",b).index());clearInterval(aa);af();a("#"+q+", .camera_canvas_wrap",ae).animate({opacity:0},0);K();if(h!=0){T(h)}else{T(y)}H.onStartLoading.call(this)}})}if(a(r).length){a(r).click(function(){if(!ag.hasClass("camerasliding")){var h=parseFloat(a(".cameraSlide.cameracurrent",b).index());clearInterval(aa);af();a("#"+q+", .camera_canvas_wrap",U).animate({opacity:0},0);K();if(h==y-1){T(1)}else{T(h+2)}H.onStartLoading.call(this)}})}if(L()){D.bind("swipeleft",function(h){if(!ag.hasClass("camerasliding")){var u=parseFloat(a(".cameraSlide.cameracurrent",b).index());clearInterval(aa);af();a("#"+q+", .camera_canvas_wrap",U).animate({opacity:0},0);K();if(u==y-1){T(1)}else{T(u+2)}H.onStartLoading.call(this)}});D.bind("swiperight",function(h){if(!ag.hasClass("camerasliding")){var u=parseFloat(a(".cameraSlide.cameracurrent",b).index());clearInterval(aa);af();a("#"+q+", .camera_canvas_wrap",U).animate({opacity:0},0);K();if(u!=0){T(u)}else{T(y)}H.onStartLoading.call(this)}})}if(a(n).length){a(".camera_pag li",ae).click(function(){if(!ag.hasClass("camerasliding")){var u=parseFloat(a(this).index());var h=parseFloat(a(".cameraSlide.cameracurrent",b).index());if(u!=h){clearInterval(aa);af();a("#"+q+", .camera_canvas_wrap",U).animate({opacity:0},0);K();T(u+1);H.onStartLoading.call(this)}}})}if(a(M).length){a(".pix_thumb img",M).click(function(){if(!ag.hasClass("camerasliding")){var u=parseFloat(a(this).parents("li").index());var h=parseFloat(a(".cameracurrent",b).index());if(u!=h){clearInterval(aa);af();a("#"+q+", .camera_canvas_wrap",U).animate({opacity:0},0);a(".pix_thumb",M).removeClass("cameracurrent");a(this).parents("li").addClass("cameracurrent");K();T(u+1);I();H.onStartLoading.call(this)}}});a(".camera_thumbs_cont .camera_prevThumbs",U).hover(function(){a(this).stop(true,false).animate({opacity:1},250)},function(){a(this).stop(true,false).animate({opacity:0.7},250)});a(".camera_prevThumbs",U).click(function(){var ap=0,w=a(M).outerWidth(),h=a("ul",M).offset().left,u=a("> div",M).offset().left,aq=u-h;a(".camera_visThumb",M).each(function(){var ar=a(this).outerWidth();ap=ap+ar});if(aq-ap>0){a("ul",M).animate({"margin-left":"-"+(aq-ap)+"px"},500,z)}else{a("ul",M).animate({"margin-left":0},500,z)}});a(".camera_thumbs_cont .camera_nextThumbs",U).hover(function(){a(this).stop(true,false).animate({opacity:1},250)},function(){a(this).stop(true,false).animate({opacity:0.7},250)});a(".camera_nextThumbs",U).click(function(){var aq=0,ap=a(M).outerWidth(),h=a("ul",M).outerWidth(),u=a("ul",M).offset().left,w=a("> div",M).offset().left,ar=w-u;a(".camera_visThumb",M).each(function(){var at=a(this).outerWidth();aq=aq+at});if(ar+aq+aq<h){a("ul",M).animate({"margin-left":"-"+(ar+aq)+"px"},500,z)}else{a("ul",M).animate({"margin-left":"-"+(h-ap)+"px"},500,z)}})}}})(jQuery);(function(a){a.fn.cameraStop=function(){var b=a(this),c=a(".camera_src",b),e="pie_"+b.index();
c.addClass("stopped");if(a(".camera_showcommands").length){var d=a(".camera_thumbs_wrap",b)}else{var d=b}}})(jQuery);(function(a){a.fn.cameraPause=function(){var b=a(this);var c=a(".camera_src",b);c.addClass("paused")}})(jQuery);(function(a){a.fn.cameraResume=function(){var b=a(this);var c=a(".camera_src",b);if(typeof autoAdv==="undefined"||autoAdv!==true){c.removeClass("paused")}}})(jQuery);


/*
The MIT License (MIT)
http://opensource.org/licenses/mit-license.html

Copyright (c) 2014 Jack Tuck

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
*/
var elastic_slider=function(){function l(i){var o;if(s!==false){o=$(s).closest(".active").index()}else{o=$(t).closest(".active").index()}if(typeof this.action!=="undefined"){if(this.action==="trigger"){e=i}else if(this.action==="prev"){e=o;e===0?e=n:e--}else if(this.action==="next"){e=o;e===n?e=0:e++}h()}else{e=o;e===n?e=0:e++}switch(r){case"fade":t.css("z-index",0).eq(e).css("z-index",1e3);t.stop(true,false).eq(e).animate({opacity:1},a,function(){t.not(t.eq(e)).css("opacity",0)});break;case"slide":t.parent().stop(true,false).animate({"margin-left":"-"+e*t.width()},a);break}if(s!==false){s.removeClass("active").eq(e).addClass("active")}else{t.removeClass("active").eq(e).addClass("active")}}function h(){clearInterval(c);c=setInterval(function(){l()},u)}var e=0,t=this.images,n=t.length-1,r=typeof this.animation!=="undefined"?this.animation:"fade",i=typeof this.base_controls!=="undefined"?this.base_controls:false,s=typeof this.specific_controls!=="undefined"?this.specific_controls:false,o=typeof this.touch_controls!=="undefined"?this.touch_controls:true,u=typeof this.interval!=="undefined"?this.interval:4e3,a=typeof this.speed!=="undefined"?this.speed:1e3,f=typeof this.pause!=="undefined"?this.pause:true;if(r==="fade"){$(window).load(function(){t.parent(":eq(1)").css("height",function(){return t.children().height()});$(this).resize(function(){t.parent(":eq(1)").css("height",function(){return t.children().height()})})});t.css("opacity",0).first().css("opacity",1);t.css({position:"absolute",top:0,left:0})}else if(r==="slide"){t.children().css("width",function(){return t.parents(":eq(1)").width()});$(window).resize(function(){t.children().css("width",function(){return t.parents(":eq(1)").width()})});t.css({"float":"left"}).parent().css("width","6000px").parent().css("overflow","hidden")}if(i){$(i).click(function(){var e;if($(this).hasClass("prev")){e={action:"prev"};l.call(e)}else{e={action:"next"};l.call(e)}});t.parents(":eq(1)").hover(function(){i.stop(true,false).fadeIn()},function(){i.stop(true,false).fadeOut()});i.hide()}if(s){$(s).click(function(){var e;e={action:"trigger"};l.call(e,$(this).index())})}if(o){t.parents(":eq(1)").on("mousedown touchstart",function(e){pageX_start=e.originalEvent.pageX}).on("mouseup touchend",function(e){pageX_end=e.originalEvent.pageX;if(pageX_start<pageX_end&&Math.abs(pageX_start-pageX_end)>25){self={action:"next"};l.call(self)}else if(pageX_start>pageX_end&&Math.abs(pageX_start-pageX_end)>25){self={action:"prev"};l.call(self)}})}if(f){t.parent().parent().hover(function(){clearInterval(c)},function(){h()})}var c=setInterval(function(){l()},u)};


/*
 * jQuery Nivo Slider v3.2
 * http://nivo.dev7studios.com
 *
 * Copyright 2012, Dev7studios
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

(function($) {
    var NivoSlider = function(element, options){
        // Defaults are below
        var settings = $.extend({}, $.fn.nivoSlider.defaults, options);

        // Useful variables. Play carefully.
        var vars = {
            currentSlide: 0,
            currentImage: '',
            totalSlides: 0,
            running: false,
            paused: false,
            stop: false,
            controlNavEl: false
        };

        // Get this slider
        var slider = $(element);
        slider.data('nivo:vars', vars).addClass('nivoSlider');

        // Find our slider children
        var kids = slider.children();
        kids.each(function() {
            var child = $(this);
            var link = '';
            if(!child.is('img')){
                if(child.is('a')){
                    child.addClass('nivo-imageLink');
                    link = child;
                }
                child = child.find('img:first');
            }
            // Get img width & height
            var childWidth = (childWidth === 0) ? child.attr('width') : child.width(),
                childHeight = (childHeight === 0) ? child.attr('height') : child.height();

            if(link !== ''){
                link.css('display','none');
            }
            child.css('display','none');
            vars.totalSlides++;
        });
         
        // If randomStart
        if(settings.randomStart){
            settings.startSlide = Math.floor(Math.random() * vars.totalSlides);
        }
        
        // Set startSlide
        if(settings.startSlide > 0){
            if(settings.startSlide >= vars.totalSlides) { settings.startSlide = vars.totalSlides - 1; }
            vars.currentSlide = settings.startSlide;
        }
        
        // Get initial image
        if($(kids[vars.currentSlide]).is('img')){
            vars.currentImage = $(kids[vars.currentSlide]);
        } else {
            vars.currentImage = $(kids[vars.currentSlide]).find('img:first');
        }
        
        // Show initial link
        if($(kids[vars.currentSlide]).is('a')){
            $(kids[vars.currentSlide]).css('display','block');
        }
        
        // Set first background
        var sliderImg = $('<img/>').addClass('nivo-main-image');
        sliderImg.attr('src', vars.currentImage.attr('src')).show();
        slider.append(sliderImg);

        // Detect Window Resize
        $(window).resize(function() {
            slider.children('img').width(slider.width());
            sliderImg.attr('src', vars.currentImage.attr('src'));
            sliderImg.stop().height('auto');
            $('.nivo-slice').remove();
            $('.nivo-box').remove();
        });

        //Create caption
        slider.append($('<div class="nivo-caption"></div>'));
        
        // Process caption function
        var processCaption = function(settings){
            var nivoCaption = $('.nivo-caption', slider);
            if(vars.currentImage.attr('title') != '' && vars.currentImage.attr('title') != undefined){
                var title = vars.currentImage.attr('title');
                if(title.substr(0,1) == '#') title = $(title).html();   

                if(nivoCaption.css('display') == 'block'){
                    setTimeout(function(){
                        nivoCaption.html(title);
                    }, settings.animSpeed);
                } else {
                    nivoCaption.html(title);
                    nivoCaption.stop().fadeIn(settings.animSpeed);
                }
            } else {
                nivoCaption.stop().fadeOut(settings.animSpeed);
            }
        }
        
        //Process initial  caption
        processCaption(settings);
        
        // In the words of Super Mario "let's a go!"
        var timer = 0;
        if(!settings.manualAdvance && kids.length > 1){
            timer = setInterval(function(){ nivoRun(slider, kids, settings, false); }, settings.pauseTime);
        }
        
        // Add Direction nav
        if(settings.directionNav){
            slider.append('<div class="nivo-directionNav"><a class="nivo-prevNav">'+ settings.prevText +'</a><a class="nivo-nextNav">'+ settings.nextText +'</a></div>');
            
            $(slider).on('click', 'a.nivo-prevNav', function(){
                if(vars.running) { return false; }
                clearInterval(timer);
                timer = '';
                vars.currentSlide -= 2;
                nivoRun(slider, kids, settings, 'prev');
            });
            
            $(slider).on('click', 'a.nivo-nextNav', function(){
                if(vars.running) { return false; }
                clearInterval(timer);
                timer = '';
                nivoRun(slider, kids, settings, 'next');
            });
        }
        
        // Add Control nav
        if(settings.controlNav){
            vars.controlNavEl = $('<div class="nivo-controlNav"></div>');
            slider.after(vars.controlNavEl);
            for(var i = 0; i < kids.length; i++){
                if(settings.controlNavThumbs){
                    vars.controlNavEl.addClass('nivo-thumbs-enabled');
                    var child = kids.eq(i);
                    if(!child.is('img')){
                        child = child.find('img:first');
                    }
                    if(child.attr('data-thumb')) vars.controlNavEl.append('<a class="nivo-control" rel="'+ i +'"><img src="'+ child.attr('data-thumb') +'" alt="" /></a>');
                } else {
                    vars.controlNavEl.append('<a class="nivo-control" rel="'+ i +'">'+ (i + 1) +'</a>');
                }
            }

            //Set initial active link
            $('a:eq('+ vars.currentSlide +')', vars.controlNavEl).addClass('active');
            
            $('a', vars.controlNavEl).bind('click', function(){
                if(vars.running) return false;
                if($(this).hasClass('active')) return false;
                clearInterval(timer);
                timer = '';
                sliderImg.attr('src', vars.currentImage.attr('src'));
                vars.currentSlide = $(this).attr('rel') - 1;
                nivoRun(slider, kids, settings, 'control');
            });
        }
        
        //For pauseOnHover setting
        if(settings.pauseOnHover){
            slider.hover(function(){
                vars.paused = true;
                clearInterval(timer);
                timer = '';
            }, function(){
                vars.paused = false;
                // Restart the timer
                if(timer === '' && !settings.manualAdvance){
                    timer = setInterval(function(){ nivoRun(slider, kids, settings, false); }, settings.pauseTime);
                }
            });
        }
        
        // Event when Animation finishes
        slider.bind('nivo:animFinished', function(){
            sliderImg.attr('src', vars.currentImage.attr('src'));
            vars.running = false; 
            // Hide child links
            $(kids).each(function(){
                if($(this).is('a')){
                   $(this).css('display','none');
                }
            });
            // Show current link
            if($(kids[vars.currentSlide]).is('a')){
                $(kids[vars.currentSlide]).css('display','block');
            }
            // Restart the timer
            if(timer === '' && !vars.paused && !settings.manualAdvance){
                timer = setInterval(function(){ nivoRun(slider, kids, settings, false); }, settings.pauseTime);
            }
            // Trigger the afterChange callback
            settings.afterChange.call(this);
        }); 
        
        // Add slices for slice animations
        var createSlices = function(slider, settings, vars) {
        	if($(vars.currentImage).parent().is('a')) $(vars.currentImage).parent().css('display','block');
            $('img[src="'+ vars.currentImage.attr('src') +'"]', slider).not('.nivo-main-image,.nivo-control img').width(slider.width()).css('visibility', 'hidden').show();
            var sliceHeight = ($('img[src="'+ vars.currentImage.attr('src') +'"]', slider).not('.nivo-main-image,.nivo-control img').parent().is('a')) ? $('img[src="'+ vars.currentImage.attr('src') +'"]', slider).not('.nivo-main-image,.nivo-control img').parent().height() : $('img[src="'+ vars.currentImage.attr('src') +'"]', slider).not('.nivo-main-image,.nivo-control img').height();

            for(var i = 0; i < settings.slices; i++){
                var sliceWidth = Math.round(slider.width()/settings.slices);
                
                if(i === settings.slices-1){
                    slider.append(
                        $('<div class="nivo-slice" name="'+i+'"><img src="'+ vars.currentImage.attr('src') +'" style="position:absolute; width:'+ slider.width() +'px; height:auto; display:block !important; top:0; left:-'+ ((sliceWidth + (i * sliceWidth)) - sliceWidth) +'px;" /></div>').css({ 
                            left:(sliceWidth*i)+'px', 
                            width:(slider.width()-(sliceWidth*i))+'px',
                            height:sliceHeight+'px', 
                            opacity:'0',
                            overflow:'hidden'
                        })
                    );
                } else {
                    slider.append(
                        $('<div class="nivo-slice" name="'+i+'"><img src="'+ vars.currentImage.attr('src') +'" style="position:absolute; width:'+ slider.width() +'px; height:auto; display:block !important; top:0; left:-'+ ((sliceWidth + (i * sliceWidth)) - sliceWidth) +'px;" /></div>').css({ 
                            left:(sliceWidth*i)+'px', 
                            width:sliceWidth+'px',
                            height:sliceHeight+'px',
                            opacity:'0',
                            overflow:'hidden'
                        })
                    );
                }
            }
            
            $('.nivo-slice', slider).height(sliceHeight);
            sliderImg.stop().animate({
                height: $(vars.currentImage).height()
            }, settings.animSpeed);
        };
        
        // Add boxes for box animations
        var createBoxes = function(slider, settings, vars){
        	if($(vars.currentImage).parent().is('a')) $(vars.currentImage).parent().css('display','block');
            $('img[src="'+ vars.currentImage.attr('src') +'"]', slider).not('.nivo-main-image,.nivo-control img').width(slider.width()).css('visibility', 'hidden').show();
            var boxWidth = Math.round(slider.width()/settings.boxCols),
                boxHeight = Math.round($('img[src="'+ vars.currentImage.attr('src') +'"]', slider).not('.nivo-main-image,.nivo-control img').height() / settings.boxRows);
            
                        
            for(var rows = 0; rows < settings.boxRows; rows++){
                for(var cols = 0; cols < settings.boxCols; cols++){
                    if(cols === settings.boxCols-1){
                        slider.append(
                            $('<div class="nivo-box" name="'+ cols +'" rel="'+ rows +'"><img src="'+ vars.currentImage.attr('src') +'" style="position:absolute; width:'+ slider.width() +'px; height:auto; display:block; top:-'+ (boxHeight*rows) +'px; left:-'+ (boxWidth*cols) +'px;" /></div>').css({ 
                                opacity:0,
                                left:(boxWidth*cols)+'px', 
                                top:(boxHeight*rows)+'px',
                                width:(slider.width()-(boxWidth*cols))+'px'
                                
                            })
                        );
                        $('.nivo-box[name="'+ cols +'"]', slider).height($('.nivo-box[name="'+ cols +'"] img', slider).height()+'px');
                    } else {
                        slider.append(
                            $('<div class="nivo-box" name="'+ cols +'" rel="'+ rows +'"><img src="'+ vars.currentImage.attr('src') +'" style="position:absolute; width:'+ slider.width() +'px; height:auto; display:block; top:-'+ (boxHeight*rows) +'px; left:-'+ (boxWidth*cols) +'px;" /></div>').css({ 
                                opacity:0,
                                left:(boxWidth*cols)+'px', 
                                top:(boxHeight*rows)+'px',
                                width:boxWidth+'px'
                            })
                        );
                        $('.nivo-box[name="'+ cols +'"]', slider).height($('.nivo-box[name="'+ cols +'"] img', slider).height()+'px');
                    }
                }
            }
            
            sliderImg.stop().animate({
                height: $(vars.currentImage).height()
            }, settings.animSpeed);
        };

        // Private run method
        var nivoRun = function(slider, kids, settings, nudge){          
            // Get our vars
            var vars = slider.data('nivo:vars');
            
            // Trigger the lastSlide callback
            if(vars && (vars.currentSlide === vars.totalSlides - 1)){ 
                settings.lastSlide.call(this);
            }
            
            // Stop
            if((!vars || vars.stop) && !nudge) { return false; }
            
            // Trigger the beforeChange callback
            settings.beforeChange.call(this);

            // Set current background before change
            if(!nudge){
                sliderImg.attr('src', vars.currentImage.attr('src'));
            } else {
                if(nudge === 'prev'){
                    sliderImg.attr('src', vars.currentImage.attr('src'));
                }
                if(nudge === 'next'){
                    sliderImg.attr('src', vars.currentImage.attr('src'));
                }
            }
            
            vars.currentSlide++;
            // Trigger the slideshowEnd callback
            if(vars.currentSlide === vars.totalSlides){ 
                vars.currentSlide = 0;
                settings.slideshowEnd.call(this);
            }
            if(vars.currentSlide < 0) { vars.currentSlide = (vars.totalSlides - 1); }
            // Set vars.currentImage
            if($(kids[vars.currentSlide]).is('img')){
                vars.currentImage = $(kids[vars.currentSlide]);
            } else {
                vars.currentImage = $(kids[vars.currentSlide]).find('img:first');
            }
            
            // Set active links
            if(settings.controlNav){
                $('a', vars.controlNavEl).removeClass('active');
                $('a:eq('+ vars.currentSlide +')', vars.controlNavEl).addClass('active');
            }
            
            // Process caption
            processCaption(settings);            
            
            // Remove any slices from last transition
            $('.nivo-slice', slider).remove();
            
            // Remove any boxes from last transition
            $('.nivo-box', slider).remove();
            
            var currentEffect = settings.effect,
                anims = '';
                
            // Generate random effect
            if(settings.effect === 'random'){
                anims = new Array('sliceDownRight','sliceDownLeft','sliceUpRight','sliceUpLeft','sliceUpDown','sliceUpDownLeft','fold','fade',
                'boxRandom','boxRain','boxRainReverse','boxRainGrow','boxRainGrowReverse');
                currentEffect = anims[Math.floor(Math.random()*(anims.length + 1))];
                if(currentEffect === undefined) { currentEffect = 'fade'; }
            }
            
            // Run random effect from specified set (eg: effect:'fold,fade')
            if(settings.effect.indexOf(',') !== -1){
                anims = settings.effect.split(',');
                currentEffect = anims[Math.floor(Math.random()*(anims.length))];
                if(currentEffect === undefined) { currentEffect = 'fade'; }
            }
            
            // Custom transition as defined by "data-transition" attribute
            if(vars.currentImage.attr('data-transition')){
                currentEffect = vars.currentImage.attr('data-transition');
            }
        
            // Run effects
            vars.running = true;
            var timeBuff = 0,
                i = 0,
                slices = '',
                firstSlice = '',
                totalBoxes = '',
                boxes = '';
            
            if(currentEffect === 'sliceDown' || currentEffect === 'sliceDownRight' || currentEffect === 'sliceDownLeft'){
                createSlices(slider, settings, vars);
                timeBuff = 0;
                i = 0;
                slices = $('.nivo-slice', slider);
                if(currentEffect === 'sliceDownLeft') { slices = $('.nivo-slice', slider)._reverse(); }
                
                slices.each(function(){
                    var slice = $(this);
                    slice.css({ 'top': '0px' });
                    if(i === settings.slices-1){
                        setTimeout(function(){
                            slice.animate({opacity:'1.0' }, settings.animSpeed, '', function(){ slider.trigger('nivo:animFinished'); });
                        }, (100 + timeBuff));
                    } else {
                        setTimeout(function(){
                            slice.animate({opacity:'1.0' }, settings.animSpeed);
                        }, (100 + timeBuff));
                    }
                    timeBuff += 50;
                    i++;
                });
            } else if(currentEffect === 'sliceUp' || currentEffect === 'sliceUpRight' || currentEffect === 'sliceUpLeft'){
                createSlices(slider, settings, vars);
                timeBuff = 0;
                i = 0;
                slices = $('.nivo-slice', slider);
                if(currentEffect === 'sliceUpLeft') { slices = $('.nivo-slice', slider)._reverse(); }
                
                slices.each(function(){
                    var slice = $(this);
                    slice.css({ 'bottom': '0px' });
                    if(i === settings.slices-1){
                        setTimeout(function(){
                            slice.animate({opacity:'1.0' }, settings.animSpeed, '', function(){ slider.trigger('nivo:animFinished'); });
                        }, (100 + timeBuff));
                    } else {
                        setTimeout(function(){
                            slice.animate({opacity:'1.0' }, settings.animSpeed);
                        }, (100 + timeBuff));
                    }
                    timeBuff += 50;
                    i++;
                });
            } else if(currentEffect === 'sliceUpDown' || currentEffect === 'sliceUpDownRight' || currentEffect === 'sliceUpDownLeft'){
                createSlices(slider, settings, vars);
                timeBuff = 0;
                i = 0;
                var v = 0;
                slices = $('.nivo-slice', slider);
                if(currentEffect === 'sliceUpDownLeft') { slices = $('.nivo-slice', slider)._reverse(); }
                
                slices.each(function(){
                    var slice = $(this);
                    if(i === 0){
                        slice.css('top','0px');
                        i++;
                    } else {
                        slice.css('bottom','0px');
                        i = 0;
                    }
                    
                    if(v === settings.slices-1){
                        setTimeout(function(){
                            slice.animate({opacity:'1.0' }, settings.animSpeed, '', function(){ slider.trigger('nivo:animFinished'); });
                        }, (100 + timeBuff));
                    } else {
                        setTimeout(function(){
                            slice.animate({opacity:'1.0' }, settings.animSpeed);
                        }, (100 + timeBuff));
                    }
                    timeBuff += 50;
                    v++;
                });
            } else if(currentEffect === 'fold'){
                createSlices(slider, settings, vars);
                timeBuff = 0;
                i = 0;
                
                $('.nivo-slice', slider).each(function(){
                    var slice = $(this);
                    var origWidth = slice.width();
                    slice.css({ top:'0px', width:'0px' });
                    if(i === settings.slices-1){
                        setTimeout(function(){
                            slice.animate({ width:origWidth, opacity:'1.0' }, settings.animSpeed, '', function(){ slider.trigger('nivo:animFinished'); });
                        }, (100 + timeBuff));
                    } else {
                        setTimeout(function(){
                            slice.animate({ width:origWidth, opacity:'1.0' }, settings.animSpeed);
                        }, (100 + timeBuff));
                    }
                    timeBuff += 50;
                    i++;
                });
            } else if(currentEffect === 'fade'){
                createSlices(slider, settings, vars);
                
                firstSlice = $('.nivo-slice:first', slider);
                firstSlice.css({
                    'width': slider.width() + 'px'
                });
    
                firstSlice.animate({ opacity:'1.0' }, (settings.animSpeed*2), '', function(){ slider.trigger('nivo:animFinished'); });
            } else if(currentEffect === 'slideInRight'){
                createSlices(slider, settings, vars);
                
                firstSlice = $('.nivo-slice:first', slider);
                firstSlice.css({
                    'width': '0px',
                    'opacity': '1'
                });

                firstSlice.animate({ width: slider.width() + 'px' }, (settings.animSpeed*2), '', function(){ slider.trigger('nivo:animFinished'); });
            } else if(currentEffect === 'slideInLeft'){
                createSlices(slider, settings, vars);
                
                firstSlice = $('.nivo-slice:first', slider);
                firstSlice.css({
                    'width': '0px',
                    'opacity': '1',
                    'left': '',
                    'right': '0px'
                });

                firstSlice.animate({ width: slider.width() + 'px' }, (settings.animSpeed*2), '', function(){ 
                    // Reset positioning
                    firstSlice.css({
                        'left': '0px',
                        'right': ''
                    });
                    slider.trigger('nivo:animFinished'); 
                });
            } else if(currentEffect === 'boxRandom'){
                createBoxes(slider, settings, vars);
                
                totalBoxes = settings.boxCols * settings.boxRows;
                i = 0;
                timeBuff = 0;

                boxes = shuffle($('.nivo-box', slider));
                boxes.each(function(){
                    var box = $(this);
                    if(i === totalBoxes-1){
                        setTimeout(function(){
                            box.animate({ opacity:'1' }, settings.animSpeed, '', function(){ slider.trigger('nivo:animFinished'); });
                        }, (100 + timeBuff));
                    } else {
                        setTimeout(function(){
                            box.animate({ opacity:'1' }, settings.animSpeed);
                        }, (100 + timeBuff));
                    }
                    timeBuff += 20;
                    i++;
                });
            } else if(currentEffect === 'boxRain' || currentEffect === 'boxRainReverse' || currentEffect === 'boxRainGrow' || currentEffect === 'boxRainGrowReverse'){
                createBoxes(slider, settings, vars);
                
                totalBoxes = settings.boxCols * settings.boxRows;
                i = 0;
                timeBuff = 0;
                
                // Split boxes into 2D array
                var rowIndex = 0;
                var colIndex = 0;
                var box2Darr = [];
                box2Darr[rowIndex] = [];
                boxes = $('.nivo-box', slider);
                if(currentEffect === 'boxRainReverse' || currentEffect === 'boxRainGrowReverse'){
                    boxes = $('.nivo-box', slider)._reverse();
                }
                boxes.each(function(){
                    box2Darr[rowIndex][colIndex] = $(this);
                    colIndex++;
                    if(colIndex === settings.boxCols){
                        rowIndex++;
                        colIndex = 0;
                        box2Darr[rowIndex] = [];
                    }
                });
                
                // Run animation
                for(var cols = 0; cols < (settings.boxCols * 2); cols++){
                    var prevCol = cols;
                    for(var rows = 0; rows < settings.boxRows; rows++){
                        if(prevCol >= 0 && prevCol < settings.boxCols){
                            /* Due to some weird JS bug with loop vars 
                            being used in setTimeout, this is wrapped
                            with an anonymous function call */
                            (function(row, col, time, i, totalBoxes) {
                                var box = $(box2Darr[row][col]);
                                var w = box.width();
                                var h = box.height();
                                if(currentEffect === 'boxRainGrow' || currentEffect === 'boxRainGrowReverse'){
                                    box.width(0).height(0);
                                }
                                if(i === totalBoxes-1){
                                    setTimeout(function(){
                                        box.animate({ opacity:'1', width:w, height:h }, settings.animSpeed/1.3, '', function(){ slider.trigger('nivo:animFinished'); });
                                    }, (100 + time));
                                } else {
                                    setTimeout(function(){
                                        box.animate({ opacity:'1', width:w, height:h }, settings.animSpeed/1.3);
                                    }, (100 + time));
                                }
                            })(rows, prevCol, timeBuff, i, totalBoxes);
                            i++;
                        }
                        prevCol--;
                    }
                    timeBuff += 100;
                }
            }           
        };
        
        // Shuffle an array
        var shuffle = function(arr){
            for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i, 10), x = arr[--i], arr[i] = arr[j], arr[j] = x);
            return arr;
        };
        
        // For debugging
        var trace = function(msg){
            if(this.console && typeof console.log !== 'undefined') { console.log(msg); }
        };
        
        // Start / Stop
        this.stop = function(){
            if(!$(element).data('nivo:vars').stop){
                $(element).data('nivo:vars').stop = true;
                trace('Stop Slider');
            }
        };
        
        this.start = function(){
            if($(element).data('nivo:vars').stop){
                $(element).data('nivo:vars').stop = false;
                trace('Start Slider');
            }
        };
        
        // Trigger the afterLoad callback
        settings.afterLoad.call(this);
        
        return this;
    };
        
    $.fn.nivoSlider = function(options) {
        return this.each(function(key, value){
            var element = $(this);
            // Return early if this element already has a plugin instance
            if (element.data('nivoslider')) { return element.data('nivoslider'); }
            // Pass options to plugin constructor
            var nivoslider = new NivoSlider(this, options);
            // Store plugin object in this element's data
            element.data('nivoslider', nivoslider);
        });
    };
    
    //Default settings
    $.fn.nivoSlider.defaults = {
        effect: 'random',
        slices: 15,
        boxCols: 8,
        boxRows: 4,
        animSpeed: 500,
        pauseTime: 3000,
        startSlide: 0,
        directionNav: true,
        controlNav: true,
        controlNavThumbs: false,
        pauseOnHover: true,
        manualAdvance: false,
        prevText: 'Prev',
        nextText: 'Next',
        randomStart: false,
        beforeChange: function(){},
        afterChange: function(){},
        slideshowEnd: function(){},
        lastSlide: function(){},
        afterLoad: function(){}
    };

    $.fn._reverse = [].reverse;
    
})(jQuery);