$(function(){
	$(".pic-ul a").click(function(){
		var index=$(this).index();
		$(".pic-window img").eq(index).show().siblings().hide();
	})
	$(".pic-ul a").mouseover(function(){
		$(this).addClass("border").siblings().removeClass("border");
	})
	$(".pic-ul a").mouseout(function(){
		$(this).removeClass("border");
	})
	$(".size dd a").click(function(){
		$(this).addClass("border-color").parent().
		siblings().children().removeClass("border-color");
	})
	$(".add").click(function(){
		var val=$(".value").val();
		if(val==29){}
		else{$(".value").val(parseInt(val)+1)
		console.log(val);}
	})
	$(".minus").click(function(){
		var val=$(".value").val();
		if(val==1){}
		else{$(".value").val(parseInt(val)-1)
		console.log(val);}
	})
	$(".img").click(function(){
		$(this).addClass("back").siblings().removeClass("back");
		var index=$(this).index();
		$(".show").eq(index)
		.show().
		siblings(".show").hide();
	})
	$(".third-header a").click(function(){
		$(this).addClass("third-font").siblings("a").removeClass("third-font");
	})
	$(".third-p").mouseover(function(){
		$(".abso").show();
	})
	$(".third-p").mouseout(function(){
		$(".abso").hide();
	})

})