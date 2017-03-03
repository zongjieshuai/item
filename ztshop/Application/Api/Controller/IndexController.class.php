<?php
namespace API\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
        $this->show('<style type="text/css">*{ padding: 0; margin: 0; } div{ padding: 4px 48px;} body{ background: #fff; font-family: "微软雅黑"; color: #333;font-size:24px} h1{ font-size: 100px; font-weight: normal; margin-bottom: 12px; } p{ line-height: 1.8em; font-size: 36px } a,a:hover{color:blue;}</style><div style="padding: 24px 48px;"> <h1>:)</h1><p>欢迎使用 <b>ThinkPHP</b>！</p><br/>版本 V{$Think.version}</div><script type="text/javascript" src="http://ad.topthink.com/Public/static/client.js"></script><thinkad id="ad_55e75dfae343f5a1"></thinkad><script type="text/javascript" src="http://tajs.qq.com/stats?sId=9347272" charset="UTF-8"></script>','utf-8');
    }
    public function main(){
    	$ad=M('ad')->limit('6')->field('img,url')->select();
    	$result=array();
    	$result['status']='ok';
    	$result['data']['ad']=$ad;
    	$recom=M('goods')->limit('6')->field('img,price,market_price,name,id')->select();
    	$re=array();
    	foreach ($recom as $key => $value) {
    		$re[$key]['goods_url']='http://ztshop.my/index.php/wap/goods/detail/id/'.$value['id'];
    		$re[$key]['goods_img']=$value['img'];
    		$re[$key]['goods_price']=$value['price'];
    		$re[$key]['goods_market_price']=$value['market_price'];
    		$re[$key]['goods_name']=$value['name'];
    		$re[$key]['goods_id']=$value['id'];
    	}
    	$result['data']['recomment_goods']=$re;


    	$floor=M('floor')->limit('6')
        ->where(array('status'=>1))
        ->field('name,desc,image,category_id')->select();
        foreach($floor as $k=>$v){
            $goo=M('goods')
            ->limit('5')
            ->where(array('category'=>$v['category_id']))
            ->field('img as goods_img,price as goods_price,market_price as goods_market_price,name as goods_name,id as goods_id')
            ->select();
            foreach($goo as $gk=>$good) {
                $good['goods_url'] = 'http://ztshop.my/index.php/wap/goods/detail/id/'.$good['goods_id'];
                $goo[$gk] = $good;
            }
            $floor[$k]['goods'] = $goo;
        }
        
    	$result['data']['floor']=$floor;
    	echo json_encode($result);
    	
    }
}