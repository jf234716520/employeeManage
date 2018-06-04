/**
 * 
 */
$(function(){
	
	_loadTable();
})


	

function _loadTable(){
	
		$("#employeelist").datagrid({
		iconCls:"myicon-table",
		url:context+"/baseinfo/getEmployeeList.do",
		fitColumns:true,
		loadMsg:"数据正在加载，请等待...",
		rownumbers:true,
		striped:false,
		columns:[[
		     {field:"uuid",title:"职员编号",width:80},
		     {field:"password",title:"登录密码",width:40},
		     {field:"name",title:"姓名",width:40},
		     {field:"sex",title:"性别",width:40},
		     {field:"birthday",title:"出生日期",width:40},
		     {field:"org_name",title:"所属部门",width:40},
		     {field:"station",title:"岗位",width:40},
		     {field:"political",title:"政治面貌",width:40},
		     {field:"base_salary",title:"基本工资",width:40},
		     {field:"award",title:"浮动奖金",width:40},
		     {field:"operate",title:"操作",width:40,formatter:operateFmt},
		]],
		onLoadSuccess:function(data) {
			if(data.rows.length==0){
				var body = $(this).data().datagrid.dc.body2;
				body.find('table tbody').append('<tr><td width="'+body.width()+'" style="height: 25px; text-align: center;" colspan="10">没有数据展示</td></tr>');
			} else {
				var trs = $(this).prev().find('div.datagrid-body').find('tr');
				for(var i=0;i<trs.length;i++){
					var row_html = trs[i].cells[8].textContent;
					if(row_html>3000){
						trs[i].cells[8].style.cssText = 'background:#ffff00'
					}
				}
			}
		}
	})
	
}

function operateFmt(value,row,index){
	
	return "<a href='#' onclick=\"_edit('"+row.uuid+"')\">编辑</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='#' onclick=\"_delete('"+row.uuid+"')\">删除</a>"
}

function _edit(uuid){
	
	$("#dialogDialog").prop("src",context+"/baseinfo/toEditEmployee.do?uuid="+uuid);
	$("#dialogDiv").dialog({
		title:"修改职工信息",
		width:800,
		height:400
	})
}

function _add(){
	
	$("#dialogDialog").prop("src",context+"/baseinfo/toAddEmployee.do");
	$("#dialogDiv").dialog({
		title:"添加职工信息",
		width:800,
		height:400
	})
	
}

function _delete(uuid){
	
	$.messager.confirm("提示","确认删除职工编号为"+uuid+"的记录么？",function(r){
		if(r){
			$.ajax({
				type:"post",
				url:context+"/baseinfo/deleteEmployee.do",
				data:{
					uuid:uuid
				},
				success:function(data){
					$("#employeelist").datagrid("load",{
						queryName:$("#queryName").val(),
						queryStation:$("#queryStation").val()
					})
				}
			})
		} else { 
			return;
		}
	})
	
}
function _query(){
	
	$("#employeelist").datagrid("load",{
		queryName:$("#queryName").val(),
		queryStation:$("#queryStation").val()
	})
}
	
