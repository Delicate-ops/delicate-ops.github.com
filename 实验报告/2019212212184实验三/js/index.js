window.onload = function(){
var mLi = document.getElementsByTagName("li");
for(var i=0; i<mLi.length; i++){
		mLi[0].onmousedown=function(e){

			alert(1);
			this.style.color = "red";
		}
		mLi[1].onmousedown=function(e){
			alert(2);
			var myDate = new Date();
			document.querySelector("h1").innerHTML=(myDate.getFullYear()+"-"+myDate.getMonth()+"-"+myDate.getDay());
		}
    	mLi[2].onmousedown=function(e){
    		alert(3);
			this.classList.add("active");
		}
		mLi[3].onmousedown=function(e){
			alert(4);
			var parent=document.querySelector("ul");
  			parent.removeChild(mLi[7]);
		}
		mLi[4].onmousedown=function(e){
			alert(5);
			window.open("https://www.taobao.com/");
		}
		mLi[5].onmousedown=function(e){
			alert(6);
			var para=document.createElement("li");
  			var node=document.createTextNode("p9");
  			para.appendChild(node);
  			var element=document.querySelector("ul");
  			element.appendChild(para);
		}
		mLi[6].onmousedown=function(e){
			 alert(7);
			 var mbox=document.querySelector(".m-box");
			 mbox.style.width=screen.availWidth;
		}
		mLi[7].onmousedown=function(e){
			alert(8);
			
		}
  }
}