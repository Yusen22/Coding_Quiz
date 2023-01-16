var highScoresDiv = document.querySelector('#highscores')

var highScores = JSON.parse(localStorage.getItem("highscores"))
console.log(highScores)





var printHighScore = () => {

    if (highScores < 11) {
        for (var x = 0; x < highScores.length; x++) {
            var li = document.createElement("li");
            var forHighScore = highScores[x];
            var initialAndScore = "Initials: " + forHighScore.initials + "   " + "Score: " + forHighScore.score;
            li.setAttribute("data-index", x);
            li.textContent = initialAndScore;
            highScoresDiv.appendChild(li)
        }
    }
}

printHighScore();

