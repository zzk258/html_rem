window.onload=function(){





$(".btn").click(function(){
    var tx=$(".content").val();
    var li=$("<li>"+tx+"<a href='javascript:;'>ɾ��</a></li>")
   $(".sendbar").prepend(li);
})

$("ul").on("click","a",function(){
    $(this).parent().slideUp();

    console.log($("ul li").html());
    //alert(1)
})






  
}