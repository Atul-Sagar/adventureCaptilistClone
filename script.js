// let money = 0


// let lemonadeStandCost = 10
// let lemonadeStandCount = 0
// let lemonadeReveneue = 1

// function updateMoneyDisplay(){
//     document.getElementById('money').textContent = 'Money : $' + money
// }

// function buyLemonadeStand(){
//     if(money >= lemonadeStandCost){
//         money -= lemonadeStandCost
//         lemonadeStandCount++
//         lemonadeStandCost *= 1.1
//         updateMoneyDisplay()
//         updateLemonadeStand()
//     }
// }

// function updateLemonadeStand(){
//     document.getElementById('lemonade-count').textContent = lemonadeStandCount
//     document.querySelector('#lemonade-stand button').textContent = `Buy Lemonade Stand ($${Math.round(lemonadeStandCost)})`
// }

// function generateRevenue(){
//     money += lemonadeReveneue * lemonadeStandCount
//     updateMoneyDisplay()
// }


// setInterval(() => {
//     generateRevenue
// }, 1000);

// updateMoneyDisplay()
// updateLemonadeStand()


document.addEventListener('DOMContentLoaded', function() {
    let money = 0;
    let lemonadeStandCost = 10;
    let lemonadeStandCount = 0;
    let lemonadeRevenue = 1;

    const moneyDisplay = document.getElementById("money");
    const lemonadeCountDisplay = document.getElementById("lemonade-count");
    const buyButton = document.getElementById("buy-button");

    function updateMoneyDisplay() {
        moneyDisplay.textContent = "Money: $" + money.toFixed(2);
    }

    function updateLemonadeStand() {
        lemonadeCountDisplay.textContent = lemonadeStandCount;
        buyButton.textContent = `Buy Lemonade Stand ($${Math.round(lemonadeStandCost)})`;
    }

    buyButton.addEventListener('click', function() {
        if (money >= lemonadeStandCost) {
            money -= lemonadeStandCost;
            lemonadeStandCount++;
            lemonadeStandCost *= 1.1; // Increase cost by 10%
            updateMoneyDisplay();
            updateLemonadeStand();
        }
    });

    function generateRevenue() {
        money += lemonadeRevenue * lemonadeStandCount;
        updateMoneyDisplay();
    }

    // Generate revenue every second
    setInterval(generateRevenue, 1000);

    // Initial update
    updateMoneyDisplay();
    updateLemonadeStand();
});
