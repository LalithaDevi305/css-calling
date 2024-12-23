let a = 25.1759;
console.log(a);
console.log(typeof a)
console.log(a.toFixed(2))// fixed no of decimal digits
console.log(a.toPrecision(3)) // fixed no of digits
//25.1759==>25.176==>25.18==>25.2;
a = 25;
console.log(a.toString(2))

//Math methods

console.log(Math.max(5, 8, 2, 5, 3));
console.log(Math.min(5, 8, 2, 5, 3));
console.log(Math.sqrt(16));
console.log(Math.cbrt(27))
console.log(Math.ceil(2.4)) //3
console.log(Math.floor(2.4)) //3
console.log(Math.round(3.14))
console.log(Math.random())
console.log(Math.pow(2,3), 2**3) //8
console.log(Math.floor(Math.random() * 10000))

//strings
let str = 'raj';
let str1 = "raj";
console.log(typeof str, typeof str1);
let quote = "The Gandhi Said,'Good night'"
let time = 'The Time is 5 o\' clock';
let cost = 25, quantity = 4;
console.log(` The total of ${quantity}  apples of each worth ${cost} is ${cost * quantity} `)

let s = "prasad";
console.log(s.length) //6
console.log(s.charAt(1))
console.log(s.indexOf('a')); //2
console.log(s.lastIndexOf('a')) //4
console.log(s.slice(2))
let s1="     javascript      "
console.log(s1.trim(2,5))
console.log(s1.trimEnd(2))
console.log(s1.trimStart(5))
console.log(s1.split(''))
console.log(s.split(''))
console.log(s1.endsWith('d'))
console.log(s.startsWith('p'))