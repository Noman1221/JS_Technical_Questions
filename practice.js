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
//     maxSum = maxElement
// }
// console.log(maxSum);

// let inp = [1, 2, 3, 1];
// let isTrue = false;
// let arr = new Array();
// for (let i = 0; i < inp.length; i++) {
//     if (!arr.includes(inp[i])) {
//         arr.push(inp[i]);
//     } else {
//         isTrue = true;
//     }
// };
// console.log(isTrue);


// q1 string compression 
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





// let arr = [5, 3, 6, 8, 4];
// let i = 0;
// let j = arr.length - 1;
// while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
// };
// console.log(arr);

// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]
// let arr = [0, 1, 0, 3, 12];

// let nonZero = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         arr[nonZero] = arr[i];
//         nonZero++;
//     };
// };
// for (let j = nonZero; j < arr.length; j++) {
//     arr[j] = 0;
// };
// console.log(arr);


// let nums = [2, 7, 11, 15], target = 9
// // Output: [0, 1](because nums[0] + nums[1] = 2 + 7 = 9) 

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
//         i++
//     }
// }

// for (let i = 0; i < nums.length; i++) {
//     for (let k = i + 1; k < nums.length; k++) {
//         let sum = nums[i] + nums[k];

//         if (sum === target) {
//             console.log(new Array(i, k));
//             break;
//         }
//     }
// }

// Given an integer array, find the contiguous subarray(containing at least one number) which has the largest sum and return its sum.

// let nums = [-2, -1, -3, -12, -1, -56, -1, -5, -16]
// // Output: 6
// let cs = 0;
// let maxSub = -Infinity;
// for (let i = 0; i < nums.length; i++) {
//     maxSub = Math.max(maxSub, cs + nums[i])
//     cs = cs + nums[i];

//     if (cs < 0) {
//         cs = 0;
//         console.log(cs);
//     };

// };
// console.log(maxSub);



// check palindrome or not
// Problem: Check if a string is a palindrome

// A palindrome is a word, phrase, or sequence that reads the same backward as forward.
// let pal = "racedar"
// let isTrue = true
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

// Problem: Sort Colors(Dutch National Flag Problem)

// Given an array containing only 0s, 1s, and 2s, sort them in -place.

// let sort = [2, 0, 2, 1, 1, 0]
// // Output: [0, 0, 1, 1, 2, 2]

// let i = 0;
// let j = sort.length - 1;
// let ind = 0;
// while (i < j) {
//     if (sort[i] === 0) {
//         let temp = sort[i];
//         sort[i] = sort[ind];
//         sort[ind] = temp;
//         i++
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


//  Rotate an array to the right by k positions

let nums = [1, 2, 3, 4, 5, 6, 7], k = 3
// Output: [5, 6, 7, 1, 2, 3, 4]

// let temp = new Array(nums.length);

// for (let i = 0; i < nums.length; i++) {
//     temp[(i + k) % nums.length] = nums[i];
// };

// for (let i = 0; i < temp.length; i++) {
//     nums[i] = temp[i];
// }
// console.log(nums);
// let i = 0, j = nums.length - 1;
function reverse(nums, i, j) {
    while (i < j) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j--;
    };
};
// reverse(nums, 0, nums.length - 1);
// reverse(nums, 0, k - 1);
// reverse(nums, k, nums.length - 1)
// console.log(nums);

// Problem: Reverse Words in a String

// Given a string, reverse the order of the words.

// Input: "the sky is blue"
// Output: "blue is sky the"

// let str = "the sky is blue"
// let newStr = str.split(" ")
// reverse(newStr, 0, newStr.length - 1)

// console.log(newStr.join(" "));


// Problem: Find Duplicate Number

// Given an array of integers where each integer is between 1 and n(inclusive) and the array has n + 1 elements, find the duplicate number.

// let dup = [1, 3, 4, 2, 2]
// // Output: 2
// dup.sort((a, b) => a - b)
// for (let i = 0; i < dup.length; i++) {
//     if (dup[i] === dup[i + 1]) {
//         console.log(dup[i]);
//         break
//     }
// }

// Problem: Find Missing Number

// Given an array containing n distinct numbers taken from the range 0 to n, find the one missing number.
// let miss = [9, 6, 4, 2, 3, 5, 7, 0, 1]
// // Output: 8

// miss.sort((a, b) => a - b);
// for (let i = 0; i < miss.length; i++) {
//     if (miss[i] !== i) {
//         console.log(i);
//     }
// }
// if (miss[miss.length - 1] === miss.length - 1) {
//     console.log(miss.length);
// }


// Problem: Valid Anagram

// Given two strings, check if they are anagrams of each other.

//     Anagram: A word formed by rearranging the letters of another word.

// let s = "anagram", t = "nagaram"
// // Output: true
// let char = new Array(26).fill(0);
// let isFalse = true;

// if (s.length !== t.length) {
//     console.log("not anagram");
// };

// for (let i = 0; i < s.length; i++) {
//     let charVal = s.charCodeAt(i);
//     let exactVal = charVal - 97;
//     char[exactVal]++;
// };

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


// Problem: First Non - Repeating Character

// Given a string, find the first character that appears only once(non - repeating).

//     Examples:

// let str = "leetcode"
// // Output: "l"

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
//         break
//     }
// }


// Problem: Merge Two Sorted Arrays

// Given two sorted arrays, merge them into one sorted array.

// let arr1 = [1, 3, 5, 7], arr2 = [2, 4, 6, 8]
// // Output: [1, 2, 3, 4, 5, 6, 7, 8]
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
// };
// for (let i = 0; i < temp.length; i++) {
//     arr1[i] = temp[i];
// };
// console.log(arr1);


// let comChar = ["jlower", "slow", "fight"]
// comChar.sort((a, b) => a - b);

// let first = comChar[0];
// let last = comChar[comChar.length - 1]
// let i = 0;
// while (i < first.length && i < last.length && first[i] === last[i]) {
//     i++;
// };
// console.log(first.substring(0, i));


