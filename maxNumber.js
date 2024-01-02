function maxNumber(input){
let index = 0;
let command = input[index];
let maxNumber = Number.MIN_SAFE_INTEGER;   // Минимално допустимо число

while (command !== 'Stop'){
    let currentNumber = Number(command);

    if(currentNumber > maxNumber){
       maxNumber = currentNumber;
    }
    index++;
    command = input[index];
}
console.log(maxNumber);
}

maxNumber(["100","99","80","70","Stop"]);