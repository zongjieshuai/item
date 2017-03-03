$(function(){
	$(".next-step").click(function(){

		var name =$("input[type='username']").val();
		var password = $("input[type='password']").val();
		var nick = $("input[type='nickname']").val();
		 
		if(name==""){
			$(".tip-info").text("用户名不能为空");
			return false;
		}
		if(password==""){
			$(".tip-info").text("密码不能为空");
			return false;	
		}
		if(password.length<6){
			$(".tip-info").text("密码不能少于6位")
			return false;
		}
		
		if(nick==""){
			$(".tip-info").text("昵称不能为空");
			return false;
		}
		
			$.ajax({
			url:"http://ztshop.my/index.php/Api/User/handleregister",
			type:"post",
			data:{
				email:name,
				password:password,
				nick:nick,
			},
			dataType:"json",
			success:function(res){
				console.log(res)	
				location.href = "http://ztshop.my/index.php/wap/user/login";
			}


			})
		

	})
	

})