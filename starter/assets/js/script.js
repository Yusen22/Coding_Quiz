var startEl = document.getElementById("start")
var timerEl = document.querySelector("#time")



var timeLeft = 60

// Function to start timer and count down in seconds

function startTimer() {
    var timerInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}



document.addEventListener("click", startQuiz()
)



function startQuiz() {
    timeLeft = 60;
    startTimer();
}


function hide_show(option) {
    if (option === hide) {

    } else if (option === show) {

    } else {
        return
    }
}