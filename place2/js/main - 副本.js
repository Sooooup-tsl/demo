$(function(){
	//before房型列表
	var html='';
    $.ajax({
	    type: "get",
	    dataType:'json',
	    url: "roomlist",
        success  : function(data) { 
            for(i=0;i<data.length;i++){
            	if(i==0){
            		html+='<img src="'+data[i].img+'" roomid='+data[i].id+' class="obj">';
            	}else{
            		html+='<img src="'+data[i].img+'" roomid='+data[i].id+'>';
            	}

            }
            $("#smallroom").html(html);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
		   }
	});
})
var typeNum=0;
var defa;
function choose(){
	var html='';
    furid=$("#furnitureid").val();//家具id
	$.ajax({
	    type: "get",
	    dataType:'json',
	    url: "furid"+furid,
        success  : function(data) { 
            for(i=0;i<data.length;i++){
            	if(i==0){
            		html+='<div class="ub type-style obj" materialid="'+data[i].id+'">'+data[i].material+'</div>';
            	}
                else{
                	html+='<div class="ub type-style" materialid="'+data[i].id+'">'+data[i].material+'</div>';
                }
                
            }
            $("#material").html(html);
			sucai();
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
		   }
	});
	typeNum=furid;

	switch(indexs){
		case 1:
		    $.ajax({
			    type: "get",
			    dataType:'json',
			    url: "furid1",
                success  : function(data) { 
                    for(i=0;i<data.length;i++){
                    	if(i==0){
		            		html+='<div class="ub type-style obj" materialid="'+data[i].id+'">'+data[i].material+'</div>';
		            	}
                        else{
                        	html+='<div class="ub type-style" materialid="'+data[i].id+'">'+data[i].material+'</div>';
                        }
                        
                    }
                    $("#material").html(html);
					sucai();
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
				   }
			});
			typeNum=1;
			break;
		case 2:
		    $.ajax({
			    type: "get",
			    dataType:'json',
			    url: "materialList2",
                success  : function(data) { 
                    for(i=0;i<data.length;i++){
                    	if(i==0){
		            		html+='<div class="ub type-style obj" materialid="'+data[i].id+'">'+data[i].material+'</div>';
		            	}
                        else{
                        	html+='<div class="ub type-style" materialid="'+data[i].id+'">'+data[i].material+'</div>';
                        }
                        
                    }
                    $("#material").html(html);
                },
                error : function() {  
                    alert('fail');  
                }  
			});
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
			    url: "furid6",
                success  : function(data) { 
                    for(i=0;i<data.length;i++){
                    	if(i==0){
		            		html+='<div class="ub type-style obj" materialid="'+data[i].id+'">'+data[i].material+'</div>';
		            	}
                        else{
                        	html+='<div class="ub type-style" materialid="'+data[i].id+'">'+data[i].material+'</div>';
                        }
                        
                    }
                    $("#material").html(html);
					sucai();
                },
                error : function() {  
                    alert('fail');  
                }  
			});
			//点击查看详情
			/*$("#img-curtain").after('<div class="circle-tips"><img src="images/circle.png" id="circle" class="shake"><img src="images/tips.png" id="tips"></div>')*/
			typeNum=6;
			break;
	}
	$(".styletype").removeClass("hide")
	$(".furnituretype").addClass("hide");
	/*var html='<div class="mask ub ub-pc ub-ac"><img src="images/ok.png"></div>';
	$(".model-style div:nth-child(2) img").before(html)*/
}

//素材图片
function sucai(){
    furid=$("#furnitureid").val();//家具id
    $.ajax({
        type: "get",
        dataType:'json',
        //url: "sofalist?furid="+furid+"&mateid="+mateid,
        url: "furid"+furid+"mateid1",
        success  : function(data) { 
            var html='';
            for(i=0;i<data.length;i++){
                html+='<div class="material-smallimg">';
                html+='<div style="background: url('+data[i].img+');background-size: cover;background-position: -49px -50px;" class="matertal-bg-img" sofaid="'+data[i].id+'"></div>';
                html+='</div>';
            }
            $("#material-img").html(html);
        },
        error: function(data) {
        }
    });
}
/*素材展示*/
$(document).on("click",".model .material-smallimg",function(){
		if(furid==""){
            Util.info2("请选择家具");
            return
        }
		$(".model div").remove(".mask");
		$(".model .material-smallimg").removeClass("bord");
		$(this).addClass("bord")
		$(this).prepend('<div class="mask ub ub-pc ub-ac"><img src="images/c2.png"></div>');
		var str = $(this).find(".matertal-bg-img").css("background-image");
		var src=str.substring(str.indexOf("(")+1,str.indexOf(")"));
		var sofaid = $(this).find(".matertal-bg-img").attr("sofaid")
		//材质类型
        $("#typeid").val(sofaid);
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
