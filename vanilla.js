let score = 0;
let highscore = 0;
let timeLeft = 10;
let timerInterval;

const startBtn = document.getElementById('startBtn');
const clickBtn = document.getElementById('clickBtn');
const timerEl = document.getElementById('timer');
const scoreEl = document.getElementById('score');
const highscoreEl = document.getElementById('highscore');
const messageEl = document.getElementById('message');

startBtn.addEventListener('click', startGame);
clickBtn.addEventListener('click', incrementScore);

function startGame() {
    score = 0;
    timeLeft = 10;
    scoreEl.textContent = `🎯 Score : ${score}`;
    timerEl.textContent = `⏳ Temps restant : ${timeLeft} s`;
    messageEl.textContent = '';
    clickBtn.disabled = false;
    startBtn.disabled = true;

    timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = `⏳ Temps restant : ${timeLeft} s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

function incrementScore() {
    score++;
    scoreEl.textContent = `🎯 Score : ${score}`;
}

function endGame() {
    clickBtn.disabled = true;
    startBtn.disabled = false;
    messageEl.textContent = `🚀 Temps écoulé ! Tu as fait ${score} clic(s).`;

    if (score > highscore) {
        highscore = score;
        highscoreEl.textContent = `🏅 Record : ${highscore}`;
        messageEl.textContent += " 🎉 Nouveau record !";
    } else if (score >= 30) {
        messageEl.textContent += " 💪 Super rythme !";
    } else if (score >= 15) {
        messageEl.textContent += " 👍 Pas mal, tu peux mieux faire !";
    } else {
        messageEl.textContent += " 😅 Allez, encore un effort !";
    }
}
