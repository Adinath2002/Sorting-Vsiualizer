//    how to copy reference variable

var a =[1,3,4,5,6];

var b=[...a];

b.pop();

console.log(a);
console.log(b);


// it happened because in normal condition when we copy primitive date into the object than what heppens is that it doest get copied but it actually changes the original object 

// for example

// var a=[1,2,3,4,5];
// var b=a;

// now 
// b.pop();

// so now we think that the output will be a=12345
// and b=1234

// but it is not like that the answer is 
// a=1234
// and b also=1234

// ... is spreador in java whose task is to copu objects written after it in this case a .