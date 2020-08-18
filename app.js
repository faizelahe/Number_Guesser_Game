const guessBtn = document.querySelector('#guess-value');
const input = document.querySelector('#guess-input');
const message = document.querySelector('.message');
let guessesLeft = 3;
const randomNumber = Math.floor(Math.random() * 10 + 1);

guessBtn.addEventListener('click', function () {

    const num = randomNumber;
    let guess = Number(input.value);

    message.textContent = '';

    if (guess > 10 || guess < 1) {
        input.style.borderColor = 'red';
        message.textContent = 'Please enter a number between 1 and 10';
        message.style.color = 'red';
    } else if (guess === num) {
        input.disabled = true;
        input.style.borderColor = 'green';
        message.textContent = 'Correct, you win!';
        message.style.color = 'green';
        guessBtn.value = 'Play Again';
        guessBtn.id = 'play-again';
        input.disabled = true;
        document.querySelector('#play-again').addEventListener('click', function () {
            location.reload()
        });
    } else {
        if (guessesLeft !== 1) {
            guessesLeft -= 1
            input.style.borderColor = 'red';
            message.textContent = `Wrong, please try again. ${guessesLeft} guesses remaining`;
            message.style.color = 'red';
        } else {
            input.style.borderColor = 'red';
            input.disabled = true;
            message.textContent = `You lose... the correct answer was ${num}`;
            message.style.color = 'red';
            guessBtn.value = 'Play Again';
            guessBtn.id = 'play-again';
            document.querySelector('#play-again').addEventListener('click', function () {
                location.reload()
            });
        }
    }
});