<%@ page language="java" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
	String contextPath = request.getContextPath();
%>
<!DOCTYPE  HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>职工信息管理</title>
<style type="text/css">

.f1{ float:left; width:100%;}
.t2 { clear:both; /*border-collapse: collapse;*/ border: 1px solid #c9dae4; }
.t2 tr th { color:#000; padding: 5px 0px 5px 10px; border-bottom: 1px solid #e6e6e6; font-weight: normal; background: #f7fafc; text-align:left; border-right: 1px solid #e6e6e6; border-left: 1px solid #e6e6e6; }
.t2 tr td{ border-bottom: 1px solid #e6e6e6; padding: 5px 0px 5px 10px; line-height:22px; word-break:break-all;}
.t2 tr th em, .t2 tr td em{ font-weight:bold; color:Red;}

</style>
<jsp:include page="/include/source.jsp"></jsp:include>
<script type="text/javascript"
	src="<%=contextPath%>/pages/baseinfo/toAddEmployee.js"></script>
</head>
<body>
	<div id="container" class="main" style="height: 100%">
		
		<div id="tb" style="padding-left: 2px; height: 50px;">
			
		</div>
		<form id="form" >
		<table border="0" cellspacing="0" cellpadding="0" width="100%" class="t2">
			<tr>
				<th>职员编号</th>
				<td><input name ="uuid" readonly="readonly" value="${uuid }" class="input_n" style="width:200px"></td>
				<th>登录密码</th>
				<td><input name ="password" type="password" value="11111" style="width:200px"></td>
			</tr>	
			<tr>
				<th>姓名</th>
				<td><input id="name" name ="name" type="text" style="width:200px"></td>
				<th>性别</th>
				<td>男&nbsp;<input name="sex" id="sex1"  type="radio" value="0" checked="checked">&nbsp;&nbsp;&nbsp;&nbsp;女&nbsp;<input id="sex2" name="sex" type="radio" value="1"></td>
			</tr>
			<tr>
				<th>出生日期</th>
				<td style="font-size: 14px;">
					<!-- <input id="year" name ="year" type="text" style="width: 60px">年<input id="month" name ="month" type="text" style="width: 30px;">月<input id="day" name ="day" type="text" style="width: 30px">日 -->
					<input type="date" name="birthday" id="birthday" style="width:200px">
				</td>
				<th>政治面貌</th>
				<td><input id="political" name ="political" style="width:200px"></td>
			</tr>
			<tr>
				<th>岗位</th>
				<td><input id="station"  name ="station" type="text" style="width:200px"></td>
				<th>所属部门</th>
				<td><input name ="org_name" type="text" id="org_name" style="width:200px"></td>
			</tr>
			<tr>
				<th>基本工资</th>
				<td><input id="base_salary" name ="base_salary" type="text" readonly="readonly" style="width:200px"></td>
				<th>浮动奖金</th>
				<td><input type="text"  disabled="disabled" style="width:200px"></td>
			</tr>
		</table>
		</form>
		<div style="text-align: center;margin-top: 50px">
			<input type="button" class="save_btn"  onclick="_submit()"/>
		</div>
			
	</div>

</body>
</html>
