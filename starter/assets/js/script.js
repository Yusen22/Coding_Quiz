var startButton = document.getElementById("start")
var timerEl = document.querySelector("#time")



var timeLeft

// Function to start timer and count down in seconds

function startTimer() {
    timeLeft = 60;
    var timerInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}




var startQuiz = () => {
  
}


function hide_show(option) {
    if (option === hide) {

    } else if (option === show) {

    } else {
        return
    }
}

// startButton.addEventListener("click", startTimer())