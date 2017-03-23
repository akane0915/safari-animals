$(function(){
  $(".btn").click(function(){
    if ($(this).val() === "1") {
      $("#giraffe").show();
    } else if ($(this).val() === "2") {
      $("#elephant").show();
    } else {
      $("#hippo").show();
    }
  });
});
