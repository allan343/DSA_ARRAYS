var Array = require('./Array');

function printArray(arr){
    for (i = 0; i < arr.length; i++) {
        console.log(arr.get(i));
      } 
}
function filterArray(arr){

    for (i = 0; i < arr.length; i++) {
      if(arr.get(i)<5)
      {arr.remove(i)}
      } 
}

function mergeArrays(arr1,arr2){
   
    for (i = 0; i < arr2.length; i++) {
        arr1.push(arr2.get(i))

    }
        
}
function Products(arr){
   
    for (i = 0; i < arr.length; i++) {
        let prod=arr[i];
       for (a=0; a<arr.length;a++)
       {
           if(a!=i)
           {
                prod = prod * arr[a];
           }
       }
       arr.insert(i,prod);

    }
        
}

function maxSum(arr){
    let max=arr.get(0);
    let newMax=max;
    for (i = 1; i < arr.length; i++) {
        max+=arr.get(i)
        if(max>newMax)
        {
            newMax=max;
        }
        
}


console.log("max is "+newMax);
}
function arrayStuff(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();
    let merge1 = new Array();
    let merge2 = new Array();
    let prod= new Array();
    // Add an item to the array
    arr.push(3);
    
 
arr.push(5);

    arr.push(15);
    arr.push(11);
  //  console.log("running?");
   // console.log(arr);
 //   arr.push(19);
  //  arr.push(45);
    
   // arr.push(10);
   // arr.insert(4,99);

    //printArray(arr);
    //arr.remove(3);
   // printArray(arr);

    //arr.pop()
  //  printArray(arr);
    console.log("question 4");
    /*arr.pop();
    arr.pop();
    arr.pop();
    arr.pop();
    arr.pop();*/
    //printArray(arr);
 
    arr.push('a');
    printArray(arr);
    //console.log(arr.get(5));
    //arr.pop();
    /*
    console.log("question 5");
    arr.push(15);
    arr.push(4);
    arr.push(45);
    printArray(arr);
    filterArray(arr);
    printArray(arr);
    arr.pop();
    arr.pop();
  //  arr.pop();
    //question 7
    console.log("question 7")

    arr.push(4);
    arr.push(6);
    arr.push(-3); 
    arr.push(5);
    arr.push(-2);
    arr.push(1);
    maxSum(arr);
    arr.pop();
    arr.pop();
    arr.pop();
    arr.pop();
    arr.pop();
    arr.pop();
    //question 8
    console.log("question 8")
    merge1.push(1);
    merge1.push(3);
    merge1.push(6);
    merge1.push(8);
    merge1.push(11);
    printArray(merge1);
    merge2.push(2);
    merge2.push(3);
    merge2.push(5);
    merge2.push(8);
    merge2.push(9);
    merge2.push(10);
    printArray(merge2)
    mergeArrays(merge1,merge2);
    console.log("merged:");
    printArray(merge1);

    //question 10
    console.log("question 9");
 
    prod.push(1);
    prod.push(3);
    prod.push(9);
    prod.push(4);
    
    Products(prod);
    printArray(prod);*/

}

arrayStuff()