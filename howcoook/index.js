 $("#swapbtn").click(function (){
  let theme=document.getElementById("ldmode");
  if(theme.getAttribute("href")=="proj.css"){
    theme.href="dl.css";
  }
  else{
    theme.href="proj.css";
  }
});



var x = document.getElementById("submitbtn");
x.addEventListener("mouseover", myColorOn);
x.addEventListener("mouseout", myColorOff);
x.addEventListener("click", playMusic);
function myColorOn(){
x.style.backgroundColor = "yellow";
}
function myColorOff(){
x.style.backgroundColor="white";
}
