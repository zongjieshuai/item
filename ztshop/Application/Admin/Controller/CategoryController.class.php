<?php
namespace Admin\Controller;
use Think\Controller;
class CategoryController extends Controller {
    public function index(){
        $list = M('category')->select();
        $this->assign('list',$list);
        $this->display();
    }
    public function add() {
        $list = M('category')->select();
        $this->assign('list',$list);
        $this->display();
    }
    
    public function handleAdd() {
         $data = array();
         $data['name'] =$_POST['name'] ;
         $data['parent_id'] =$_POST['parent_id'] ;
         M('category')->add($data);    
         $this->success('ok',U('admin/category/index'));
    }
    public function edit(){
        $id=$_GET['id'];
        $cate_info =M('category')->where(array('id'=>$id))->find();
        $category=M('category')->select();
        $this->assign('category',$category);
        $this->assign('cate_info',$cate_info);
        $this->display();

    }

    public function handleedit(){
         $id =$_GET['id'];
         $data = array();
         $data['name'] =$_POST['name'] ;
         $data['parent_id'] =$_POST['parent_id'] ;
         M('category')->where(array('id'=>$id))->save($data);   
         $this->success('ok',U('admin/category/index'));
    }
    public function delete(){
        $id = $_GET['id'];
        M('category')->where(array('id'=>$id))->delete();
        $this->success('ok',U('admin/category/index'));
    }
}