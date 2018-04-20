<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
</head>
<body>
	<c:forEach items="${tjaList}" var="tj">
		<c:if test="${tj.tj_hangye==1}">
		健身<br>
		</c:if>
		<c:if test="${tj.tj_hangye==2}">
		冰雪<br>
		</c:if>
		<c:if test="${tj.tj_hangye==3}">
		体育<br>
		</c:if>
		${tj.tj_allpeople}
	</c:forEach>
	<c:forEach items="${tjlList}" var="js">
		<c:forEach items="${js}" var="tj">
			月份${tj.tj_mouth}
			行业${tj.tj_hangye}
			活跃人数${tj.tj_livepeople}<br>
		</c:forEach>
	</c:forEach>
</body>
</html>