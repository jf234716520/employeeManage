//获取当前日期
function _getCurDate() {
	var myDate = new Date();
	var year = myDate.getFullYear();
	var month = myDate.getMonth() + 1;
	if (month < 10) {
		month = "0" + month;
	}
	var date = myDate.getDate();
	if (date < 10) {
		date = "0" + date;
	}
	var curdate = year + "-" + month + "-" + date;
	return curdate;
}
//获取所在年份的第一天
function _getCurYearFirstDate() {
	var myDate = new Date();
	var year = myDate.getFullYear();
	var curdate = year + "-01-01";
	return curdate;
}

//获取当前日期和时间
function _getCurDateTime() {
	var myDate = new Date();
	var year = myDate.getFullYear();
	var month = myDate.getMonth() + 1;
	if (month < 10) {
		month = "0" + month;
	}
	var date = myDate.getDate();
	if (date < 10) {
		date = "0" + date;
	}
	var curdate = year + "-" + month + "-" + date;

	var hour = myDate.getHours(); //获取当前小时数(0-23)
	if (hour < 10) {
		hour = "0" + hour;
	}
	var min = myDate.getMinutes(); //获取当前分钟数(0-59)
	if (min < 10) {
		min = "0" + min;
	}
	var second = myDate.getSeconds(); //获取当前秒数(0-59)
	if (second < 10) {
		second = "0" + second;
	}
	return curdate + " " + hour + ":" + min + ":" + second;
}
//获取当前时间戳
function _timestamp() {
	var getTimestamp = new Date().getTime();
	return getTimestamp;
}

//获取当前年月
function _getCurMonth() {
	var myDate = new Date();
	var year = myDate.getFullYear();
	var month = myDate.getMonth() + 1;
	if (month < 10) {
		month = "0" + month;
	}
	var curmonth = year + "-" + month;
	return curmonth;
}
//获取当前年周
function _getCurWeek() {
	var myDate = new Date();
	var year = myDate.getFullYear();
    var d1 = new Date(), 
    d2 = new Date(year, 0, 1), 
    d = Math.round((d1 - d2) / 86400000); 
	var curweek = year + "年" + Math.ceil((d + ((d2.getDay() + 1) - 1)) / 7)+"周";
	return curweek;
}

//获取所在月份的第一天
function _getCurMonthFirstDate() {
	var myDate = new Date();
	var year = myDate.getFullYear();
	var month = myDate.getMonth() + 1;
	if (month < 10) {
		month = "0" + month;
	}
	var curdate = year + "-" + month + "-01";
	return curdate;
}

/*获取本周第一天*/
function _getCurWeekFirstDay() {
	var curDate = _getCurDate();
	var week = new Date().getDay(); //周日为0
	var lastDate;
	if (week == 0) { //周日为0
		lastDate = _addOrMinusDate(curDate, -6);
	} else if (week == 1) { //周一为1
		lastDate = _addOrMinusDate(curDate, 0);
	} else if (week == 2) { //周二为2
		lastDate = _addOrMinusDate(curDate, -1);
	} else if (week == 3) { //周三为3
		lastDate = _addOrMinusDate(curDate, -2);
	} else if (week == 4) { //周四为4
		lastDate = _addOrMinusDate(curDate, -3);
	} else if (week == 5) { //周五为5
		lastDate = _addOrMinusDate(curDate, -4);
	} else if (week == 6) { //周六为6
		lastDate = _addOrMinusDate(curDate, -5);
	}
	return lastDate;
}

/*获取本周最后一天*/
function _getCurWeekLastDay() {
	var curDate = _getCurDate();
	var week = new Date().getDay(); //周日为0
	var lastDate;
	if (week == 0) { //周日为0
		lastDate = curDate;
	} else if (week == 1) { //周一为1
		lastDate = _addOrMinusDate(curDate, 6);
	} else if (week == 2) { //周二为2
		lastDate = _addOrMinusDate(curDate, 5);
	} else if (week == 3) { //周三为3
		lastDate = _addOrMinusDate(curDate, 4);
	} else if (week == 4) { //周四为4
		lastDate = _addOrMinusDate(curDate, 3);
	} else if (week == 5) { //周五为5
		lastDate = _addOrMinusDate(curDate, 2);
	} else if (week == 6) { //周六为6
		lastDate = _addOrMinusDate(curDate, 1);
	}
	return lastDate;
}
/*日期加减天数*/
function _addOrMinusDate(curDate, days) {
	var a = new Date() //不能改成var a = new Date(curDate)，否则周计划报错
	a = a.valueOf()
	a = a + days * 24 * 60 * 60 * 1000
	a = new Date(a)

	var year = a.getFullYear();
	var month = a.getMonth() + 1;
	if (month < 10) {
		month = "0" + month;
	}
	var date = a.getDate();
	if (date < 10) {
		date = "0" + date;
	}
	var newdate = year + "-" + month + "-" + date;
	return newdate;
}

