let yescoinCount = localStorage.getItem('yescoinCount') ? parseInt(localStorage.getItem('yescoinCount')) : 0;
let boostCost = 10;
let boostMultiplier = 1.3;

const clickButton = document.getElementById('clickButton');
const yescoinCountDisplay = document.getElementById('yescoinCount');
const boostButton = document.getElementById('boostButton');
const boostCostDisplay = document.getElementById('boostCost');

yescoinCountDisplay.innerHTML = yescoinCount;

clickButton.addEventListener('click', () => {
    yescoinCount += boostMultiplier;
    yescoinCountDisplay.innerHTML = yescoinCount;
    localStorage.setItem('yescoinCount', yescoinCount.toString());
});

boostButton.addEventListener('click', () => {
    if (yescoinCount >= boostCost) {
        yescoinCount -= boostCost;
        boostCost = Math.round(boostCost * 1.7);
        boostMultiplier *= 1.3;
        yescoinCountDisplay.innerHTML = yescoinCount;
        boostCostDisplay.innerHTML = boostCost;
        localStorage.setItem('yescoinCount', yescoinCount.toString());
    } else {
        alert('нехватка YesCoin🚨🚨!');
    }
});
