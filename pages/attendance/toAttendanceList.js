/**
 * 
 */
$(function(){
	_loadTable();
})

function _loadTable(){
	
	$("#attendancelist").datagrid({
		iconCls:"myicon-table",
		url:context+"/attendance/getAttendanceList.do",
		fitColumns:true,
		loadMsg:"数据正在加载，请等待...",
		rownumbers:true,
		striped:false,
		columns:[[
		     {field:"uuid",title:"考勤编号",width:80},
		     {field:"employee_uuid",title:"职工编号",width:40},
		     {field:"attendance_time",title:"考勤时间",width:40,formatter:dateFmt},
		     {field:"num",title:"迟到次数",width:40},
		]],
		onLoadSuccess:function(data) {
			if(data.rows.length==0){
				var body = $(this).data().datagrid.dc.body2;
				body.find('table tbody').append('<tr><td width="'+body.width()+'" style="height: 25px; text-align: center;" colspan="10">没有数据展示</td></tr>');
			} 
		}
	})
	
}


function dateFmt(value,row,index){
	
	var date = new Date(value);
	return  date.Format("yyyy-MM-dd hh:mm:ss")
	
}
function _add(){
	
	$.ajax({
		type:"post",
		url:context+"/attendance/addAttendanceRecord.do",
		success:function(data){
			if(data.status==1){
				$.messager.alert("提示","考勤打卡成功","info");
			} else if(data.status==0){
				$.messager.alert("提示","今天已经打过卡","warning");
			}
			
			$("#attendancelist").datagrid("load");
		},
		error:function(){
			$.messager.alert("提示","考勤打卡出现错误！","warning");
		}
	})
}

