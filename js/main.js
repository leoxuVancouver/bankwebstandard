// JavaScript Document
$(function(){
//根据<div class="nav_i"></div>中的数字，决定导航栏哪一项为当前状态
	var nav_i=$(".nav_i").text();
	$(".nav ul li").eq(nav_i).find("a").addClass("on");
	
//主导航hover
	$(".nav ul li a").hover(function(){
		$(this).css("background-position","0px -60px");		
	},function(){
		$(this).css("background-position","0px 0px");
	});
	$(".nav ul li a.on").hover(function(){
		$(this).css("background-position","0px -90px");
	},function(){
		$(this).css("background-position","0px -30px");
	});
	


	
//焦点广告蓝条半透明
	$(".focus_ad .title_bg").css("opacity","0.5");
//读取第一张图的title
$(".focus_ad .title").text($("#ad_img_box img:eq(0)").attr("title"));
//焦点广告轮显
	var focus_time=4000;//轮显时间
	var marign_time=500;//移动时间
	var button_li=0;
	var focus_sI=setInterval(focus_mouseover,focus_time);
	function focus_mouseover(){//模拟鼠标经过数字按钮
		if(button_li<$(".focus_ad .button li").size()-1)
		{button_li++;}
		else
		{button_li=0}		
		$(".focus_ad .button").find("li").eq(button_li).trigger("mouseover");
	}	
	$(".focus_ad .button li").mouseover(function(){//鼠标经过数字按钮时发生
		$(this).addClass("on").siblings().removeClass("on");
		var focus_on=$(".focus_ad .button li").index($(this));
		$("#ad_img_box").animate({"margin-left":focus_on*-590+"px"},marign_time);
		$(".focus_ad .title").text($("#ad_img_box").find("img").eq(focus_on).attr("title"));
		button_li=focus_on;
	}).mouseout(function(){
		$("#ad_img_box").stop(true,true);
	});
	
	
	
//tab切换
	$(".tab_100px li").mouseover(function(){
		$(this).addClass("on").siblings().removeClass("on");
		var this_i=0;
		this_i=$(this).parent().find("li").index($(this));
		//this_i=$(".tab_100px li").index($(this));
		$(this).parent().siblings(".body").find(".tab_content").eq(this_i).removeClass("hide").siblings(".tab_content").addClass("hide");
	});

	
	
//给需要鼠标悬停变换的按钮加上class="hover"。如果标签已有clss，将hover与原class值并列，用空格隔开。如：class="class1"，则改为class="class1 hover"。
	$(".hover").mouseover(function(){		
		if($(this).attr("src"))//如果这个按钮是图片或图片类型的按钮。通过改变src地址来实现变换。
		{
			var hover_src=$(this).attr("src");		
			var new_src=hover_src.replace(".gif","_hover.gif");
			$(this).attr("src",new_src);
		}
		if($(this).attr("val")!="")//如果这个按钮是通过css定义背景，按钮上的文字不是图片，则改变文字的颜色。
			$(this).css("color","#F0F5FB");
		if($(this).val()=="")//如果这个按钮是通过css定义背景，按钮上的文字是背景图片，则改变背景图片的position。
		{			
			$(this).css("background-position","0px -20px");
		}
	});
	$(".hover").mouseout(function(){
		if($(this).attr("src"))//如果这个按钮是图片或图片类型的按钮。通过改变src地址来实现变换。
		{
			var hover_src=$(this).attr("src");		
			var new_src=hover_src.replace("_hover.gif",".gif");
			$(this).attr("src",new_src);
		}
		if($(this).attr("val")!="")//如果这个按钮是通过css定义背景，按钮上的文字不是图片，则改变文字的颜色。
			$(this).css("color","#fff");
		if($(this).val()=="")//如果这个按钮是通过css定义背景，按钮上的文字是背景图片，则改变背景图片的position。
		{
			$(this).css("background-position","0px 0px");
		}
	});
	
//搜索输入框focus清除默认提示语
	$(".search_keyword").focus(function(){
		if($(this).val()=="请输入关键字")
		$(this).val("");	
	});
	$(".search_keyword").blur(function(){
		if($(this).val()=="")
		$(this).val("请输入关键字");	
	});
	
	//左侧折叠菜单
	$(".module_a_227px .module_a_227px_body .content_box .content ul li .fold").click(function(){
		$(this).toggleClass("fold_on");
		$(this).parent().children("ul").toggleClass("hide");
	});
	$(".module_a_227px .module_a_227px_body .content_box .content ul li").click(function(){
		if($(this).find("ul").size()>0)
		{}
		else
		{
		$(".module_a_227px .module_a_227px_body .content_box .content ul li").removeClass("this");
		$(this).addClass("this");
		}
	});
	$(".module_a_227px .module_a_227px_body .content_box .content ul li ul li div").click(function(){		
		$(this).parent().children("ul").toggleClass("hide");		
	});	
	
//载入结束
});