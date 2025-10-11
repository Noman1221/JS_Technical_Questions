// let num = 321;

// let revValue = 0
// while (num > 0) {
//     let getNum = num % 10;
//     revValue = revValue * 10 + getNum;
//     num = Math.floor(num / 10);
// };
// console.log(revValue);

// let num = "naman";
// let i = 0;
// let j = num.length - 1;
// let istrue = true;
// while (i < j) {
//     if (num[i] !== num[j]) {
//         istrue = false;
//         console.log("not palindrome");
//         break;
//     }
//     i++;
//     j--;
// }
// if (istrue) {
//     console.log("palindrome");
// }


// let fact = 5;
// let result = 0;
// for (let i = 1; i <= fact; i++) {
//     if (result === 0) {
//         result = 1;
//     }
//     result = result * i;
// }
// console.log(result);


// Generate the Fibonacci sequence up to n terms.

// let fib = 5;
// let num = 0, num2 = 1;
// let sum = 0;
// for (let i = 1; i <= fib; i++) {
//     console.log(`${i} bar mein ${num}`);
//     sum = num + num2;
//     num = num2;
//     num2 = sum;
// };

// function isPrime(num) {
//     if (num <= 1) {
//         console.log("number is not prime");
//         return;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             console.log("prime nahi hai");
//             return;
//         }

//     }
//     console.log("prime hai");

// }
// isPrime(8)

// let num1 = 199, num2 = 89, num3 = 76;
// if (num1 >= num2 && num1 >= num3) {
//     console.log(`first number is greater than all ${num1}`);
// }
// else if (num2 >= num1 && num2 >= num3) {
//     console.log(`second number is greater than all ${num2}`);
// } else {
//     console.log(`third number is greater than all ${num3}`);
// }

// let num = 12; let num1 = 18;

// console.log(`Finding GCD of ${num} and ${num1}`);

// while (num1 !== 0) {
//     let remainder = num % num1;  // Fixed: num % num1 instead of num1 % num
//     console.log(`${num} % ${num1} = ${remainder}`);

//     num = num1;
//     num1 = remainder;
// }

// console.log(`GCD is: ${num}`);

// let arr1 = [];
// let arr2 = [];
// for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//         arr1[arr1.length] = i;
//     }
// };
// for (let i = 1; i <= num1; i++) {
//     if (num1 % i === 0) {
//         arr2[arr2.length] = i;
//     }
// };

// let singleArr = []
// for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i])) {
//         singleArr[singleArr.length] = arr1[i];
//     }
// };
// let GCD = -Infinity;
// for (let i = 0; i < singleArr.length; i++) {
//     if (singleArr[i] > GCD) {
//         GCD = singleArr[i];
//     }
// }
// console.log(GCD);




// let numbers = [3, 2, 1, 5, 7, 6];
// let n = numbers.length + 1;


// let totalNum = n * (n + 1) / 2;
// console.log(totalNum)
// let actualSum = numbers.reduce((sum, acc) => sum + acc);
// console.log(totalNum - actualSum);


// let str = "Noman";
// let str1 = str.split("").reverse().join("");
// console.log(str1);


// let palindrome = "ateek";
// let i = 0, j = palindrome.length - 1;
// let isTrue = true;
// while (i < j) {
//     if (palindrome[i] !== palindrome[j]) {
//         isTrue = false;
//         break;
//     };
//     i++;
//     j--;
// };
// console.log(isTrue);



// Find the first non - repeating character in a string.

// let str = "ateek";
// let strObj = {};

// for (let i = 0; i < str.length; i++) {
//     let char = str.charAt(i);
//     if (strObj[char]) {
//         strObj[char]++;
//     } else {
//         strObj[char] = 1
//     }

// };

// for (let i = 0; i < str.length; i++) {
//     if (strObj[str[i]] === 1) {
//         console.log(str[i]);
//         break;
//     }
// }


