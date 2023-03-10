var highScoresDiv = document.querySelector('#highscores')
var clearButton = document.querySelector('#clear')

var highScores = JSON.parse(localStorage.getItem("highscores"))
console.log(highScores)

var sortedHighScores = highScores.sort(function (a, b) {
    return parseFloat(a.score) - parseFloat(b.score);
}).reverse();








var printHighScore = () => {


    for (var x = 0; x < sortedHighScores.length && x < 10; x++) {
        var li = document.createElement("li");
        var forHighScore = sortedHighScores[x];
        var initialAndScore = "<strong>Initials:</strong> " + forHighScore.initials + '   ' + "<strong>Score: </strong>" + forHighScore.score;
        li.setAttribute("data-index", x);
        li.innerHTML = initialAndScore;
        highScoresDiv.appendChild(li)
    }

}

printHighScore();


clearButton.addEventListener("click", function () {
    var clearAnswer = confirm("Are you sure you want to clear the highscores?");
    console.log(clearAnswer);

    if (clearAnswer === true) {
        localStorage.removeItem("highscores");
        alert("High scores have been cleared!");
        window.location.href = './index.html';
        }
   else {
    printHighScore();
    window.location.href = './highscores.html';
    alert("Highscores are still there!");
   }
})

