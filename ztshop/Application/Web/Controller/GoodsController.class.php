<?php
namespace Web\Controller;
use Think\Controller;
class GoodsController extends Controller {
   public function lists(){
   	$li = M('category')->where(array('parent_id'=>0))->select();
   	$this->assign('li',$li);
   	$this->display();
   }
   public function detail(){
   	$this->display();
   }
   public function index(){
   	$this->display();
   }
}