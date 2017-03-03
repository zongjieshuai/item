$(function(){
	var allFun = function(){
		$(".minusLeft").click(function(){
			var num=$(".buy_number").text();
			if(num==1){
				$(".buy_number").text("1");
			}else{
				$(".buy_number").text(num-1);
			}
		})
		var i=1;
		$(".minusRight").click(function(){
			var num=$(".buy_number").text();
			$(".buy_number").text(num*1+1*1);
		})
		$(".bottom_list ul li").click(function(){
			var index=$(this).index();
			$(this).children().addClass("color");
			$(this).siblings().children().removeClass("color");
			$(".item_box").eq(index).show().siblings().hide();
		})
		$(".color_box a").click(function(){
			$(".color_box a").removeClass("background");
			$(this).addClass("background");
		})
		var mySwiper = new Swiper ('.swiper-container', {
			loop: true,
			pagination: '.swiper-pagination',
		})
		$(".addbtn").click(function(){
			var buy_number = $(".buy_number").text();
			var goods_id=$("#detail").attr("rel");
			$.ajax({
				url:"http://ztshop.my/index.php/Api/Cart/addcart",
				type:"post",
				data:{
					goods_id:goods_id,
					goods_num:buy_number
				},
				dataType:"json",
				success:function(login){
					var count = login.data.count;
					var status = login.status;
					if(status=="ok"){
						alert("加入购物车成功");
					}
				}
			})
		})
		$(".shopbtn").click(function(){
			location.href="http://ztshop.my/index.php/wap/order/confirm";
		})
	}
	$.ajax({
		url:"http://ztshop.my/index.php/api/goods/index",
		type:"post",
		data:{
			goods_id:1
		},
		dataType:"json",
		success:function(res){
			var good = res.good;
			$("#infor").tmpl(good).appendTo($("#detail"));
			allFun();
		}
	})
})