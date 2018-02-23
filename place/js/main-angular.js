var app = angular.module('imgApp', []);
var typeNum=0;
app.controller('imgController', function ($scope, $http) {
	$scope.choose=function(indexs){
		switch(indexs){
			case 1:
			    $http.get("sofalist").success(function (data) {
			        $scope.List=data;
					$("#img-sofa").removeClass("filtergray");
					typeNum=1;
			    });
				break;
			case 2:
			    $http.get("teapoylist").success(function (data) {
			        $scope.List=data;
					$("#img-teapoy").removeClass("filtergray");
					typeNum=2;
			    });
				break;
			case 3:
			    $http.get("lamplist").success(function (data) {
			        $scope.List=data;
					$("#img-lamp").removeClass("filtergray");
					typeNum=3;
			    });
				break;
			case 4:
			    $http.get("floorlist").success(function (data) {
			        $scope.List=data;
					$("#img-floor").removeClass("filtergray");
					typeNum=4;
			    });
				break;
			case 5:
			    $http.get("walllist").success(function (data) {
			        $scope.List=data;
					$("#img-wall").removeClass("filtergray");
					typeNum=5;
			    });
				break;
			case 6:
			    $http.get("curtainlist").success(function (data) {
			        $scope.List=data;
					$("#img-curtain").removeClass("filtergray");
					typeNum=6;
			    });
				break;
		}
		$(".type-style").text("款式");
		$(".type-color").text("颜色")
		$(".model .ub").css({
			'margin-right':'20px'
		})
		$(".styletype").removeClass("hide")
		$(".furnituretype").addClass("hide");
		setTimeout(function(){
			var html='<div class="mask ub ub-pc ub-ac"><img src="images/ok.png"></div>';
			$(".model-style div:nth-child(2) img").before(html)
		},500)

	}
})
/*家具单个样式展示*/
$(document).on("click",".model-style div",function(){
	if(!$(this).hasClass("back")){
		$(".model-style div").remove(".mask");
		$(this).prepend('<div class="mask ub ub-pc ub-ac"><img src="images/ok.png"></div>');
		var src = $(this).children("img").attr("src");
		if(typeNum==1){
			$("#img-sofa").attr("src", src);
		}
		else if(typeNum==2){
			$("#img-teapoy").attr("src", src);
		}
		else if(typeNum==3){
			$("#img-lamp").attr("src", src);
		}
		else if(typeNum==4){
			$("#img-floor").attr("src", src);
		}
		else if(typeNum==5){
			$("#img-wall").attr("src", src);
		}
		else{
			$("#img-curtain").attr("src", src);
		}
		
	}
	var imgsofa=$("#img-sofa").attr("src")
	var imgteapoy=$("#img-teapoy").attr("src")
	var imglamp=$("#img-lamp").attr("src")
	var imgfloor=$("#img-floor").attr("src")
	var imgwall=$("#img-wall").attr("src")
	var imgcurtain=$("#img-curtain").attr("src")
	$.post('',{
		'imgsofa':imgsofa,
		'imgteapoy':imgteapoy,
		'imglamp':imglamp,
		'imgfloor':imgfloor,
		'imgwall':imgwall,
		'imgcurtain':imgcurtain
	},function(data){

	})
	//console.log("沙发："+imgsofa+"茶几："+imgteapoy+"灯具："+imglamp+"地板："+imgfloor+"墙纸："+imgwall+"窗帘："+imgcurtain)
})
//家具单个颜色展示
$(document).on("click",".model-color div",function(){
	if(!$(this).hasClass("back")){
		$(".model-color div").remove(".mask");
		$(this).prepend('<div class="mask ub ub-pc ub-ac"><img src="images/ok.png"></div>');
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
