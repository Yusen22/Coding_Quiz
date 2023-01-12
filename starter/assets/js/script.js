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


// Function for switching visibility of each screen

var changeScreenState = (screen) => {

    // Gets state from dataset and saves to variable 
    var state = screen.getAttribute("data-state");

    // Tests whether that varibale is visible or hidden
    // If its visible, chnages to hidden when function is executed and changes data-sate to 'hidden'.
    if (state == "visible") {
        screen.dataset.state = "hidden";
        screen.setAttribute("style", "display: none");

        // If its hidden, becomes visible when function is exctd and data-state changed to visible. 
    } else if (state == "hidden") {
        screen.dataset.state = "visible";
        screen.setAttribute("style", " ");
    }
}

var generateQuizQuestions = () => {

}


// Triggers startQuiz function on clikc of start button 


var startQuiz = () => {
    startTimer();
    changeScreenState(startScreen);
}

startButton.addEventListener("click", startQuiz)