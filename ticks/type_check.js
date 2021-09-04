const GetType = v => v === undefined ? 'undefined' : v === null ? 'null' :   v.constructor.name.toLowerCase();
console.log(GetType("Programming")) // String
console.log(GetType(123)) //Integer