<?php 
    // DB연결 / 함수

    // phpmyadmin db연결
	$db = new PDO("mysql:host=localhost;charset=utf8;dbname=0721;", "root", "");

    // 메세지 띄우고 페이지 이동
	function redirect($url, $msg = null) {
		if ($msg) {
			echo "<script>alert('$msg')</script>";
		}
		echo "<script>location='$url'</script>";
	}

    // SQL쿼리 함수
	function query($q, $arr = []) {
		global $db;
		$q = $db -> prepare($q);
		$q -> execute($arr);
		return $q;
	}

 ?>