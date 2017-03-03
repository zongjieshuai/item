<?php
namespace Admin\Controller;
use Think\Controller;
class GoodsController extends Controller {
    public function index(){
        $where = array();
        $order = array();
        if (I('get.category',0)) {
            $where['category'] = I('get.category',0);
        }
        if (I('get.title',0)) {
            $where['title'] = I('get.title',0);
        }
        $User = M('goods'); // 实例化User对象
        $count      = $User->where($where)->count();// 查询满足要求的总记录数
        $Page       = new \Think\Page($count,3);// 实例化分页类 传入总记录数和每页显示的记录数(25)
        $Page->setConfig('prev','上一页');
        $Page->setConfig('next','下一页');
        $show       = $Page->show();// 分页显示输出
        // 进行分页数据查询 注意limit方法的参数要使用Page类的属性
        $list = $User->where($where)->order($order)->limit($Page->firstRow.','.$Page->listRows)->select();

        $category=M('category')->where('parent_id=0')->select();
        $this->assign('category',$category);
        $this->assign('list',$list);// 赋值数据集
        $this->assign('page',$show);// 赋值分页输出
        $this->display(); // 输出模板
    }

    public function add() {
        $category=M('category')->where('parent_id=0')->select();
        foreach($category as $key=>$v){
            $v['child']=M('category')->where(array('parent_id'=>$v['id']))->select();
            $category[$key]=$v;//加了个key值
        }
        /*foreach ($category as $v ){
            if(isset($v['child'])&& ! empty($v['child'])) {//方法用（）eg：empty（）
                foreach($v['child'] as $key=>$value) {
                    echo "--".$value['name']."<br>";
                }
            }
        }*/
        $this->assign('category',$category);
        $this->display();
    }
    public function handleadd() {
        $data['img'] = current($_POST['goods_image']);
        $data['name']=$_POST['name'];
        $data['sn'] = $_POST['sn'];
        $data['price'] = $_POST['price'];
        $data['market_price'] = $_POST['market_price'];
        $data['stock'] = $_POST['stock'];
        $data['category'] = $_POST['category'];
        $data['desc'] = $_POST['desc'];
        $data['create_time'] = date('Y-m-d H:i:s');        
        $id = M('goods')->add($data);

        foreach($_POST['goods_image'] as $gimg) {
            $goods_image = array();
            $goods_image['goods_id'] = $id;
            $goods_image['create_time'] = date('Y-m-d H:i:s');
            $goods_image['img'] = $gimg;
            M('goods_img')->add($goods_image);
        }

        $goods_image = array();
        $goods_image['goods_id'] = $id;
        $goods_image['contents'] = json_encode($_POST['goods_desc']);
        M('goods_contents')->add($goods_image);
        
        $this->success('ok',U('Admin/goods/index'));
            
    }
    public function edit(){
      $id=$_GET['id'];
        $goods_info =M('goods')->where(array('id'=>$id))->find();
        $category=M('category')->where('parent_id=0')->select();
        $this->assign('goods_info',$goods_info);
        $this->assign('category',$category);
        $this->display();
    }
    public function handleedit(){
        $data = array();
        if($_FILES['img']['name']){
            $info = uploadImage('img','goods');
            if ($info['status'] == 'error') {
                $this->error($info['error_msg']);
            }
            $data['img'] =$info['path'];
        }
        $id = $_GET['id'];
        $data['name']=$_POST['name'];
        $data['sn'] = $_POST['sn'];
        $data['price'] = $_POST['price'];
        $data['market_price'] = $_POST['market_price'];
        $data['stock'] = $_POST['stock'];
        $data['category'] = $_POST['category'];
        $data['desc'] = $_POST['desc'];               
        $data['create_time'] = time();
        $data['category']=$_POST['category'];
        M('goods')->where(array('id'=>$id))->save($data);
        $this->success('ok',U('Admin/goods/index'));
    }   
     public function delete () {
        $id = $_GET['id'];
        M('goods')->where(array('id'=>$id))->delete();
        $this->success('ok',U('Admin/goods/index'));
    }
}