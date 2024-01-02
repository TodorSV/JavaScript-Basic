function steps(input) {
    let targetSteps = 10000;
    let stepsSum = 0; // сбора на стъпките

    let index = 0; // рроменлива която да държи индекса от който започваме
    let command = input[index]   // променива която държи елемента на дадения ред, държи 1500 първоначално

    while (command !== "Going home") {    // значи е число 
        let steps = Number(command);
        stepsSum += steps;  // добавяме към сумата от стъпките които тя е направила

        if (stepsSum >= targetSteps) { // проверка дали сбора на стъпките е по голям от броя, която гони тя
            console.log('Goal reached! Good job!');
            console.log(`${stepsSum - targetSteps} steps over the goal!`); // изкарваме разликата, която е 1000 крачки повече в случая
            break;
        }
        index++; //повишаваме индекса с 1
        command = input[index]; // подновяваме стойността на командата
    }
    if (command === "Going home") {
        let stepsToHome = Number(input[index + 1]); // вземаме стъпките които и остават до вкъщи в случая 200, + 1 е за да вземе елемента на следващият индекс понеже сме на going home
        stepsSum += stepsToHome; // към сумата на стъпките добавяме стъпките които и остават до вкъщи
        if (stepsSum >= targetSteps) { // проверка дали сбора на стъпките е по голям от броя, която гони тя
            console.log('Goal reached! Good job!');
            console.log(`${stepsSum - targetSteps} steps over the goal!`); // изкарваме разликата, която е 1000 крачки повече в случая
        } else {
            console.log(`${targetSteps - stepsSum} more steps to reach goal.`); // тук правим обратната сметка и изкарваме колко и остават от таргета
        }
    }
}

steps(["1500", "300", "2500", "3000", "Going home", "200"]);


function cake(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);
    let cakeSize = width * length;
    let index = 2;
    let command = input[index];

    let numPieces = 0;

    while (command !== 'STOP') {
        let pieceGiven = Number(command);
        numPieces += pieceGiven;

        if (numPieces > cakeSize) {
            console.log(`No more cake left! You need ${numPieces - cakeSize} pieces more.`);
            break;
        }
        index++;
        command = input[index];
    }
    if (command === 'STOP' && numPieces <= cakeSize) {
        console.log(`${cakeSize - numPieces} pieces are left.`);
    }

}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"]);
