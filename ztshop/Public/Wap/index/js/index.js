$(function(){
	var mySwiper = new Swiper ('.swiper-container', {
		loop: true,
		// 如果需要分页器
		pagination: '.swiper-pagination',
	})
	$.ajax({
		url:"http://ztshop.my/index.php/api/index/main",
		type:"get",
		dataType:"json",
		success:function(res){
			console.log(res)
			var data = res.data;
			var foot = res.data.floor;
			var goods = res.data.floor.goods; 
			var recomment_goods = res. data.recomment_goods;
			$("#goods_boxs").tmpl(data).appendTo('.goods_nav')
			$("#quality_box").tmpl(data).appendTo('.quality')
		}
	})
})
