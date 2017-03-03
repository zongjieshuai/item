<?php
namespace API\Controller;
use Think\Controller;
class CartController extends Controller {
    public function index(){
        $this->show('<style type="text/css">*{ padding: 0; margin: 0; } div{ padding: 4px 48px;} body{ background: #fff; font-family: "微软雅黑"; color: #333;font-size:24px} h1{ font-size: 100px; font-weight: normal; margin-bottom: 12px; } p{ line-height: 1.8em; font-size: 36px } a,a:hover{color:blue;}</style><div style="padding: 24psx 48px;"> <h1>:)</h1><p>欢迎使用 <b>ThinkPHP</b>！</p><br/>版本 V{$Think.version}</div><script type="text/javascript" src="http://ad.topthink.com/Public/static/client.js"></script><thinkad id="ad_55e75dfae343f5a1"></thinkad><script type="text/javascript" src="http://tajs.qq.com/stats?sId=9347272" charset="UTF-8"></script>','utf-8');
    }
    public function addcart(){
    	$goods_id=$_POST['goods_id'];
       
        $goods_num=$_POST['goods_num'];
        
        $user_id=$_SESSION['me']['id'];
        
        $re=M('cart')
            ->where(array('user_id'=>$user_id,'goods_id'=>$goods_id))
            ->field('goods_num')
            ->find();
        if (!$re['goods_num']) {
            $data['goods_id']=$goods_id;
            $data['user_id']=$user_id;
            $data['create_time']=date("Y-m-d",time());
            $data['update_time']=date("Y-m-d",time());
            $data['goods_num']=1;
            $res =M('cart')->add($data);
        }else{
            $data['goods_num']=$re['goods_num']+$goods_num;
            $res =M('cart')->where(array('goods_id'=>$goods_id,'user_id'=>$user_id))->save($data);
        }
        $result=array();
        if (!$res) {
            $result['status']='error';
        }else{
            $c=M('cart')
            ->where(array('goods_id'=>$goods_id,'user_id'=>$user_id))
            ->field('goods_num')
            ->find();
            $a=$c['goods_num'];
            $result['status']='ok';
            $result['data']=array('count'=>$a);
        }
        echo json_encode($result);
    	
    }
    public function cartlist(){
        $result=array();
        $user_id=$_SESSION['me']['id'];
        // $user_id=1;
        if(!$user_id){
           $result['status']='error';
           $result['data']='未登录请登录';
           die();
        }
        $info=M('cart')->where(array('user_id'=>$user_id))
        ->field('goods_id,goods_num,id')
        ->select();
        if(!$info){
            $result['status']='ok';
            $result['data']='';

        }
        $id=array();    
        foreach ($info as $k => $v) {
            $id[]=$v['goods_id'];
        }
        // var_dump($info);
        $good=array();
        $go=array();
        // var_dump($info);  
        // foreach ($id as $k => $v) {
        //       $go[]=
        //       M('goods')
        //       ->field('img as goods_img,name as goods_name,id as goods_id')
        //       ->where(array('id'=>$v))
        //       ->select();
        //   }  
        $go=M('goods')
        ->where(array('id'=>array('in',$id)))
        ->field('img as goods_img,name as goods_name,id as goods_id,price')
        ->select();
           // var_dump($go);
           
           $good[]=array();
           foreach ($go as $k => $v) {
                      $good[$k]['goods_img']=$v['goods_img'];
                      $good[$k]['goods_name']=$v['goods_name'];
                      $good[$k]['goods_id']=$v['goods_id'];
                      $good[$k]['goods_url']='www.baidu.com';
                      $good[$k]['goods_num']=$info[$k]['goods_num'];
                      $good[$k]['goods_price']=$v['price']*$info[$k]['goods_num'];
                      $good[$k]['cart_id']=$info[$k]['id'];
              }
              $result['status']='ok';
              $result['cartgood']=$good;
              echo json_encode($result);
        }
        
       
    }


