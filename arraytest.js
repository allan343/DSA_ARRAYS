var Array = require('./Array');

function arrayStuff(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);
    arr.insert(0,99);
   console.log( arr.get(0));
arr.push(5);
console.log(arr.get(1));
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    console.log(arr);
}

arrayStuff()