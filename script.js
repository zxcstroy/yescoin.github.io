let yescoinCount = localStorage.getItem('yescoinCount') ? parseInt(localStorage.getItem('yescoinCount')) : 0;
let boostCost = localStorage.getItem('boostCost') ? parseInt(localStorage.getItem('boostCost')) : 10;
let boostMultiplier = localStorage.getItem('boostMultiplier') ? parseFloat(localStorage.getItem('boostMultiplier')) : 1.3;
let dailyTaskCompleted = localStorage.getItem('dailyTaskCompleted') === 'true' ? true : false;

const clickButton = document.getElementById('clickButton');
const yescoinCountDisplay = document.getElementById('yescoinCount');
const boostButton = document.getElementById('boostButton');
const boostCostDisplay = document.getElementById('boostCost');
const dailyTaskButton = document.getElementById('dailyTaskButton');

yescoinCountDisplay.innerHTML = Math.round(yescoinCount);
boostCostDisplay.innerHTML = Math.round(boostCost);

clickButton.addEventListener('click', () => {
    yescoinCount += Math.round(boostMultiplier);
    yescoinCountDisplay.innerHTML = Math.round(yescoinCount);
    localStorage.setItem('yescoinCount', yescoinCount.toString());
});

boostButton.addEventListener('click', () => {
    if (yescoinCount >= boostCost) {
        yescoinCount -= boostCost;
        boostCost = Math.round(boostCost * 1.7);
        boostMultiplier *= 1.3;
        yescoinCountDisplay.innerHTML = Math.round(yescoinCount);
        boostCostDisplay.innerHTML = Math.round(boostCost);
        localStorage.setItem('yescoinCount', yescoinCount.toString());
        localStorage.setItem('boostCost', boostCost.toString());
        localStorage.setItem('boostMultiplier', boostMultiplier.toString());
    } else {
        alert('Не хватка YesCoin🚨🚨!');
    }
    updateBoostButtonColor();
});

dailyTaskButton.addEventListener('click', () => {
    if (!dailyTaskCompleted) {
        yescoinCount += 50;
        yescoinCountDisplay.innerHTML = Math.round(yescoinCount);
        localStorage.setItem('yescoinCount', yescoinCount.toString());
        dailyTaskCompleted = true;
        localStorage.setItem('dailyTaskCompleted', 'true');
        dailyTaskButton.disabled = true;
        dailyTaskButton.style.background = 'grey';
    }
});

function updateBoostButtonColor() {
    if (yescoinCount >= boostCost) {
        boostButton.style.background = 'green';
    } else {
        boostButton.style.background = 'grey';
    }
}

updateBoostButtonColor();
if (dailyTaskCompleted) {
    dailyTaskButton.disabled = true;
    dailyTaskButton.style.background = 'grey';
}
