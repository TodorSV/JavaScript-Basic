function cake(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let cakeSize = length * width; 

    let index = 2;
    let command = input[index];
    let countPieces = 0;

    while (command !== 'STOP') {
        let cakeGiven = Number(command); 
        countPieces += cakeGiven;  
        if (countPieces > cakeSize) { 
            console.log(`No more cake left! You need ${countPieces - cakeSize} pieces more.`);
            break;
        }
        index++; 
        command = input[index];
    }
    if (command === 'STOP' && countPieces <= cakeSize) {
        console.log(`${cakeSize - countPieces} pieces are left.`);
    }
}
cake[("10", "2",
    "2", "4", "6", "STOP")];