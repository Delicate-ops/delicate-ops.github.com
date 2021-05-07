var clientH=450;
var clientW=1450;
var w = '250';
var h = '250';
$(document).ready(function(){
	$(".item").click(function(e){
		//第一个实验
		if(!($('.newitem').length)){
			e.stopPropagation();
			$("body").append('<div class="newitem"></div>');
			$('.newitem').hide();
			$('.newitem').css({'background-color':$(this).css("background-color"),
				'width': w+"px",
				'height': h+"px",
				'top':(clientH-h)/2+"px",
				'left':(clientW-w)/2+"px",
				'z-index':1101,
				'border':20+"px"+" solid "+"#fff",
				'outline':1+"px"+" solid "+"#000",
				'position':"absolute",});	
			$('.newitem').fadeIn(800);	
			$(".g-main").css({'filter': "blur(5px)",});
		}


	});
	$(document).click(function(){

		$(".newitem").fadeOut(800,function(){
			$(".newitem").remove();
		});
		var i=5,num=5/80;
		function danchu(){
			$(".g-main").css({'filter': "blur("+i+"px)",});
			i=i-num;
			console.log(i);
			if(i<=0)
				clearInterval(t);
		}
		if(($('.newitem').length)){
			var t=setInterval(danchu,5);
		}
		
	});
	//第二个实验
	$(".nabtn1").click(function(e){
		$('.nabtn1').css({'background-color':"lightgrey",});
		$('.nabtn2').css({'background-color':"#fff",});
		$('.nabtn3').css({'background-color':"#fff",});
		$('.content').html(1);
	});
	$(".nabtn2").click(function(e){
		$('.nabtn2').css({'background-color':"lightgrey",});
		$('.nabtn1').css({'background-color':"#fff",});
		$('.nabtn3').css({'background-color':"#fff",});
		$('.content').html(2);
	});
	$(".nabtn3").click(function(e){
		$('.nabtn3').css({'background-color':"lightgrey",});
		$('.nabtn2').css({'background-color':"#fff",});
		$('.nabtn1').css({'background-color':"#fff",});
		$('.content').html(3);
	});
     //第三个实验
     $(".addbtn").click(function(e){
     	if(!($(".data").first().length)){
     		$(".addbtn").before('<div class="data"></div>');
     		$(".data").append('<div class="number">1</div>');
     		$(".data").append('<div class="delbtn">Delete</div>');
     	}
     	else{
     		var $td = $(".data").first().clone();       
     		$(".addbtn").before($td);
     		var i = 1;
       		 $(".number").each(function(){       //增加一行后重新更新序号1,2,3......
        		$(this).html(i++);
        })
    }
});
     $(".g-main2").on('click','.delbtn',function(){
     	$(this).parent().remove();
     	var i = 1;
        $(".number").each(function(){       //增加一行后重新更新序号1,2,3......
        	$(this).html(i++);
        })
    });
 });