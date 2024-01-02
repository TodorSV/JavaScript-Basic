function accountBalance(input) {
    let index = 0;
    let command = input[index];
    let totalSum = 0;

    while (command !== 'NoMoreMoney') {
        let countIncrease = Number(command);

        if(countIncrease <  0){
            console.log('Invalid operation!');
            break;
        }
        console.log('Increase: ' + countIncrease.toFixed(2));
        totalSum += countIncrease;
        index++;
        command = input[index];
    }
    console.log(`Total: ${totalSum.toFixed(2)}`);
}

accountBalance(["120", "45.55", "-150"]);