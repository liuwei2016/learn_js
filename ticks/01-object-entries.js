const person = {
    name: 'John',
    age: 20
  };
  Object.keys(person); // ['name', 'age']
  Object.entries(data); // [['name', 'John'], ['age', 20]]
// 数据循环 效率更高
Object.keys(person).forEach((key) => {
    console.log(`${key} is ${person[key]}`);
  });
  // using entries to get key and value both
  Object.entries(person).forEach(([key, value]) => {
    console.log(`${key} is ${value}`);
  });
  // expected output:
  // name is John
  // age is 20 