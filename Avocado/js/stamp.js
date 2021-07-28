$(function(){
    $(".not").click(function(){
        alert("이미 날짜가 지났습니다.");
    });    
    $(".yet").click(function(){
        alert("아직 참여하실 수 없습니다.");
    });   
    $(".today").click(function(){
        $(this).addClass("stamp");
    });
});