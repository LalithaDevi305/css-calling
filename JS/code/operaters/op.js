//operators//
//1.arithmetic operators//
let a=40; b=5;
console.log(`the sum of${a}and${b}is${a+b}`)
console.log(`the difference of${a}and${b}is${a-b}`)
console.log(`the multiply of${a}and${b}is${a*b}`)
console.log(`the division of${a}and${b}is${a/b}`)
console.log(`the remainder of${a}and${b}is${a%b}`)
console.log(`the power of${a}and${b}is${a**b}`)
//2.relation operators//
let x=40;y=10;z=40;
console.log(x>y)//T 
console.log(x<y)//F 
console.log(x>=y)//T 
console.log(x<=y) //F
console.log(x==z)//T 
console.log(x===z)//F 
console.log(x!=z)//F
console.log(x!==y)//T
//3.logical operators//
let p=20;s=10;
console.log((p<s)&&(p<s))//F
console.log((p>s)&&(p>s))//T
console.log((p<s)||p>s)//T
console.log((p>s)||(p<s))//T
console.log((p<s)||(p<s))//F
console.log(!(s>p))//T
console.log(!(p>s))//F

/*4. assignment or shorthand operators */
a=40;
console.log(a += 2);//42
console.log((a -= 2))//40
console.log((a *= 2))//80
console.log((a /= 2))//40
console.log((a **= 2))//1600
console.log((a %= 2))//0


/*5.incement and decrement oprator*/

a = 7;
b = a++;//a=a+1
c = ++a;
console.log(a, b, c) //9 7 9

a = 40, b = 10;
c = ++a + a++ + --b + b-- //41+41+9+9
console.log(c) //100

/*6. ternary operators */
a = 42;
c = (a % 2 == 0) ? 'Even' : 'Odd'
console.log(c)//even
b= 41;
c = (b % 2 == 0) ? 'Even' : 'Odd'
console.log(c)//odd

console.log('5' + 1) //'51'
console.log('happy'+'life')//happylife
console.log(+'5' + 1) //6
/*7.unary oparetor*/
a=5
var d=25;
c = d ?? a;
console.log(c)//25
/*8.nullish coesion oprator*/

d = undefined;
a = 50;
c = d ?? a;
console.log(c)//50


