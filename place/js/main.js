
var typeNum=0;
var defa;
function choose(indexs){
	var html='';
	html+='<div class="ub ub-ac ub-pc back"><img src="images/back.png"></div>';
	switch(indexs){
		case 1:
		    $.ajax({
			    type: "get",
			    dataType:'json',
			    url: "sofalist",
                success  : function(data) { 
                    for(i=0;i<data.length;i++){
                    	html+='<div class="ub ub-pc ub-ac"><img src="'+data[i].img+'" sofaid="'+data[i].id+'"></div>';
                    }
                    $(".model-style").html(html);
					$(".model-style .ub").animate({
						'margin-right':'20px'
					})
					//默认选择
					var d='<div class="mask ub ub-pc ub-ac"><img src="images/ok.png"></div>';
					$(".model-style div:nth-child(2) img").before(d)
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
				 alert(XMLHttpRequest.status);
				 alert(XMLHttpRequest.readyState);
				 alert(textStatus);
				   }
			});
			$("#img-sofa").removeClass("filtergray");
			typeNum=1;
			break;
		case 2:
		    $.ajax({
			    type: "get",
			    dataType:'json',
			    url: "/wechat.php/Deco/furniture?id=2",
                success  : function(data) { 
                    for(i=0;i<data.length;i++){
                    	html+='<div class="ub ub-pc ub-ac"><img src="'+data[i].img+'" sofaid="'+data[i].id+'"></div>';
                    }
                    $(".model-style").html(html);
					$(".model-style .ub").animate({
						'margin-right':'20px'
					})
					//默认选择
					var d='<div class="mask ub ub-pc ub-ac"><img src="images/ok.png"></div>';
					$(".model-style div:nth-child(2) img").before(d)
                },
                error : function() {  
                    alert('fail');  
                }  
			});
			$("#img-teapoy").removeClass("filtergray");
			typeNum=2;
			break;
		case 3:
		    $.ajax({
			    type: "get",
			    dataType:'json',
			    url: "/wechat.php/Deco/furniture?id=3",
                success  : function(data) { 
                    for(i=0;i<data.length;i++){
                    	html+='<div class="ub ub-pc ub-ac"><img src="'+data[i].img+'" sofaid="'+data[i].id+'"></div>';
                    }
                    $(".model-style").html(html);
					$(".model-style .ub").animate({
						'margin-right':'20px'
					})
					//默认选择
					var d='<div class="mask ub ub-pc ub-ac"><img src="images/ok.png"></div>';
					$(".model-style div:nth-child(2) img").before(d)
                },
                error : function() {  
                    alert('fail');  
                }  
			});
			$("#img-lamp").removeClass("filtergray");
			typeNum=3;
			break;
		case 4:
		    $.ajax({
			    type: "get",
			    dataType:'json',
			    url: "/wechat.php/Deco/furniture?id=4",
                success  : function(data) { 
                    for(i=0;i<data.length;i++){
                    	html+='<div class="ub ub-pc ub-ac"><img src="'+data[i].img+'" sofaid="'+data[i].id+'"></div>';
                    }
                    $(".model-style").html(html);
					$(".model-style .ub").animate({
						'margin-right':'20px'
					})
					//默认选择
					var d='<div class="mask ub ub-pc ub-ac"><img src="images/ok.png"></div>';
					$(".model-style div:nth-child(2) img").before(d)
                },
                error : function() {  
                    alert('fail');  
                }  
			});
			$("#img-floor").removeClass("filtergray");
			typeNum=4;
			break;
		case 5:
		    $.ajax({
			    type: "get",
			    dataType:'json',
			    url: "/wechat.php/Deco/furniture?id=5",
                success  : function(data) { 
                    for(i=0;i<data.length;i++){
                    	html+='<div class="ub ub-pc ub-ac"><img src="'+data[i].img+'" sofaid="'+data[i].id+'"></div>';
                    }
                    $(".model-style").html(html);
					$(".model-style .ub").animate({
						'margin-right':'20px'
					})
					//默认选择
					var d='<div class="mask ub ub-pc ub-ac"><img src="images/ok.png"></div>';
					$(".model-style div:nth-child(2) img").before(d)
                },
                error : function() {  
                    alert('fail');  
                }  
			});
			$("#img-wall").removeClass("filtergray");
			typeNum=5;
			break;
		case 6:
		    $.ajax({
			    type: "get",
			    dataType:'json',
			    url: "sofalist",
                success  : function(data) { 
                	defa=data[0].id;
                    for(i=0;i<data.length;i++){
                    	html+='<div class="ub ub-pc ub-ac"><img src="'+data[i].img+'" sofaid="'+data[i].id+'"></div>';
                    }
                    $(".model-style").html(html);
					$(".model-style .ub").animate({
						'margin-right':'20px'
					})
					//默认选择
					var d='<div class="mask ub ub-pc ub-ac"><img src="images/ok.png"></div>';
					$(".model-style div:nth-child(2) img").before(d)
                },
                error : function() {  
                    alert('fail');  
                }  
			});
			$("#img-curtain").removeClass("filtergray");
			$("#img-curtain").after('<div class="circle-tips"><img src="images/circle.png" id="circle" class="shake"><img src="images/tips.png" id="tips"></div>')
			typeNum=6;
			break;
	}
	$(".type-style").text("款式");
	$(".type-color").text("颜色")
	$(".styletype").removeClass("hide")
	$(".furnituretype").addClass("hide");
	/*var html='<div class="mask ub ub-pc ub-ac"><img src="images/ok.png"></div>';
	$(".model-style div:nth-child(2) img").before(html)*/

}
/*家具单个样式展示*/
$(document).on("click",".model-style div",function(){
	if(!$(this).hasClass("back")){
		$(".model-style div").remove(".mask");
		$(this).prepend('<div class="mask ub ub-pc ub-ac"><img src="images/ok.png"></div>');
		var src = $(this).children("img").attr("src");
		var sofaid = $(this).children("img").attr("sofaid");
		if(typeNum==1){
			$("#img-sofa").attr("src", src);
			$("#img-sofa").attr("sofaid", sofaid);
		}
		else if(typeNum==2){
			$("#img-teapoy").attr("src", src);
			$("#img-teapoy").attr("sofaid", sofaid);
		}
		else if(typeNum==3){
			$("#img-lamp").attr("src", src);
			$("#img-lamp").attr("sofaid", sofaid);
		}
		else if(typeNum==4){
			$("#img-floor").attr("src", src);
			$("#img-floor").attr("sofaid", sofaid);
		}
		else if(typeNum==5){
			$("#img-wall").attr("src", src);
			$("#img-wall").attr("sofaid", sofaid);
		}
		else{
			$("#img-curtain").attr("src", src);
			$("#img-curtain").attr("sofaid", sofaid);
		}
		
	}
})
function save(){
	var imgsofa=$("#img-sofa").attr("sofaid")
	var imgteapoy=$("#img-teapoy").attr("sofaid")
	var imglamp=$("#img-lamp").attr("sofaid")
	var imgfloor=$("#img-floor").attr("sofaid")
	var imgwall=$("#img-wall").attr("sofaid")
	var imgcurtain=$("#img-curtain").attr("sofaid")||defa
	var user_id=$("#user_id").val();
	if(Util.isEmpty(imgcurtain)){
		Util.info2("请选择窗帘");
		return;
	}
	$.post('http://demo.mo2.cn/wechat.php/Deco/save',{
		'user_id':user_id,
		'imgsofa':imgsofa,
		'imgteapoy':imgteapoy,
		'imglamp':imglamp,
		'imgfloor':imgfloor,
		'imgwall':imgwall,
		'imgcurtain':imgcurtain
	},function(data){
		alert(data)
	})
	console.log("沙发："+imgsofa+"茶几："+imgteapoy+"灯具："+imglamp+"地板："+imgfloor+"墙纸："+imgwall+"窗帘："+imgcurtain)
}

//家具单个颜色展示
$(document).on("click",".model-color div",function(){
	if(!$(this).hasClass("back")){
		$(".model-color div").remove(".mask");
		$(this).prepend('<div class="mask ub ub-pc ub-ac"><img src="ok.png"></div>');
	}
})
//返回
$(document).on("click",".back",function(){
	$(".model .ub").animate({
		'margin-right':'-120px'
	})
	$(".styletype").addClass("hide")
	$(".furnituretype").removeClass(" hide").addClass("fadeInLeft")
	$(".type-style").text("");
	$(".type-color").text("")
})
$(document).on("click",".two-type .type-style",function(){
	$(".two-type div").removeClass("obj")
	$(this).addClass("obj");
	$(".model-style").removeClass("hide");
	$(".model-color").addClass("hide");
})
$(document).on("click",".two-type .type-color",function(){
	$(".two-type div").removeClass("obj")
	$(this).addClass("obj");
	$(".model-style").addClass("hide");
	$(".model-color").removeClass("hide");
})
