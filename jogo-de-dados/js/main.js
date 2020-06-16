var main = new function () {

    this.validar = function () {

    };

    this.raffle = function () {
        return Math.floor(Math.random() * 6 + 1);
    };

    this.play = function () {

        $("#show-result").animate({ width: 'toggle' }, 350);

        var number1 = main.raffle();
        var number2 = main.raffle();

        main.showDadosResult(number1, number2);

        // $('#dado1').popover("show");

        $("#pontuacao").fadeOut(1000, function () {
            $("#total-pontos").text(number1 + number2).show();
        }).fadeIn(1000);
    };

    this.showDadosResult = function (number1, number2) {
        var color = $("#color").val();
        $("#dado1").fadeOut(1000, function () {
            $("#dado1").attr("src", "img/" + color + "/" + number1 + ".png");
            $("#dado2").attr("src", "img/" + color + "/" + number2 + ".png");
        }).fadeIn(1000);

        function doMessage(value) {
            return "Aqui vocë fez " + value + " ponto(s)";
        }

        $('#dado1').popover({ title: "Hey....", content: doMessage(number1), trigger: "hover", placement: "left" })
            .attr("data-content", doMessage(number1));

        $('#dado2').popover({ title: "Hey....", content: doMessage(number2), trigger: "hover", placement: "right" })
            .attr("data-content", doMessage(number2));

        $("#show-result").animate({ width: 'toggle' }, 800);
    };

    this.showHideLoading = function () {

        $("#loading").toggleClass("show hide");

        if ($("#loading").hasClass("show"))
        $("#doPlay").addClass("disabled");
    else
        $("#doPlay").removeClass("disabled");
    };
};

$(function () {

    $("#doPlay").click(function () {
        main.showHideLoading();

        setTimeout(function () {
            main.play();
            main.showHideLoading();
        }, 1000);
    });
});
// (function () {
//     main.init();
// })();