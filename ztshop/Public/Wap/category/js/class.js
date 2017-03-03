$(function(){
	$.ajax({
		url:"http://ztshop.my/index.php/api/category/child_category",
		type:"post",
		data:{
            category_id:1
		},
		dataType:"json",
		success:function(res){
            var all_li=""
			for(var i=0;i<res.cate.length;i++){
                all_li+="<li><a href='http://ztshop.my/index.php/wap/goods/lists#'' class='diet'><span>"+res.cate[i].name+"</span></a></li>"
            }
            $(".class").html(all_li)
		}
	})
})