var startButton = document.querySelector("#start")
var timerEl = document.querySelector("#time")
var startScreen = document.querySelector("#start-screen")
var questionScreen = document.querySelector('#questions')
var questionTitle = document.querySelector('#question-title')
var questionChoices = document.querySelector('#choices')
var endScreen = document.querySelector('#end-screen')

var questionNumber = quizQuestions

var quizQuestions = [

    {
        title: "What does JSON stand for?",
        answer1: "1. Janky Stupid Ode to Newts",
        answer2: "2. JavaScript Orientation Node",
        answer3: "3. JavaScience Oscillating Neurons",
        answer4: "4. JavaScript Object Notation",
        correctAnswerIndex: 4
    },
    {
        title: "Which HTML element links JavaScript to the DOM?",
        answer1: "1. <link> ",
        answer2: "2. <script> ",
        answer3: "3. <source>",
        answer4: "4. <connect>",
        correctAnswerIndex: 2
    },
    {
        title: "Which of these acts as an ID selector in JavaSript?",
        answer1: "1. #selectedID",
        answer2: "2. id.selectedID",
        answer3: "3. .selectedID",
        answer4: "4. =id=selectedID",
        correctAnswerIndex: 1,
    },
    {
        title: "What does HTML stand for?",
        answer1: "1. HighText Mark Language",
        answer2: "2. Heavy Light Truly Lasting",
        answer3: "3. HyperText Markup Language",
        answer4: "4. Honduras Team Model Lineup",
        correctAnswerIndex: 3
    },
    {
        title: "Which Git command adds a message to the commit?",
        answer1: "1. git commit -msg 'message here'",
        answer2: "2. git commit -m 'message here'",
        answer3: "3. git message 'message here'",
        answer4: "4. git add > this mesage 'message here'",
        correctAnswerIndex: 2
    },
    {
        title: "Which example shows the correct way to write a function",
        answer1: "var newFunction = function() {}",
        answer2: "var newFunction() {}",
        answer3: "function(), newFunction {}",
        answer4: "var newFunction()function {}",
        correctAnswerIndex: 1
    }

]



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


// Function for switching visibility of each screen by its data-state value

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

    // Function to make the question screen visible
    changeScreenState(questionScreen);



    for (var i = 0; i < 4; i++) {

        questionTitle.

        var li = document.createElement("button");

        li.setAttribute("data-index", i);
        li.textContent = quizQuestions[i][i = i + 1];

    }

}


// Triggers startQuiz function on clikc of start button 


var startQuiz = () => {
    startTimer();
    changeScreenState(startScreen);
    generateQuizQuestions();

}

startButton.addEventListener("click", startQuiz)