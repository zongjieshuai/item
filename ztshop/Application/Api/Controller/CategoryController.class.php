<?php
namespace API\Controller;
use Think\Controller;
class CategoryController extends Controller {
    public function index(){
        $cate_zero = M('category')->where(array('parent_id'=>0))->select();
        foreach ($cate_zero as $key => $value) {
            $c_zero['name'] = $value['name'];
            $c_zero['id'] = $value['id'];
            $cate_num = M('category')->where(array('parent_id'=>$value['id']))->select();
            $cate[] = $c_zero;
        }
        $data['category'] = $cate;
        $s = 'ok';
        $result['status'] = $s; 
        $result['data'] =$data;
        echo json_encode($result);  
    }

     public function child_category(){
        $cate_all = M('category')->where(array('parent_id'=>0))->select();
            foreach ($cate_all as $key => $value) {
                $cate_child = M('category')->where(array('parent_id'=>$value['id']))
                ->field('name')->select();
                $cate_all[$key]['child'] = $cate_child;
            }
            $a['cate'] = $cate_all;
        echo json_encode($a);
    }


    public function goods(){
        $s = 'ok';
        $result['status']= $s;
        $ca = $_POST['category_id'];
        $page =$_POST['page'];
        $limit =$_POST['limit'];
        $ca_child_id =$_POST['category_child_id'];
        $order =$_POST['order'];
        if (!$order) {
            $order = 0;
        }
        switch ($order) {
        case '0':    
            $o = 'id desc';
            break;
        case '1': 
            $o = 'create_time desc';
            break;
        case '2':
            $o = 'price desc';
            break;
        case '3':
            $o = 'like_num desc';
            break;
             }
        if ($ca_child_id>0) {
             $a = $ca_child_id;
              }else{
                 $a = $ca;
                    }
            $g = M('goods')->where(array('category'=>$a))
                            ->order($o)
                            ->page('$page,$limit')
                            ->select();
            foreach ($g as $key => $value) {
                $goods[$key]['img'] = $value['img'];
                $goods[$key]['id'] = $value['id'];
                $goods[$key]['price'] = $value['price'];
                $goods[$key]['market_price'] = $value['market_price'];
                $goods[$key]['name']= $value['name'];
                $goods[$key]['url'] = 'http://ztshop.my/index.php/wap/goods/detail/id/'.$value['id'];
            }
        $data['goods'] = $goods;
        $data['current_page'] = $page;
        $result['data'] = $data;
        echo json_encode($result);
    }
}