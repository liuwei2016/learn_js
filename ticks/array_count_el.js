/*您是否有一个大型二维数组并想将其展平以制作单个一维数组？这个技巧可能会对你有所帮助。查看下面的示例代码。*/
const CountOcc = (array, val) => array.reduce((x, v) => (v === val ? x + 1 : x), 0);
console.log(CountOcc([3, 3, 4, 1, 2, 5, 3, 6],3)) // 3
console.log(CountOcc([3, 4, 4, 1, 3, 6],4)) // 2