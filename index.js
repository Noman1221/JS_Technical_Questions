// BASIC LEVEL - FUNDAMENTALS

// 1. REVERSE A NUMBER,Algorithm: Mathematical Manipulation,Use Case: Input validation, digit manipulation, number processing
// let num = 321;
// let revValue = 0;
// while (num > 0) {
//     let getNum = num % 10;
//     revValue = revValue * 10 + getNum;
//     num = Math.floor(num / 10);
// }
// console.log(revValue);

// 2. CHECK PALINDROME STRING,Algorithm: Two Pointer Technique, Use Case: String validation, pattern matching, data verification

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


// 3. FACTORIAL OF A NUMBER Algorithm: Iterative Approach

// let fact = 5;
// let result = 0;
// for (let i = 1; i <= fact; i++) {
//     if (result === 0) {
//         result = 1;
//     }
//     result = result * i;
// }
// console.log(result);


// 4. FIBONACCI SEQUENCE
// let fib = 5;
// let num = 0, num2 = 1;
// let sum = 0;
// for (let i = 1; i <= fib; i++) {
//     console.log(`${i} bar mein ${num}`);
//     sum = num + num2;
//     num = num2;
//     num2 = sum;
// }


// 5. CHECK PRIME NUMBER
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
// isPrime(8);

// 6. FIND LARGEST OF THREE NUMBERS
// let num1 = 199, num2 = 89, num3 = 76;
// if (num1 >= num2 && num1 >= num3) {
//     console.log(`first number is greater than all ${num1}`);
// } else if (num2 >= num1 && num2 >= num3) {
//     console.log(`second number is greater than all ${num2}`);
// } else {
//     console.log(`third number is greater than all ${num3}`);
// }

// 7. GREATEST COMMON DIVISOR (GCD) - EUCLIDEAN ALGORITHM Algorithm: Euclidean Algorithm
// let num = 12; 
// let num1 = 18;
// console.log(`Finding GCD of ${num} and ${num1}`);
// while (num1 !== 0) {
//     let remainder = num % num1;
//     console.log(`${num} % ${num1} = ${remainder}`);
//     num = num1;
//     num1 = remainder;
// }
// console.log(`GCD is: ${num}`);


// 8. CHECK EVEN OR ODD Algorithm: Modulo Operation
// let num = 3;
// function evenOrOdd(num) {
//     if (num % 2 === 0) {
//         console.log("even");
//     } else {
//         console.log("Odd");
//     }
// }
// evenOrOdd(num);

// 9. CALCULATE AREA OF CIRCLE Algorithm: Mathematical Formula
// let ar = 4;
// function area(ar) {
//     let pi = 3.14;
//     return pi * ar * ar;
// }
// console.log(area(ar));

// 10. SUM OF ARRAY ELEMENTS
// let arr = [3, 4, 5];
// function arrSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(arrSum(arr));


// 11. CHECK IF STRING STARTS WITH CHARACTER
// function start(str, char) {
//     if (str[0] === char) {
//         console.log("yes");
//     } else {
//         console.log("no");
//     }
// }
// start("hello", "e");

// 12. FACTORIAL USING FUNCTION
// function retFact(num) {
//     let fact = 1;
//     for (let i = 1; i <= num; i++) {
//         fact = fact * i;
//     }
//     return fact;
// }
// console.log(retFact(5));


// 13. REVERSE STRING USING BUILT-IN METHODS
// let str = "ateek";
// let str2 = str.split("").reverse().join("");
// console.log(str2);

// 14. FIND LARGEST IN ARRAY
// let num = [1, 2, 3, 4, 5];
// let largest = -Infinity;
// for (let i = 0; i < num.length; i++) {
//     if (num[i] > largest) {
//         largest = num[i];
//     }
// }
// console.log(largest);


// INTERMEDIATE LEVEL - ARRAY & STRING MANIPULATION

// 15. POWER CALCULATION (X^N) - OPTIMIZED 

// let x = 2;
// let n = 10;
// function myPow(x, n) {
//     if (n === 0) {
//         return 1;
//     }
//     let halfPower = myPow(x, n / 2);
//     let halfPowerSq = halfPower * halfPower;
//     if (n % 2 !== 0) {
//         halfPowerSq = x * halfPowerSq;
//     }
//     return halfPowerSq;
// }
// console.log(myPow(x, n));

