var clientH=450;
var clientW=1450;
var w = '250';
var h = '250';
window.onload = function(){
	//第一个实验
	var item = document.getElementsByClassName("item");
	for(var i=0; i<item.length; i++){
		item[i].onmousedown=function(e){
			if(!(document.getElementsByClassName("newitem")[0])){
				event.stopPropagation();
				var tbody=document.getElementsByTagName("body")[0];
				var newdiv = document.createElement("div");
				newdiv.className="newitem";
				tbody.appendChild(newdiv);
				console.log(newdiv);
				newdiv.style.opacity=0;
				newdiv.style.position="absolute";
				newdiv.style.width=w+"px";
				newdiv.style.height=h+"px";
				newdiv.style.border=20+"px"+" solid "+"#fff";
				newdiv.style.top=(clientH-h)/2+"px";
				newdiv.style.left=(clientW-w)/2+"px";
				newdiv.style.zIndex=1101;
				newdiv.style.outline=1+"px"+" solid "+"#000";
				var color=window.getComputedStyle(this,null).getPropertyValue("background").split(")")[0]+")";
				newdiv.style.backgroundColor=color;
				var gmain=document.getElementsByClassName("g-main")[0];
				gmain.style.filter="blur(5px)";
				var i=0,num=0.01;
				function danru(){
					newdiv.style.opacity=i;
					i=i+num;
					if(i>=1)
						clearInterval(t);
				}
				if((document.getElementsByClassName("newitem")[0])){
					var t=setInterval(danru,5);
				}
			}
		}
	}
	document.onmousedown=function(e){
		var newitem=document.getElementsByClassName("newitem")[0];
		var gmain=document.getElementsByClassName("g-main")[0];
		var tbody=document.getElementsByTagName("body")[0];
		var i=1,num=0.01;
		var i1=5,num1=5/80;
		function danchu(){
			newitem.style.opacity=i;
			gmain.style.filter="blur("+i1+"px)";
			i1=i1-num1;
			i=i-num;
			if(i<=0){
				clearInterval(t);
				tbody.removeChild(newitem);
			}
		}
		if((document.getElementsByClassName("newitem")[0])){
			var t=setInterval(danchu,5);
		}
	}
	//第二个实验
	var nabtn1=document.getElementsByClassName("nabtn1")[0];
	var nabtn2=document.getElementsByClassName("nabtn2")[0];
	var nabtn3=document.getElementsByClassName("nabtn3")[0];
	var content=document.getElementsByClassName("content")[0];
	nabtn1.onmousedown=function(){
		nabtn1.style.backgroundColor="lightgrey";
		nabtn2.style.backgroundColor="#fff";
		nabtn3.style.backgroundColor="#fff";
		content.innerHTML="1";
	}
	nabtn2.onmousedown=function(){
		nabtn2.style.backgroundColor="lightgrey";
		nabtn1.style.backgroundColor="#fff";
		nabtn3.style.backgroundColor="#fff";
		content.innerHTML="2";
	}
	nabtn3.onmousedown=function(){
		nabtn3.style.backgroundColor="lightgrey";
		nabtn2.style.backgroundColor="#fff";
		nabtn1.style.backgroundColor="#fff";
		content.innerHTML="3";
	}
	//第三个实验
	var addbtn=document.getElementsByClassName("addbtn")[0];
	var delbtn=document.getElementsByClassName("delbtn");
	var data=document.getElementsByClassName("data");
	var gmain2=document.getElementsByClassName("g-main2")[0];
	var number=document.getElementsByClassName("number");
	addbtn.onmousedown=function(){
		if(!(document.getElementsByClassName("data")[0])){
			var newdata = document.createElement("div");
				newdata.className="data";
			var newnumber = document.createElement("div");
				newnumber.className="number";
				newnumber.innerHTML="1";
			var newdelbtn = document.createElement("div");
				newdelbtn.className="delbtn";
				newdelbtn.innerHTML="Delete";
				gmain2.insertBefore(newdata,addbtn);
				newdata.appendChild(newnumber);
				newdata.appendChild(newdelbtn);
		}
		else{
			var td = data[0].cloneNode(true);
			gmain2.insertBefore(td,addbtn);
			var j=1;
			for(var i=0;i<number.length;++i){
				number[i].innerHTML=j;
				j++;
			}
		}
	}
	gmain2.addEventListener('click',function(ev){
		var target = ev.target || ev.srcElement;
    	if (target.className == 'delbtn') {
      		var e = document.getElementsByClassName(target.parentNode.className)[0];
     		 gmain2.removeChild(e);
     		 var j=1;
			for(var i=0;i<number.length;++i){
				number[i].innerHTML=j;
				j++;
			}
    	}
	});
	
}