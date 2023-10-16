
// Question 1: Two Sum Problem (Two Pointer Approach)

// function findTwoSum(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;

//     while (left < right) {
//         let currentSum = nums[left] + nums[right];

//         if (currentSum === target) {
//             return [left, right];
//         } else if (currentSum < target) {
//             left++;
//         } else {
//             right--;
//         }
//     }

   
//     return null;
// }

// let nums = [2, 7, 11, 15];
// let target = 9;
// let result = findTwoSum(nums, target);
// console.log(result);  


// Question 2: Reverse a String (Two Pointer Approach)

// function reverseString(s) {

//     let chars = s.split('');
//     let left = 0;
//     let right = chars.length - 1;

//     while (left < right) {
       
//         let temp = chars[left];
//         chars[left] = chars[right];
//         chars[right] = temp;

//         left++;
//         right--;
//     }

//     return chars.join('');
// }

// const s = "Hello, World!";
// const reversedString = reverseString(s);
// console.log(reversedString);  


// Question 3: Check Palindrome (Two Pointer Approach)

// function isPalindrome(word) {
   
//     word = word.toLowerCase();
//     let left = 0;
//     let right = word.length - 1;
//     while (left < right) {
       
//         if (word[left] !== word[right]) {
//             return false;
//         }
       
//         left++;
//         right--;
//     }

   
//     return true;
// }

// const word = "racecar";
// const isPalindromeResult = isPalindrome(word);
// console.log(isPalindromeResult);  


// Question 4: Find Nearest Two Sum (Two Pointer Approach)

// function nearestTwoSum(nums, target) {
 
//     nums.sort((a, b) => a - b);

//     let left = 0;
//     let right = nums.length - 1;
//     let nearestSum = Number.MAX_SAFE_INTEGER;
//     let result;

//     while (left < right) {
//         let currentSum = nums[left] + nums[right];
//         let difference = Math.abs(currentSum - target);
//         if (difference < Math.abs(nearestSum - target)) {
//             nearestSum = currentSum;
//             result = currentSum;
//         }

//         if (currentSum < target) {
//             left++;
//         } else {
//             right--;
//         }
//     }

//     return nearestSum;
// }

// const nums = [1, 2, 4, 8, 16];
// const target = 10;
// const nearestSum = nearestTwoSum(nums, target);
// console.log(nearestSum);  


// Question 5: Merge Two Sorted Arrays

// function mergeSortedArrays(arr1, arr2) {
//     let mergedArray = [];
//     let i = 0;
//     let j = 0;

  
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             mergedArray.push(arr1[i]);
//             i++;
//         } else {
//             mergedArray.push(arr2[j]);
//             j++;
//         }
//     }
//     while (i < arr1.length) {
//         mergedArray.push(arr1[i]);
//         i++;
//     }

//     while (j < arr2.length) {
//         mergedArray.push(arr2[j]);
//         j++;
//     }

//     return mergedArray;
// }

// const arr1 = [1, 3, 5, 7];
// const arr2 = [2, 4, 6, 8];
// const mergedArray = mergeSortedArrays(arr1, arr2);
// console.log(mergedArray);  

// Question 6: Generate and Print All Substrings of a String

// function generateSubstrings(str) {
//     let substrings = [];

  
//     for (let i = 0; i < str.length; i++) {
//         for (let j = i + 1; j <= str.length; j++) {
//             substrings.push(str.slice(i, j));
//         }
//     }

//     return substrings;
// }

// const str = "abc";
// const substrings = generateSubstrings(str);
// substrings.forEach(substring => {
//     console.log(substring);
// });


// Question 7: Print All Subarrays of an Array Without Using a Parent Array

// function printSubarrays(arr) {
//     // Iterate through the array to determine the starting index
//     for (let start = 0; start < arr.length; start++) {
//         // Iterate through the array to determine the ending index
//         for (let end = start; end < arr.length; end++) {
//             // Print the subarray from the start to the end index
//             for (let i = start; i <= end; i++) {
//                 console.log(arr[i]);
//             }
//         }
//     }
// }

// const arr = [1, 2, 3];
// printSubarrays(arr);


// Question 8: Find Maximum Sum of Contiguous Subarray

// function findMaximumSubarraySum(arr) {
//     let maxEndingHere = arr[0]; 
//     let maxSoFar = arr[0]; 

   
//     for (let i = 1; i < arr.length; i++) {
       
//         maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);

       
//         maxSoFar = Math.max(maxSoFar, maxEndingHere);
//     }

//     return maxSoFar;
// }

// const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const maxSum = findMaximumSubarraySum(arr);
// console.log(maxSum); 


// Question 9: Find Longest Increasing Subarray

function findLongestIncreasingSubarray(arr) {
    let maxLength = 1; 
    let currentLength = 1; 

    for (let i = 1; i < arr.length; i++) {
     
        if (arr[i] > arr[i - 1]) {
            currentLength++;
        } else {
         
            currentLength = 1;
        }

       
        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
}

const arr = [1, 2, 3, 1, 2, 3, 4, 5];
const longestIncreasingSubarrayLength = findLongestIncreasingSubarray(arr);
console.log(longestIncreasingSubarrayLength); 
