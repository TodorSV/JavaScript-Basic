function demo() {
  for (let i = 7; i <= 1000; i++) {
    if (i % 10 === 7) {
      // делим модулно на 10 , за остатък 7
      console.log(i);
    }
  }
}
demo();

function multiplicationTable(input) {
  let firstNum = Number(input[0]);
  let result = 0;

  for (let i = 1; i <= 10; i++) {
    result = i * firstNum; // умножаваме текущото число по числото подадено от входа, и изкарваме резултата
    console.log(`${i} * ${firstNum} = ${result}`);
  }
}

multiplicationTable(["5"]);
//Multiplication Table

function oscars(input) {
  let actorName = input[0];
  let pointsFromAcademy = Number(input[1]);
  let countJudges = Number(input[2]);

  let totalPoints = pointsFromAcademy; // точките с които стартира

  for (let i = 3; i < input.length; i += 2) {
    // += 2 за да може на всяко завъртане на цикъла да вземаме името на оценяващия!
    let evaluativeName = input[i]; // име на оценяващия
    let evaluativePoints = Number(input[i + 1]); // за да вземем следващия индекс , съответно и точките

    let pointsGiven = (evaluativeName.length * evaluativePoints) / 2; // дадените точки
    totalPoints += pointsGiven;

    if (totalPoints > 1250.5) {
      console.log(
        `Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(
          1
        )}!`
      );
      return;
    }
  }
  if (totalPoints < 1250.5) {
    let pointsNeeded = 1250.5 - totalPoints;
    console.log(
      `Sorry, ${actorName} you need ${pointsNeeded.toFixed(1)} more!`
    );
  }
}

// 02. Equal Sums Even Odd Position

function positionsEvenOdd(input) {
  let firstNum = Number(input[0]);
  let secondNum = Number(input[1]);

  let result = "";

  for (let currentNum = firstNum; currentNum <= secondNum; currentNum++) {
    let currentNumAsString = currentNum.toString(); // Пак конвертираме числото в стринг, за да се обхождат индексите.
    let evenSum = 0;
    let oddSum = 0;

    for (let index = 0; index < currentNumAsString.length; index++) {
      // фор цикъл, за да обходим индексите на нашето число!
      let currentDigit = Number(currentNumAsString[index]); // Пак конвертираме към Число първо. Тук си вземаме цифрата от на съответния индекс, като започваме от 0 индекс.
      let position = index + 1; // по условие ни го искат да се върти по индексите от 1 до 6. Не от 0 до 5.

      if (position % 2 === 0) {
        // проверяваме позицията дали е четна (even) за да добавим към сбора.

        evenSum += currentDigit;
      } else {
        oddSum += currentDigit;
      }
    }
    if (evenSum === oddSum) {
      // Проверката е след втория цикъл
      result += `${currentNumAsString} `;
    }
  }
  console.log(result);
}

// Nested Loops - Exercise 03. Sum Prime Non Prime
// Тъй като по дефиниция от математиката отрицателните числа не могат да бъдат прости.
// Просто число е ако се дели само на 1 и на себе си

function primeNonPrimeSum(input) {
  let index = 0;
  let command = input[index];
  index++;

  let primeSum = 0;
  let nonPrimeSum = 0;

  while (command !== "stop") {
    let currentNum = Number(command);

    if (currentNum < 0) {
      console.log("Number is negative.");
      command = input[index]; // Вземаме новата команда , за да не влезем в безкраен цикъл понеже ще забие на -1 постоянно.
      index++;
      continue; // кода надолу няма да се изпълни, продължава цикъла като ни връща горе отначало.
    }
    let isPrime = true;

    for (let divider = 2; divider < currentNum; divider++) {
      // Делителя ни започва от 2 понеже всяко число се дели на 1.

      if (currentNum % divider === 0) {
        // ако текущото число се дели на делителя и връща остатък нула, то нашето числи няма да бъде просто(non prime)
        isPrime = false;
        break;
      }
    }

    if (isPrime === true) {
      // Проверяваме дали е просто, и добавяме към сумата --> на простите
      primeSum += currentNum;
    } else {
      nonPrimeSum += currentNum;
    }
    command = input[index]; // вземаме следващият индекс, стандартно!
    index++;
  }
  console.log(`Sum of all prime numbers is: ${primeSum}`);
  console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}
primeNonPrimeSum(["3", "9", "0", "7", "19", "4", "stop"]);
