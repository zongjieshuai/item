<?php
namespace API\Controller;
use Think\Controller;
class SubmitController extends Controller {
	public function index(){
		$use = $_SESSION['me']['id'];
		if (!isset($use) || $use <= 0) {
            $result['status']   ='error';
            $result['type']     ='nologin';
            $result['msg']      ='请登录';
            echo json_encode($result);
            die();
        }
        $good = $_POST['goods_id'];
		$u_add = $_POST['user_address_id'];

		$g = M('goods')
			->where(array('id'=>$good))
			->select();
		foreach ($g as $key => $v) {
			$goods['name']=$v['name'];
			$goods['price']=$v['price'];
			$goods['img']=$v['img'];
		}
		$u = M('user_address')->where(array('user_id'=>$use))->field('id,address,user_phone,user_name')->select();
		foreach ($u as $key => $v) {
			$user[$key]['id']=$v['id'];
			$user[$key]['user_name']=$v['user_name'];
			$user[$key]['user_phone']=$v['user_phone'];
			$user[$key]['address']=$v['address'];
		}
		$result['user'] = $user;
		$result['goods'] = $goods;
		echo json_encode($result);
	}
	public function address_add(){
		$data['user_id'] = $_SESSION['me']['id'];
		if (!isset($data['user_id']) || $data['user_id'] <= 0) {
            $result['status']   ='error';
            $result['type']     ='nologin';
            $result['msg']      ='请登录';
            echo json_encode($result);
            die();
        }
        $data['address'] = $_POST['address'];
        $data['user_name'] = $_POST['user_name'];
        $data['user_phone'] = $_POST['user_phone'];
        $data['create_time'] = date('Y-m-d H:i:s');
        $a = M('user_address')->add($data);
        if ($a) {
        	$result['status']   ='ok';
        }else{
        	$result['status']   ='error';
        }
        echo json_encode($result);
    }
    public function address_delete(){
    	$data['id']	 = $_POST['id'];
    	$a = M('user_address')->where(array('id'=>$data['id']))->delete();
    	if ($a) {
        	$result['status']   ='ok';
        }else{
        	$result['status']   ='error';
        }
        echo json_encode($result);
    }
    public function address_edit(){
    	$data['id']	 = $_POST['id'];
    	$u = M('user_address')->where(array('id'=>$data['id']))->field('id,address,user_phone,user_name')->select();
		foreach ($u as $key => $v) {
			$user[$key]['id']=$v['id'];
			$user[$key]['user_name']=$v['user_name'];
			$user[$key]['user_phone']=$v['user_phone'];
			$user[$key]['address']=$v['address'];
		}
		$result['user'] = $user;
		if ($user) {
        	$result['status']   ='ok';
        }else{
        	$result['status']   ='error';
        }
		echo json_encode($result);
    }
    public function address_handleedit(){
    	$data['user_id'] = $_SESSION['me']['id'];
    	$data['id']	 = $_POST['id'];
    	$data['address'] = $_POST['address'];
        $data['user_name'] = $_POST['user_name'];
        $data['user_phone'] = $_POST['user_phone'];
        $data['create_time'] = date('Y-m-d H:i:s');
        $a = M('user_address')->where(array('id'=>$data['id']))->save($data);
        if ($a) {
        	$result['status']   ='ok';
        }else{
        	$result['status']   ='error';
        }
        echo json_encode($result);
    }
    public function km_ceshi(){
    	$use = $_POST['id'];
		if (!isset($use) || $use <= 0) {
            $result['status']   ='error';
            $result['type']     ='nologin';
            $result['msg']      ='请登录';
            echo json_encode($result);
            die();
        }
        $good = $_POST['goods_id'];
		// $u_add = $_POST['user_address_id'];

		$g = M('goods')
			->where(array('id'=>$good))
			->select();
		foreach ($g as $key => $v) {
			$goods['name']=$v['name'];
			$goods['price']=$v['price'];
			$goods['img']=$v['img'];
		}
		$u = M('user_address')->where(array('user_id'=>$use))->field('id,address,user_phone,user_name')->select();
		foreach ($u as $key => $v) {
			$user[$key]['id']=$v['id'];
			$user[$key]['user_name']=$v['user_name'];
			$user[$key]['user_phone']=$v['user_phone'];
			$user[$key]['address']=$v['address'];
		}
		$result['user'] = $user;
		$result['goods'] = $goods;
		echo json_encode($result);
	}
	public function km_add(){
		$data['user_id'] =$_POST['id'];
		if (!isset($data['user_id']) || $data['user_id'] <= 0) {
            $result['status']   ='error';
            $result['type']     ='nologin';
            $result['msg']      ='请登录';
            echo json_encode($result);
            die();
        }
        $data['address'] = $_POST['address'];
        $data['user_name'] = $_POST['user_name'];
        $data['user_phone'] = $_POST['user_phone'];
        $data['create_time'] = date('Y-m-d H:i:s');
        $a = M('user_address')->add($data);
        if ($a) {
        	$result['status']   ='ok';
        }else{
        	$result['status']   ='error';
        }
        echo json_encode($result);
    }
    public function km_delete(){
    	$data['id']	 = $_POST['id'];
    	$a = M('user_address')->where(array('id'=>$data['id']))->delete();
    	if ($a) {
        	$result['status']   ='ok';
        }else{
        	$result['status']   ='error';
        }
        echo json_encode($result);
    }
    public function km_edit(){
    	$data['id']	 = $_POST['id'];
    	$u = M('user_address')->where(array('id'=>$data['id']))->field('id,address,user_phone,user_name')->select();
		foreach ($u as $key => $v) {
			$user[$key]['id']=$v['id'];
			$user[$key]['user_name']=$v['user_name'];
			$user[$key]['user_phone']=$v['user_phone'];
			$user[$key]['address']=$v['address'];
		}
		$result['user'] = $user;
		if ($user) {
        	$result['status']   ='ok';
        }else{
        	$result['status']   ='error';
        }
		echo json_encode($result);
    }
    public function km_handleedit(){
    	$data['user_id'] = $_SESSION['me']['id'];
    	$data['id']	 = $_POST['id'];
    	$data['address'] = $_POST['address'];
        $data['user_name'] = $_POST['user_name'];
        $data['user_phone'] = $_POST['user_phone'];
        $data['create_time'] = date('Y-m-d H:i:s');
        $a = M('user_address')->where(array('id'=>$data['id']))->save($data);
        if ($a) {
        	$result['status']   ='ok';
        }else{
        	$result['status']   ='error';
        }
        echo json_encode($result);
    }
}	