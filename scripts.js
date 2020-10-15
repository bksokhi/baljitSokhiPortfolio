$(document).ready(function () {


AOS.init();
 


    $(".burgerOpen").on("click", function () {
        $(".navMenu").css({ width: "200px", padding: "20px" });
        $(".burgerOpen").css({ display: "none" });
    });

    $(".burgerClose").on("click", function () {
        $(".navMenu").css({ width: "0px", padding: "0px" });
        $(".burgerOpen").css({ display: "block" });
    });

    $(window).on("scroll", function () {
        $(".banner").css({ background: "rgba(13, 13, 13, 0.8)", color: "white", transition: "2s"});
        $(".burgerOpen").css({ color: "white" });
    });

});