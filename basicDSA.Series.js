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


// 23. BINARY SEARCH,Algorithm: Binary Search (Divide and Conquer)
// let Number = [4,5,12,14,23,45,89];
// let target = 4;

// function binarySearch(Number, target){
// let i = 0; let j = Number.length-1;
// while(i<=j){
//     let mid = Math.floor((i+j)/2)
    
//     if (Number[mid] === target) {
//         return mid
//     }else if (Number[mid] < target) {
//         i = mid+1;
//     }else if (Number[mid] > target) {
//         j = mid-1;
//     }
// }
// return -1;
// }

// console.log(binarySearch(Number, target));


// 24. REARRANGE ARRAY (MAX-MIN ALTERNATE),Algorithm: Mathematical Encoding
// let arr = [1, 2, 3, 4, 5, 6];
// let newArr = [];
// let low = 0;
// let max = arr.length-1;


// while(low <= max){
// let firstElm = arr[low];
// let lastElm = arr[max];
// newArr.push(firstElm);
// newArr.push(lastElm);
// low++;
// max--;
// }
// console.log(newArr);



// 25. INTERSECTION OF THREE SORTED ARRAYS, Algorithm: Three Pointer Technique

// let arr1 = [1, 5, 10, 20, 40, 80];
// let arr2 = [6, 7, 20, 80, 100];
// let arr3 = [3, 4, 15, 20, 30, 70, 80];
// function Intersection(arr1,arr2,arr3){
//     let res = [];
//     let  i = 0, j = 0, k = 0;
//     while(i<arr1.length && j<arr2.length && k <arr3.length){
//         if (arr1[i] === arr2[j] && arr1[i] === arr3[k]) {
//             res.push(arr1[i]);
//             i++;
//             j++;
//             k++;
//         } else if (arr1[i] < arr2[j]) {
//             i++;
//         }else if (arr2[j] < arr3[k]) {
//             j++;
//         }else{
//             k++;
//         }
//     }
//     return res;
// }

// console.log(Intersection(arr1,arr2,arr3));


// 25. INTERSECTION OF Two SORTED ARRAYS, Algorithm: Three Pointer Technique
// let arr1 = [1, 5, 10, 20, 40, 80];
// let arr2 = [6, 7, 20, 80, 100];

// function Intersection(a1,a2){
//     let res = [];
//     let  i = 0; let j = 0;
//     while(i<a1.length && j<a2.length){
//         if (a1[i] === a2[j]) {
//             res.push(a1[i]);
//             i++;
//             j++;
//         }else if (a1[i] < a2[j]) {
//             i++;
//         }else{
//             j++;
//         }
//     }
//     return res;

// }

// console.log(Intersection(arr1,arr2));


// 26. FIRST NON-REPEATING CHARACTER, Algorithm: Hash Map (Frequency Counting)
// let str = "aaabccee";
// function nonRepeating(str){
//     let obj = {}
//   for(let  i = 0; i<str.length; i++){
//       let char  = str.charAt(i)
//       if (obj[char]) {
//         obj[char]++;
//       }else{
//         obj[char] = 1
//       }  
//   }
//   return obj
// }

// let checkNon = nonRepeating(str);
// console.log(checkNon);

// for(let key in checkNon){
// if (checkNon[key] === 1) {
//     console.log(key);
//     break;
// }
// }


// 27. COUNT CHARACTER OCCURRENCES, Algorithm: Hash Map (Frequency Counting)
// let str = "aaabebbssbe";

// function Occurrences(str){
//     let obj = {};
// for(let i = 0; i<str.length; i++){
//     let char = str.charAt(i);
//    if (obj[char]) {
//     obj[char]++;
//    }else{
//   obj[char] = 1
//    }
// }
// return obj;
// }
// let Occur = Occurrences(str);

// for(let key in Occur){
//     console.log(`${key} comes ${Occur[key]} times`);
// }


