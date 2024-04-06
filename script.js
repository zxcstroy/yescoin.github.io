let yescoinCount = 0;
let boostCost = 10;
let boostMultiplier = 1.3;
let taskCompleted = false;

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
        boostCost = Math.round(boostCost * 1.7);
        boostMultiplier *= 1.3;
        yescoinCountDisplay.innerHTML = yescoinCount;
        boostCostDisplay.innerHTML = boostCost;
        boostButton.classList.remove('disabled');
    } else {
        alert('Недостаточно YesCoin для покупки улучшения!');
        boostButton.classList.add('disabled');
    }
});

taskButton.addEventListener('click', () => {
    if (!taskCompleted) {
        yescoinCount += 50;
        taskCompleted = true;
        yescoinCountDisplay.innerHTML = yescoinCount;
        taskButton.classList.add('disabled');
    }
});
