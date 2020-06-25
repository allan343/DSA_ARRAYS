 
        class Array{ 
      constructor(){ 
        this.length=0; 
        this.data={}; 
      } 
      getElementAtIndex(index){ 
        return this.data[index]; 
      } 
      push(element){ 
        this.data[this.length]=element; 
        this.length++; 
        return this.length; 
      } 
      pop(){ 
        const item= this.data[this.length-1]; 
        delete this.data[this.length-1]; 
        this.length--; 
        return this.data; 
      } 
      deleteAt(index){ 
        for(let i=index; i<this.length-1;i++){ 
          this.data[i]=this.data[i+1]; 
        } 
        delete this.data[this.length-1]; 
        this.length--; 
        return this.data; 
      } 
      insertAt(item, index){ 
        for(let i=this.length;i>=index;i--){ 
          this.data[i]=this.data[i-1]; 
        } 
        this.data[index]=item; 
        this.length++; 
        return this.data; 
      } 
    } 
    const array= new Array(); //we are instantiating an object of Array class 
    array.push(12); 
    console.log(array.getElementAtIndex(0));
    console.log(array.getElementAtIndex(1));
    console.log(array.getElementAtIndex(2));
    console.log(array.getElementAtIndex(3));
    console.log(array.getElementAtIndex(4));
    console.log(array.getElementAtIndex(5));
    array.push(13); //pushing element  
    console.log(array.getElementAtIndex(0));
    console.log(array.getElementAtIndex(1));
    console.log(array.getElementAtIndex(2));
    console.log(array.getElementAtIndex(3));
    console.log(array.getElementAtIndex(4));
    console.log(array.getElementAtIndex(5));
    
    array.push(14); 
    console.log(array.getElementAtIndex(0));
    console.log(array.getElementAtIndex(1));
    console.log(array.getElementAtIndex(2));
    console.log(array.getElementAtIndex(3));
    console.log(array.getElementAtIndex(4));
    console.log(array.getElementAtIndex(5));
    array.push(10); 
    console.log(array.getElementAtIndex(0));
    console.log(array.getElementAtIndex(1));
    console.log(array.getElementAtIndex(2));
    console.log(array.getElementAtIndex(3));
    console.log(array.getElementAtIndex(4));
    console.log(array.getElementAtIndex(5));
    array.push(989); 
    console.log(array.getElementAtIndex(0));
    console.log(array.getElementAtIndex(1));
    console.log(array.getElementAtIndex(2));
    console.log(array.getElementAtIndex(3));
    console.log(array.getElementAtIndex(4));
    console.log(array.getElementAtIndex(5));

    array.pop(); //Popping element 989 
    console.log(array.getElementAtIndex(0));
    console.log(array.getElementAtIndex(1));
    console.log(array.getElementAtIndex(2));
    console.log(array.getElementAtIndex(3));
    console.log(array.getElementAtIndex(4));
    console.log(array.getElementAtIndex(5));
 
    array.insertAt(456, 2); //Inserting element 456 
    
    console.log(array.getElementAtIndex(0));
    console.log(array.getElementAtIndex(1));
    console.log(array.getElementAtIndex(2));
    console.log(array.getElementAtIndex(3));
    console.log(array.getElementAtIndex(4));
    console.log(array.getElementAtIndex(5));
  
    array.deleteAt(3); //Deleting 14 
    console.log(array.getElementAtIndex(0));
    console.log(array.getElementAtIndex(1));
    console.log(array.getElementAtIndex(2));
    console.log(array.getElementAtIndex(3));
    console.log(array.getElementAtIndex(4));
    console.log(array.getElementAtIndex(5));