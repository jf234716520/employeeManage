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
	src="<%=contextPath%>/pages/baseinfo/toEditEmployee.js"></script>
</head>
<body>
	<div id="container" class="main" style="height: 100%">
		<div class="barTitle">
			<div class="content">
				<span>修改职工信息</span>
			</div>
		</div>
		<div id="tb" style="padding-left: 2px; height: auto;">
			
		</div>
		<form id="form" >
		<input type="hidden" value="${data.uuid }" name="uuid">
		<table border="0" cellspacing="0" cellpadding="0" width="100%" class="t2">
			<tr>
				<th>职员编号</th>
				<td><input   disabled="disabled" value="${data.uuid }"></td>
				<th>登录密码</th>
				<td><input name ="password" type="password" value="${data.password }"></td>
			</tr>	
			<tr>
				<th>姓名</th>
				<td><input id="name" name ="name" type="text" value="${data.name }"></td>
				<th>性别</th>
				<td>男&nbsp;<input name="sex" id="sex1" type="radio" value="0"  <c:if test="${data.sex=='男'}">checked="checked" </c:if>  >&nbsp;&nbsp;&nbsp;&nbsp;女&nbsp;<input id="sex2" name="sex" type="radio" value="1" <c:if test="${data.sex=='女'}">checked ="checked"</c:if>></td>
			</tr>
			<tr>
				<th>出生日期</th>
				<td style="font-size: 14px;">
					<!-- <input id="year" name ="year" type="text" style="width: 60px">年<input id="month" name ="month" type="text" style="width: 30px;">月<input id="day" name ="day" type="text" style="width: 30px">日 -->
					<input type="date" value="${data.birthday }" id="birthday" name="birthday">
				</td>
				<th>政治面貌</th>
				<td><input id="political" name ="political" value="${data.political }"></td>
			</tr>
			<tr>
				<th>岗位</th>
				<td><input id="station" disabled="disabled" name ="station" type="text" readonly="readonly" value="${data.station }"></td>
				<th>所属部门</th>
				<td><input name ="org_name" type="text"  value="${data.org_name }"></td>
			</tr>
			<tr>
				<th>基本工资</th>
				<td><input id="base_salary" name ="base_salary" type="text" disabled="disabled" value="${data.base_salary }"></td>
				<th>浮动奖金</th>
				<td><input type="text"  disabled="disabled" value="${data.award }" ></td>
			</tr>
		</table>
		</form>
		<div style="text-align: center;margin-top: 40px;margin-bottom: 20px">
			<input type="button" class="save_btn"  onclick="_submit()"/>
			<input type="button" class="returnlist_btn"  onclick="_back()"/>
		</div>
		</br>
	</div>

</body>
</html>
