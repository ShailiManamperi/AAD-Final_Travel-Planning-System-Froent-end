$("#login").css("display","none");
$("#dashboardone").css("display","block");
$("#guide").css("display","none");
$("#dash").css("display","block");

document.getElementById("loginbtn").addEventListener('click',function (){
    $("#login").css("display","none");
    $("#dashboardone").css("display","block");
});

document.getElementById("btn-guide").addEventListener('click',function (){
    $("#login").css("display","none");
    $("#dashboardone").css("display","block");
    $("#dash").css("display","none");
    $("#guide").css("display","block");
});
