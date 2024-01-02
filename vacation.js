function vacation(input) {
    let moneyNeeded = Number(input[0]);
    let currentMoney = Number(input[1]);
    let spentMoneyDays = 0;
    let days = 0;
    let index = 2;
    let currentInput = input[index];

    while (currentMoney < moneyNeeded) { 
        days++; 
        index++;

        if (currentInput === "spend") {
            spentMoneyDays++;
            if (spentMoneyDays === 5) {
                console.log("You can't save the money.");
                console.log(days);
                break;
            }
            let moneyToSpend = Number(input[index]); 
            currentMoney = currentMoney - moneyToSpend;
            if (currentMoney < 0) {
                currentMoney = 0;
            }
        } else if (currentInput === "save") {
            spentMoneyDays = 0; // зануляваме поредните дни, които харчи
            let moneyToSave = input[index]; 
            currentMoney = currentMoney + moneyToSave;
        }
        index++; 
        currentInput = input[index];
    }

    if (currentMoney >= moneyNeeded) {
        console.log(`You saved the money for ${days} days.`);
    }
}

vacation(["250", "150",

    "spend",

    "50",

    "spend",

    "50",

    "save",

    "100",

    "save",

    "100"]);