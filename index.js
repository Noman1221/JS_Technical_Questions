// // BASIC LEVEL - FUNDAMENTALS



// // 1. REVERSE A NUMBER
// let num = 321;
// let revValue = 0;
// while (num > 0) {
//     let getNum = num % 10;
//     revValue = revValue * 10 + getNum;
//     num = Math.floor(num / 10);
// }
// console.log(revValue);

// // 2. CHECK PALINDROME STRING
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

// // 3. FACTORIAL OF A NUMBER
// let fact = 5;
// let result = 0;
// for (let i = 1; i <= fact; i++) {
//     if (result === 0) {
//         result = 1;
//     }
//     result = result * i;
// }
// console.log(result);

// // 4. FIBONACCI SEQUENCE
// let fib = 5;
// let num = 0, num2 = 1;
// let sum = 0;
// for (let i = 1; i <= fib; i++) {
//     console.log(`${i} bar mein ${num}`);
//     sum = num + num2;
//     num = num2;
//     num2 = sum;
// }

// // 5. CHECK PRIME NUMBER
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

// // ----------------------------------------------------------------------------
// // 6. FIND LARGEST OF THREE NUMBERS
// let num1 = 199, num2 = 89, num3 = 76;
// if (num1 >= num2 && num1 >= num3) {
//     console.log(`first number is greater than all ${num1}`);
// } else if (num2 >= num1 && num2 >= num3) {
//     console.log(`second number is greater than all ${num2}`);
// } else {
//     console.log(`third number is greater than all ${num3}`);
// }


// // 7. GREATEST COMMON DIVISOR (GCD) - EUCLIDEAN ALGORITHM

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

// // ----------------------------------------------------------------------------
// // 8. CHECK EVEN OR ODD  , Algorithm: Modulo Operation

// let num = 3;
// function evenOrOdd(num) {
//     if (num % 2 === 0) {
//         console.log("even");
//     } else {
//         console.log("Odd");
//     }
// }
// evenOrOdd(num);

// // ----------------------------------------------------------------------------
// // 9. CALCULATE AREA OF CIRCLE, Algorithm: Mathematical Formula
// let ar = 4;
// function area(ar) {
//     let pi = 3.14;
//     return pi * ar * ar;
// }
// console.log(area(ar));

// // ----------------------------------------------------------------------------
// // 10. SUM OF ARRAY ELEMENTS,  Algorithm: Linear Traversal
// let arr = [3, 4, 5];
// function arrSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(arrSum(arr));


// // 11. CHECK IF STRING STARTS WITH CHARACTER

// function start(str, char) {
//     if (str[0] === char) {
//         console.log("yes");
//     } else {
//         console.log("no");
//     }
// }
// start("hello", "e");


// // 12. FACTORIAL USING FUNCTION
// function retFact(num) {
//     let fact = 1;
//     for (let i = 1; i <= num; i++) {
//         fact = fact * i;
//     }
//     return fact;
// }
// console.log(retFact(5));


// // 13. REVERSE STRING USING BUILT-IN METHODS
// let str = "ateek";
// let str2 = str.split("").reverse().join("");
// console.log(str2);

// // ----------------------------------------------------------------------------
// // 14. FIND LARGEST IN ARRAY, Algorithm: Linear Search with Comparison

// let num = [1, 2, 3, 4, 5];
// let largest = -Infinity;
// for (let i = 0; i < num.length; i++) {
//     if (num[i] > largest) {
//         largest = num[i];
//     }
// }
// console.log(largest);


// // INTERMEDIATE LEVEL - ARRAY & STRING MANIPULATION


// // 15. POWER CALCULATION (X^N) - OPTIMIZED
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


// // 16. CONTAINER WITH MOST WATER
// // Time Complexity: O(n)
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

// // 17. SORT COLORS (DUTCH NATIONAL FLAG)
// // Algorithm: Dutch National Flag Algorithm (Three-way Partitioning)

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


// // 18. THREE SUM PROBLEM, Algorithm: Two Pointer with Sorting

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


// // 19. MOVE POSITIVE NUMBERS TO LEFT, Algorithm: Two Pointer (Partition)

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

// // 20. ROTATE ARRAY BY ONE POSITION, Algorithm: Array Rotation

// let arr = [1, 2, 3, 4, 5];
// let temp = arr[arr.length - 1];
// for (let i = arr.length - 2; i >= 0; i--) {
//     arr[i + 1] = arr[i];
//     if (i === 0) {
//         arr[i] = temp;
//     }
// }
// console.log(arr);

