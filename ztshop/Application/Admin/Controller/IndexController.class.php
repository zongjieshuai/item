<?php
namespace Admin\Controller;
use Think\Controller;
class IndexController extends Controller {
	/**
	 *后台首页
	 */
    public function index(){
        $this->display();
    }

   	/**
   	 * 同index 本例未使用模版包含 
   	 *  缺点：重复造轮子
   	 */
    public function indexold() {
    	$this->display();
    }
}