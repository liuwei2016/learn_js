// difficult to read
const billion = 1000000000;
// easier to read
const readableBillion = 1000_000_000;
console.log(readableBillion) // returns 1000000000

/*The underscore separator can also be used with BigInt numbers, like the following example:*/
const trillion = 1000_000_000_000n;
console.log(trillion); // 1000000000000