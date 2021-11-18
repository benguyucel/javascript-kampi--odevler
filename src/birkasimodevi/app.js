//asal sayılar 
let findPrime = (...numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        let counter = 0;
        for (let j = 1; j <= numbers[i]; j++) {
            if (numbers[i] % j == 0) {
                counter++;
            }
        }

        if (counter > 2) {
            console.log(numbers[i], " bir asal sayı değildir")

        } else {
            console.log(numbers[i], " bir asal sayıdır")

        }
    }
}

//arkadaş sayılar
let getCommonDivisonCount = (number) => {
    let counter = 0;
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            counter += i;
        }
    }
    return counter;

}


let findFriendNumbers = (numberOne, numberTwo) => {

    if (getCommonDivisonCount(numberOne) == numberTwo && getCommonDivisonCount(numberTwo) == numberOne) {
        console.log("Friend Number :)  :" + numberOne + " and " + numberTwo);
    } else {
        console.log("Not Friend Number :(  : " + numberOne + " and " + numberTwo);

    }
}
// findFriendNumbers(17296,18416);

//perfectNumber

let findIfPerfect = () => {

    for (let i = 1; i <= 1000; i++) {
        let counter = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                counter += j;
            }
        }
        if (counter == (i * 2)) {
            console.log("This is perfect number :", i);
        }
    }
}


//find prime number in 1000

let findPrimeInThousand = () => {
    for (let i = 2; i <= 1000; i++) {
        let counter = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                counter ++;
            }
        }
        if (counter <= 2) {
            console.log("this is prime number ", i);
        }
    }
}

findPrimeInThousand();