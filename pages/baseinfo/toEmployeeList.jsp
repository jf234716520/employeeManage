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
	src="<%=contextPath%>/pages/baseinfo/toEmployeeList.js"></script>
</head>
<body>
	<div id="container" class="main">
		<div class="barTitle">
			<div class="content">
				<span>职工信息列表</span>
			</div>
		</div>
		<div id="tb" style="padding-left: 2px; height: auto;">
			<div id="searchBar" class="searchTable" style="width: 99%;">
				<table border="0" cellspacing="0" cellpadding="0" width="100%">
					<tr>
						<td  class="td_l">&nbsp;姓名：</td>
						<td  class="td_t">
							<input id="queryName" size="24" style="width:180px;height:32px;vertical-align: middle;"/>
						</td>
						<td  class="td_l">&nbsp;岗位：</td>
						<td class="td_t" width="200"><input id="queryStation" type="text"  class="easyui-textbox" size="30"  style="width:180px;vertical-align: middle;"/></td>
						<td class="td_l" >&nbsp;</td>
						<td class="td_t">
							<input type="button" class="search_btn" value="查询" onclick="_query()"/>
						</td>
					</tr>
				</table>
			</div>
			<div id="toolBar" class="toolBar">
				<div class="toolBar_l" style="margin-top: 3px;">

					<input type="button" class="zhig_btn" 
						onclick="_add()" />
				</div>
			</div>
		</div>

		<div class="listTable">
			<table id="employeelist"></table>
		</div>
		<div id="dialogDiv" style="overflow:hidden">
			<iframe id="dialogDialog" frameborder="0" scrolling="auto" src="" style="width:100%;height:400px;" ></iframe>
		</div>

	</div>

</body>
</html>
