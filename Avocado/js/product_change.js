$(function(){
  //이지수 조장 부분
  $("#second_3").children().hide();
  $("#second_3").children().eq(0).show();

  
  $("#sec_sub1").click(function(){
  $("#second_3").children().hide();

    $("#sec_box_1").show();
  });

  $("#sec_sub2").click(function(){
  $("#second_3").children().hide();

    $("#sec_box_2").show();
  });

  $("#sec_sub3").click(function(){
  $("#second_3").children().hide();

    $("#sec_box_3").show();
  });

  $("#sec_sub4").click(function(){
  $("#second_3").children().hide();

    $("#sec_box_4").show();
  });

});