String.prototype.replaceAll = function(s1, s2) {
	return this.replace(new RegExp(s1, "gm"), s2);
}

/*判断字符串字节长度*/
function gblen(str) {
	var len = 0;
	if (str == 'undefined' || str == undefined) {
		return len;
	}

	for (var i = 0; i < str.length; i++) {
		if (str.charCodeAt(i) > 127 || str.charCodeAt(i) == 94) {
			len += 2;
		} else {
			len++;
		}
	}
	return len;
}

/**
 *@ title：清表单内容
 *@ Description:清表单内容
 *@ param:objE:表单对象
 *@ throw 抛出异常
 *@ author:严继胜
 *@ date:2015-12-23
 *@ modify Description 修改内容描述
 *@ modify man:修改人
 *@ modify date:修改时间（yyyy-MM-dd）
 */
function clearForm(objE) {
	$(objE).find(':input').each(
		function() {
			switch (this.type) {
				case 'passsword':
				case 'select-multiple':
				case 'select-one':
				case 'text':
				case 'textarea':
					$(this).val('');
					break;
				case 'checkbox':
				case 'radio':
					this.checked = false;
			}
		}
	);
}

/*加载进度条*/
function _loadProgressBar(info) {
	$("<div class=\"datagrid-mask\"></div>").css({
		display: "block",
		width: "100%",
		height: $(window).height()
	}).appendTo("body");
	$("<div class=\"datagrid-mask-msg\"></div>").html(info + "。。。").appendTo("body").css({
		display: "block",
		left: ($(document.body).outerWidth(true) - 190) / 2,
		top: ($(window).height() - 45) / 2
	});
}
//关闭进度条  
function _dispalyProgressBar() {
	$(".datagrid-mask").remove();
	$(".datagrid-mask-msg").remove();
}

//内容显示不全解决
function _setContent(val, row, index) {
	if (typeof(val) == "undefined") {
		val = "";
	}
	return '<span title="' + val + '">' + val + '</span>';
}


//合并行
//调用方式：mergeCellsByField('tt','ITEM_NAME');
function mergeCellsByField(tableID, colList) {
	var ColArray = colList.split(",");
	var tTable = $('#' + tableID);
	var TableRowCnts = tTable.datagrid("getRows").length;
	var tmpA;
	var tmpB;
	var PerTxt = "";
	var CurTxt = "";
	var alertStr = "";
	for (j = ColArray.length - 1; j >= 0; j--) {
		//当循环至某新的列时，变量复位。
		PerTxt = "";
		tmpA = 1;
		tmpB = 0;
		//从第一行（表头为第0行）开始循环，循环至行尾(溢出一位)
		for (i = 0; i <= TableRowCnts; i++) {
			if (i == TableRowCnts) {
				CurTxt = "";
			} else {
				CurTxt = tTable.datagrid("getRows")[i][ColArray[j]];
			}
			if (PerTxt == CurTxt) {
				tmpA += 1;
			} else {
				tmpB += tmpA;
				tTable.datagrid('mergeCells', {
					index: i - tmpA,
					field: ColArray[j],
					rowspan: tmpA,
					colspan: null
				});
				tmpA = 1;
			}
			PerTxt = CurTxt;
		}
	}
}

