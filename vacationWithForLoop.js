function vacation(input) {
    let needMoney = Number(input[0]);
    let currentMoney = Number(input[1]);
    let spendDays = 0;
    let days = 0;

    for (let index = 2; index < input.length; index++) {
        let currentInput = input[index];  // save or spend
        index++;
        let money = Number(input[index]); // получаваме парите
        days++;

        if (currentInput === "spend") {
            spendDays++;

            if (spendDays === 5) {
                console.log("You can't save the money.");
                console.log(days);
                break;
            }
            currentMoney = currentMoney - money;
            if (currentMoney < 0) {
                currentMoney = 0;
            }
        } else if (currentInput === "save") {
            spendDays = 0;
            currentMoney = currentMoney + money;
        }
    }
    if (currentMoney >= needMoney) {
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

    "100"])