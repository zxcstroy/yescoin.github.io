let yescoinCount = 0;
let boostCost = 10;
let boostMultiplier = 1.7;
let taskClicked = false;
let minersCount = 0;
let minerCost = 500;
let autoMinerIncome = 1000;

const clickButton = document.getElementById('clickButton');
const yescoinCountDisplay = document.getElementById('yescoinCount');
const boostButton = document.getElementById('boostButton');
const boostCostDisplay = document.getElementById('boostCost');
const taskButton = document.getElementById('taskButton');
const buyMinerButton = document.getElementById('buyMinerButton');

setInterval(() => {
    yescoinCount += minersCount * autoMinerIncome;
    yescoinCountDisplay.innerHTML = Math.round(yescoinCount);
}, 60000);

clickButton.addEventListener('click', () => {
    yescoinCount += Math.round(boostMultiplier);
    yescoinCountDisplay.innerHTML = Math.round(yescoinCount);
});

boostButton.addEventListener('click', () => {
    if (yescoinCount >= boostCost) {
        yescoinCount -= boostCost;
        boostCost = Math.round(boostCost * 2);
        boostMultiplier *= 2;
        yescoinCountDisplay.innerHTML = Math.round(yescoinCount);
        boostCostDisplay.innerHTML = boostCost;
    } else {
        alert('Недостаточно YesCoin для покупки улучшения!');
    }
});

taskButton.addEventListener('click', () => {
    if (!taskClicked) {
        yescoinCount += 50;
        taskClicked = true;
        yescoinCountDisplay.innerHTML = Math.round(yescoinCount);
        taskButton.classList.add('disabled');
    }
});

buyMinerButton.addEventListener('click', () => {
    if (yescoinCount >= minerCost) {
        yescoinCount -= minerCost;
        minerCost *= 2;
        minersCount++;
        yescoinCountDisplay.innerHTML = Math.round(yescoinCount);
        buyMinerButton.innerHTML = `Купить автомайнер (Цена: ${minerCost})`;
    }
});
