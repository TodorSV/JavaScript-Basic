function oldBooks(input) {
    let favorBook = input[0];
    let index = 1;
    let currentBook = input[index];

    let isFound = false; // дали е намерена в началото е невярно, после ще се промени на вярно ако я намери

    while (currentBook !== "No More Books") {
        if (currentBook === favorBook) {
            isFound = true; // тук става вярно и книгата е намерена
            break;
        }
        index++;
        currentBook = input[index];
    }
    if (isFound === false){
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 1} books.`);
    } else {
        console.log(`You checked ${index - 1} books and found it.`);
    }
}

oldBooks(["Troy",

    "Stronger",

    "Life Style",

    "Troy"]);