// // 21. FIND DUPLICATE ELEMENTS IN SORTED ARRAY, Algorithm: Linear Traversal
// let arr = [2, 3, 1, 2, 3];
// arr.sort((a, b) => a - b);
// let tempArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//         tempArr.push(arr[i]);
//     }
// }
// console.log(tempArr);

// // 22. TWO SUM PROBLEM (SORTED ARRAY), Algorithm: Two Pointer Technique
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


// // 23. BINARY SEARCH
// // Algorithm: Binary Search (Divide and Conquer)


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

// // 24. REARRANGE ARRAY (MAX-MIN ALTERNATE), Algorithm: Mathematical Encoding

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

// // 25. INTERSECTION OF THREE SORTED ARRAYS, Algorithm: Three Pointer Technique,  Use Case: Finding common elements across multiple arrays

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

// // 26. FIRST NON-REPEATING CHARACTER,Algorithm: Hash Map (Frequency Counting),Use Case: Character frequency, unique element identification

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

// // 27. COUNT CHARACTER OCCURRENCES,Algorithm: Hash Map (Frequency Counting)
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

// // 28. MOST FREQUENT ELEMENT IN ARRAY, Algorithm: Hash Map (Frequency Counting)
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

// // 29. CHECK ANAGRAM, Algorithm: Frequency Array,Use Case: String comparison, word games
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


// // 30. FIND LONGEST WORD IN STRING,Algorithm: String Splitting and Comparison,Use Case: Text analysis, word processing

// let str = "The quick brown fox jumped over the lazy dog";
// let str1 = str.split(" ");
// let longestWord = "";
// for (let i = 0; i < str1.length; i++) {
//     if (str1[i].length >= longestWord.length) {
//         longestWord = str1[i];
//     }
// }
// console.log(longestWord);

// // 31. CAPITALIZE FIRST LETTER OF EACH WORD,Algorithm: String Traversal with Manipulation, Use Case: Text formatting, title case conversion

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


// // 32. FIND MAX AND MIN IN ARRAY,Algorithm: Linear Traversal,Use Case: Statistical analysis, range finding

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


// // 33. REMOVE DUPLICATES FROM ARRAY,Algorithm: Set-based Approach, Use Case: Data cleaning, unique elements

// let arr = [4, 2, 5, 1, 4, 3];
// arr.sort((a, b) => a - b);
// let temp = [];
// for (let i = 0; i < arr.length; i++) {
//     if (!temp.includes(arr[i])) {
//         temp[temp.length] = arr[i];
//     }
// }
// console.log(temp);


// // 34. INTERSECTION OF TWO ARRAYS,Algorithm: Hash Map Lookup,Use Case: Set operations, common elements
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

// // 35. UNION OF TWO ARRAYS, Algorithm: Set Union,Use Case: Combining arrays without duplicates
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


// // 36. BUBBLE SORT,Algorithm: Bubble Sort,Use Case: Basic sorting, educational purposes

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

// // 37. SECOND LARGEST IN ARRAY, Algorithm: Linear Traversal with Tracking,Use Case: Finding nth largest, ranking
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

// // ADVANCED LEVEL - COMPLEX PROBLEMS


// // 38. KADANE'S ALGORITHM (MAXIMUM SUBARRAY SUM),Algorithm: Kadane's Algorithm (Dynamic Programming), Use Case: Finding maximum sum contiguous subarray
// let arr = [-2, -3, -4, 2, -2, -1, -5, -3];
// let cs = 0;
// let maxSum = -Infinity;
// for (let i = 0; i < arr.length; i++) {
//     maxSum = Math.max(maxSum, cs + arr[i]);
// }
// console.log(maxSum);

// // 39. CONTAINS DUPLICATE,Algorithm: Hash Set, Use Case: Duplicate detection, validation
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


// // 40. STRING COMPRESSION,Algorithm: Run-Length Encoding,Use Case: Data compression, encoding
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

// // 41. MOVE ZEROS TO END,Algorithm: Two Pointer (Stable Partition),Use Case: Array rearrangement, data organization

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

// // 42. TWO SUM (SORTED ARRAY),Algorithm: Two Pointer Technique,Use Case: Finding pair with target sum
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

// // 43. KADANE'S ALGORITHM WITH NEGATIVE HANDLING,Algorithm: Modified Kadane's Algorithm,Use Case: Maximum subarray sum with all negatives
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

