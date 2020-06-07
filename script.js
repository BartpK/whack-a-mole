alert("Welcome to Whack-a-Mole. Your goal is to whack as many moles as you can within 30 seconds. The timer starts when you hit 'Start'. Best of luck!");

var loopsCompleted = 0;
var countDown = 31;
var selectMole;

document.querySelector('#startbutton').addEventListener("click", start);
document.querySelector("#refreshbutton").addEventListener("click", restartGame);
document.querySelector('#mole1').addEventListener("click", addPoint);
document.querySelector('#mole2').addEventListener("click", addPoint);
document.querySelector('#mole3').addEventListener("click", addPoint);
document.querySelector('#mole4').addEventListener("click", addPoint);
document.querySelector('#mole5').addEventListener("click", addPoint);
document.querySelector('#mole6').addEventListener("click", addPoint);
document.querySelector('#mole7').addEventListener("click", addPoint);
document.querySelector('#mole8').addEventListener("click", addPoint);
document.querySelector('#mole0').addEventListener("click", addPoint);

function hideOnClick() {
    alert("youclicked");
}

function start() {
    document.querySelector('#startbutton').disabled = true;
    counter();
    showHideLoop();
}

function counter() {
    countDown = countDown - 1;
    document.getElementById("counter").innerHTML = countDown;

    if (countDown <= 0) {
        var hitRate = ((score / loopsCompleted) * 100)
        alert("Time's up! You hit " + score + " moles with an accuracy of " + hitRate + "%. Hit the 'Restart Game' button to try again.");
        document.querySelector("#refreshbutton").style.display = "block";

    } else if (countDown <= 10) {
        document.getElementById("counter").className = "counter2";
        setTimeout(counter, 1000);
    } else {
        setTimeout(counter, 1000);
    }
}

function showHideLoop() {
    var selectMole = Math.floor(Math.random() * 8);

    showMole();

    function showMole() {
        document.getElementById(`mole${selectMole}`).style.visibility = "visible";
    }

    loopsCompleted = loopsCompleted + 1;

    var randomDelay = Math.floor(Math.random() * 1000);

    setTimeout(hideMole, randomDelay);

    function hideMole() {
        document.getElementById(`mole${selectMole}`).style.visibility = "hidden";

        if (countDown <= 0) {
            return;
        } else {
            showHideLoop();
        }
    }
}

var score = 0;

function addPoint() {
    score = score + 1;
    document.getElementById("score").innerHTML = score;

    for (i = 0; i < 9; i++) {
        document.getElementById(`mole${i}`).style.visibility = "hidden";
    }
}

function restartGame() {
    location.reload();
}

