
const RandomIntArray = (min, max, n = 1) => Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min)
RandomIntArray(5, 20, 4) // [ 8, 17, 13, 9]