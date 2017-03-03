<?php
namespace API\Controller;
use Think\Controller;
class CommentController extends Controller {
	public function index(){
		$com['user_id'] = $_SESSION['me']['user_id'];
		$com['goods_id'] = $_POST['goods_id'];
		$user = M('user')->where(array('id'=> $com['user_id']))->field('nick')->find();
		$com['user_name'] = $user;
		$com['grade'] = $_POST['grade'];
		$com['img'] = $_POST['img'];
		$com['content'] = $_POST['content'];
		$com['create_time']=date('Y-m-d H:i:s');
		$a = M('comment')->add($com);
		$comm = M('comment')->where(array('goods_id'=>$com['goods_id']))->select();
		foreach ($comm as $key => $value) {
			$comment[$key]['user_name'] = $value['user_name'];
			$comment[$key]['create_time'] = $value['create_time'];
			$comment[$key]['grade'] = $value['grade'];
			$comment[$key]['content'] = $value['content'];
			$comment[$key]['img'] = $value['img'];
		}
		echo json_encode($comment);
	}
}