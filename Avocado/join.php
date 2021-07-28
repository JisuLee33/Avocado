<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>회원가입</title>
</head>
<body>
    <form action="join_db.php" method="POST">
        <span>아이디</span>
        <input type="text" name="id" />
        <span>비밀번호</span>
        <input type="password" name="password" />
        <button type="submit">회원가입</button>
    </form>
</body>
</html>