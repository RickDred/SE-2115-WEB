var ok = 0;
var btnhover = "#f8cf9e";
$("#changeColor").click(function() {
    if(ok == 0) {
        ok = 1;
        $(".navbar").css("background-color", "#ea5c2c");
        $(".first_section").css("background-color", "#ff7f3e");
        $(".second_section").css("background-color", "#f6d860");
        $("footer").css("background-color", "#94cd40");
        $(".alert").css("background-color", "#e4936b");
        $(".shop_btn").css("background-color", "#e6441c");
        $(".shop_btn:hover").css("background-color", "#f8cf9e");
    }
    else if(ok == 1){
        ok = 0;
        $(".navbar").css("background-color", "#f9f6f1");
        $(".first_section").css("background-color", "#f2ead3");
        $(".second_section").css("background-color", "#f5991a");
        $("footer").css("background-color", "#311313");
        $(".alert").css("background-color", "#fff3cd");
        $(".shop_btn").css("background-color", "bisque");
        $(".shop_btn:hover").css("background-color", "#f8cf9e");
    }
})