<%@ page language="java" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%><%
	String contextPath = request.getContextPath();
%>
<!DOCTYPE  HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>职工信息管理</title>
<jsp:include page="/include/source.jsp"></jsp:include>
<script type="text/javascript"
	src="<%=contextPath%>/pages/attendance/toAttendanceList.js"></script>
</head>
<body>
	<div id="container" class="main">
		<div class="barTitle">
			<div class="content">
				<span>考勤信息列表</span>
			</div>
		</div>
		<div id="tb" style="padding-left: 2px; height: auto;">
			<div id="searchBar" class="searchTable" style="width: 99%;">
			</div>
			<div id="toolBar" class="toolBar">
				<div class="toolBar_l" style="margin-top: 3px;">

					<input type="button" class="kaoq_btn" 
						onclick="_add()" />
				</div>
			</div>
		</div>

		<div class="listTable">
			<table id="attendancelist"></table>
		</div>
		<div id="dialogDiv" style="overflow:hidden">
			<iframe id="dialogDialog" frameborder="0" scrolling="auto" src="" style="width:100%;height:400px;" ></iframe>
		</div>

	</div>

</body>
</html>
