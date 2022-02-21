var ok = false;
var btn = document.getElementById("changeColor");
btn.addEventListener("mouseover", function() {
    document.getElementById("theme").classList.toggle("show");
})

window.onclick = function(event) {
    if (!event.target.matches(".themes")) {
        if (document.getElementById("theme").classList.contains('show')) {
            document.getElementById("theme").classList.remove('show');
        }
      
    }
}