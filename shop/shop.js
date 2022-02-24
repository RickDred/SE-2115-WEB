$mainTitle = $(".main-title");
$navbar = $(".navbar");

$mainTitle.hide();
$navbar.hide();

window.onload = function() {
    setTimeout(function() {
        $mainTitle.slideDown(600);
    }, 900);

    setTimeout(function(){
        AOS.init();
    }, 1500)

    setTimeout(function () {
        $navbar.slideDown(600);;
    }, 2000);
}