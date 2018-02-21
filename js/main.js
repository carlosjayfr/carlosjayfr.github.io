$(document).ready(function(){
    //Menu hamburguesa
    $(".burger").click(function(){
        $(".menu").animate({width:"toggle"},500);
    });
    $(".cerrar").click(function(){
        $(".menu").animate({width:"toggle"},500); 
    });

    //Menu hamburguesa páginas normales
    $(".burger2").click(function(){
        $(".burger2").toggleClass("abierto");
        $(".menu2").animate({width:"toggle"},500);
        $(".menu2 a").toggleClass("aparicion");
    });

    //Scroll suave
    $("a").on("click", function(){
        if (this.hash !== "") {
            var hash= this.hash;
            $("html, body").animate({
                //Objeto con propiedad y valor
                scrollTop: $(hash).offset().top
            }, 800);
        }
    })

    //Ventana Modal
    $("#open").click(function(){
        $(".overlay, .modal").addClass("visible");
    });
    $("#close, .overlay").click(function(){
        $(".overlay, .modal").removeClass("visible");
    });
        
    $(window).load(function(){
        $(".loader").fadeOut("slow");
    });

});