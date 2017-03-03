<?php
namespace API\Controller;
use Think\Controller;
class GoodsController extends Controller {
    public function index(){
    	$result = array();
    	$goods_id = $_POST['goods_id'];
    	$c = M('goods_contents')->where(array('goods_id'=>$goods_id))->field('contents')->select();
    	$b = M('goods_img')->where(array('goods_id'=>$goods_id))->field('img')->select();
    	$good_imgs = $b;
    	$a = M('goods')->where(array('id'=>$goods_id))->select();
    		foreach ($a as $k => $v) {
    			$good['name'] = $v['name'];
    			$good['price'] = $v['price'];
    			$good['market_price'] = $v['market_price'];
    			$good['img'] = $v['img'];
    		}
    		$good['img'] = $good_imgs;
    	$good['desc'] = $c;
    	$result['good'] = $good;
    	echo json_encode($result);
    }
} 