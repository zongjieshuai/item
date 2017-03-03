<?php
namespace API\Controller;
use Think\Controller;
class OrderitController extends Controller {
    public function ordli(){
        $user_id=$_SESSION['me']['id'];
        // $user_id=1;
        $status=$_POST['status'];
        // $status=0;
        $info=M('order_item')
             ->where(array('status'=>$status,'user_id'=>$user_id))
             // ->field('good_price as goods_price,num as goods_num,price as goods_money')
             ->field('order_id')
             ->group('order_id')
             ->select();
             $orid=array();
        foreach ($info as $k => $v) {
            $orid[]=$v['order_id'];
             }
        foreach ($orid as $k => $v) {
            $goods=M('order_item')
                  ->where(array('order_id'=>$v))
                  ->field('good_price as goods_price,num as goods_num,price as goods_money,goods_id')
                  ->select();
             foreach ($goods as $key => $value) {
                      $goodsinfo=M('goods')
                      ->where(array('id'=>$value['goods_id']))
                      ->find();
                      $goods[$key]['goods_img']=$goodsinfo['img'];
                      $goods[$key]['goods_name']=$goodsinfo['name'];
                      unset($goods[$key]['goods_id']);
                  }     
            $go[$orid[$k]]=$goods;
        }
        // foreach ($go as $k => $v) {
        //     foreach ($v as $key => $value) {
        //         $g=M('goods')
        //         ->where(array('id'=>$value['goods_id']))
        //         ->field('name as goods_name,img as goods_img')
        //         ->select();
        //     }
        // // }
        // var_dump($go);
        $result=array();
        if($info){
            $result['status']='ok';
        }else{
            $result['status']='error';
        }
        $result['data']=$go;

        // var_dump($result);
        echo json_encode($result);

        }
    
    
        
       
    }


