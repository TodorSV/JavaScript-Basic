function examPreparation(input) {
    let numbersBadGrade = Number(input[0]);
    let index = 1;
    let commandTask = input[index];

    let goodGrade = 0;
    let unsatisfiedGrade = 0;
    let sumGrade = 0;
    let lastTaskCounter = 0;
    let lastProblem = '';

    while (commandTask !== 'Enough') {
        lastProblem = commandTask; // Презаписваме стойността с последния решен проблем
        lastTaskCounter++;
        index++;
        let currenttGradeTask = Number(input[index]);
        if (currenttGradeTask <= 4) {
            unsatisfiedGrade++;
            sumGrade += currenttGradeTask;
        } else if (currenttGradeTask > 4) {
            goodGrade++;
            sumGrade += currenttGradeTask;
        }
        if (unsatisfiedGrade === numbersBadGrade) {
            console.log(`You need a break, ${unsatisfiedGrade} poor grades.`);
            break;
        }
        let avgGrade = (sumGrade / lastTaskCounter).toFixed(2);
        index++;
        commandTask = input[index];
        if (commandTask === 'Enough') {
            console.log(`Average score: ${avgGrade}`);
            console.log(`Number of problems: ${lastTaskCounter}`);
            console.log(`Last problem: ${lastProblem}`);
        }
    }
}


examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
довършена