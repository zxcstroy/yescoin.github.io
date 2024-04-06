let yescoinCount = 0;
let boostCost = 10;
let boostMultiplier = 1.7;
let taskCompleted = false;
let taskClicked = false;

const clickButton = document.getElementById('clickButton');
const yescoinCountDisplay = document.getElementById('yescoinCount');
const boostButton = document.getElementById('boostButton');
const boostCostDisplay = document.getElementById('boostCost');
const taskButton = document.getElementById('taskButton');

clickButton.addEventListener('click', () => {
    yescoinCount += boostMultiplier;
    yescoinCountDisplay.innerHTML = yescoinCount;
});

boostButton.addEventListener('click', () => {
    if (yescoinCount >= boostCost) {
        yescoinCount -= boostCost;
        boostCost = Math.round(boostCost * 2);
        boostMultiplier *= 2;
        yescoinCountDisplay.innerHTML = yescoinCount;
        boostCostDisplay.innerHTML = boostCost;
    } else {
        alert('Недостаточно YesCoin для покупки улучшения!');
    }
});

taskButton.addEventListener('click', () => {
    if (!taskClicked) {
        yescoinCount += 50;
        taskClicked = true;
        yescoinCountDisplay.innerHTML = yescoinCount;
        taskButton.classList.add('disabled');
    }
});
