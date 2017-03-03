$(function  () {
	$(".lnk-doubanapp").mouseover(function  () {
		$(".doubanapp-tip").show();
	})
	$(".lnk-doubanapp").mouseout(function  () {
		$(".doubanapp-tip").hide();
	})
	$(".header .important>li").mouseover(function  () {
		$(this).children("a").css("opacity","0.8");
		$(this).css("border-bottom","3px solid #d8d8d8");
		$(this).children(".sub-category").show();
		$(this).siblings().children(".sub-category").hide();
	})
	$(".header .important>li").mouseout(function  () {
		$(this).children("a").css("opacity","1");
		$(this).css("border-bottom","none");
		$(this).children(".sub-category").hide();
	})	
	$(".text").click(function  () {
		$(".select").animate({left: '-30px'}, "speed").css("width","130px");
		$(".text").animate({left: '0px'}, "speed").css("width","100px");
	})
	$(".slide-item div").eq(1).show();
	$(".slide-paginator ul li").eq(1).addClass("addclass");
	$(".slide-paginator ul li").click(function  () {
		var index=$(this).index();
		$(this).addClass("addclass").siblings().removeClass("addclass");
		$(".slide-item div").eq(index).show().siblings().hide();
	})
	$(".right").click(function  () {
		$(".addclass").next().addClass("addclass").siblings().removeClass("addclass");
		var dee=$(".addclass").index();
		$(".slide-item .adv").eq(dee).show().siblings().hide();
        if(dee==3){
        	$(".slide-paginator ul li").first().addClass("addclass").siblings().removeClass("addclass");
        }
	})
	$(".left").click(function  () {
		$(".addclass").prev().addClass("addclass").siblings().removeClass("addclass");
		var dee=$(".addclass").index();
		$(".slide-item .adv").eq(dee).show().siblings().hide();
        if(dee==0){
        	$(".slide-paginator ul li").last().addClass("addclass").siblings().removeClass("addclass");
        }
	})
	$(".product-item").mouseover(function  () {
		$(this).stop().animate({top: '-3px'}, "10");
		$(this).children(".p-img").css("opacity","0.8");
	})
	$(".product-item").mouseout(function  () {
		$(this).stop().animate({top: '0px'}, "10");
		$(this).children(".p-img").css("opacity","1");
	})
})
