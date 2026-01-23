// 1. REVERSE A NUMBER,Algorithm: Mathematical Manipulation,Use Case: Input validation, digit manipulation, number processing
// let num = 321;

// let rev = 0;
// while (num>0) {
//     let getRemainder = num%10;
//     rev = rev * 10 + getRemainder;
//     num = Math.floor(num/10);
// };



// 2. CHECK PALINDROME STRING,Algorithm: Two Pointer Technique, Use Case: String validation, pattern matching, data verification

// let num = "nama";
// let isPalindrome = true;
// let i = 0;
// let j = num.length-1;
// while(i<=j){
//     if (num[i] !== num[j]) {
//         isPalindrome = false;
//     };
//     i++;
//     j--;
// };
// if (isPalindrome) {
//     console.log("string is palindrome");
// }else{
//     console.log("string is not palindrome");
// };


// 3. FACTORIAL OF A NUMBER Algorithm: Iterative Approach

// let fact = 5;

// let factorial = (fact)=>{
//     let result = 0
//     for(let i = 0; i<=fact; i++){
//         if (i === 0) {
//             result = 1;
//         }else{
//             result = result * i;
//         }
       
 
      
//     }
//     return result
// }
// console.log(factorial(fact));



// 4. FIBONACCI SEQUENCE
//  let fib = 5;
// let Fibbonacci = (fib)=>{
// let a = 0;
// let b = 1;
// for(let i = 1; i<=fib; i++){
//     console.log(`value of iteration ${i} = ${a}`);
//     let sum = a+b;
//     a = b;
//     b=sum;
// };
// };
// Fibbonacci(fib)


// 5. CHECK PRIME NUMBER
// let arr = [2,3,5,7,9,11]
// const CheckPrimeNumber = (arr)=>{
//     for(let i = 0; i<arr.length; i++){
//     let isPrime = true;
//     let n = arr[i];
//     if (n<2) {
//         console.log(`number ${n} is prime`);
//         continue;
//     };
//    for(let j = 2; j<n; j++){
//     if (n%j===0) {
//         isPrime = false;
//         break;
//     };
//    }
//    if(isPrime){
//     console.log(`${n} is prime`);
//    }else{
//     console.log(`${n} is not prime`);
//    };
// }

// };

// CheckPrimeNumber(arr);


// 7. CHECK EVEN OR ODD Algorithm: Modulo Operation
// let num = 4;
// function EvenOrOddd(num){
//     if (num % 2===0) {
//         console.log("even");
//     }else{
//         console.log("odd");
//     };
// };
// EvenOrOddd(num);

// 8. CALCULATE AREA OF CIRCLE Algorithm: Mathematical Formula
// let ar = 4;

// function AreaOfCircle(ar){
//     let pi = 3.14;
//    let area = pi * ar * ar;
//  return area
// }
// console.log(AreaOfCircle(ar));

// 9. SUM OF ARRAY ELEMENTS
// let arr = [3, 4, 5];

// function arrOfSum(arr){
//     let sum = -Infinity;
//     for(let  i =0; i<arr.length; i++){
//         console.log(arr[i]);
        
//         sum += arr[i];
//     };
//     return sum;
// }
// console.log(arrOfSum(arr));


// 11. CHECK IF STRING STARTS WITH CHARACTER
// let str = "hello";
// const firstChar = "h";
// function start(str){
// const char = str.charAt(0);
// if (char === firstChar) {
//     console.log("yes");
    
// }else{
//     console.log("no");
// }
// }
// start(str)S


// 13. REVERSE STRING USING BUILT-IN METHODS
// let str = "robin";
// function reverse(str){
// let newStr = str.split("").reverse().join("");
// return newStr;
// }
// console.log(reverse(str));

// 14. FIND LARGEST IN ARRAY
// let num = [1, 2, 3,16, 4, 5];
// function largest(num){
//     let largest = -Infinity;
//     for(let  i = 0; i<num.length; i++){
//         if (num[i] > largest) {
//             largest = num[i];
//         };
//     }
//     return largest;
// };
// console.log(largest(num));

// 15. POWER CALCULATION (X^N) - OPTIMIZED 



// 16. CONTAINER WITH MOST WATER, Algorithm: Two Pointer Technique
// let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// const MostWater = (height)=>{
//     let  i = 0;
//     let j = height.length-1;
//     let maxWater = 0;
//     while (i<j) {
//         let area = Math.min(height[i], height[j]) * (j-i);
//         if (area > maxWater) {
//             maxWater = area;
//         };
//        if (height[i] < height[j]) {
//         i++
//        }else{
//         j--;
//        }
        
//     }
// return maxWater;
    
// }
// console.log(MostWater(height));



// 17. SORT COLORS (DUTCH NATIONAL FLAG) Algorithm: Dutch National Flag Algorithm (Three-way Partitioning)
// let arr = [2, 0, 2, 1, 1, 0];

// const sort_color = (arr)=>{
//     let i = 0;
// let j = arr.length-1;
// let k = 0;
// while (i<j) {
//     if (arr[i] === 0) {
//         let temp = arr[i];
//         arr[i] = arr[k];
//         arr[k] = temp;
//         i++;
//         k++; 
//     }else if (arr[i] === 2) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         i++;
//         j--;
//     }else{
//         k++;
//     }
// }
// return arr;
// }
// console.log(sort_color(arr));
// 18. THREE SUM PROBLEM Algorithm: Two Pointer with Sorting
// let nums = [-1, 0, 1, 2, -1, -4];

// 19. MOVE POSITIVE NUMBERS TO LEFT Algorithm: Two Pointer (Partition)
// let arr = [1, -1, 3, 2, -7, -5, 11, 6];
// let i = 0; let j = arr.length-1;
// let k = 0;
// while (i<=j) {
//     if (arr[i] >= 0) {
//         let temp = arr[i];
//         arr[i] = arr[k];
//         arr[k] = temp;
//         k++;
//     };
//     i++;
// };
// console.log(arr);



// 20. ROTATE ARRAY BY ONE POSITION ,Algorithm: Array Rotation
// let arr = [1, 2, 3, 4, 5];
// let lastElm = arr[arr.length-1];
// let j = 0
// for(let i = arr.length-2; i>=0; i--){
// arr[i+1] = arr[i];
// if (i===0) {
//     arr[i] = lastElm;
// }

// };
// console.log(arr);


// 21. FIND DUPLICATE ELEMENTS IN SORTED ARRAY, Algorithm: Linear Traversal

// let arr = [2, 3, 1, 2, 3];

// function Duplicate(arr){
// let dupElm = [];
// arr.sort((a,b)=> a-b);
//   for(let i = 0; i<arr.length; i++){
//    if (arr[i] === arr[i+1] && a) {
//     dupElm[dupElm.length] = arr[i];
//    }
//   }
//   return dupElm;
// }
// console.log(Duplicate(arr));

// let obj = {1:3, 4:5,6:7,1:56};
// if (obj[4]) {
//     console.log(obj[1]);
// }


// 22. TWO SUM PROBLEM (SORTED ARRAY), Algorithm: Two Pointer Technique
// let arr = [-1, 0, 1, 2, -1, -4];

// function twoSum(arr){  
//     arr.sort((a,b)=>a-b);
//     let i = 0;
//     let j = arr.length-1;
//     let targetNum = 0;
//   while (i<=j) {
//  let sum = arr[i]+arr[j];
//  if (sum === targetNum) {
//     return [i,j];
//  }else if (sum >= targetNum) {
//     j--;
//  }else{
//     i++;
//  }
//   }
// }
// console.log(twoSum(arr));