// 16. CONTAINER WITH MOST WATER, Algorithm: Two Pointer Technique
// let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// let max = -Infinity;
// let i = 0; 
// let j = height.length - 1;
// while (i < j) {
//     area = Math.min(height[i], height[j]) * (j - i);
//     max = Math.max(max, area);
//     if (height[i] < height[j]) {
//         i++;
//     } else {
//         j--;
//     }
// }
// console.log(max);


// 17. SORT COLORS (DUTCH NATIONAL FLAG) Algorithm: Dutch National Flag Algorithm (Three-way Partitioning)
// let arr = [2, 0, 2, 1, 1, 0];
// let j = arr.length - 1;
// let newArr = new Array(arr.length);
// let k = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//         newArr[k] = arr[i];
//         k++;
//     } else if (arr[i] === 2) {
//         newArr[j] = arr[i];
//         j--;
//     }
// }
// for (let e = k; e <= j; e++) {
//     newArr[e] = 1;
// }
// console.log(newArr);

// 18. THREE SUM PROBLEM Algorithm: Two Pointer with Sorting

// let nums = [-1, 0, 1, 2, -1, -4];
// nums.sort((a, b) => a - b);
// let newArr = [];
// for (let i = 0; i < nums.length - 2; i++) {
//     if (i > 0 && nums[i] === nums[i - 1]) continue;
//     let j = i + 1;
//     let k = nums.length - 1;
//     while (j < k) {
//         let sum = nums[i] + nums[j] + nums[k];
//         if (sum < 0) {
//             j++;
//         } else if (sum > 0) {
//             k--;
//         } else {
//             newArr.push([nums[i], nums[j], nums[k]]);
//             j++;
//             k--;
//             while (j < k && nums[j] === nums[j - 1]) j++;
//         }
//     }
// }
// console.log(newArr);

// 19. MOVE POSITIVE NUMBERS TO LEFT Algorithm: Two Pointer (Partition)

// let arr = [1, -1, 3, 2, -7, -5, 11, 6];
// let i = 0;
// let j = 0;
// while (j < arr.length) {
//     if (arr[j] > 0) {
//         let temp = arr[j];
//         arr[j] = arr[i];
//         arr[i] = temp;
//         i++;
//     }
//     j++;
// }
// console.log(arr);


// 20. ROTATE ARRAY BY ONE POSITION ,Algorithm: Array Rotation
// let arr = [1, 2, 3, 4, 5];
// let temp = arr[arr.length - 1];
// for (let i = arr.length - 2; i >= 0; i--) {
//     arr[i + 1] = arr[i];
//     if (i === 0) {
//         arr[i] = temp;
//     }
// }
// console.log(arr);

// 21. FIND DUPLICATE ELEMENTS IN SORTED ARRAY, Algorithm: Linear Traversal

// let arr = [2, 3, 1, 2, 3];
// arr.sort((a, b) => a - b);
// let tempArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//         tempArr.push(arr[i]);
//     }
// }
// console.log(tempArr);

// 22. TWO SUM PROBLEM (SORTED ARRAY), Algorithm: Two Pointer Technique
// let arr = [-1, 0, 1, 2, -1, -4];
// arr.sort((a, b) => a - b);
// let i = 0;
// let j = arr.length - 1;
// let temp = [];
// while (i < j) {
//     let sum = arr[i] + arr[j];
//     if (sum === 0) {
//         temp.push([arr[i], arr[j]]);
//         while (i < j && arr[i] === arr[i + 1]) i++;
//         while (i < j && arr[j] === arr[j - 1]) j--;
//         i++;
//         j--;
//     } else if (sum < 0) {
//         i++;
//     } else if (sum > 0) {
//         j--;
//     }
// }
// console.log(temp);

// 23. BINARY SEARCH,Algorithm: Binary Search (Divide and Conquer)
// let arr = [1, 2, 3, 4, 6];
// let start = 0;
// let key = 6;
// let end = arr.length - 1;
// while (start <= end) {
//     let mid = Math.floor((end + start) / 2);
//     if (arr[mid] === key) {
//         console.log(mid);
//         break;
//     }
//     if (arr[mid] < key) {
//         start = mid + 1;
//     } else {
//         end = mid - 1;
//     }
// }

