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

    // $(window).on("scroll", function () {
    //     $(".banner").css({ "background": "green"});
    //     // $(".burgerOpen").css({ color: "white" });
    // });

});