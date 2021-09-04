let array = [100, 200, 200, 120, 238, 201, 201] 
let newArray = Array.from(new Set(array));
console.log(newArray) // [ 100, 200, 120, 238, 201 ]