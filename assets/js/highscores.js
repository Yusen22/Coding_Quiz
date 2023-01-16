var highScoresDiv = document.querySelector('#highscores')

var highScores = JSON.parse(localStorage.getItem("highscores"))
console.log(highScores)

var sortedHighScores = highScores.sort(function(a, b) {
    return parseFloat(a.score) - parseFloat(b.score);
}).reverse();








var printHighScore = () => {

    
        for (var x = 0; x < 10; x++) {
            var li = document.createElement("li");
            var forHighScore = sortedHighScores[x];
            var initialAndScore = "Initials: " + forHighScore.initials + "   " + "Score: " + forHighScore.score;
            li.setAttribute("data-index", x);
            li.textContent = initialAndScore;
            highScoresDiv.appendChild(li)
        }
    
}

printHighScore();

