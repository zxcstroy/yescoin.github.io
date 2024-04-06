const yescoinCount = document.getElementById('yescoinCount');
const boostCost = document.getElementById('boostCost');
const boostButton = document.getElementById('boostButton');
const dailyTaskButton = document.getElementById('dailyTaskButton');

// Имитация количества YesCoin
let yescoins = 0;
let upgradeCost = 10;
let taskCompleted = false;

updateButtons();

document.getElementById('clickButton').addEventListener('click', function() {
    yescoins++;
    yescoinCount.textContent = yescoins;
    updateButtons();
});

boostButton.addEventListener('click', function() {
    if (yescoins >= upgradeCost) {
        yescoins -= upgradeCost;
        yescoinCount.textContent = yescoins;
        upgradeCost += 10;
        boostCost.textContent = upgradeCost;
        updateButtons();
    }
});

dailyTaskButton.addEventListener('click', function() {
    taskCompleted = true;
    updateButtons();
});

function updateButtons() {
    if (yescoins >= upgradeCost) {
        boostButton.classList.add('purple-button');
    } else {
        boostButton.classList.remove('purple-button');
    }

    if (!taskCompleted) {
        dailyTaskButton.classList.add('purple-button');
    } else {
        dailyTaskButton.classList.remove('purple-button');
    }
}