// 28. MOST FREQUENT ELEMENT IN ARRAY,Algorithm: Hash Map (Frequency Counting)
// let arr = [2, 1, 3, 2, 1, 2, 6, 2, 7, 2];

// function FreqElm(arr){
//     let freqArr = {};
//     for(let  i = 0; i<arr.length; i++){
//         if (freqArr[arr[i]]) {
//             freqArr[arr[i]]++;
//         }else{
//             freqArr[arr[i]] = 1;
//         }
//     }
//     return freqArr;
// }

// let freqElm = FreqElm(arr);
// let mostFreqElm = -Infinity;
// for(let key in freqElm){
//  if (freqElm[key] > mostFreqElm) {
//     mostFreqElm = freqElm[key];
//  }
// }
// console.log(mostFreqElm);



// 29. CHECK ANAGRAM,Algorithm: Frequency Array, Use Case: String comparison

// let ang1 = "listen";
// let ang2 = "silent";



// function checkAnagram(ang1, ang2){
// let freqArr = new Array(26).fill(0);



// if (ang1.length != ang2.length) {
//     console.log("not anagram");
//     return;
// }else{
//     for(let i = 0; i<ang1.length; i++){
//         let valueOfChar1 = ang1.charCodeAt(i)-97;
//         let valueOfChar2 = ang2.charCodeAt(i)-97;
//      freqArr[valueOfChar1]++;
//      freqArr[valueOfChar2]--;
    
//     }

//     for(let val of freqArr){
//         if (val != 0) {
//             console.log("Not Anagram!");
//             return;
//         }
//     }
// }

// console.log("Anagram");


// }
// checkAnagram(ang1,ang2)


// 32. FIND MAX AND MIN IN ARRAY,Algorithm: Linear Traversal
// let num = [2, 5, 34, 1, 8, 0, 2, 45];
// function findMinMax(num){
// let maxNum = -Infinity;
// let minNum = Infinity;

// for(let i = 0; i<num.length; i++){
//     if (num[i] > maxNum) {
//         maxNum = num[i];
//     }
//     if (num[i] < minNum) {
//         minNum = num[i];
//     }
// }
// console.log(maxNum, minNum);
// }
 
// findMinMax(num)


// 33. REMOVE DUPLICATES FROM ARRAY,Algorithm: Set-based Approach
// let arr = [4, 2, 5, 1, 4, 3];

// function removeDuplicate(arr){ 
// arr.sort((a,b)=> a-b);
// let duplicate = [];
// for(let i = 0; i<arr.length; i++){
//     if (!duplicate.includes(arr[i])) {
//         duplicate.push(arr[i]);
//     }
// }
// return duplicate;
// }
// console.log(removeDuplicate(arr));


// // 35. UNION OF TWO ARRAYS
// let arr1 = [1, 2, 3];
// let arr2 = [2, 3, 4];

// function Union(arr1,arr2){
// let combine = [];
// for(let i = 0; i<arr1.length; i++){
//     combine.push(arr1[i]);
// }
// for(let i = 0; i<arr2.length; i++){
//     combine.push(arr2[i]);
// };
// return combine;
// }
// let newArr =  Union(arr1,arr2);
// newArr.sort((a,b)=> a-b);
// let unionArr = [];
// for(let i = 0; i<newArr.length; i++){
// if (i === 0 || newArr[i] !== newArr[i-1]) {
//     unionArr.push(newArr[i]);
// };
// };
// console.log(unionArr);


//36 Algorithm: Bubble Sort
// let arr = [5, 3, 4, 1, 2];
// function bubleSort(arr){
//     for(let i  = 0; i<arr.length; i++){
// for(let  j = i+1; j<arr.length; j++){
// if (arr[i] >= arr[j]) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// };
// }
// };
// return arr;
// }
// console.log(bubleSort(arr));


