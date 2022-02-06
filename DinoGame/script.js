var dino = document.getElementById("dino");
var cactus = document.getElementById("cactus");
var score = 0;
var scorable = true;
var highscore = localStorage.getItem("highscore");
if(highscore !== null){
    document.getElementById('highestScore').innerHTML = "Highest Score: "+ highscore;
}
else{
    document.getElementById('highestScore').innerHTML = "Highest Score: 0";
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        if(dino.classList != "animate"){
            dino.classList.add("animate");
        }
        setTimeout(function(){
            dino.classList.remove("animate");
        }, 500);
    }
}
var checkScorable = setInterval(() => {
    scorable = true;
}, 1000);
var checkScore = setInterval(() => {
    var cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if (cactusLeft < 30 && cactusLeft > 0 && scorable){
       score+=100;
       document.getElementById('score').innerHTML = "Score: "+ score;
       scorable = false;
    }
}, 10);
var checkDeath = setInterval(() => {
    var dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    var cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if (cactusLeft < 70 && cactusLeft > 30 && dinoTop>=130){
        cactus.style.animation = "none";
        cactus.style.display = "none";
        alert("Game Over\nScore: "+score);
        if(highscore !== null){
            if (score > highscore) {
                localStorage.setItem("highscore", score);      
            }
        }
        else{
            localStorage.setItem("highscore", score);
        }
        score = 0;
        location.reload();
    }
}, 10);