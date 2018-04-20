<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
</head>
<body>
<form action="../tongji?method=tongjiAllPeople" method="post">
<input type="text" name="year" value="2015">
<input type="submit" value="全部">
</form>
<form action="../tongji?method=tongjiLivePeople" method="post">
<input type="text" name="year" value="2015">
<input type="submit" value="活跃">
</form>
</body>
</html>