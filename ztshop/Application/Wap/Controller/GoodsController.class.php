<?php
namespace Wap\Controller;
use Think\Controller;
class GoodsController extends Controller {
    public function detail(){
    	$id = I('get.id');
    	if(!$id) {
    		$this->error('商品信息');
    	}
    	$this->assign('goods_id',$id);
        $this->display();
    }
    public function lists(){
        $this->display();
    }
}