window.onload=function(){





$(".checkA,.checkA1").change(function(){
    $(".checkA,.checkS").prop("checked",$(this).prop("checked"))
});

$(".checkS").change(function(){
   
    if( $(".checkS:checked").length===$(".checkS").length){
        $(".checkA,.checkA1").prop("checked",true)
    }else{
         $(".checkA,checkA1").prop("checked",false)
    }
});

$(".increase").click(function(){ 
   var n = $(this).siblings(".amount").val();
    n++
    $(this).siblings(".amount").val(n);
    //var p2 = $(this).siblings(".subtotal").text().substr(5)
    //var p1 = parseInt($(this).siblings().eq(2).text().substr(4)).toFixed(2);
    var p1=Number($(this).siblings(".price").text().substr(4));
    //alert(typeof(n));
   $(this).siblings(".subtotal").text('С��:��'+(p1*n).toFixed(2));
    getsum();
});

$(".recrease").click(function(){
   var n=$(this).siblings(".amount").val();
    if(n==1){return false}
    n--;
    $(this).siblings(".amount").val(n);
    var p1=Number($(this).siblings(".price").text().substr(4));
    //alert(typeof(n));
   $(this).siblings(".subtotal").text('С��:��'+(p1*n).toFixed(2));
    getsum()
}); 


$(".amount").change(function(){
    var oT=$(this).val();
    var oprice=($(this).siblings(".price").html().substr(4));
$(this).siblings(".subtotal").text("С��:��"+(oprice*oT).toFixed(2));
        getsum();
})

//�ܼ�ģ��
function getsum(){
    var count=0;
    var money=0;

    $(".amount").each(function(i,ele){
        count+=parseInt($(ele).val());
    });

        $(".countA").text("������"+count);

    $(".subtotal").each(function(i,ele){
        money+=parseFloat($(ele).text().substr(4));
    });

        $(".moneyA").text("�ܼ�:"+money.toFixed(2));

}

//ɾ��ģ��

$(".del").click(function(){
    $(this).parent().remove();
      getsum();
});
  
 

$(".clearA").click(function(){
    $(".checkS:checked").parent().remove()
        getsum();
});








  
}