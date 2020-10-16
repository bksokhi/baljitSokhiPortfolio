$(document).ready(function () {
    AOS.init();
    
    $(".burgerOpen").on("click", function () {
        $(".navMenu").css({ width: "250px", padding: "20px" });
        $(".burgerOpen").css({ display: "none" });
    });

    $(".burgerClose").on("click", function () {
        $(".navMenu").css({ width: "0px", padding: "0px" });
        $(".burgerOpen").css({ display: "block" });
    });

   

    // $(".burgerOpen").hover(function () {
    //     $(this).css({ color: "#b4c6be" });
    // }, function () {
    //     $(this).css({ color: "black" });
    // });

    // $(window).on("scroll", function () {
    //     $(".banner").css({ background: "rgba(13, 13, 13, 0.8)", color: "white", transition: "2s"});
    //     $(".burgerOpen").css({ color: "white" });
    // });
});