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
        title: "1. What does JSON stand for?",
        answer1: "1. Janky Stupid Ode to Newts",
        answer2: "2. JavaScript Orientation Node",
        answer3: "3. JavaScience Oscillating Neurons",
        answer4: "4. JavaScript Object Notation",
        correctAnswerIndex: 4
    },
    {
        title: "2. Which HTML element links JavaScript to the DOM?",
        answer1: "1. <link> ",
        answer2: "2. <script> ",
        answer3: "3. <source>",
        answer4: "4. <connect>",
        correctAnswerIndex: 2
    },
    {
        title: "3. Which of these acts as an ID selector in JavaSript?",
        answer1: "1. #selectedID",
        answer2: "2. id.selectedID",
        answer3: "3. .selectedID",
        answer4: "4. =id=selectedID",
        correctAnswerIndex: 1,
    },
    {
        title: "4. What does HTML stand for?",
        answer1: "1. HighText Mark Language",
        answer2: "2. Heavy Light Truly Lasting",
        answer3: "3. HyperText Markup Language",
        answer4: "4. Honduras Team Model Lineup",
        correctAnswerIndex: 3
    },
    {
        title: "5. Which Git command adds a message to the commit?",
        answer1: "1. git commit -msg 'message here'",
        answer2: "2. git commit -m 'message here'",
        answer3: "3. git message 'message here'",
        answer4: "4. git add > this mesage 'message here'",
        correctAnswerIndex: 2
    },
    {
        title: "6. Which example shows the correct way to write a function?",
        answer1: "var newFunction = function() {}",
        answer2: "var newFunction() {}",
        answer3: "function(), newFunction {}",
        answer4: "var newFunction()function {}",
        correctAnswerIndex: 1
    },
    {
        title: "7. What does DOM stand for?",
        answer1: "District On Mutation",
        answer2: "Dimunitive Open Model",
        answer3: "Deregistered On Setting",
        answer4: "Document Object Model",
        correctAnswerIndex: 4
    },
    {
        title: "8. Which is NOT a JavaScript data type?",
        answer1: "Boolean",
        answer2: "String",
        answer3: "CSS",
        answer4: "Number",
        correctAnswerIndex: 3
    },
    {
        title: "9. In CSS, what does the 'padding' property do?",
        answer1: "Compresses the content inside the container",
        answer2: "Creates space around the content within the container",
        answer3: "Creates space outside of the container",
        answer4: "Adds another layer to the selected element",
        correctAnswerIndex: 2
    },
    {
        title: "10. Which of these HTML elements give the largest heading?",
        answer1: "<head>",
        answer2: "<h1>",
        answer3: "<h4>",
        answer4: "<header>",
        correctAnswerIndex: 2
    },
    {
        title: "11. Which HTML element links CSS to the DOM?",
        answer1: "<link>",
        answer2: "<css>",
        answer3: "<script>",
        answer4: "<pattern>",
        correctAnswerIndex: 1
    },
    {
        title: "12. What is the correct HTML for creating a hyperlink?",
        answer1: "<a url='http://www.examplesite.com'>Example Site</a>",
        answer2: "<a name='http://www.examplesite.com'>Example Site</a>",
        answer3: "<hl url='http://www.examplesite.com'>Example Site</hl>",
        answer4: "<a href='http://www.examplesite.com'>Example Site</a>",
        correctAnswerIndex: 4
    },
    {
        title: "13. Which application is used to store repositories and multiple commits?",
        answer1: "GitLab",
        answer2: "GitHub",
        answer3: "Google Repos",
        answer4: "RepoIndex",
        correctAnswerIndex: 1
    },
    {
        title: "14. Which is the correct example of JavaScipt Object",
        answer1: "{property: 'me'}",
        answer2: "[property: 'me']",
        answer3: "<property: 'me'>",
        answer4: "(property: 'me')",
        correctAnswerIndex: 1
    },
    {
        title: "15. A 'confirm' fuction in JavaScript...",
        answer1: "Alert users of provided info",
        answer2: "Ask user for a confirm/deny answer",
        answer3: "Allow user to enter a value",
        answer4: "Turn the screen red",
        correctAnswerIndex: 2
    },
    {
        title: "16. Javascript 'strings' must be contained in...",
        answer1: "Curly brackets",
        answer2: "Parentheses",
        answer3: "Quotation marks",
        answer4: "Repository",
        correctAnswerIndex: 3
    },
    {
        title: "17. Choose the option which is NOT a framework for CSS or JavaScript",
        answer1: "Angular",
        answer2: "Mirage",
        answer3: "React",
        answer4: "Bootstrap",
        correctAnswerIndex: 2
    },
    {
        title: "A professional repository should contain...",
        answer1: "A selfie",
        answer2: "Pictures of the console readings",
        answer3: "A personal message to users",
        answer4: "A quality README",
        correctAnswerIndex: 4
    },
    {
        title: "19. What is the design template that is used by a developer called?",
        answer1: "DesignBoard",
        answer2: "Wireframe",
        answer3: "Markup",
        answer4: "Mood board",
        correctAnswerIndex: 2
    },
    {
        title: "20. How often should you 'git push' your code to a repository?",
        answer1: "At the start of the project",
        answer2: "At the end of the project",
        answer3: "At every change you want to save and maintain",
        answer4: "When the code shows an error message in the console",
        correctAnswerIndex: 3
    },

]

var currentRound = 0
var currentRoundContent = Object.values(quizQuestions[currentRound]);

var score = 0

var timeLeft

var currentUser = {}
var highScores = []

// Function to start timer and count down in seconds

function startTimer() {

    // Resets timer to initial value 
    timeLeft = 61;
    var timerInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            timeLeft = 0;
            timerEl.textContent = timeLeft;
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
    if (localHighScores === null) {
        console.log("Highscores is empty");
        highScores = [currentUser];
        localStorage.setItem("highscores", JSON.stringify(highScores));
    } else {
        console.log("not first user")
        parsedLocal = JSON.parse(localHighScores);
        highScores = parsedLocal;
        highScores.push(currentUser);
        localStorage.setItem("highscores", JSON.stringify(highScores));
    }

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

    }

    if (currentRoundContent === null || currentRoundContent === undefined) {
        logScore();
    }
    else {
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

    } return;
})


startButton.addEventListener("click", startQuiz);

// Triggers setHighScore() on click of submit button 
scoreSubmitButton.addEventListener("click", function () {
    setHighScore();
    window.location.href = './highscores.html';
})

