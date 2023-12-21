// array-1

// function getLevel2(n) {
//     let result = [];
//     for (let i = 1; i <= n; i++) {
//       result.push(2 ** i);
//     }
//     return result;
//   }
  
//   let resultArray = getLevel2(5);
//   console.log(resultArray); 
  



// array-2

// function generateArray(n, A, B) {
//     let result = [A, B];
//     for (let i = 2; i < n; i++) {
//       result[i] = result[i - 1] + result[i - 2];
//     }
//     return result;
//   }
  
//   let resultArray = generateArray(5, 2, 3);
//   console.log(resultArray); 
  




// array-3

// function reverseArray(arr) {
//     let reversedArray = arr.reverse();
//     console.log(reversedArray);
//   }
  
//   let inputArray = [1, 2, 3, 4, 5];
//   reverseArray(inputArray);
  



// array-4

// function printOdds(arr) {
//     let odds = arr.filter(element => element % 2 !== 0);
//     console.log("Massiv elementlari:", arr.join(" "));
//     console.log("Natija:", odds.join(" "), "toqlar soni =", odds.length);
//   }
  
//   let inputArray = [4, 5, 7, 8, 6, 9];
//   printOdds(inputArray);




// array-5

// function printEvensAndOdds(arr) {
//     let evens = arr.filter((element, index) => element % 2 === 0);
//     let odds = arr.filter((element, index) => element % 2 !== 0);
  
//     console.log("Massiv elementlari:", arr.join(" "));
//     console.log("Natija:", evens.join(" "), odds.reverse().join(" "));
//   }
  
//   let inputArray = [4, 5, 7, 8, 6, 9];
//   printEvensAndOdds(inputArray);




// array-6

// function printEverySecondElement(arr) {
//     let selectedElements = [];
//     for (let i = 0; i < arr.length; i += 2) {
//       selectedElements.push(arr[i]);
//     }
  
//     console.log("Massiv elementlari:", arr.join(" "));
//     console.log("Natija:", selectedElements.join(" "));
//   }
  
//   let inputArray = [2, 5, 8, 11, 14, 17];
//   printEverySecondElement(inputArray);



  
//   array-7

// function printEverySecondFromEnd(arr) {
//     let selectedElements = [];
//     for (let i = arr.length - 1; i >= 0; i -= 2) {
//       selectedElements.push(arr[i]);
//     }
  
//     console.log("Massiv elementlari:", arr.join(" "));
//     console.log("Natija:", selectedElements.join(" "));
//   }
  
//   let inputArray = [3, 6, 9, 12, 15];
//   printEverySecondFromEnd(inputArray);
  



// array-8

// function printEvenOddIndices(arr) {
//     let evenIndices = [];
//     let oddIndices = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       if (i % 2 === 0) {
//         evenIndices.push(arr[i]);
//       } else {
//         oddIndices.push(arr[i]);
//       }
//     }
  
//     console.log("Massiv elementlari:", arr.join(" "));
//     console.log("Natija:", evenIndices.concat(oddIndices).join(" "));
//   }
  
//   let inputArray = [2, 5, 7, 4, 8, 6];
//   printEvenOddIndices(inputArray);
  



// array-9

// function printOddEvenReverseIndices(arr) {
//     let oddIndices = [];
//     let evenIndices = [];
  
//     for (let i = 1; i < arr.length; i += 2) {
//       oddIndices.push(arr[i]);
//     }  
  
//     for (let i = arr.length - 2; i >= 0; i -= 2) {
//       evenIndices.push(arr[i]);
//     }
  
//     console.log("Massiv elementlari:", arr.join(" "));
//     console.log("Natija:", oddIndices.concat(evenIndices).join(" "));
//   }
  
//   let inputArray = [2, 5, 7, 4, 8, 6];
//   printOddEvenReverseIndices(inputArray);
  




// array-10

// function printCustomPattern(arr) {
//     let result = [];
  
//     for (let i = 0; i <= arr.length / 2; i++) {
//       result.push(arr[i], arr[arr.length - 1 - i]);
//     }
  
//     console.log("Massiv elementlari:", arr.join(" "));
//     console.log("Natija:", result.join(" "));
//   }
  
//   let inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
//   printCustomPattern(inputArray);
  




// array-12

// function separateTruthyFalsy(inputArray) {
//     let truthyArray = [];
//     let falsyArray = [];
  
