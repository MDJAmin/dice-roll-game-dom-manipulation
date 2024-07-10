document.getElementById('rollBtn').addEventListener('click', rollDice);

function rollDice() {
    let dice = document.getElementById('dice');
    let result = document.getElementById('result');
    result.innerHTML = ''; // Clear the result
    let rolling = true;

    let rollInterval = setInterval(() => {
        if (rolling) {
            let roll = Math.floor(Math.random() * 6) + 1;
            dice.innerHTML = getDiceFace(roll);

            if (roll === 6) {
                clearInterval(rollInterval);
                result.innerHTML = 'You rolled a 6! Congratulations!';
                rolling = false;
            }
        }
    }, 100);
}

function getDiceFace(number) {
    switch (number) {
        case 1: return '⚀';
        case 2: return '⚁';
        case 3: return '⚂';
        case 4: return '⚃';
        case 5: return '⚄';
        case 6: return '⚅';
        default: return '🎲';
    }
}

console.log(number)