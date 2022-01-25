$( document ).ready(function() {
 
    $('body').append('<link rel="preload" href="./images/interior.jpg" as="image" ><div class="landing_PopupWrapper"><div class="landing_Popup"><a href="#"><img class="imgforPopup" src="./images/interior.jpg" alt="Regnant "></a><button class="popUpClose"></button></div></div>')
    $(".landing_PopupWrapper").addClass(" popUp_zoomIn");
    $(".landing_Popup .popUpClose").on("click",function(){
      $(".landing_PopupWrapper").hide();
    });
  
})