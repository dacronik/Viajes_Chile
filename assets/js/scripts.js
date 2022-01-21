$(document).ready(function () {

    /*inicio de smoothscroll*/

    $("a").click(function () { 
        var gato = this.hash
        

        $("html, body").animate(
            {
                scrollTop: $(gato).offset().top - 70
            },
            800
        )
        
    })
    /* fin de smoothscroll*/

    /*alert de boton enviar en contacto*/

    $("#button").click(function () {
        alert('el mensaje fue enviado')
    })
    
})