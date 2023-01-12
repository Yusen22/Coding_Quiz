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
    changeStartScreen();
}

// Function for switching visibility of start screen

var changeStartScreen = () => {

    // Gets state from dataset and saves to variable 
    var state = startScreen.getAttribute("data-state");

    // Tests whether that varibale is visible or hidden
    // If its visible, chnages to hidden when function is executed and changes data-sate to 'hidden'.
    if (state == "visible") {
        startScreen.dataset.state = "hidden";
        startScreen.setAttribute("style", "display: none");

        // If its hidden, becomes visible when function is exctd and data-state changed to visible. 
    } else if (state == "hidden") {
        startScreen.dataset.state = "visible";
        startScreen.setAttribute("style", " ");
    }
}


startButton.addEventListener("click", startQuiz)