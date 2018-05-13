$(document).ready(function () {
    $("#fold").click(function () {
        $("#fold_p").fadeOut(function () {
            $("#fold_p").text(($("#fold_p").text() == 'Fear Of The Night') ? 'Miedo De La Noche' : 'Fear Of The Night').fadeIn();
        })
    })
});

