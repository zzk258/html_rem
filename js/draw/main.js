window.onload = function(){

var odiv=document.getElementById("div1");
var odiv2=document.getElementById("div2");  
/*
odiv.onmousedown=function(ev){
   var ev=ev || event;
   var disX=ev.clientX-odiv.offsetLeft;
   var disY=ev.clientY-odiv.offsetTop;

if(odiv.setCapture){odiv.setCapture()} //chrome��֧�ָ÷�����

document.onmousemove=function(ev){
   var ev=ev || event;  
  odiv.style.left=ev.clientX-disX+'px';
  odiv.style.top=ev.clientY-disY+'px';
}

document.onmouseup=function(ev){
  document.onmousemove=document.onmouseup=null;
  if(odiv.relaseCapture){odiv.relaseCapture()}
}

 return false;  //��ֹĬ����Ϊ ��׼IE����Ч���Ǳ�׼��ie8��������Ч������������Ҫ�� setCapture();

}

*/

//���з�װ�Ĳ���


drag(odiv);
drag(odiv2);

function drag (obj){

obj.onmousedown=function(ev){
   var ev=ev || event;
   var disX=ev.clientX-this.offsetLeft;
   var disY=ev.clientY-this.offsetTop;

if(obj.setCapture){obj.setCapture()} //chrome��֧�ָ÷�����

document.onmousemove=function(ev){
   var ev=ev || event;  
   var L=ev.clientX-disX;
   var T=ev.clientY-disY;
  
  if(L<100){L=0}else if(L>document.documentElement.clientWidth-obj.offsetWidth-100){L=document.documentElement.clientWidth-obj.offsetWidth};
  
  if(T<100){T=0}else if(T>document.documentElement.clientHeight-obj.offsetHeight-100){T=document.documentElement.clientHeight-obj.offsetHeight}
  
  obj.style.left=L+'px';
  obj.style.top=T+'px';
 
}

document.onmouseup=function(ev){
  document.onmousemove=document.onmouseup=null;
  if(obj.relaseCapture){obj.relaseCapture()}
}

 return false;  //��ֹĬ����Ϊ ��׼IE����Ч���Ǳ�׼��ie8��������Ч������������Ҫ�� setCapture();

}

}
  
  
  
}