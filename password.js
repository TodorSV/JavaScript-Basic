function pass ( input){
let userName = input[0];
let password = input[1];
let userData = input[2];

let index = 3;

while (userData !== password){
    userData = input[index];
    index++;
}
console.log(`Welcome ${userName}!`);

}

pass(["Nakov","1234",

      "Pass","1324","1234"]);