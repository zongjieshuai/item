$(function(){
	$(".login").click(function(){
		var name = $("input[type='text']").val();
		var password = $("input[type='password']").val();
		if(name==""){
			$(".tip_infor").text("用户名不能为空");
			return false;
		}
		if(password==""){
			$(".tip_infor").text("密码不能为空");
			return false;
		}
		if(name!="" && password!=""){
			$(".tip_infor").text("");
			$.ajax({
				url:"http://ztshop.my/index.php/Api/User/handlelogin",
				type:"post",
				data:{
					email:name,
					password:password
				},
				dataType:"json",
				success:function(res){
					if(res.status == "error"){
						var error_msg = res.data;
						$(".tip_infor").text(error_msg);
					}else {
						location.href="http://ztshop.my/index.php/wap/index/index"
					}
				}
			})
		}
	})
})