<%@ page language="java" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
	String contextPath = request.getContextPath();
%>
<!DOCTYPE  HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>职工信息管理</title>
<jsp:include page="/include/source.jsp"></jsp:include>
<script type="text/javascript"
	src="<%=contextPath%>/pages/attendance/loginAttendance.js"></script>
</head>
<body>
	<div style="margin-bottom: 50px"></div>
    <center>
        <h2 style="color:red">考勤系统登录</h2>
            <form id="loginForm" >
                <table border="0">
                    <tr>
                        <td>账号：</td>
                        <td><input type="text" name="name" style="width:200px"></td>
                    </tr>
                    <tr>
                        <td>密码：</td>
                        <td><input type="password" name="password" style="width:200px">
                        </td>
                    </tr>
                </table>
                </form>
            <br>
                <input type="submit" value="登录" style="color:#BC8F8F" onclick="_login()">
    </center>
</body>
</html>