// 24. REARRANGE ARRAY (MAX-MIN ALTERNATE),Algorithm: Mathematical Encoding
// let a = [1, 2, 3, 4, 5, 6];
// let n = a.length;
// let k = n - 1;
// let key = a[n - 1] + 1;
// let j = 0;
// for (let i = 0; i < a.length; i++) {
//     if (i % 2 === 0) {
//         a[i] = ((a[k] % key) * key + a[i]);
//         k--;
//     } else {
//         a[i] = ((a[j] % key) * key + a[i]);
//         j++;
//     }
// }
// for (let i = 0; i < a.length; i++) {
//     a[i] = Math.floor(a[i] / key);
// }
// console.log(a);


// 25. INTERSECTION OF THREE SORTED ARRAYS, Algorithm: Three Pointer Technique

// let arr1 = [1, 5, 10, 20, 40, 80];
// let arr2 = [6, 7, 20, 80, 100];
// let arr3 = [3, 4, 15, 20, 30, 70, 80, 20];
// let res = [];
// let i = 0; 
// let j = 0; 
// let k = 0;
// while (i < arr1.length && j < arr2.length && k < arr3.length) {
//     if (arr1[i] === arr2[j] && arr1[i] === arr3[k]) {
//         if (!res.includes(arr1[i])) {
//             res.push(arr1[i]);
//             i++;
//             j++;
//             k++;
//         }
//     } else if (arr1[i] < arr2[j]) {
//         i++;
//     } else if (arr2[j] < arr3[k]) {
//         j++;
//     } else {
//         k++;
//     }
// }
// console.log(res);

// 26. FIRST NON-REPEATING CHARACTER, Algorithm: Hash Map (Frequency Counting)
// let str = "aaabccee";
// let obj = {};
// for (let i = 0; i < str.length; i++) {
//     let char = str.charAt(i);
//     if (obj[char]) {
//         obj[char]++;
//     } else {
//         obj[char] = 1;
//     }
// }
// for (let key in obj) {
//     if (obj[key] === 1) {
//         console.log(key);
//         break;
//     }
// }


// 27. COUNT CHARACTER OCCURRENCES, Algorithm: Hash Map (Frequency Counting)
// let str = "aaabebbssbe";
// let arr = {};
// for (let i = 0; i < str.length; i++) {
//     let char = str.charAt(i);
//     if (arr[char]) {
//         arr[char]++;
//     } else {
//         arr[char] = 1;
//     }
// }
// for (let key in arr) {
//     console.log(` ${key} comes ${arr[key]} times `);
// }

// 28. MOST FREQUENT ELEMENT IN ARRAY,Algorithm: Hash Map (Frequency Counting)
// let arr = [2, 1, 3, 2, 1, 2, 6, 2, 7, 2];
// let obj = {};
// for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]]) {
//         obj[arr[i]]++;
//     } else {
//         obj[arr[i]] = 1;
//     }
// }
// let max = 0;
// let mostFrequent;
// for (let key in obj) {
//     if (obj[key] > max) {
//         max = obj[key];
//         mostFrequent = key;
//     }
// }
// console.log("Frequency map:", obj);
// console.log("Most frequent element:", mostFrequent);
// console.log("Frequency:", max);


// 29. CHECK ANAGRAM,Algorithm: Frequency Array, Use Case: String comparison

// let ang1 = "listen";
// let ang2 = "silwnt";
// let freq = new Array(26).fill(0);
// for (let i = 0; i < ang1.length; i++) {
//     let char = ang1.charCodeAt(i);
//     let exactVal = char - 97;
//     freq[exactVal]++;
// }
// for (let i = 0; i < ang2.length; i++) {
//     let char = ang2.charCodeAt(i);
//     let exactVal = char - 97;
//     if (freq[exactVal] === 0) {
//         console.log("not anagram");
//         break;
//     }
//     freq[exactVal]--;
// }

// 30. FIND LONGEST WORD IN STRING,Algorithm: String Splitting and Comparison
// let str = "The quick brown fox jumped over the lazy dog";
// let str1 = str.split(" ");
// let longestWord = "";
// for (let i = 0; i < str1.length; i++) {
//     if (str1[i].length >= longestWord.length) {
//         longestWord = str1[i];
//     }
// }
// console.log(longestWord);

// 31. CAPITALIZE FIRST LETTER OF EACH WORD,Algorithm: String Traversal with Manipulation

// let str = "the quick brown fox jumped over the lazy dog";
// let newStr = str[0].toUpperCase();
// for (let i = 1; i < str.length; i++) {
//     if (str[i] === " ") {
//         newStr += str[i];
//         newStr += str[i + 1].toUpperCase();
//         i++;
//     } else {
//         newStr += str[i];
//     }
// }
// console.log(newStr);

