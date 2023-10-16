
// 1*****Task 1: Remove Duplicates from an Array*****
// const arr = [3, 4, 5, 2, 3, 4, 5, 6];
// const uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);

// console.log(uniqueArr); 

// *****Task 2: Remove Duplicates from an Array using Bubble Sort for Sorting*****

// function bubbleSort(arr) {
//     const n = arr.length;

//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }

//     return arr;
// }

// function removeDuplicates(arr) {
//     const sortedArr = bubbleSort(arr);
//     const n = sortedArr.length;
//     const uniqueArr = [];

//     for (let i = 0; i < n; i++) {
//         if (sortedArr[i] !== sortedArr[i + 1]) {
//             uniqueArr.push(sortedArr[i]);
//         }
//     }

//     return uniqueArr;
// }

// const arr = [3, 4, 5, 2, 3, 4, 5, 6];
// const uniqueArr = removeDuplicates(arr);
// console.log(uniqueArr); 


// *******Task 3: Rotate the Array by k******

// function rotateArray(arr, k) {
//     const n = arr.length;
//     k = k % n; 
    
    // const rotatedArr = [];

 
    // for (let i = n - k; i < n; i++) {
    //     rotatedArr.push(arr[i]);
    // }

 
//     for (let i = 0; i < n - k; i++) {
//         rotatedArr.push(arr[i]);
//     }

//     return rotatedArr;
// }

// const arr = [1, 2, 4, 5, 6, 7];
// const k = 1;
// const rotatedArr = rotateArray(arr, k);
// console.log(rotatedArr);



// ********Task 4: Reverse Array in Sorted Order using Bubble Sort********

// function bubbleSort(arr) {
//     const n = arr.length;
//     let swapped;

//     for (let i = 0; i < n - 1; i++) {
//         swapped = false;
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
               
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//                 swapped = true;
//             }
//         }

       
//         if (!swapped) {
//             break;
//         }
//     }

//     return arr;
// }

// function reverseSortedArray(arr) {
//     const sortedArr = bubbleSort(arr);
//     const n = sortedArr.length;

  
//     for (let i = 0; i < Math.floor(n / 2); i++) {
    
//         let temp = sortedArr[i];
//         sortedArr[i] = sortedArr[n - i - 1];
//         sortedArr[n - i - 1] = temp;
//     }

//     return sortedArr;
// }

// const arr = [3, 4, 5, 6, 1, 8];
// const reversedSortedArr = reverseSortedArray(arr);
// console.log(reversedSortedArr); 


// ********Task 5: Traverse a 2D Array - Print column-wise reverse**********

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// const rows = matrix.length;
// const cols = matrix[0].length;

// // Traverse the 2D array column-wise in reverse order
// for (let j = cols - 1; j >= 0; j--) {
//     for (let i = 0; i < rows; i++) {
//         console.log(matrix[i][j]);
//     }
// }


// ***********## Task 6: Go in Zig-Zag************
// const matrix = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 1],
//     [3, 2, 5, 4, 6],
//     [7, 8, 9, 1, 2]
// ];

// const rows = matrix.length;
// const cols = matrix[0].length;

// for (let i = 0; i < rows; i++) {
//     if (i % 2 === 0) {
       
//         for (let j = 0; j < cols; j++) {
//             console.log(matrix[i][j]);
//         }
//     } else {
       
//         for (let j = cols - 1; j >= 0; j--) {
//             console.log(matrix[i][j]);
//         }
//     }
// }

// *********## Task 7: Transpose the Matrix***********

// const matrix = [
//     [0, 0, 0, 0],
//     [1, 1, 1, 1],
//     [2, 2, 2, 2],
//     [3, 3, 3, 3],
//     [4, 4, 4, 4]
// ];

// const rows = matrix.length;
// const cols = matrix[0].length;


// const transposedMatrix = [];
// for (let j = 0; j < cols; j++) {
//     transposedMatrix[j] = [];
//     for (let i = 0; i < rows; i++) {
//         transposedMatrix[j][i] = matrix[i][j];
//     }
// }


// for (let i = 0; i < cols; i++) {
//     console.log(transposedMatrix[i].join(' '));
// }

// *******## Task 8: Rotate By 90********

// const matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [1, 2, 3, 4],
//     [5, 6, 7, 8]
// ];

// const rows = matrix.length;
// const cols = matrix[0].length;


// const transposedMatrix = [];
// for (let j = 0; j < cols; j++) {
//     transposedMatrix[j] = [];
//     for (let i = 0; i < rows; i++) {
//         transposedMatrix[j][i] = matrix[i][j];
//     }
// }


// const rotatedMatrix = transposedMatrix.map(row => row.reverse());


// for (let i = 0; i < rows; i++) {
//     console.log(rotatedMatrix[i].join(' '));
// }


// *******## Task 9: N Traversal********

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// const rows = matrix.length;
// const cols = matrix[0].length;
// const result = [];

// for (let col = 0; col < cols; col++) {
//     const diagonal = [];
//     let i = rows - 1;
//     let j = col;
    
    
//     while (i >= 0 && j < cols) {
//         diagonal.push(matrix[i][j]);
//         i--;
//         j++;
//     }

//     result.push(diagonal);
// }

// console.log(result.flat().join(' '));

// ********## Task 10: Z Traversal**************

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// const rows = matrix.length;
// const cols = matrix[0].length;
// const result = [];


// for (let i = 0; i < rows; i++) {
//     if (i % 2 === 0) {
       
//         for (let j = 0; j < cols; j++) {
//             result.push(matrix[i][j]);
//         }
//     } else {
//         for (let j = cols - 1; j >= 0; j--) {
//             result.push(matrix[i][j]);
//         }
//     }
// }
// console.log(result.join(' '));


// *******## Task 11: Print the boundary*******

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// const rows = matrix.length;
// const cols = matrix[0].length;
// let result = '';

// for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//         if (i === 0 || i === rows - 1 || j === 0 || j === cols - 1) {
//             result += matrix[i][j] + ' ';
//         }
//     }
// }

// console.log(result.trim());


// **********## Task 12: Print the elements without the border*********

// const matrix = [
//     [11, 12, 13, 14],
//     [15, 16, 17, 18],
//     [19, 20, 21, 22],
//     [23, 24, 25, 26]
// ];

// const rows = matrix.length;
// const cols = matrix[0].length;
// let result = '';
// for (let i = 1; i < rows - 1; i++) {
//     for (let j = 1; j < cols - 1; j++) {
//         result += matrix[i][j] + ' ';
//     }
// }

// console.log(result.trim());

// **********## Task 13: Circular Traversal*********


// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// let result = [];

// while (matrix.length > 0) {
    
//     result = result.concat(matrix.shift());
//     if (matrix.length > 0 && matrix[0].length > 0) {
//         for (let i = 0; i < matrix.length; i++) {
//             result.push(matrix[i].pop());
//         }
//     }

//     if (matrix.length > 0) {
//         result = result.concat(matrix.pop().reverse());
//     }

//     if (matrix.length > 0 && matrix[0].length > 0) {
//         for (let i = matrix.length - 1; i >= 0; i--) {
//             result.push(matrix[i].shift());
//         }
//     }
// }

// console.log(result.join(' '));
