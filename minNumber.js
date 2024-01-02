function minNumber(input) {

    let index = 0;
    let command = input[index];
    let minimumNum = Number.MAX_SAFE_INTEGER;

    while (command !== 'Stop') {
        let currentNumber = Number(command);
        if (currentNumber <= minimumNum) {
            minimumNum = currentNumber;
        }
        index++;
        command = input[index];
    }
    console.log(minimumNum);
}

minNumber(["-10", "20", "-30", "Stop"]);