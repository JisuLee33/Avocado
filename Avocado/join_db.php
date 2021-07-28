<?php require "lib.php";

    if (!$_POST['id']) {
        return redirect("/", "아이디를 입력하세요.");
    }

    if (!$_POST['password']) {
        return redirect("/", "비밀번호를 입력하세요.");
    }

	query("INSERT INTO `user` SET id = ?, password = ?",[
		$_POST['id'],
		$_POST['password']
	]);

	redirect("/", "회원가입 완료");
 ?>