//试运行结果查看的时候合并指标、参数信息
function mergeCellsByField_customer(tableID, colList) {
	var ColArray = colList.split(",");
	var tTable = $('#' + tableID);
	var TableRowCnts = tTable.datagrid("getRows").length;
	var tmpA;
	var tmpB;
	var PerTxt = "";
	var CurTxt = "";
	var alertStr = "";
	for (j = ColArray.length - 1; j >= 0; j--) {
		//当循环至某新的列时，变量复位。
		PerTxt = "";
		tmpA = 1;
		tmpB = 0;
		//从第一行（表头为第0行）开始循环，循环至行尾(溢出一位)
		for (i = 0; i <= TableRowCnts; i++) {
			if (i == TableRowCnts) {
				CurTxt = "";
			} else {
				CurTxt = tTable.datagrid("getRows")[i][ColArray[j]];
			}
			if (PerTxt == CurTxt) {
				tmpA += 1;
			} else {
				tmpB += tmpA;
				tTable.datagrid('mergeCells', {
					index: i - tmpA,
					field: "RECORD_UUID",
					rowspan: tmpA,
					colspan: null
				});
				tTable.datagrid('mergeCells', {
					index: i - tmpA,
					field: "TARGET_NAME",
					rowspan: tmpA,
					colspan: null
				});
				tTable.datagrid('mergeCells', {
					index: i - tmpA,
					field: "TARGET_FORMULA",
					rowspan: tmpA,
					colspan: null
				});
				tTable.datagrid('mergeCells', {
					index: i - tmpA,
					field: "IF_UNUSUAL",
					rowspan: tmpA,
					colspan: null
				});
				tmpA = 1;
			}
			PerTxt = CurTxt;
		}
	}
}

function getCount(str1, str2) {
	var r = new RegExp(str2, "gi");
	var result = str1.match(r);
	if (result == null || result == 'undefined' || result == undefined) {
		return 0;
	} else {
		return str1.match(r).length;
	}
}
/*四舍五入*/

function _round(amount, score) {
	if (amount != '') {
		return amount.toFixed(score);;
	}
}
/*字符转日期
 str(格式):2015-01-03 19:10:20
*/
function strToDate(str) {
	var tempStrs = str.split(" ");

	var dateStrs = tempStrs[0].split("-");
	var year = parseInt(dateStrs[0], 10);
	var month = parseInt(dateStrs[1], 10) - 1;
	var day = parseInt(dateStrs[2], 10);
	var timeStrs = tempStrs[1].split(":");
	var hour = parseInt(timeStrs[0], 10);
	var minute = parseInt(timeStrs[1], 10);
	var second = parseInt(timeStrs[2], 10);

	var date = new Date(year, month, day, hour, minute, second);
	return date;
}
/*两个日期求天数差值
 str(格式):2015-01-03  2015-01-13
*/
function getDays(strDateStart, strDateEnd) {
	var strSeparator = "-"; //日期分隔符
	var oDate1;
	var oDate2;
	var iDays;
	oDate1 = strDateStart.split(strSeparator);
	oDate2 = strDateEnd.split(strSeparator);
	var strDateS = new Date(oDate1[0], oDate1[1] - 1, oDate1[2]);
	var strDateE = new Date(oDate2[0], oDate2[1] - 1, oDate2[2]);
	iDays = parseInt(Math.abs(strDateS - strDateE) / 1000 / 60 / 60 / 24) //把相差的毫秒数转换为天数 
	return iDays;
}

function forbidBackSpace(e) {
	var ev = e || window.event; //获取event对象 
	var obj = ev.target || ev.srcElement; //获取事件源 
	var t = obj.type || obj.getAttribute('type'); //获取事件源类型 
	//获取作为判断条件的事件类型 
	var vReadOnly = obj.readOnly;
	var vDisabled = obj.disabled;
	//处理undefined值情况 
	vReadOnly = (vReadOnly == undefined) ? false : vReadOnly;
	vDisabled = (vDisabled == undefined) ? true : vDisabled;
	//当敲Backspace键时，事件源类型为密码或单行、多行文本的， 
	//并且readOnly属性为true或disabled属性为true的，则退格键失效 
	var flag1 = ev.keyCode == 8 && (t == "password" || t == "text" || t == "textarea") && (vReadOnly == true || vDisabled == true);
	//当敲Backspace键时，事件源类型非密码或单行、多行文本的，则退格键失效 
	var flag2 = ev.keyCode == 8 && t != "password" && t != "text" && t != "textarea";
	//判断 
	if (flag2 || flag1) return false;
}

//textarea 输入字符长度限制（中英文）
function textCounter(textArea, maxLength) {
	var countByteLength = function(content) {
		var length = 0;
		if (content) {
			for (var i = 0; i < content.length; i++) {
				length++;
				if (content.charCodeAt(i) > 255) {
					length++;
				}
			}
			return length;
		} else {
			return 0;
		}
	};
	var preSubstring = function(preString, preSubLength) {
		var byteLength = 0;
		var newString = new String();
		for (var i = 0; i < preString.length; i++) {
			var c = preString.charAt(i);
			byteLength++;
			if (preString.charCodeAt(i) > 255) {
				byteLength++;
			}
			newString = newString.concat(c);
			if (byteLength >= preSubLength) {
				newString = newString.concat("");
				var lastChar = newString.charCodeAt(newString.length - 1);
				if (lastChar > 255) {
					return newString.substring(0, newString.length - 1);
				}
				return newString;
			}
		}
		if (byteLength < preSubLength) {
			return preString;
		}
	};
	var countLen = countByteLength(textArea.value);
	var dispersion = (maxLength * 2 - countLen) / 2;
	if (dispersion >= 0) {} else {
		textArea.value = preSubstring(textArea.value, maxLength * 2);
	}
}