// // 44. SORT COLORS (ALTERNATIVE IMPLEMENTATION),Algorithm: Dutch National Flag Algorithm,Use Case: Three-way partitioning, sorting 0,1,2
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

// // 45. ROTATE ARRAY BY K POSITIONS, Algorithm: Array Reversal Technique, Use Case: Circular rotation, shifting elements
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

// // 46. REVERSE WORDS IN STRING
// // Algorithm: Split, Reverse, Join,Use Case: Text manipulation, string operations

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

// // 47. FIND DUPLICATE NUMBER,Algorithm: Sorting Approach,Use Case: Duplicate detection in limited range

// let dup = [1, 3, 4, 2, 2];
// dup.sort((a, b) => a - b);
// for (let i = 0; i < dup.length; i++) {
//     if (dup[i] === dup[i + 1]) {
//         console.log(dup[i]);
//         break;
//     }
// }

// // 48. FIND MISSING NUMBER,Algorithm: Sequential Search Use Case: Finding missing element in range
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

// // 49. VALID ANAGRAM,Algorithm: Frequency Array Use Case: Anagram validation, word games
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

// // 50. FIRST NON-REPEATING CHARACTER IN STRING,Algorithm: Hash Map (Two Pass), Use Case: Unique character detection

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

// // 51. MERGE TWO SORTED ARRAYS,Algorithm: Two Pointer Merge,Use Case: Merging sorted data, merge sort component

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

// // 52. REMOVE DUPLICATES (HASH MAP APPROACH),Algorithm: Hash Map,Use Case: Efficient duplicate removal
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

// // 53. MAJORITY ELEMENT (BOYER-MOORE VOTING),Algorithm: Boyer-Moore Voting AlgorithmUse Case: Finding element appearing > n/2 times
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

// // ----------------------------------------------------------------------------
// 54. MAXIMUM SUBARRAY SUM (ALL NEGATIVES),Algorithm: Modified Kadane's AlgorithmUse Case: Maximum subarray with edge cases
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

// // ----------------------------------------------------------------------------
// 55. CONTAINS DUPLICATE (ALTERNATIVE),Algorithm: Array Search,Use Case: Duplicate detection
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

// // ----------------------------------------------------------------------------
// 56. STRING COMPRESSION (ALTERNATIVE),Algorithm: Run-Length Encoding Use Case: String compression, data encoding
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

// // ----------------------------------------------------------------------------
// // 57. REVERSE ARRAY IN-PLACE,Algorithm: Two Pointer Swap,Use Case: Array reversal without extra space

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


// // 58. MOVE ZEROS TO END (STABLE),Algorithm: Two Pointer (Stable Partition),Use Case: Moving elements while maintaining order
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

// // 59. TWO SUM (TWO POINTER),Algorithm: Two Pointer on Sorted Array,Use Case: Finding pair with target sum

// let nums = [2, 7, 11, 15], target = 9;
// let i = 0;
// let k = nums.length - 1;
// while (i < k) {
//     let sum = nums[i] + nums[k];
//     if (sum === target) {
//         console.log(new Array(i, k));
//         break;
//     }
//     if (nums[i] + nums[k] > target) {
//         k--;
//     } else {
//         i++;
//     }
// }

// // 60. MAXIMUM SUBARRAY SUM,Algorithm: Kadane's Algorithm,Use Case: Maximum sum contiguous subarray
// let nums = [-2, -1, -3, -12, -1, -56, -1, -5, -16];
// let cs = 0;
// let maxSub = -Infinity;
// for (let i = 0; i < nums.length; i++) {
//     maxSub = Math.max(maxSub, cs + nums[i]);
//     cs = cs + nums[i];
//     if (cs < 0) {
//         cs = 0;
//     }
// }
// console.log(maxSub);


// // 61. CHECK PALINDROME STRING (TWO POINTER),Algorithm: Two Pointer Technique,Use Case: Palindrome validation
// let pal = "racedar";
// let isTrue = true;
// let i = 0;
// let j = pal.length - 1;
// while (i < j) {
//     if (pal[i] !== pal[j]) {
//         isTrue = false;
//     }
//     i++;
//     j--;
// }
// console.log(isTrue);

