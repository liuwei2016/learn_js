let object1 = {'a' : 1, 'b' : 2, 'c': 3}
let object2 = {'d' : 4, 'e' : 5}
//combining the objects
const combine = {...object1 , ...object2}
console.log(combine) //  {'a' : 1, 'b' : 2, 'c': 3, 'd' : 4, 'e' : 5}