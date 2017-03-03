<?php
namespace API\Controller;
use Think\Controller;
class UserController extends Controller {
    public function handlelogin(){
    	$email=$_POST['email'];
    	$password=$_POST['password'];
    	$user_info=M('user')->where(array('email'=>$email))->find();
    	if(is_array($user_info) && !empty($user_info)){
    		if(md5($password)==$user_info['password']){
    			$_SESSION['me']=$user_info;
    			$result=array('status'=>'ok','data'=>'登陆成功');
    		} else{
    			$result=array('status'=>'error','data'=>'密码错误');
    		}
    	}else{
    		$result=array('status'=>'error','data'=>'无此用户');
    	}
    	echo json_encode($result);

    }

    public  function handleregister() {

        $data = array();
        $data['email']= $_POST['email'];
        $data['password']=md5($_POST['password']);
 		$data['nick']=$_POST['nick'];
 		$data['create_time']=time();

        $user_info = M('user')->where(array('email'=>$data['email']))->find();
        if (!is_array($user_info)||empty($user_info)) {
            M('user')->add($data);
            $result =array('status'=>'ok','data'=>'注册成功');
        }else{
            $result =array('status'=>'error','data'=>'注册失败');
        }
        echo json_encode($result);
    }
    public function logout(){
        $_SESSION=array();
        $result=array();
        $result['status']='ok';
        echo json_encode($result);
    }
    
}