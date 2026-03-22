
let cnum = Math.floor(Math.random()* 50);
let attempt=0;
document.getElementById("guess").addEventListener("click", function() { 
const inum= Number(document.getElementById("num").value);
const msg= document.getElementById("check1");
const attemptdiv = document.getElementById("attempt_count");


if(inum === cnum) {
   msg.textContent="correct!";
   msg.style.color= "green";
   resetGame();
} else if (inum < cnum) {
 msg.textContent="too low";
 msg.classList.add("animation");
} else {
    msg.textContent="too high";
     msg.classList.add("animation");
}

attempt++;
attemptdiv.textContent="Attempts: "+ attempt;

if (attempt>=5) {
    msg.textContent="Try Again!";
    resetGame();
}

msg.classList.remove("animation");
void msg.offsetWidth;
msg.classList.add("animation");



function resetGame() {
    cnum = Math.floor(Math.random() * 50) + 1; // new random number
    attempt = 0;
    attemptDiv.textContent = "Attempts: 0";
    msg.textContent = "🎯 New Game! Start guessing...";
    msg.style.color = "black";
    input.value = "";
}

});






