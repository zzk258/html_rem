window.onload = function(){
 
    
odiv=document.getElementsByTagName('div')[0];

odiv.onclick=function(){
    startMove(odiv,{left:300},function(){
        startMove(odiv,{left:0})
    }

    )
}

           
        
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