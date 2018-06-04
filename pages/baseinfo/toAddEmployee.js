/**
 * 
 */
$(function(){
	
	_initInput();
})

function _initInput(){
	
	$("#political").combobox({
		url:context+"/baseinfo/getAllPolitical.do",
	    valueField:'code',
	    textField:'name',
	    onLoadSuccess:function(){
	    	$('#political').combobox('setValue', '1');
	    }
	    
	})
	
	$("#station").combobox({
		url:context+"/baseinfo/getAllStation.do",
	    valueField:'code',
	    textField:'name',
	    onLoadSuccess:function(){
	    	$('#station').combobox('select', '1');
	    },
	    onSelect:function(record){
	    	$.ajax({
	    		type:"post",
	    		url:context+"/baseinfo/getBaseSalary.do",
	    		data:{
	    			code:record.code
	    		},
	    		success:function(data){
	    			$("#base_salary").val(data.name)
	    		}
	    	})
	    }
	    
	})
}
function _inputValid(){
	var isValid = "OK";
	if($("#password").val()==''){
		isValid = "密码不能为空！";
	}
	if($("#name").val()==''){
		isValid = "姓名不能为空！";
	}
	
	if(($("#sex1").prop('checked')!=true)&&($("#sex2").prop('checked')!=true)){
		isValid = "请选择性别！";
	}
	
	if($("#birthday").val()==""){
		isValid = "请填写出生日期！";
	}
	if($("#org_name").val()==""){
		isValid = "请填写所属部门！";
	}
	return isValid;
}
function _submit(){
	var isValid = _inputValid();
	if(isValid!="OK"){
		
		$.messager.alert("提示",isValid,"info")
		return;
	}
	$.ajax({
		type:"post",
		url:context+"/baseinfo/addEmployee.do",
		data:$("#form").serializeArray(),
		dataType:"json",
		success:function(data){
			parent.$("#dialogDiv").dialog("close");
			parent.$("#employeelist").datagrid("reload");
		}
	})
}