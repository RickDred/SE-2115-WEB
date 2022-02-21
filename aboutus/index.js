var numberOfButtons = document.querySelectorAll("button").length;
for(var i = 0; i<numberOfButtons; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        alert("Thank you for your question")
        var audio = new Audio('sound/submit.mp3');
audio.play();
        ;
    });
    };