// // 62. SORT COLORS (DUTCH FLAG - ALTERNATIVE),Algorithm: Dutch National Flag,Use Case: Sorting 0,1,2 in single pass

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
//         let temp = sort[j];
//         sort[j] = sort[i];
//         sort[i] = temp;
//         j--;
//         i++;
//     } else {
//         ind++;
//     }
// }
// console.log(sort);

// // 63. ROTATE ARRAY K POSITIONS (TEMP ARRAY),Algorithm: Modulo Arithmetic, Use Case: Rotation with extra space

// let nums = [1, 2, 3, 4, 5, 6, 7], k = 3;
// let temp = new Array(nums.length);
// for (let i = 0; i < nums.length; i++) {
//     temp[(i + k) % nums.length] = nums[i];
// }
// for (let i = 0; i < temp.length; i++) {
//     nums[i] = temp[i];
// }
// console.log(nums);

// // 64. REVERSE WORDS IN STRING (ALTERNATIVE),Algorithm: Array Reversal,Use Case: Word order reversal
// let str = "the sky is blue";
// let newStr = str.split(" ");
// let i = 0, j = newStr.length - 1;
// while (i < j) {
//     let temp = newStr[i];
//     newStr[i] = newStr[j];
//     newStr[j] = temp;
//     i++;
//     j--;
// }
// console.log(newStr.join(" "));

// // 65. FIND DUPLICATE (SORTED ARRAY),Algorithm: Linear Search,Use Case: Finding duplicates in sorted array


// let dup = [1, 3, 4, 2, 2];
// dup.sort((a, b) => a - b);
// for (let i = 0; i < dup.length; i++) {
//     if (dup[i] === dup[i + 1]) {
//         console.log(dup[i]);
//         break;
//     }
// }

//66. FIND MISSING NUMBER (SORTING),Algorithm: Sorting and Search,Use Case: Finding missing in range [0, n]

// let miss = [9, 6, 4, 2, 3, 5, 7, 0, 1];
// miss.sort((a, b) => a - b);
// for (let i = 0; i < miss.length; i++) {
//     if (miss[i] !== i) {
//         console.log(i);
//     }
// }
// if (miss[miss.length - 1] === miss.length - 1) {
//     console.log(miss.length);
// }

// 67. VALID ANAGRAM (FREQUENCY ARRAY),Algorithm: Character Frequency Array,Use Case: Checking if two strings are anagrams
// let s = "anagram", t = "nagaram";
// let char = new Array(26).fill(0);
// let isFalse = true;
// if (s.length !== t.length) {
//     console.log("not anagram");
// }
// for (let i = 0; i < s.length; i++) {
//     let charVal = s.charCodeAt(i);
//     let exactVal = charVal - 97;
//     char[exactVal]++;
// }
// for (let j = 0; j < t.length; j++) {
//     let charVal = t.charCodeAt(j);
//     let exactVal = charVal - 97;
//     if (char[exactVal] === 0) {
//         isFalse = false;
//         break;
//     }
//     char[exactVal]--;
// }
// if (isFalse) {
//     console.log("anagram hai");
// } else {
//     console.log("anagram nahi hai");
// }

// 68. FIRST NON-REPEATING CHARACTER (OBJECT),Algorithm: Hash Map,Use Case: Finding unique character
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

// // 69. MERGE TWO SORTED ARRAYS (IN-PLACE),Algorithm: Two Pointer MergeUse Case: Merging without extra array

// let arr1 = [1, 3, 5, 7], arr2 = [2, 4, 6, 8];
// let temp = [];
// let index = 0;
// let i = 0;
// let j = 0;
// while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] >= arr2[j]) {
//         temp[index] = arr2[j];
//         j++;
//         index++;
//     } else if (arr1[i] <= arr2[j]) {
//         temp[index] = arr1[i];
//         i++;
//         index++;
//     }
// }
// while (i < arr1.length) {
//     temp[index++] = arr1[i++];
// }
// while (j < arr2.length) {
//     temp[index++] = arr2[j++];
// }
// for (let i = 0; i < temp.length; i++) {
//     arr1[i] = temp[i];
// }
// console.log(arr1);


// 70. LONGEST COMMON PREFIX,Algorithm: Vertical Scanning,Use Case: Finding common prefix in strings

// let comChar = ["jlower", "slow", "fight"];
// comChar.sort((a, b) => a - b);
// let first = comChar[0];
// let last = comChar[comChar.length - 1];
// let i = 0;
// while (i < first.length && i < last.length && first[i] === last[i]) {
//     i++;
// }
// console.log(first.substring(0, i));
