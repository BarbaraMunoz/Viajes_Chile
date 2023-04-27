//Inicio JQuery
$(document).ready(function(){

//Función que cambia color con scroll 

$(window).scroll(function(){
    if ($(this).scrollTop() > 400) {
        $("#menu").removeClass("navbar1");
    $('#menu').addClass("bg-interno");
    } else {
    
    $("#menu").removeClass("bg-interno");
    $('#menu').addClass("navbar1");
    }

});

//Alerta botón enviar
$("#enviarCorreo").click(function() {
    alert("Su mensaje fue enviado con éxito"); 

});

  //Fin JQuery

});