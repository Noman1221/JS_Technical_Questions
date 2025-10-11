// let x = 2;
// let n = 10;
// function myPow(x, n) {
//     if (n === 0) {
//         return 1;
//     };

//     let halfPower = myPow(x, n / 2);
//     let halfPowerSq = halfPower * halfPower;
//     if (n % 2 !== 0) {
//         halfPowerSq = x * halfPowerSq;
//     };
//     return halfPowerSq
// }
// console.log(myPow(x, n));


// let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// let max = -Infinity;
// let i = 0; j = height.length - 1; 
// while (i < j) {
//     area = Math.min(height[i], height[j]) * (j - i);
//     max = Math.max(max, area)
//     if (height[i] < height[j]) {
//         i++;
//     } else {
//         j--;
//     }
// }
// console.log(max);


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


// let nums = [-1, 0, 1, 2, -1, -4];
// nums.sort((a, b) => a - b);  // [-4, -1, -1, 0, 1, 2]

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
//             // while (j < k && nums[k] === nums[k + 1]) k--;
//         }
//     }
// }

// console.log(newArr);  // Correct output: [[-1, -1, 2], [-1, 0, 1]]




// let arr = [1, -1, 3, 2, -7, -5, 11, 6]

// let i = 0;
// let j = 0;
// while (j < arr.length) {
//     if (arr[j] > 0) {
//         let temp = arr[j];
//         arr[j] = arr[i];
//         arr[i] = temp;
//         i++;
//     };
//     j++;
// }

// console.log(arr);


// let arr = [1, 2, 3, 4, 5]

// let temp = arr[arr.length - 1];
// for (let i = arr.length - 2; i >= 0; i--) {
//     arr[i + 1] = arr[i];
//     if (i === 0) {
//         arr[i] = temp;
//     };
// };
// console.log(arr);

// let arr = [2, 3, 1, 2, 3];
// arr.sort((a, b) => a - b);
// let tempArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//         tempArr[i] = arr[i];
//     }
// }

// console.log(tempArr);

// let arr = [2, 3, 1, 2, 3];
// arr.sort((a, b) => a - b);
// let tempArr = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//         tempArr.push(arr[i]);
//     }
// }

// console.log(tempArr);



// let arr = [-1, 0, 1, 2, -1, -4];
// arr.sort((a, b) => a - b);
// let i = 0;
// let j = arr.length - 1;
// let temp = [];
// while (i < j) {
//     let sum = arr[i] + arr[j]

//     if (sum === 0) {
//         temp.push([arr[i], arr[j]]);

//         // skip duplicates on left side
//         while (i < j && arr[i] === arr[i + 1]) i++;
//         // skip duplicates on right side
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


// let a = [1, 2, 3, 4, 5, 6]

// let n = a.length;
// let k = n - 1;                  // last INDEX, not value
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
// };

// for (let i = 0; i < a.length; i++) {
//     a[i] = Math.floor(a[i] / key)
// }
// console.log(a);


// let arr1 = [1, 5, 10, 20, 40, 80], arr2 = [6, 7, 20, 80, 100], arr3 = [3, 4, 15, 20, 30, 70, 80, 20];
// let res = [];
// let i = 0; let j = 0; let k = 0;
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
//     };
// };
// console.log(res);


// for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//         if (arr1[i] === arr2[j]) {
//             for (let k = 0; k < arr3.length; k++) {
//                 if (arr1[i] === arr3[k]) {
//                     if (!res.includes(arr1[i])) {
//                         res.push(arr1[i]);
//                     }
//                 }
//             }
//         }
//     }
// }
// console.log(res);

// let arr = [4, 2, -3, 1, 6]

// let sum = 0;
// // let maxSum = Infinity;
// let t = false;
// for (let i = 0; i < arr.length; i++){
//     let sum2 = -Infinity;
//     for (let j = i + 1; j < arr.length; j++){
//         sum2 += arr[i] + arr[j];
//         if (sum2 === sum) {
//             t = true;
//         };
//     };
// }




// // Find the first non - repeating character in a string.
// let str = "aaabccee";

// let obj = {};
// for (let i = 0; i < str.length; i++) {
//     let char = str.charAt(i);
//     if (obj[char]) {
//         obj[char]++
//     } else {
//         obj[char] = 1;
//     }
// };

