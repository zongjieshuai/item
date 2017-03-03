$(function(){
	var all=function(){
		$(".new_add").click(function(){
			$(".newly").show()
		})
		// 判断地址个数
		$(".no").click(function(){
			$(".newly").hide()
		})
		// 修改
		$(".amend").click(function(){
			var zzz=$(this).parent().siblings("p.idd").text()
			var b=$(this).parent().siblings("p.idd").text()
			$.ajax({
			url:"http://ztshop.my/index.php/api/submit/address_edit",
			type:"post",
			data:{
				id:b
			},
			dataType:"json",
			success:function(res){
					if (zzz) {				
						$(".save1").click(function(){
							var ssname=$(".name1").val()
							var ssadd=$(".add1").val()
							var ssphone=$(".phone1").val()	
							$.ajax({
									url:"http://ztshop.my/index.php/api/submit/address_handleedit",
									type:"post",
									data:{
										id:zzz,
										user_name:ssname,
										address:ssadd,
										user_phone:ssphone
									},
									dataType:"json",
									success:function(res){
										console.log(res)
									}
								})
							})	
											
					};					
				}
			})
			$(".newly1").show()
		})

		// 修改1
		
		$(".ad_new").click(function(){
			$(".newly").show()
		})
		// 删除
		$(".cancel").click(function(){
			var b=$(this).parent().siblings("p.idd").text()
			$.ajax({
			url:"http://ztshop.my/index.php/api/submit/address_delete",
			type:"post",
			data:{
				id:b,
			},
				dataType:"json",
				success:function(res){
					var status=res.status
					console.log(res)
					console.log(status)
					if (status="ok") {
						$(this).parent().parent().hide()
					};
				}
			})
		})
			
		// 增加按钮
		$(".minus_y").click(function(){
			var m=$(".money").text()
			var ipt=$(".buy_number").val()
			console.log(ipt)
			if ((ipt-1)!=0) {
				$(".list_top .minus_n").addClass("bg")
			}
			if ((ipt-1)==(-1)) {
				$(".list_top .minus_n").removeClass("bg")
			}
			$(".buy_number").val(parseInt(ipt)+1)
			var all=(parseInt(m)*(parseInt(ipt)+1))
			$(".buy_money_m").text(all+"元")
			$(".many").text(parseInt(ipt)+1)
			$(".total").text("￥"+all+"元")		
			$(".last_money").text(all+"元")	
		})
		// 减少按钮
		$(".minus_n").click(function(){
			var a=$(".money").text()
			var ipt=$(".buy_number").val()
			console.log(ipt)
			$(".buy_number").val(parseInt(ipt)-1)
			var all=(parseInt(a)*(parseInt(ipt)-1))
			$(".many").text(parseInt(ipt)-1)
			$(".buy_money_m").text(all+"元")
			$(".total").text("￥"+all+"元")
			if (ipt==1) {
				$(".buy_number").val(1)
				$(".many").text(1)
				$(".buy_money_m").text(a+"元")
				$(".total").text("￥"+a+"元")
			};
		})
		// 
		$(".new_addresse").click(function(){
			$(this).addClass("bgr").siblings().removeClass("bgr")
		})
		//微信支付宝支付
		$(".save,.save1").click(function(){
			$(".newly").hide()
			$(".addresse").show()
			$(".new").hide()
		})
		$(".alipay_pay").click(function(){
			$(this).addClass("alipay")
			$(".wechat_pay").removeClass("wechat")
		})
		$(".wechat_pay").click(function(){
			$(this).addClass("wechat")
			$(".alipay_pay").removeClass("alipay")
		})
		// 修改信息传数据
		$(".amend").click(function(){
			var a_add=$(this).parent().siblings(".ad_my").text()
			var a_name=$(this).parent().siblings(".my_sp").find(".my_name").text()
			var a_phone=$(this).parent().siblings(".my_sp").find(".new_phone").text()
			$(".add").val(a_add)
			$(".name").val(a_name)
			$(".phone").val(a_phone)
		})
		$(".amend").click(function(){
			var a_add=$(this).parent().siblings(".ad_my").text()
			var a_name=$(this).parent().siblings(".my_sp").find(".my_name").text()
			var a_phone=$(this).parent().siblings(".my_sp").find(".new_phone").text()
			$(".add1").val(a_add)
			$(".name1").val(a_name)
			$(".phone1").val(a_phone)
		})
	}

	// 收货地址
	$.ajax({
			url:"http://ztshop.my/index.php/api/submit/index",
			type:"post",
			data:{
			},
			dataType:"json",
			success:function(res){
				console.log(res)
				var user=res.user
				$("#aaa").tmpl(user).appendTo(".receiving")			
				all();
			}
		})
	//新增地址
	$(".save").click(function(){
		var ssname=$(".name").val()
		var ssadd=$(".add").val()
		var ssphone=$(".phone").val()
		$.ajax({
				url:"http://ztshop.my/index.php/api/submit/address_add",
				type:"post",
				data:{
					user_name:ssname,
					address:ssadd,
					user_phone:ssphone
				},
				dataType:"json",
				success:function(res){
					console.log(res)
					$("#aaa").tmpl(res).appendTo(".receiving");

				}
			})
	})
})