// 32. FIND MAX AND MIN IN ARRAY,Algorithm: Linear Traversal
// let num = [2, 5, 34, 1, 8, 0, 2, 45];
// let maxVal = -Infinity;
// let minVal = Infinity;
// for (let i = 0; i < num.length; i++) {
//     if (num[i] >= maxVal) {
//         maxVal = num[i];
//     }
//     if (num[i] <= minVal) {
//         minVal = num[i];
//     }
// }


// 33. REMOVE DUPLICATES FROM ARRAY,Algorithm: Set-based Approach
// let arr = [4, 2, 5, 1, 4, 3];
// arr.sort((a, b) => a - b);
// let temp = [];
// for (let i = 0; i < arr.length; i++) {
//     if (!temp.includes(arr[i])) {
//         temp[temp.length] = arr[i];
//     }
// }
// console.log(temp);

// 34. INTERSECTION OF TWO ARRAYS,Algorithm: Hash Map Lookup

// let arr1 = [2, 4, 1, 3];
// let arr2 = [1, 3, 5, 3];
// let intersection = [];
// let lookUp = {};
// for (let i = 0; i < arr1.length; i++) {
//     lookUp[arr1[i]] = true;
// }
// for (let i = 0; i < arr2.length; i++) {
//     if (lookUp[arr2[i]]) {
//         intersection.push(arr2[i]);
//     }
//     lookUp[arr2[i]] = false;
// }


// 35. UNION OF TWO ARRAYS
// let arr1 = [1, 2, 3];
// let arr2 = [2, 3, 4];
// let union = [];
// for (let i = 0; i < arr1.length; i++) {
//     union[union.length] = arr1[i];
// }
// for (let j = 0; j < arr2.length; j++) {
//     union[union.length] = arr2[j];
// }
// let unique = [];
// for (let k = 0; k < union.length; k++) {
//     if (!unique.includes(union[k])) {
//         unique.push(union[k]);
//     }
// }
// console.log(unique);

// Algorithm: Bubble Sort
// let arr = [5, 3, 4, 1, 2];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//         if (arr[j] >= arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }
// console.log(arr);

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


// ADVANCED LEVEL - COMPLEX PROBLEMS

// 38. KADANE'S ALGORITHM (MAXIMUM SUBARRAY SUM)-
// let arr = [-2, -3, -4, 2, -2, -1, -5, -3];
// let cs = 0;
// let maxSum = -Infinity;
// for (let i = 0; i < arr.length; i++) {
//     maxSum = Math.max(maxSum, cs + arr[i]);
// }
// console.log(maxSum);

// 39. CONTAINS DUPLICATE

// let inp = [1, 2, 3, 1];
// let istrue = true;
// let temp = new Array();
// for (let i = 0; i < inp.length; i++) {
//     if (!temp.includes(inp[i])) {
//         temp[temp.length] = inp[i];
//     } else {
//         istrue = false;
//         console.log("its a duplicate number", inp[i]);
//         break;
//     }
// }
// if (istrue) {
//     console.log("duplicate");
// } else {
//     console.log("not duplicate");
// }

// 40. STRING COMPRESSION
// let compress = "aaabbbcee";
// let newStr = "";
// for (let i = 0; i < compress.length;) {
//     let char = compress.charAt(i);
//     let count = 0;
//     while (i < compress.length && compress[i] === char) {
//         count++;
//         i++;
//     }
//     newStr += count + char;
// }
// console.log(newStr);

// 41. MOVE ZEROS TO END,Algorithm: Two Pointer (Stable Partition)
// let num = [0, 1, 0, 3, 12];
// let nonZero = 0;
// for (let i = 0; i < num.length; i++) {
//     if (num[i] > 0) {
//         num[nonZero++] = num[i];
//     }
// }
// for (let i = nonZero; i < num.length; i++) {
//     num[i] = 0;
// }
// console.log(num);

// 42. TWO SUM (SORTED ARRAY),Algorithm: Two Pointer Technique
// let nums = [2, 7, 11, 15], target = 9;
// let i = 0;
// let j = nums.length - 1;
// while (i < j) {
//     let sum = nums[i] + nums[j];
//     if (sum === target) {
//         console.log(new Array(i, j));
//         break;
//     }
//     if (sum > target) {
//         j--;
//     } else {
//         i++;
//     }
// }

