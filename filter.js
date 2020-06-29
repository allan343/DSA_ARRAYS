const example = [3,1,2,21,55,4]; // [21,55]

function filter(arr, limit) {
  const filtered = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] >= limit) {
      filtered.push(arr[i]);
    }
  }

  return filtered;
}


console.log(filter(example,5));
