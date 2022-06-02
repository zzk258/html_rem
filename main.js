window.onload = function(){


var menu = document.getElementById('menu');
var lis = menu.getElementsByTagName('li');
var dls = menu.getElementsByTagName('dl');

var imain = document.getElementById('imain');
var ifm = imain.getElementsByTagName('iframe')[0];


arr =[ [
    {url:'html/alshow/index.html',text:'简介html1'},
    {url:'html/hm/index.html',text:'简介html2'},
    {url:'html/studyhtml/index.html',text:'简介html3'},
    {url:'html/xh/index.html',text:'简介html4'},
    {url:'html/jd/index.html',text:'简介html5'}
],[
    {url:'js/contentFind/index.html',text:'简介s1'},
    {url:'js/contentMove/index.html',text:'简介s2'},
    {url:'js/createDiv/index.html',text:'简介s3'},
    {url:'js/draw/index.html',text:'简介s4'},
    {url:'js/jpgChange/index.html',text:'简介s5'},
    {url:'js/jpgChangeIndex/index.html',text:'简介s6'},
    {url:'js/startMove/index.html',text:'简介s7'},
    {url:'js/swiper/index',text:'简介s8'}
],[
    {url:'jquery/animation/index.html',text:'j1'},
    {url:'jquery/event/index.html',text:'简介j2'},
    {url:'jquery/nav/index.html',text:'简介j3'},
    {url:'jquery/shopCart/index.html',text:'简介j4'},
]]

for (var i = 0; i < lis.length; i++) {

    lis[i].index = i;

    lis[i].onclick = function () {

        for (var i = 0; i < lis.length; i++) {
            lis[i].className = '';
            dls[i].style.display = 'none';
        }

        this.className = 'active';
        dls[this.index].style.display = 'block';
        var x=this.index;

        var dds = dls[this.index].getElementsByTagName('dd');

        for (var i = 0; i < dds.length; i++) {
            dds[i].index = i;
            dds[i].onclick = function () {
                //alert(arr[x][this.index]);
                ifm.src=arr[x][this.index].url;
	document.getElementById('tail').innerHTML= arr[x][this.index].text;
            }
        }

    }

}


lis[0].onclick();
  
  
}