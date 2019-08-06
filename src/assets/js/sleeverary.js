/*
Theme Name: Digital Archive
Author: css3studio
Version:1.0
*/ 
//네이티브 코드 영역
document.addEventListener('DOMContentLoaded', () => {

	//이미지 가로-세로 비율 표시
	var imgs = document.querySelectorAll('img');
	imgs.forEach(function(currentValue, index, array) {
		var img = new Image();
		img.src = currentValue.getAttribute('src');
		var this_img = currentValue;
		img.onload = function() {
			var fillClass = (img.height > img.width)
				    ? 'fillheight' : 'fillwidth';
			this_img.classList.add(fillClass);
		};

	});

});

//제이쿼리 코드 영역
function jquery_define(){

	$(document).ready(function() {


	});

}
function slick_define(){

	$(document).ready(function() {
	//콜랙션 모듈 - 전시아이템(소)
		$('.Tgallery.Msmall .slide').not('.form-item .Tgallery.Msmall .slide').not('.cf17 .Tgallery.Msmall .slide').slick({
			dots: false,
			infinite: false,
			initialSlide:0,
			slidesToShow: 4,
	  		slidesToScroll: 1,
	  		responsive: [
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    }
			]
		});

		//콜랙션 갤러리 가로형 슬라이드
		$('.daCol.gallery.horizontal').on('init', function(){
	        var pager = $(this).find('ul.slick-dots');
	        $(this).siblings('.ng18_01').find('.pagingA').append(pager);
	      });
		$('.daCol.gallery.horizontal').on('beforeChange', function(slick, currentSlide, nextSlide){
	        //if(device_status == "mobile"){
	        	$('html,body').animate({scrollTop:$(this).offset().top}, 500,"linear");
	        //}
	      });
		$('.daCol.gallery.horizontal').slick({
			dots: true,
			infinite: false,
			initialSlide:0,
			adaptiveHeight:true
		});


	});

}


//제이쿼리 동적 로딩
var isNeedJquery = true;
if(isNeedJquery){
	load_script('../../node_modules/jquery/dist/jquery.min.js',jquery_define);
	load_script('http://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',slick_define);
	load_css('http://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css');
	load_css('http://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css');
}

//자바스크립트 동적 로딩
function load_script(src,callBack){
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.type = 'text/javascript';
	 
	script.onreadystatechange = function () {
	   if (this.readyState == 'complete'
	         || this.readyState == 'loaded') callBack;
	}
	script.onload = callBack;
	 
	script.src = src;
	head.appendChild(script);	

}
//css 동적 로딩
function load_css(href){
	var head = document.getElementsByTagName('head')[0];
	var link = document.createElement('link');
	link.type = 'text/css';
	link.rel = 'stylesheet';
	link.href = href;
	head.appendChild(link);	
}



