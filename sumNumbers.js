function sumNumbers(input){
let totalSum = Number(input[0]);
let index = 1;

let sumCount = 0;

while ( index < input.length){
    sumCount += Number(input[index]);
    if (sumCount >= totalSum){
        break;
    }
    index++;
}
console.log(sumCount);

}

sumNumbers(["100", "10", "20", "30", "40"]);