// 43. KADANE'S ALGORITHM WITH NEGATIVE HANDLING,Algorithm: Modified Kadane's Algorithm

// let arr = [-2, -3, -4, -1, -2, -1, -5, -3];
// let cs = 0;
// let maxSum = -Infinity;
// let maxElement = -Infinity;
// for (let i = 0; i < arr.length; i++) {
//     maxElement = Math.max(maxElement, arr[i]);
//     cs = cs + arr[i];
//     if (cs < 0) {
//         cs = 0;
//     }
//     maxSum = Math.max(maxSum, cs);
// }
// if (maxSum === 0 && maxElement < 0) {
//     maxSum = maxElement;
// }
// console.log(maxSum);

// 44. SORT COLORS (ALTERNATIVE IMPLEMENTATION),Algorithm: Dutch National Flag Algorithm

// let sort = [2, 0, 2, 1, 1, 0];
// let i = 0;
// let j = sort.length - 1;
// let ind = 0;
// while (i < j) {
//     if (sort[i] === 0) {
//         let temp = sort[i];
//         sort[i] = sort[ind];
//         sort[ind] = temp;
//         i++;
//         ind++;
//     } else if (sort[i] === 2) {
//         let temp = sort[i];
//         sort[i] = sort[j];
//         sort[j] = temp;
//         i++;
//         j--;
//     } else {
//         ind++;
//     }
// }
// console.log(sort);


// 45. ROTATE ARRAY BY K POSITIONS,Algorithm: Array Reversal Technique

// let nums = [1, 2, 3, 4, 5, 6, 7], k = 3;
// function reverse(nums, i, j) {
//     while (i < j) {
//         let temp = nums[i];
//         nums[i] = nums[j];
//         nums[j] = temp;
//         i++;
//         j--;
//     }
// }
// reverse(nums, 0, nums.length - 1);
// reverse(nums, 0, k - 1);
// reverse(nums, k, nums.length - 1);

// 46. REVERSE WORDS IN STRING,Algorithm: Split, Reverse, Join

// let str = "the sky is blue";
// let newStr = str.split(" ");
// let i = 0; 
// let j = newStr.length - 1;
// while (i < j) {
//     let temp = newStr[i];
//     newStr[i] = newStr[j];
//     newStr[j] = temp;
//     i++;
//     j--;
// }
// console.log(newStr.join(" "));

// 47. FIND DUPLICATE NUMBER,Algorithm: Sorting Approach,Use Case: Duplicate detection in limited range
// let dup = [1, 3, 4, 2, 2];
// dup.sort((a, b) => a - b);
// for (let i = 0; i < dup.length; i++) {
//     if (dup[i] === dup[i + 1]) {
//         console.log(dup[i]);
//         break;
//     }
// }


// 48. FIND MISSING NUMBER,Algorithm: Sequential Search
// let miss = [9, 6, 4, 2, 3, 5, 7, 0, 1];
// miss.sort((a, b) => a - b);
// for (let i = 0; i < miss.length; i++) {
//     if (miss[i] !== i) {
//         console.log(i);
//         break;
//     }
// }
// if (miss[miss.length - 1] === miss.length - 1) {
//     console.log(miss.length);
// }


// 49. VALID ANAGRAM,Algorithm: Frequency Array,Use Case: Anagram validation, word games
// let s = "anagram", t = "nagaram";
// let isTrue = true;
// let strArr = new Array(26).fill(0);
// if (s.length !== t.length) {
//     isTrue = false;
// } else {
//     for (let i = 0; i < s.length; i++) {
//         strArr[s.charCodeAt(i) - 97]++;
//         strArr[t.charCodeAt(i) - 97]--;
//     }
//     for (let key of strArr) {
//         if (key !== 0) {
//             isTrue = false;
//             break;
//         }
//     }
// }
// if (isTrue) {
//     console.log(isTrue);
// } else {
//     console.log(isTrue);
// }


// 50. FIRST NON-REPEATING CHARACTER IN STRING
// let str = "leetcode";
// let obj = {};
// for (let i = 0; i < str.length; i++) {
//     let char = str.charAt(i);
//     if (obj[char]) {
//         obj[char]++;
//     } else {
//         obj[char] = 1;
//     }
// }
// for (let key in obj) {
//     if (obj[key] === 1) {
//         console.log(key);
//         break;
//     }
// }
// console.log(obj);


