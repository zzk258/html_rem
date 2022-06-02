window.onload = function(){
 
    


var focus=document.querySelector('.focus');
var ul=focus.querySelector('ul');
var ol=focus.querySelector('ol');
var pre=focus.querySelector('.pre');
var next=focus.querySelector('.next');

var colorA=['red','yellow','blue'];


var focusWidth=parseInt(getStyle(focus,'width'))
//��̬����СԲ��
for(var i=0;i<ul.children.length;i++){
    ul.children[i].style.background=colorA[i%3]
    //console.log(1)
    var addli=document.createElement('li'); 
    addli.setAttribute('index',i);
    ol.appendChild(addli);
   // ol.children[i].index=i;
    ol.children[i].addEventListener('click',function(){
        var getIndex=(this.getAttribute('index'));

        var step = focusWidth * getIndex;

        startMove(ul,{left:-step});

        for(var i=0;i<ol.children.length;i++){
            ol.children[i].className='';
        }
        this.className="current";
    })
}

 
//���õ�һ��li ����Ϊ�� current
ol.children[0].className='current';

//��¡��һ�Ų嵽���,���ڶ�̬���� ul > li ����ΪԲ����������ϣ����ﲻ�����СԲ��
var first = ul.children[0].cloneNode(true);
ul.appendChild(first);

var num=0;
next.addEventListener('click',function(){
    if(num>=ul.children.length-1){
        ul.style.left=0+'px';
        num=0;
    }
        num++;
    startMove(ul,{left:-num*focusWidth}); 
})


pre.addEventListener('click',function(){
    if(num<=0){
        ul.style.left=focusWidth*(ul.children.length-1)+'px';
        num=ul.children.length-1;
    }
        num--;
    startMove(ul,{left:-num*focusWidth}); 
})



















function getStyle(obj,attr){
            return getComputedStyle ? getComputedStyle(obj,false)[attr] : obj.currentStyle[attr];
        }
        function startMove(obj,json,fn) {
            clearInterval(obj.timer);
            obj.timer = setInterval(function () {
                var bStop = true;
                for(attr in json){
                    // 1. ȡ�õ�ǰ��ֵ��������widht��height��opacity�ȵ�ֵ��
                    var objAttr = 0;
                    if(attr == "opacity"){
                        objAttr = Math.round(parseFloat(getStyle(obj,attr))*100);
                    }else{
                        objAttr = parseInt(getStyle(obj,attr));
                    }
                    // 2.�����˶��ٶ�
                    var iSpeed = (json[attr] -objAttr)/10;
                        iSpeed = iSpeed>0 ?Math.ceil(iSpeed):Math.floor(iSpeed);
                    // 3. ��������˶��Ƿ񵽴�Ŀ��
                    if(objAttr != json[attr]){
                        bStop = false;
                    }
                    if(attr == "opacity"){
                        obj.style.filter = 'alpha(opacity:'+(objAttr+iSpeed)+')';
                        obj.style.opacity = (objAttr+iSpeed)/100;
                    }else{
                        obj.style[attr] =  objAttr+iSpeed+'px';// ��Ҫ��.����������ʽ�ĳ�[]
                    }
                }
                if(bStop){ // ��ʾ�����˶�������Ŀ��ֵ
                    clearInterval(obj.timer);
                    if(fn){
                        fn();
                    }
                }
            },30);
        }


  
  
}