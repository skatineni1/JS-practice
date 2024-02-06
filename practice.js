const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers)

const users = [{Name : "Sai Kalyan", Age : 22},
             {Name : "Sharat", Age : 33},
             {Name : "Bhargavi", Age : 21},
             {Name : "Pravallika", Age: 19}]
const FilteredAge = users.filter(users => users.Age > 20);


console.log(FilteredAge)

const words = ['BMW', 'AUDI', 'MCLAREN', 'PORCHE'];
const filteredWords = words.filter(word => /^B/.test(word));
console.log(filteredWords)


const num = [99, 37, 64, 52, 86, 98, 75, 65];
const filterednum = num.slice(2, 5); 
console.log(filterednum);

function filterByLength(arr, minLength) {
    return arr.filter(item => item.length >= minLength);
}

const fruits = ['apple', 'banana', 'grape', 'orange'];
const longFruits = filterByLength(fruits, 6);
console.log(longFruits)
console.log(fruits[2])
fil_fruits = fruits.copyWithin(2, 0)
console.log(fil_fruits)
console.log(fruits)

const ages = [32, 33, 19, 40];

f_age = ages.every(checkAge)

function checkAge(age) {
  return age > 18;
}
console.log(f_age)

fruits.fill("Kiwi");

const age = [3, 10, 18, 20];

ages.findIndex(checkAge);

function checkAge(age) {
  return age > 18;
}


console.log(ages.findLast(checkAge))
console.log(ages.findLastIndex(checkAge))

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr)

let text = "";
fruits.forEach(myFunction);
function myFunction(item, index) {
  text += index + ": " + item + "<br>"; 
}
console.log(text)

console.log(Array.from("ABCDEFG"))

console.log(fruits.includes("Mango"))

console.log(Array.isArray(fruits))

console.log(Array.isArray("BMW M5 CS"))

console.log(fruits.join(" and "))

const keys = fruits.keys();

let text1 = "";
for (let x of keys) {
  text1 += x + "<br>";
}
console.log(text1)

console.log(fruits.length)

console.log(numbers.map(Math.sqrt))

const num1 = [1, 2, 3, 4]
num2 = num1.map(Myfunc)

function Myfunc(num) {
    return num*10
}
console.log(num2)

const fruits1 = ["Banana", "Orange", "Apple", "Mango"]
fruits1.pop()
console.log(fruits1)
console.log(fruits1.pop())



console.log(fruits.push("Green Apple", "Pine Apple", "Lemon"))
console.log(fruits)
console.log(fruits.reverse())
console.log(fruits.shift())
console.log(fruits.unshift("Green Apple", "Pine Apple", "Lemon"))
console.log(fruits.sort())
console.log(fruits.reverse())
//console.log(fruits.splice(2,0, "BlueBerry", "CranBerry"))

text2 = fruits.toString()
console.log(text2)

const myArr1 = fruits.valueOf()
console.log(myArr1)

const months = ["Januar", "February", "March", "April"];
const myMonths = months.with(0, "January");
console.log(myMonths)
