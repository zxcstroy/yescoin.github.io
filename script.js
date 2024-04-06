let notcoinCount = 0;
let boostCost = 10;

const clickButton = document.getElementById('clickButton');
const notcoinCountDisplay = document.getElementById('notcoinCount');
const boostButton = document.getElementById('boostButton');
const boostCostDisplay = document.getElementById('boostCost');
const exchangeButton = document.getElementById('exchangeButton');

clickButton.addEventListener('click', () => {
    notcoinCount++;
    notcoinCountDisplay.innerHTML = notcoinCount;
});

boostButton.addEventListener('click', () => {
    if (notcoinCount >= boostCost) {
        notcoinCount -= boostCost;
        boostCost *= 2;
        notcoinCountDisplay.innerHTML = notcoinCount;
        boostCostDisplay.innerHTML = boostCost;
    } else {
        alert('Not enough Notcoins to buy Boost!');
    }
});

exchangeButton.addEventListener('click', () => {
    notcoinCount *= 2; // Просто для примера удвоения Notcoins
    notcoinCountDisplay.innerHTML = notcoinCount;
});
