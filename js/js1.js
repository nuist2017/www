window.onload = writeMessage;
function writeMessage() {
	document.getElementById("jst1").innerHTML = "Hello, world!";
//识别是否为安卓终端
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	if(!isAndroid){$("#jst1").text("非安卓终端，软件版本不存在")}
}

$(document).ready(function(){
	
  $("#b1").click(function(){
    var txt="";
    txt+="Document width/height: " + $(document).width();
    txt+="x" + $(document).height() + "\n";
    txt+="Window width/height: " + $(window).width();
    txt+="x" + $(window).height();
    alert(txt);
  });
  
  $("#tog1").click(function(){
	$("#zs").toggle(500);
	//$("#jst1").text("Hahahah^")::测试text() 

  });
  
  $("#pic1").click(function(){
	$(this).hide(1000);
	//点击隐藏图片
  });
    
});