$(document).ready(function () {
    $(".burgerOpen").on("click", function () {
        $(".navMenu").css({ width: "200px", padding: "20px" });
    });

    $(".burgerClose").on("click", function () {
        $(".navMenu").css({ width: "0px", padding: "0px" });
    });
});




// openNav = () => {
//     document.getElementsByClassName("navMenu").style.width = "200px";
//     document.getElementsByClassName("navMenu").style.padding = "20px";
// }

// closeNav = () => {
//     document.getElementsByClassName("navMenu").style.width = "0";
//     document.getElementsByClassName("navMenu").style.padding = "0";
// }