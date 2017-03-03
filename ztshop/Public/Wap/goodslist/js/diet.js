$(function(){
	$.ajax({
		url:"http://ztshop.my/index.php/api/category/child_category",
		type:"post",
		data:{
			category_id:1
		},
		dataType:"json",
		success:function(res){

			var all_subnav="<li class='ddd clearfix'></li>";
			var all_child=""
			for(var i=0;i<res.cate.length;i++){
				var all_nav="<li><a href='#'>"+res.cate[i].name+"</a></li>"
				$(".nav-bigbox").append(all_subnav);
				$(".diet-nav").append(all_nav);
				// for(var j=0;j<res.cate[i].child.length;j++){
					
				// }
			}
			

			for(var i=0;i<res.cate.length;i++){
				for(var j=0;j<res.cate[i].child.length;j++){
					
					all_child+="<p><a href='#' class='child-nav'>"+res.cate[i].child[j].name+"</a></p>";
					var d = $(".ddd");
				
					$(d[j]).append(all_child)
				}

			}

		
		}	
	})
	

		$.ajax({
			url:"http://ztshop.my/index.php/api/category/goods",
			type:"post",
			data:{
				category_id:1,//分类id
				page:1,//页数
				limit:10,//每页个数
				category_child_id:"",//二级分类id
				order:0//排序

			},
			dataType:"json",
			success:function(res){
				
				var limit_num=10
				var all_sth=""
				
				for(var i=0;i<res.data.goods.length;i++){
					all_sth+="<li class='diet-main-boxs'><div class='diet-main-boxs-content clearfix'>"+"<i class='fa fa-heart-o'></i>"+"<a href='http://ztshop.my/index.php/wap/goods/detail'><img src='/PUBLIC/Wap/goodslist/images/huangtao.jpg'></a>"+"<a href='http://ztshop.my/index.php/wap/goods/detail'><p class='tags'>"+res.data.goods[i].name+"</p></a>"+"<a class='diet-num' href='http://ztshop.my/index.php/wap/goods/detail'>￥"+res.data.goods[i].price+"</a><del>￥"+res.data.goods[i].market_price+"</del></div></li>"
				}
				// var page=data.good.length % limit_num
				
				$(".all-sth").html(all_sth)
		
			}

		})
		$(document).on("click",".diet-nav li",function(){
			var index=$(this).index();
			var category=$(this).index();
			var category_child=$(this).index();
			$(this).children().css({"color":"#fff"});
			$(this).siblings().children().css({"color":"#000"});
			if(index==0){
				$(".nav-bigbox li").eq(index).hide().siblings().hide();
			}else{
				$(".nav-bigbox li").eq(index).show().siblings().hide();
			}
			$.ajax({
				url:"http://ztshop.my/index.php/api/category/goods",
				type:"post",
				data:{
					category_id:index,//分类id

				},
				dataType:"json",
				success:function(res){
					
					var limit_num=10
					var all_sth=""
					
					for(var i=0;i<res.data.goods.length;i++){
						all_sth+="<li class='diet-main-boxs'><div class='diet-main-boxs-content clearfix'>"+"<i class='fa fa-heart-o'></i>"+"<a href='http://ztshop.my/index.php/wap/goods/detail'><img src='/PUBLIC/Wap/goodslist/images/huangtao.jpg'></a>"+"<a href='http://ztshop.my/index.php/wap/goods/detail'><p class='tags'>"+res.data.goods[i].name+"</p></a>"+"<a class='diet-num' href='http://ztshop.my/index.php/wap/goods/detail'>￥"+res.data.goods[i].price+"</a><del>￥"+res.data.goods[i].market_price+"</del></div></li>"
					}
					// var page=data.good.length % limit_num
					
					$(".all-sth").html(all_sth)

			}

		})
	})
	$(document).on("click",".child-nav",function(){	
			var li=$(this).parent().parent();
			var p=$(this).parent();
			var li_index=li.index();
			var child=p.index()
			console.log(child)
			$(this).addClass("all-diet");
			p.siblings().children().removeClass("all-diet")
			$.ajax({
				url:"http://ztshop.my/index.php/api/category/goods",
				type:"post",
				data:{
					category_id:li_index,
					category_child_id:child,
				},
				dataType:"json",
				success:function(res){
					
					var limit_num=10
					var all_sth=""
					
					for(var i=0;i<res.data.goods.length;i++){
						all_sth+="<li class='diet-main-boxs'><div class='diet-main-boxs-content clearfix'>"+"<i class='fa fa-heart-o'></i>"+"<a href='http://ztshop.my/index.php/wap/goods/detail'><img src='/PUBLIC/Wap/goodslist/images/huangtao.jpg'></a>"+"<a href='http://ztshop.my/index.php/wap/goods/detail'><p class='tags'>"+res.data.goods[i].name+"</p></a>"+"<a class='diet-num' href='http://ztshop.my/index.php/wap/goods/detail'>￥"+res.data.goods[i].price+"</a><del>￥"+res.data.goods[i].market_price+"</del></div></li>"
					}
					// var page=data.good.length % limit_num
					
					$(".all-sth").html(all_sth)

			}
		})
			$(document).on("click",".diet-order a",function(){
			var order_index=$(this).index()
			$(this).addClass("order-style").siblings().removeClass("order-style");
			$.ajax({
					url:"http://ztshop.my/index.php/api/category/goods",
					type:"post",
					data:{
						order:order_index,
						category_id:li_index,
						category_child_id:child,
					},
					dataType:"json",
					success:function(res){
						
						var limit_num=10
						var all_sth=""
						
						for(var i=0;i<res.data.goods.length;i++){
							all_sth+="<li class='diet-main-boxs'><div class='diet-main-boxs-content clearfix'>"+"<i class='fa fa-heart-o'></i>"+"<a href='http://ztshop.my/index.php/wap/goods/detail'><img src='/PUBLIC/Wap/goodslist/images/huangtao.jpg'></a>"+"<a href='http://ztshop.my/index.php/wap/goods/detail'><p class='tags'>"+res.data.goods[i].name+"</p></a>"+"<a class='diet-num' href='http://ztshop.my/index.php/wap/goods/detail'>￥"+res.data.goods[i].price+"</a><del>￥"+res.data.goods[i].market_price+"</del></div></li>"
						}
						
						$(".all-sth").html(all_sth)

				}
			})
		})

	})	
	
})