// for (let key in obj) {

//     if (obj[key] === 1) {
//         console.log(key);
//         break;
//     }
// }


// Count the occurrences of each character in a string.
// let str = "aaabebbssbe";
// let arr = {}

// for (let i = 0; i < str.length; i++) {
//     let char = str.charAt(i);
//     if (arr[char]) {
//         arr[char]++;
//     } else {
//         arr[char] = 1;
//     }
// };

// for (let key in arr) {
//     console.log(` ${key} comes ${arr[key]} times `);

// }


// let arr = [2, 1, 3, 2, 1, 2, 6, 2, 7, 2];
// let obj = {};

// for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]]) {
//         obj[arr[i]]++;
//     } else {
//         obj[arr[i]] = 1;
//     }
// };

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



// let ang1 = "listen";
// let ang2 = "silwnt";
// let freq = new Array(26).fill(0);
// for (let i = 0; i < ang1.length; i++) {
//     let char = ang1.charCodeAt(i);
//     let exactVal = char - 97;
//     freq[exactVal]++;
// };
// for (let i = 0; i < ang2.length; i++) {
//     let char = ang2.charCodeAt(i);
//     let exactVal = char - 97;
//     if (freq[exactVal] === 0) {
//         console.log("not anagram");
//         break;
//     };
//     freq[exactVal]--
// }

// Find the longest word in a string. 
// let str = "The quick brown fox jumped over the lazy dog"
// let str1 = str.split(" ");
// let longestWord = ""
// for (let i = 0; i < str1.length; i++) {
//     if (str1[i].length >= longestWord.length) {
//         longestWord = str1[i];
//     }
// }
// console.log(longestWord);

// Capitalize the first letter of each word in a string.

// let str = "the quick brown fox jumped over the lazy dog"
// let newStr = str[0].toUpperCase();

// for (let i = 1; i < str.length; i++) {
//     console.log(str[i]);

//     if (str[i] === " ") {
//         newStr += str[i];
//         newStr += str[i + 1].toUpperCase();
//         i++;
//     } else {
//         newStr += str[i];
//     }
// };
// console.log(newStr);


// Find the maximum and minimum in an array.

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

// Reverse an array without using.reverse().
// let arr = [4, 2, 5, 1, 3];
// for (let i = 0; i < arr.length; i++) {
//     let temp = arr[i];
//     arr[i] = arr[arr.length - 1]
//     arr[arr.length - 1] = temp;
// };
// console.log(arr);


// Remove duplicate elements from an array.
// let arr = [4, 2, 5, 1, 4, 3];
// arr.sort((a, b) => a - b);
// let temp = [];
// for (let i = 0; i < arr.length; i++) {
//     if (!temp.includes(arr[i])) {
//         temp[temp.length] = arr[i];
//     };
// };
// console.log(temp);


// Find the intersection of two arrays. 

// let arr1 = [2, 4, 1, 3];
// let arr2 = [1, 3, 5, 3];

// let intersection = [];
// let lookUp = {};

// for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i])) {
//         intersection.push(arr1[i]);
//     }
// }

// step 2 
// for (let i = 0; i < arr1.length; i++) {
//     lookUp[arr1[i]] = true;
// };

// for (let i = 0; i < arr2.length; i++) {
//     console.log(lookUp[arr2[i]]);

//     if (lookUp[arr2[i]]) {
//         intersection.push(arr2[i]);
//     }
//     lookUp[arr2[i]] = false;
// }


// let arr1 = [1, 2, 3];
// let arr2 = [2, 3, 4];

// let union = [];

// for (let i = 0; i < arr1.length; i++) {
//     union[union.length] = arr1[i];
//     // union.push(arr1[i])
// };
// for (let j = 0; j < arr2.length; j++) {
//     // union.push(arr2[j]);
//     union[union.length] = arr2[j];
// }

// let unique = [];
// for (let k = 0; k < union.length; k++) {
//     if (!unique.includes(union[k])) {
//         unique.push(union[k]);
//     };
// }
// console.log(unique);


// Sort an array without using
// let arr = [5, 3, 4, 1, 2];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//         if (arr[j] >= arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp
//         }
//     }
// }
// console.log(arr);


// Find the second largest number in an array. 
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
// };
// console.log(secLargest);



