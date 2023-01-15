var startButton = document.querySelector("#start")
var timerEl = document.querySelector("#time")
var startScreen = document.querySelector("#start-screen")
var questionScreen = document.querySelector('#questions')
var questionTitle = document.querySelector('#question-title')
var questionChoices = document.querySelector('#choices')
var endScreen = document.querySelector('#end-screen')
var scoreSubmitButton = document.querySelector('#submit')
var finalScoreSpan = document.querySelector('#final-score')

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

var currentRound = 0
var currentRoundContent = Object.values(quizQuestions[currentRound]);

var score = 0

var timeLeft

var currentUser = {}
var highScores

// Function to start timer and count down in seconds

function startTimer() {

    // Resets timer to initial value 
    timeLeft = 61;
    var timerInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            logScore();
        }
    }, 1000);
}


function logScore() {
    console.log("Your score is " + score);
    changeScreenState(questionScreen);
    changeScreenState(endScreen);
    finalScoreSpan.textContent = score;
}

var parsedLocal
var localHighScores

var setHighScore = () => {

    

    // Creates an object in currentUser from score var and initials value
    var initial = document.getElementById('initials').value
    currentUser.initials = initial;
    currentUser.score = score;
    localHighScores = localStorage.getItem("highscores");
    parsedLocal = JSON.parse(localHighScores);
    // if (parsedLocal === null) {
    //     console.log("Highscores is empty");
    //     highScores = currentUser;
    //     localStorage.setItem("highscores", JSON.stringify(highScores));
    // } else {
        
    //     highScores = (parsedLocal += currentUser);
    //     // localStorage.setItem("highscores", JSON.stringify(highScores));
    }
    
    
    // window.location.href = './highscores.html';
// }


// Function for switching visibility of each screen by its data-state value

var changeScreenState = (screen) => {

    // Gets state from dataset and saves to variable 
    var state = screen.getAttribute("data-state");

    // Tests whether that varibale is visible or hidden
    // If its visible, chnages to hidden when function is executed and changes data-sate to 'hidden'.
    if (state == "visible") {
        screen.dataset.state = "hidden";
        screen.setAttribute("style", "display: none");

        // If its hidden, becomes visible when function is executed and data-state changed to visible. 
    } else if (state == "hidden") {
        screen.dataset.state = "visible";
        screen.setAttribute("style", " ");
    }
}


// Function to generate question title and four buttons with quiz questions


var generateQuizQuestions = () => {

    // Sets title to first value in variable, which is title
    questionTitle.textContent = currentRoundContent[0];

    for (var i = 0; i < 4; i++) {

        var btn = document.createElement("button");


        btn.setAttribute("data-index", i);
        btn.textContent = currentRoundContent[i + 1]
        questionChoices.appendChild(btn);

    }
}


// Triggers startQuiz function on clikc of start button 


var startQuiz = () => {
    startTimer();
    changeScreenState(startScreen);
    changeScreenState(questionScreen);
    generateQuizQuestions();
}

// Event listener for click on question buttons

questionChoices.addEventListener("click", function (event) {

    // Sets element to variable when target is clicked
    var element = event.target;

    // Checks if element var is button. Executes code if so. 
    if (element.matches("button") === true) {

        // Stops button from bubbling to parent elements 
        event.stopPropagation();

        // Increments current round by 1 and prints to console
        currentRound++;
        console.log("Current round is: " + currentRound)

        // Creates div element to display CORRECT or INCORRECT
       
        var resultDiv = document.createElement("div");
        resultDiv.setAttribute("data-state", "visible");
        resultDiv.setAttribute("id", "result-div");
        resultDiv.setAttribute("style", "border-top: 5px solid grey");
        questionScreen.appendChild(resultDiv);

        function closeResultMessage() {
            var resultTime;
            resultTime = 1;
            var resultInterval = setInterval(function () {
                resultTime--;
                if (resultTime <= 0)
                    clearInterval(resultInterval);
                console.log("CHANGE");
                questionScreen.removeChild(resultDiv)

            }, 1000)
        }

        closeResultMessage();

        if ((currentRoundContent[5] - 1) == element.dataset.index) {
            score++;
            console.log("Your score is: " + score);
            currentRoundContent = Object.values(quizQuestions[currentRound]);

            // CORRECT MESSAGE TO GO HERE
            resultDiv.textContent = "Correct!"
            // Resets button text to empty string upon click 
            questionChoices.textContent = " ";

            // Reruns code to generate new quiz questions
            generateQuizQuestions();

        } else if ((currentRoundContent[5] - 1) != element.dataset.index) {
            timeLeft = timeLeft - 10
            console.log("Your score is: " + score)
            currentRoundContent = Object.values(quizQuestions[currentRound]);

            // WRONG MESSAGE HERE 
            resultDiv.textContent = "Wrong!"
            questionChoices.textContent = " ";
            generateQuizQuestions();

        }
    }
})


startButton.addEventListener("click", startQuiz);

// Triggers setHighScore() on click of submit button 
scoreSubmitButton.addEventListener("click", setHighScore)