//     for (let i = 0; i < inputArray.length; i++) {
//       if (inputArray[i]) {
//         truthyArray.push(inputArray[i]);
//       } else {
//         falsyArray.push(inputArray[i]);
//       }
//     }
  
//     console.log("Truthy:", truthyArray);
//     console.log("Falsy:", falsyArray);
//   }
  
//   let inputArray = [10, false, "", "Abdulaziz", null];
//   separateTruthyFalsy(inputArray);
  




// array-13

// function getOddMin(arr) {
//     let oddIndicesValues = [];
  
//     for (let i = 0; i < arr.length; i += 2) {
//       oddIndicesValues.push(arr[i]);
//     }
  
//     if (oddIndicesValues.length === 0) {
//       return "Massivda toq indeksli elementlar mavjud emas";
//     }
  
//     let minOddValue = Math.min(...oddIndicesValues);
//     return minOddValue;
//   }
  
//   let arr = [5, 10, 3, 8, 7, 2];
//   let result = getOddMin(arr);
//   console.log(result);





// array-14

// function getEvenMax(arr) {
//     let evenIndicesValues = [];
  
//     for (let i = 1; i < arr.length; i += 2) {
//       evenIndicesValues.push(arr[i]);
//     }
  
//     if (evenIndicesValues.length === 0) {
//       return "Massivda juft indeksli elementlar mavjud emas";
//     }
  
//     let maxEvenValue = Math.max(...evenIndicesValues);
//     return maxEvenValue;
//   }
  
//   let arr = [5, 10, 3, 8, 7, 2];
//   let result = getEvenMax(arr);
//   console.log(result);
  
  



// array-15

// function findLastLocalMax(arr) {
//     let lastLocalMaxIndex = -1;
  
//     for (let i = 1; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//         lastLocalMaxIndex = i;
//       }
//     }
  
//     return lastLocalMaxIndex;
//   }
  
//   let arr = [2, 4, 3, 8, 5, 1, 7];
//   let result = findLastLocalMax(arr);
//   console.log(result);
  




// array-16

// function findNearestToR(arr, R) {
//     let nearest = arr[0];
//     let minDifference = Math.abs(arr[0] - R);
  
//     for (let i = 1; i < arr.length; i++) {
//       let currentDifference = Math.abs(arr[i] - R);
      
//       if (currentDifference < minDifference) {
//         minDifference = currentDifference;
//         nearest = arr[i];
//       }
//     }
  
//     return nearest;
//   }
  
//   let arr = [2, 5, 8, 12, 16];
//   let R = 10;
//   let result = findNearestToR(arr, R);
//   console.log(result);
  



// array-18

// function findDuplicateElements(arr) {
//     let duplicateIndices = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] === arr[j] && !duplicateIndices.includes(i) && !duplicateIndices.includes(j)) {
//           duplicateIndices.push(i);
//           duplicateIndices.push(j);
//         }
//       }
//     }
  
//     return duplicateIndices;
//   }
  
//   let arr = [2, 5, 8, 12, 5, 16, 8];
//   let result = findDuplicateElements(arr);
//   console.log(result);
  



// array-20

// function createEvenArray(arr) {
//     let evenArray = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//         evenArray.push(arr[i]);
//       }
//     }
  
//     return evenArray;
//   }
  
//   let a = [3, 8, 12, 7, 6, 10, 14];
//   let result = createEvenArray(a);
//   console.log(result);
  



// array-21

// function incrementArray(arr, k) {
//     for (let i = 0; i < arr.length; i++) {
//       arr[i] += k;
//     }
  
//     return arr;
//   }
  
//   let a = [3, 8, 12, 7, 6, 10, 14];
//   let k = 5;
//   let result = incrementArray(a, k);
//   console.log(result);
  




// array-22

// function swapHalves(arr) {
//     const middleIndex = arr.length / 2;
  
//     for (let i = 0; i < middleIndex; i++) {
//       const temp = arr[i];
//       arr[i] = arr[i + middleIndex];
//       arr[i + middleIndex] = temp;
//     }
  
//     return arr;
//   }
  
//   let arr = [1, 2, 3, 4, 5, 6];
//   let result = swapHalves(arr);
//   console.log(result);
  



// array-30

function searchAllElements(arr, k) {
    const indices = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === k) {
        indices.push(i);
      }
    }
  
    return indices;
  }
  
  let arr = [1, 2, 3, 4, 2, 5, 2];
  let k = 2;
  let result = searchAllElements(arr, k);
  console.log(result);
  