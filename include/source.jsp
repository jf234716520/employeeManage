<%
	String path = request.getContextPath();
%>
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9" content="IE=11;IE=10;IE=9;IE=8;IE=7;IE=Edge;chrome=1"/> 	
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">

<link rel="stylesheet" type="text/css" href="<%=path%>/include/jquery/themes/default/easyui.css">
<link rel="stylesheet" type="text/css" href="<%=path%>/include/jquery/themes/icon.css">
<link rel="stylesheet" type="text/css" href="<%=path%>/include/css/s_styles.css" />
<link rel="stylesheet" type="text/css" href="<%=path%>/include/css/button.css" />
<link rel="stylesheet" type="text/css" href="<%=path%>/include/css/licPublic.css" />

<script type="text/javascript" src="<%=path%>/include/DatePicker/WdatePicker.js"></script>
<script type="text/javascript" src="<%=path%>/include/jquery/jquery-1.8.0.min.js"></script>
<script type="text/javascript" src="<%=path%>/include/jquery/jquery.easyui.min.js"></script>
<script type="text/javascript" src="<%=path%>/include/jquery/jquery.easyui.ext.rownum.js"></script>
<script type="text/javascript" src="<%=path%>/include/jquery/easyui-lang-zh_CN.js"></script>
<script type="text/javascript" src="<%=path%>/include/js/common.js"></script>
<script type="text/javascript" src="<%=path%>/include/js/json2.js"></script>
<script type="text/javascript" charset="UTF-8">
	var context ="<%=path%>";
	function hideSearchBar() {
		var conditionsDiv = $("#searchBar");
		var displayHidden = $("#displayHidden");
		if (conditionsDiv.css("display") == "block") {
			conditionsDiv.css("display", "none");
			displayHidden.attr("src", "<%=path%>/include/images/show_search.png");
		}
	}
	$(function(){
		//清空所有按钮value
		$(':button').val('');
		$("input:text").css("height","32px");
		$("input:text").css("line-height","32px");
		
		//$("div .ctrolPanel").css("display","none");
		$(window).resize(function() {
		  $('#tt').datagrid();
		  $('#tt1').datagrid();
		});
		/*显示，隐藏查询条件*/
		$("#displayHidden").click(function(){
	       var conditionsDiv = $("#searchBar");
	       var displayHidden = $("#displayHidden");
	       if(conditionsDiv.css("display")=="block"){
	          conditionsDiv.css("display","none");
	          displayHidden.attr("src","<%=path%>/include/images/show_search.png");
	       }else if(conditionsDiv.css("display")=="none"){
	          conditionsDiv.css("display","block");
	          displayHidden.attr("src","<%=path%>/include/images/hidden_search.png");
	       }
		});
		//$(".search_btn").parent().css("text-align","right");
		//$(".search_btn").parent().css("padding-right","10px");
		
		//禁止后退键 作用于Firefox、Opera
        document.onkeypress = forbidBackSpace;
        //禁止后退键  作用于IE、Chrome
        document.onkeydown = forbidBackSpace;
	});
	var SCREENMESSAGE = (function() {  
	  // Private static attributes.
	  var constants = {//定义了屏幕常量
		SCREEN_WIDTH: screen.width, //显示器宽
		SCREEN_HEIGHT: screen.height, //显示器高
		CLIENT_WIDTH: document.documentElement.clientWidth, //浏览器宽
		CLIENT_HEIGHT: document.documentElement.clientHeight //浏览器高
	  };
	  var Test={};
	  // 定义了一个静态方法
	  Test.getConstant=function(name){ //获取常量的方法
	    return constants[name];
	  };
	  return Test;
	})();
	</script>
	<script type="text/javascript" charset="UTF-8">
	/**暂时解决showModalDialog 在Google失效情况***/
		var has_showModalDialog = !!window.showModalDialog;//定义一个全局变量判定是否有原生showModalDialog方法  
		if(!has_showModalDialog &&!!(window.opener)){         
		    window.onbeforeunload=function(){  
		        window.opener.hasOpenWindow = false;        //弹窗关闭时告诉opener：它子窗口已经关闭  
		    }  
	}  
//定义window.showModalDialog如果它不存在  
var newWin=null;
if(window.showModalDialog == undefined){  
    window.showModalDialog = function(url,mixedVar,features){  
        if(window.hasOpenWindow){  
           // alert("您已经打开了一个窗口！请先处理它");//避免多次点击会弹出多个窗口  
            window.myNewWindow.focus();  
        }  
        window.hasOpenWindow = true;  
        if(mixedVar) var mixedVar = mixedVar;  
        //因window.showmodaldialog 与 window.open 参数不一样，所以封装的时候用正则去格式化一下参数  
        if(features) var features = features.replace(/(dialog)|(px)/ig,"").replace(/;/g,',').replace(/\:/g,"=");  
        //window.open("Sample.htm",null,"height=200,width=400,status=yes,toolbar=no,menubar=no");  
        //window.showModalDialog("modal.htm",obj,"dialogWidth=200px;dialogHeight=100px");   
        var left = (window.screen.width - parseInt(features.match(/width[\s]*=[\s]*([\d]+)/i)[1]))/2;  
        var top = (window.screen.height - parseInt(features.match(/height[\s]*=[\s]*([\d]+)/i)[1]))/2;  
        newWin = window.open(url,"_blank",features);  
    }  
} 
window.onfocus=function (){  
	 if(newWin){
	  if(!newWin.closed)
	   newWin.focus();
	 } 
	};
	window.document.onfocus=function (){  
	 if(newWin){
	  	if(!newWin.closed)
		 newWin.focus();
	 } 
	};
	window.document.onclick=function (){  
	 if(newWin){
	  if(!newWin.closed)
	 	newWin.focus();
	 	} 
	};

	window.document.ondblclick=function (){  
		 if(newWin){
		  	if(!newWin.closed)
		 	newWin.focus();
		 } 
	}; 
</script>
