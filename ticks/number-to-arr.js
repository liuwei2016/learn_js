const DigitizeInt = n => [...`${n}`].map(i => parseInt(i));
DigitizeInt(4560) // [4, 5, 6, 0]
DigitizeInt(131) // [1,3,1]