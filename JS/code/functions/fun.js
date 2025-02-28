//add function()
function add()
{
    let a=50,b=90;
    let c=a+b;
    console.log(c);
}
add()
//string
function greetings(n)
{
    console.log(`hello ${n}`)
}
greetings("chitti")
//return
function mul(a,b)
{
    return a*b
}
let y=mul(5,3)
console.log(y)
// length
function fun (x)
{
    return x.length;
}
let res = fun("prasad")
console.log(res) //6
console.log(fun)
//arrows
let number =(a)=> c=(a%2==0)?'even':'odd'
console.log(number(5))
//NAN
function add2(a,b)
{
    let c=a+b;
    console.log(c)
}
add2(5)