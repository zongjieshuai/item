$(function(){
	$(".lnk-doubanapp").mouseover(function  () {
		$(".doubanapp-tip").show();
	})
	$(".lnk-doubanapp").mouseout(function  () {
		$(".doubanapp-tip").hide();
	})
	$(".header ul li").mouseover(function  () {
		$(this).children("a").css("opacity","0.8");
		$(this).css("border-bottom","3px solid #d8d8d8");
		$(this).children(".sub-category").show();
		$(this).siblings().children(".sub-category").hide();
	})
	$(".header ul li").mouseout(function  () {
		$(this).children("a").css("opacity","1");
		$(this).css("border-bottom","none");
		$(this).children(".sub-category").hide();
	})	
	$(".text").click(function  () {
		$(".select").animate({left: '-30px'}, "speed").css("width","144px");
		$(".text").animate({left: '-25px'}, "speed").css("width","110px");
	})
	$(".slide-item div").eq(1).show();
	$(".slide-paginator ul li").eq(1).addClass("addclass");
	$(".slide-paginator ul li").click(function  () {
		var index=$(this).index();
		$(this).addClass("addclass").siblings().removeClass("addclass");
		$(".slide-item div").eq(index).show().siblings().hide();
	})
	$(".right").click(function  () {
		var dee=$(".addClass").index();
		$(".slide-item div").eq(dee).show().siblings().hide();
        $(".addclass").next().addClass("addclass").siblings().removeClass("addclass");
        if(dee==3){
        	$(".slide-paginator ul li").first().addClass("addclass").siblings().removeClass("addclass");
        }
	})
	var allli=$(".nav>ul>li");
	allli.click(function(){
		$(this).children(".title").addClass("background");
		$(this).siblings().children(".title").removeClass("background");
		$(this).siblings(".nav-").slideToggle();
		$(this).siblings().children(".nav-").slideUp();
	})
	var allli_=$(".nav->li");
	allli_.click(function(){
		$(this).parent(".nav-").siblings(".title").removeClass("background");
		$(this).children(".title-").addClass("background");
		$(this).children(".title-").children("i").show();
		$(this).siblings().children(".title-").children("i").hide();
		$(this).siblings().children(".title-").removeClass("background");
		$(this).siblings(".nav-bar").slideToggle();
		$(this).siblings().children(".nav-bar").slideUp();

	})

    // 分页
	var man=$(" .top .pag .man");
	var woman=$(" .top .pag .woman");
	var number=$(" .top .pag .number");
	var man_=$(" .top_ .pag_ .man_");
	var woman_=$(" .top_ .pag_ .woman_");
	var number_=$(" .top_ .pag_ .number_");
	console.log(number_)
	number.first().addClass("font");
	number_.first().addClass("font");
	number.click(function(){
		var index=$(this).index();
		console.log(index)
		$(this).addClass("font").siblings().removeClass("font");
		number_.eq(index-1).addClass("font").siblings().removeClass("font");
	})
	man.click(function(){
		var index=$(".font").index();
		number_.eq(index-1).addClass("font").siblings().removeClass("font");
		$(".font").prev().addClass("font").siblings().removeClass("font");
	})
	woman.click(function(){
		var index=$(".font").index();
		number_.eq(index-1).addClass("font").siblings().removeClass("font");
		$(".font").next().addClass("font").siblings().removeClass("font");
	})
	number_.click(function(){
		var index=$(this).index();
		$(this).addClass("font").siblings().removeClass("font");
		number.eq(index-1).addClass("font").siblings().removeClass("font");
	})
	man_.click(function(){
		var index=$(".font").index();
		number.eq(index-1).addClass("font").siblings().removeClass("font");
		$(".font").prev().addClass("font").siblings().removeClass("font");
	})
	woman_.click(function(){
		var index=$(".font").index();
		number.eq(index-1).addClass("font").siblings().removeClass("font");
		$(".font").next().addClass("font").siblings().removeClass("font");
	})
})