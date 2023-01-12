var startButton = document.querySelector("#start")
var timerEl = document.querySelector("#time")
var startScreen = document.querySelector("#start-screen")



var timeLeft

// Function to start timer and count down in seconds

function startTimer() {
    timeLeft = 61;
    var timerInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}




var startQuiz = () => {
  startTimer();
  hideStart();
}

function hideStart() {
    startScreen.setAttribute("style", "display: none;");
}


function hide_show(option) {
    if (option === hide) {

    } else if (option === show) {

    } else {
        return
    }
}

startButton.addEventListener("click", startQuiz)