// 51. MERGE TWO SORTED ARRAYS,Algorithm: Two Pointer Merge
// let arr1 = [1, 3, 5, 7], arr2 = [2, 4, 6, 8];
// let i = 0;
// let j = 0;
// let temp = new Array();
// let k = 0;
// while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] >= arr2[j]) {
//         temp[k] = arr2[j];
//         k++;
//         j++;
//     } else {
//         temp[k++] = arr1[i++];
//     }
// }
// while (i < arr1.length) {
//     temp[k++] = arr1[i++];
// }
// while (i < arr2.length) {
//     temp[k++] = arr2[j++];
// }
// for (let i = 0; i < temp.length; i++) {
//     arr1[i] = temp[i];
// }
// console.log(arr1);

// 52. REMOVE DUPLICATES (HASH MAP APPROACH),Algorithm: Hash Map
// function removeDuplicates(arr) {
//     let result = [];
//     let seen = {};
//     let i = 0;
//     while (i < arr.length) {
//         let value = arr[i];
//         if (!seen[value]) {
//             seen[value] = true;
//             result.push(value);
//         }
//         i++;
//     }
//     return result;
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// 53. MAJORITY ELEMENT (BOYER-MOORE VOTING),Algorithm: Boyer-Moore Voting Algorithm
// let elm = [1, 2, 1, 4, 1, 1, 1];
// let count = 0;
// let candidate = null;
// for (let i = 0; i < elm.length; i++) {
//     if (count === 0) {
//         candidate = elm[i];
//     }
//     if (elm[i] === candidate) {
//         count++;
//     } else {
//         count--;
//     }
// }
// count = 0;
// for (let i = 0; i < elm.length; i++) {
//     if (candidate === elm[i]) {
//         count++;
//     }
// }
// if (Math.floor(elm.length / 2) < count) {
//     console.log(candidate);
// } else {
//     console.log("no majority element exist");
// }

// 54. MAXIMUM SUBARRAY SUM (ALL NEGATIVES)
// let arr = [-2, -3, -4, -1, -2, -1, -5, -3];
// let cs = 0;
// let maxSum = -Infinity;
// let maxElement = -Infinity;
// for (let i = 0; i < arr.length; i++) {
//     maxElement = Math.max(maxElement, arr[i]);
//     cs = cs + arr[i];
//     if (cs < 0) {
//         cs = 0;
//     }
//     maxSum = Math.max(maxSum, cs);
// }
// if (maxSum === 0 && maxElement < 0) {
//     maxSum = maxElement;
// }
// console.log(maxSum);

// 55. CONTAINS DUPLICATE (ALTERNATIVE)
// let inp = [1, 2, 3, 1];
// let isTrue = false;
// let arr = new Array();
// for (let i = 0; i < inp.length; i++) {
//     if (!arr.includes(inp[i])) {
//         arr.push(inp[i]);
//     } else {
//         isTrue = true;
//     }
// }
// console.log(isTrue);

// 56. STRING COMPRESSION (ALTERNATIVE)
// let compress = "aaabbbcee";
// let newStr = "";
// for (let i = 0; i < compress.length; i++) {
//     let count = 1;
//     while (i < compress.length - 1 && compress.charAt(i) === compress.charAt(i + 1)) {
//         count++;
//         i++;
//     }
//     newStr += compress.charAt(i) + count;
// }
// console.log(newStr);

// 57. REVERSE ARRAY IN-PLACE, Algorithm: Two Pointer Swap
// let arr = [5, 3, 6, 8, 4];
// let i = 0;
// let j = arr.length - 1;
// while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
// }
// console.log(arr);

// 58. MOVE ZEROS TO END (STABLE), Algorithm: Two Pointer (Stable Partition)

// let arr = [0, 1, 0, 3, 12];
// let nonZero = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         arr[nonZero] = arr[i];
//         nonZero++;
//     }
// }
// for (let j = nonZero; j < arr.length; j++) {
//     arr[j] = 0;
// }
// console.log(arr);

// 63. ROTATE ARRAY K POSITIONS (TEMP ARRAY), Algorithm: Modulo Arithmetic
// let nums = [1, 2, 3, 4, 5, 6, 7], k = 3;
// let temp = new Array(nums.length);
// for (let i = 0; i < nums.length; i++) {
//     temp[(i + k) % nums.length] = nums[i];
// }
// for (let i = 0; i < temp.length; i++) {
//     nums[i] = temp[i];
// }
// console.log(nums);