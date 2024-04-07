let yescoinCount = parseInt(localStorage.getItem('yescoinCount')) || 0;
let boostCost = parseInt(localStorage.getItem('boostCost')) || 10;
let boostMultiplier = parseFloat(localStorage.getItem('boostMultiplier')) || 1.7;
let taskClicked = JSON.parse(localStorage.getItem('taskClicked')) || false;
let minersCount = parseInt(localStorage.getItem('minersCount')) || 0;
let minerCost = parseInt(localStorage.getItem('minerCost')) || 500;
let autoMinerIncome = 1000;

const clickButton = document.getElementById('clickButton');
const boostButton = document.getElementById('boostButton');
const boostCostDisplay = document.getElementById('boostCost');
const taskButton = document.getElementById('taskButton');
const buyMinerButton = document.getElementById('buyMinerButton');
const yescoinCountDisplay = document.getElementById('yescoinCount');

const updateButtonColor = () => {
    if (yescoinCount >= boostCost) {
        boostButton.classList.remove('disabled');
    } else {
        boostButton.classList.add('disabled');
    }
};

setInterval(() => {
    yescoinCount += minersCount * autoMinerIncome;
    yescoinCountDisplay.innerHTML = Math.round(yescoinCount);
    localStorage.setItem('yescoinCount', yescoinCount);
}, 60000);

clickButton.addEventListener('click', () => {
    yescoinCount += Math.round(boostMultiplier);
    yescoinCountDisplay.innerHTML = Math.round(yescoinCount);
    localStorage.setItem('yescoinCount', yescoinCount);
});

boostButton.addEventListener('click', () => {
    if (yescoinCount >= boostCost) {
        yescoinCount -= boostCost;
        boostCost = Math.round(boostCost * 2);
        boostMultiplier *= 2;
        yescoinCountDisplay.innerHTML = Math.round(yescoinCount);
        boostCostDisplay.innerHTML = boostCost;
        updateButtonColor();
        localStorage.setItem('yescoinCount', yescoinCount);
        localStorage.setItem('boostCost', boostCost);
        localStorage.setItem('boostMultiplier', boostMultiplier);
    } else {
        alert('Недостаточно YesCoin для покупки улучшения!');
    }
});

taskButton.addEventListener('click', () => {
    if (!taskClicked) {
        yescoinCount += 50;
        taskClicked = true;
        yescoinCountDisplay.innerHTML = Math.round(yescoinCount);
        localStorage.setItem('yescoinCount', yescoinCount);
        localStorage.setItem('taskClicked', taskClicked);
    }
});

buyMinerButton.addEventListener('click', () => {
    if (yescoinCount >= minerCost) {
        yescoinCount -= minerCost;
        minerCost *= 2;
        minersCount++;
        yescoinCountDisplay.innerHTML = Math.round(yescoinCount);
        buyMinerButton.innerHTML = `Купить Автомайнер (Цена: ${minerCost})`;
        localStorage.setItem('yescoinCount', yescoinCount);
        localStorage.setItem('minerCost', minerCost);
        localStorage.setItem('minersCount', minersCount);
    }
    if (yescoinCount < minerCost) {
        buyMinerButton.classList.add('disabled');
    } else {
        buyMinerButton.classList.remove('disabled');
    }
    localStorage.setItem('yescoinCount', yescoinCount);
});

// Изначальная проверка при загрузке страницы
updateButtonColor();
