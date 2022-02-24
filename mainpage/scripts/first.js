window.onload = function() {
    sert
}


$("#firsttheme").mouseover(function() {
    $(this).css("background", "linear-gradient(180deg,#f9f6f1,#f2ead3,#f5991a,#311313)");
});
$("#firsttheme").mouseout(function() {
    $(this).css("background", "#ffffff");
});
$("#firsttheme").click(function() {
    $("#cssfile").attr("href", "style.css");
});

document.getElementById("secondtheme").addEventListener('mouseover', function() {
    this.style.background="linear-gradient(14deg, rgba(68,73,73,1) 0%, rgba(244,81,30,1) 100%)";
});
document.getElementById("secondtheme").addEventListener('mouseout', function() {
    this.style.background="#ffffff";
});
document.getElementById("secondtheme").addEventListener('click', function() {
    document.getElementById("cssfile").setAttribute("href","darkstyle.css");
});


$(".dropdown-item").click(function() {
    const audio = new Audio("sounds\\pop.mp3");
    audio.play();
});



// linear-gradient(14deg, rgba(68,73,73,1) 0%, rgba(244,81,30,1) 100%);
// linear-gradient(180deg, rgba(83,80,80,1) 28%, rgba(25,25,25,1) 100%);
// linear-gradient(238deg, rgba(232,245,240,1) 0%, rgba(50,13,13,1) 0%);