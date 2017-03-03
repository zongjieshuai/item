<?php
namespace API\Controller;
use Think\Controller;
class LikeController extends Controller {
    public function point(){
        $result=array();
        $user_id=$_SESSION['me']['id'];
         
        $goods_id=$_POST['goods_id'];
         
        $info=M('like')->where(array('user_id'=>$user_id,'goods_id'=>$goods_id))
        ->field('like_num')
        ->find();
       
        if($info['like_num']==1){
            $result['status']='error';
        }else{
            $result['status']='ok';
        }
        if ($result['status']=='ok') {
            $data=array();
            $data['goods_id']=$goods_id;
            $data['user_id']=$user_id;
            $data['like_num']=1;
            M('like')->add($data);
        }else{
            $data=array();
        }
        $num=M('like')
        ->where(array('goods_id'=>$goods_id,'like_num'=>1))
        ->count();
        
        $result['count']=$num;
        echo json_encode($result);
    }
    
}