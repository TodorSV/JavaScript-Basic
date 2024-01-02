function graduation(input) {
    let studentName = input[0];
    let index = 1;
    let currentGrade = Number(input[index]);  // първата оценка от първи индекс

    let sumOfGrade = 0;
    let excluded = 0;

    while (currentGrade < input.length) {
        if (currentGrade < 4) { //проверка дали е по малък успеха от 4
            currentGrade++;
            excluded++;

            if (excluded > 1) {
                console.log(`${studentName} has been excluded at ${currentGrade} grade`);
                break;
            }
        }
        sumOfGrade += currentGrade;
        index++;
    }
console.log(`${studentName} graduated. Average grade: ${(sumOfGrade / 12).toFixed(2)}`);
}

graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);

function graduation(input) {
    let studentName = input[0];
    let index = 1;

    let total = 0;
    while (index < input.length) {
        let grade = Number(input[index]);
        if (grade < 4) {
            if (grade < 4.0) {
                // index++;
                console.log(`${studentName} has been excluded at ${index} grade`);
                break;
            }
        }
        total += grade;
        index++;
    }
    console.log(`${studentName} graduated. Average grade: ${(total / 12).toFixed(2)}`);
}
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
