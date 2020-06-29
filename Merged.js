const example = [3,1,2,21,55,4]; // [21,55]

function filter(arr, limit) {
  const filtered = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < limit) {
      filtered.push(arr[i]);
    }
  }

  return filtered;
}


class Array {

  filter(limit) {

  }

}

const example2 = [1,2,3]; // 6
const example3 = [1,1,1,0]; // 3
const example4 = [1,-1,0]; // 1
const example5 = [1,-1,5,0]; // 5
const example6 = [4,6,-3,5,-2,1]; // 12
const example7 = [-1]; // -1
                              
function maxSumSeq(arr) {
  let maxSum = arr[0] ? arr[0] : 0;
  let currSum = 0;

  for(let i = 0; i < arr.length-1; i++) {
    currSum = arr[i];

    for(let j = i+1; j < arr.length; j++) {
      const num2 = arr[j]
      currSum += num2;

      if(currSum > maxSum) {
        maxSum = currSum;
      }
    }

    if(currSum > maxSum) {
      maxSum = currSum;
    }
  }

  return maxSum;
}

console.log(maxSumSeq(example2));
console.log(maxSumSeq(example3));
console.log(maxSumSeq(example4));
console.log(maxSumSeq(example5));
console.log(maxSumSeq(example6));
console.log(maxSumSeq(example7));

const a1 = [1,10,30];
const a2 = [2,12,13] 
// [1,2,10,12,13,30]

function mergeArrays(arr1, arr2) {
  const result = [];

  while(arr1.length > 0 && arr2.length > 0) {
    if(arr1[0] < arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }

  return [...result, ...arr1, ...arr2];
}

console.log(mergeArrays(a1, a2));