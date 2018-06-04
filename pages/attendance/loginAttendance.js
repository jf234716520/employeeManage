/**
 * 
 */
$(function(){
	
})

function _login(){
	$.ajax({
		type:'post',
		url:context+"/attendance/loginValid.do",
		data:$('#loginForm').serializeArray(),
		success:function(data){
			if(data.status==1){
				window.location.href = context+"/attendance/toAttendanceList.do"
			} else {
				$.messager.alert("提示","账号或密码不正确！","warning")
			}
		}
	})
}