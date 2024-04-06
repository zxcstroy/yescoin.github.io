const yescoinCount = document.getElementById('yescoinCount');
const boostCost = document.getElementById('boostCost');
const boostButton = document.getElementById('boostButton');
const dailyTaskButton = document.getElementById('dailyTaskButton');
const clickButton = document.getElementById('clickButton');

// Имитация количества YesCoin, факт выполнения задания и нажатия на кнопку монеты
let yescoins = 0;
let upgradeCost = 10;
let taskCompleted = false;
let taskClicked = false;

updateButtons();

clickButton.addEventListener('click', function() {
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
    if (!taskClicked) {
        yescoins += 50;
        yescoinCount.textContent = yescoins;
        taskClicked = true;
        updateButtons();
    }
});

function updateButtons() {
    if (yescoins >= upgradeCost) {
        boostButton.classList.remove('disabled');
    } else {
        boostButton.classList.add('disabled');
    }

    if (taskClicked) {
        dailyTaskButton.classList.add('disabled');
    }
}