// 37. SECOND LARGEST IN ARRAY, Algorithm: Linear Traversal with Tracking
// let arr = [6, 23, 2, 5, 1, 3, 6];
// let largest = -Infinity;
// let secLargest = -Infinity;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= largest) {
//         secLargest = largest;
//         largest = arr[i];
//     } else if (arr[i] > secLargest && arr[i] < largest) {
//         secLargest = arr[i];
//     }
// }
// console.log(secLargest);

// 38. KADANE'S ALGORITHM (MAXIMUM SUBARRAY SUM)-
// let arr = [-2, -3, -4, 2, -2, -1, -5, -3];
// function maxSubSum(arr){
// let currentSum = arr[0];
// let maxSum = arr[0];
// for(let i = 1; i<arr.length; i++){
// currentSum = Math.max(arr[i], currentSum + arr[i]);
// maxSum = Math.max(currentSum, maxSum);
// }
// return maxSum;
// }
// console.log(maxSubSum(arr));

// 40. STRING COMPRESSION
// let compress = "aaabbbcee";

// function compressString(str){
//     let compStr = ""
//     for(let i = 0; i<str.length; i++){
//         let count = 1;
//         let char = str.charAt(i);
//         while (i<str.length && char === str[i+1]) {
//             count++;
//             i++;
//         }
        
//         compStr += str[i]+count;
        
        
//     };
//     return compStr
// };
// console.log(compressString(compress));

// 41. MOVE ZEROS TO END,Algorithm: Two Pointer (Stable Partition)
// let num = [0, 1, 0, 3, 12];
// function  MoveZeroes(){
//     let newArr = [];
// let index = 0;
// for(let i = 0; i<num.length; i++){
//     if (num[i] > 0) {
//         newArr.push(num[i]);
//         index++;
//     }
// }

// for( index; index<num.length; index++){
// newArr[index] = 0;
// }
// return newArr
// }

// console.log(MoveZeroes(num));


// 42. MOVE ZEROS TO END,Algorithm: Two Pointer (Stable Partition)
// let num = [0, 1, 0, 3, 12];

// let i = 0;
// let pos = 0;
// let end = num.length-1;
// while(i<=end){
//    if (num[i] != 0) {
//     let temp = num[i];
//     num[i] = num[pos];
//     num[pos] = temp;
//     pos++
//    }
//     i++;
// };
// console.log(num);

// 43. ROTATE ARRAY BY K POSITIONS,Algorithm: Array Reversal Technique

// let nums = [1, 2, 3, 4, 5, 6, 7], k = 3;

// function Reverse(num, i, j){
// while(i<j){
//     let temp = num[i];
//     num[i] = num[j];
//     num[j] = temp;
//     i++;
//     j--;
// }
// return num
// };

// console.log(Reverse(nums, 0, nums.length-1));
// console.log(Reverse(nums, 0, k-1));
// console.log(Reverse(nums, k, nums.length-1));



// 44. REVERSE WORDS IN STRING,Algorithm: Split, Reverse, Join

// let str = "the sky is blue";
// const newStr = str.split(" ").reverse().join(" ");



// function reverseWords(str){
//     let i = 0, j=str.length-1;
//     while (i<j) {
//         let temp = str[i];
//         str[i] = str[j];
//         str[j] = temp;
//         i++;
//         j--;
//     }
//     return str;
// };

// let revsreStr = reverseWords(newStr);
// let rev = revsreStr.join(" ")
// console.log(rev);


// function multiplier(factor) {
//   return function(number) {
//     return number * factor;
//   };
// }

// const double = multiplier(2);
// console.log(double(5));

// 48. FIND MISSING NUMBER,Algorithm: Sequential Search
// let miss = [9, 6, 4, 2, 3, 5, 7, 0, 1];
// let n = miss.length;
// let expectedSum = n*(n+1)/2;
// let actualSum = 0;
// for(let i = 0; i<miss.length; i++){
//   actualSum += miss[i];
// };
// console.log(expectedSum-actualSum);

