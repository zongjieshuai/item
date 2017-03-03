<?php
namespace Wap\Controller;
use Think\Controller;
class UserinfoController extends Controller {
    public function index(){
    	$user_id=$_SESSION['me']['id'];
        if($user_id){
        	$this->display('userinfo');
        }else{
        	$this->display('nologin');
        }

    }
}