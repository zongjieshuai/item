<?php 
function check_verify($code, $id = ""){  
	return true;
    $verify = new \Think\Verify();  
    return $verify->check($code, $id);  
}


?>