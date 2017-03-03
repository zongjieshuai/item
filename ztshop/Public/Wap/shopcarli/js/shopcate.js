$(function(){
	var headHeight=$(".header").height()+5;
	var nav=$(".classify");
	$(window).scroll(function(){
	if($(this).scrollTop()>headHeight){
	nav.addClass("navFix");
	$(".body").addClass("body_style");
	}
	else{
	nav.removeClass("navFix");
	$(".body").removeClass("body-style");
	}
	})
var hhh=function(){
	$(".minusLeft").click(function(){
		var num=$(this).siblings(".buy_number").text();
		if(num==1){
			$(this).siblings(".buy_number").text("1");
		}else{
			$(this).siblings(".buy_number").text(num-1);
		}
		var nums=$(this).siblings(".buy_number").text();
		var unit_price=$(this).parent().siblings(".choose").find(".unit_price").text();
		var del=$(this).parent().siblings(".item_price").find(".del_price").text();
		var del_price=del*nums;
		var price=nums*unit_price;
		$(this).parent().siblings(".item_price").find(".price").text(price);
		$(this).parent().siblings(".item_price").find(".del").text(del_price);
		var sum = 0;
		$(".select .price").each(function(index, item) {
		    sum += parseInt($(item).text()) || 0;
		    $(".all_price").text(sum)
		});
	})
	$(".minusRight").click(function(){
		var num=$(this).siblings(".buy_number").text();
		$(this).siblings(".buy_number").text(num*1+1*1);
		var nums=$(this).siblings(".buy_number").text();
		var unit_price=$(this).parent().siblings(".choose").find(".unit_price").text();
		var del=$(this).parent().siblings(".item_price").find(".del_price").text();
		var del_price=del*nums;
		var price=nums*unit_price;
		$(this).parent().siblings(".item_price").find(".price").text(price);
		$(this).parent().siblings(".item_price").find(".del").text(del_price);
		var sum = 0;
		$(".select .price").each(function(index, item) {
		    sum += parseInt($(item).text()) || 0;
		    $(".all_price").text(sum)
		});
	})
	$(".checkall_btn").click(function(){
		$(".all_price").text("0.00")
		var cont=$(this).text();
		if(cont=="全选"){
			$(this).text("取消选择");
			$(this).parents(".items").addClass("select");
			$(this).parent(".selected").siblings(".item").find(".detail").css("border","1px solid #e17c72")
			$(this).parent(".selected").siblings(".item").find(".box").css({"background":"#e17c72","color":"#fff"})
		}else{
			$(this).text("全选");
			$(this).parents(".items").removeClass("select");
			$(this).parent(".selected").siblings(".item").find(".detail").css("border","1px solid #f8f8f8")
			$(this).parent(".selected").siblings(".item").find(".box").css({"background":"#f0f0f0","color":"#ccc"})
		}
		var sum = 0;
		$(".select .price").each(function(index, item) {
		    sum += parseInt($(item).text()) || 0;
		    console.log(sum)
		    $(".all_price").text(sum)
		});
	})
	$(".box").click(function(){
		$(".all_price").text("0.00")
		var cont=$(this).parent().siblings(".selected").find(".checkall_btn").text();
		if(cont=="全选"){
			$(this).parent().siblings(".selected").find(".checkall_btn").text("取消选择");
			$(this).parents(".item").addClass("select");
			$(this).siblings(".detail").css("border","1px solid #e17c72")
			$(this).css({"background":"#e17c72","color":"#fff"})
		}else{
			$(this).parent().siblings(".selected").find(".checkall_btn").text("全选");
			$(this).parents(".item").removeClass("select");
			$(this).siblings(".detail").css("border","1px solid #f8f8f8")
			$(this).css({"background":"#f0f0f0","color":"#ccc"})
		}
		var sum = 0;
		$(".select .price").each(function(index, item) {
		    sum += parseInt($(item).text()) || 0;
		    $(".all_price").text(sum)
		});

	})
	$(".all_select").click(function(){
		var content=$(this).text();
		$(".all_price").text("0.00")
		if(content=="全选"){
			$(this).text("取消全选")
			$(".checkall_btn").text("取消选择");
			$(".items").addClass("select");
			$(".detail").css("border","1px solid #e17c72");
			$(".box").css({"background":"#e17c72","color":"#fff"})
			var sum = 0;
			$(".select .price").each(function(index, item) {
			    sum += parseInt($(item).text()) || 0;
			    console.log(sum)
			    $(".all_price").text(sum)
			});
		}else{
			$(this).text("全选")
			$(".checkall_btn").text("全选");
			$(".items").removeClass("select");
			$(".detail").css("border","1px solid #f8f8f8");
			$(".box").css({"background":"#f0f0f0","color":"#ccc"})
			var sum = 0;
			$(".select .price").each(function(index, item) {
			    sum += parseInt($(item).text()) || 0;
			    console.log(sum)
			    $(".all_price").text(sum)
			});
		}
	});
	$(".delete_btn").click(function(){
			$(this).parents(".items").remove();
			var all_items=$(".items");
			var body_item=$(".body");
			if(!body_item.children().hasClass("items")){
				$(".carnull").removeClass("hide");
			}
		})
}
	
	$.ajax({
			url:"http://ztshop.my/index.php/Api/Cart/cartlist",
			type:"post",
			data:{
				
			},
			dataType:"json",
			success:function(res){
				console.log(res);
				var cartgood=res.cartgood;
				var detail="";
				if(res.status=="ok"){
					for(i=0;i<cartgood.length;i++){
						detail+="<div class='items'><div class='selected'><a href='###' class='checkall_btn'>全选</a><span class='store'>店铺：</span><a href='' class='store_name'></a></div><div class='item'><div class='box'><i class='fa fa-check'></i></div><div class='detail'><div class='detail_img'><img src='"+cartgood[i].goods_img+"'></div><div class='detail_name'><p class='name'>"+cartgood[i].goods_name+"</p><p class='delivery'></p></div><div class='choose'><ul class='clearfix'><li><span>颜色：</span><span></span><span>/</span></li><li><span>尺寸：</span><span></span><span>/</span></li><li><span>单价：<span><span class='yuan'>￥</span><span class='unit_price'>"+cartgood[i].goods_price+"</span></li></ul></div><div class='sum clearfix'><span class='number'>数量</span><div class='minusLeft'><a href='###'><i class='fa fa-minus'></i></a></div><div class='buy_number'>1</div><div class='minusRight background'><a href='###'><i class='fa fa-plus'></i></a></div></div><div class='item_price'><p><span class='money'>金额：</span><span class='yuan'>￥</span><span class='price'>"+cartgood[i].goods_price+"</span><del>￥</del><del class='del'>399.00</del><del class='del_price hide'>399.00</del></p><p class='delete'><span class='delete_btn'>删除</span></p></div></div></div></div>";
					}
					$(".body").html(detail);
				}else{
					$(".carnull").removeClass("hide").siblings(".body").addClass("hide");
				}
				hhh();
			}
		})
})