//如果提供窗口名称，则只打开一个窗口，否则每次打开一个新窗口
//to open a new window without status
var winNum = 0;
var ObjWin = null;

//为了解决xp sp2下不能滚动的问题，将所有的window.open替换成了这个函数
function openwin_xp2(url, winName, type, leftMargin, topMargin, width, height) {
	if (type == "fullscreen") {
		return openwin(url, winName, leftMargin, topMargin, width, height);
	} else {
		return openwin(url, winName);
	}
}
//var winName="openWin";
function openwin(URL, winName, leftMargin, topMargin, winWidth, winHeight) {
	if (ObjWin != null && winName != null) {
		ObjWin.close();
	}
	if (winName != null && leftMargin != null && topMargin != null && winWidth != null && winHeight != null) {
		ObjWin = window.open(URL, winName, "left=" + leftMargin + ", top=" + topMargin + ", width=" + winWidth + ", height=" + winHeight + ", menu=no, status=no, resizable=no, scrollbars=no");
	} else if (winName != null && winWidth != null && winHeight != null) {
		var rossToLeft = (screen.availWidth - winWidth + 200) / 2;
		var rossToTop = (screen.availHeight - winHeight - 4) / 2 - 20;
		ObjWin = window.open(URL, winName, "left=" + rossToLeft + ", top=" + rossToTop + ", width=" + winWidth + ", height=" + winHeight + ", menu=no, status=no, resizable=no, scrollbars=no");
	} else if (winName != null && winWidth != null) {
		var rossToLeft = (screen.availWidth - winWidth + 200) / 2;
		ObjWin = window.open(URL, winName, "left=" + rossToLeft + ", width=" + winWidth + ",menu=no, status=no, resizable=no, scrollbars=yes");
	} else if (winName != null) {
		var rossToLeft = (screen.availWidth - 799) / 2;
		var rossToTop = (screen.availHeight - 599) / 2 - 20;
		ObjWin = window.open(URL, winName, "left=" + rossToLeft + ", top=" + rossToTop + ", width=999,  height=603, menu=no, status=no, resizable=no, scrollbars=yes");
	} else {
		if (winName == null) {
			winNum++;
			winName = "openWin" + winNum;
			//left+=winNum*20;
			//top_a+=winNum*20;
		}
		var rossToLeft = (screen.availWidth - 799) / 2;
		var rossToTop = (screen.availHeight - 599) / 2 - 20;
		window.open(URL, '_blank', "left=" + rossToLeft + ", top=" + rossToTop + ", width=999,  height=603, menu=no, status=no, resizable=no, scrollbars=yes");
	}
	return ObjWin;
}
//获取数据字典数据列表
function getCodeList(code) {
	var codeList = null;
	$.ajax({
		type: "post",
		url: context + '/check/dayCheckInput_findTypeListByCode.do?code=' + code,
		dataType: 'json',
		async: false,
		success: function(data) {
			codeList = data;
		}
	});
	return codeList;
}
/**
 *获取options字符串拼接
 *codeList数组，code已选代码
 **/
function getOptions(codeList, code) {
	var options = "";
	if (codeList != null && codeList.length > 0) {
		for (var i = 0; i < codeList.length; i++) {
			if (codeList[i].BASE_CODE != code) {
				options += "<option value='" + codeList[i].BASE_CODE + "'>" + codeList[i].CODE_NAME + "</option>";
			} else {
				options += "<option selected value='" + codeList[i].BASE_CODE + "'>" + codeList[i].CODE_NAME + "</option>";
			}
		}
	}
	return options;
}

Date.prototype.Format = function(fmt) {
	var o = {
		"M+": this.getMonth() + 1, //月份 
		"d+": this.getDate(), //日 
		"h+": this.getHours(), //小时 
		"m+": this.getMinutes(), //分 
		"s+": this.getSeconds(), //秒 
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
		"S": this.getMilliseconds() //毫秒 
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o) {
		if (new RegExp("(" + k + ")").test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		}
	}
	return fmt;
}