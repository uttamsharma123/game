$(document).ready(function(){
    $("img.try-img").click(function(){
      $(this).attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/OOjs_UI_icon_pause.svg/1200px-OOjs_UI_icon_pause.svg.png");


      setTimeout(function() {
      $("div.try-again").remove()


   },1000)

  });
});
