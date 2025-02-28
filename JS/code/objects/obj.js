let obj={
    Name : "raj",
    age : 25,
    email : "hg@J.com",
}
console.log(obj.email)//hg@j.com
console.log(obj['email'])//hg@j.com
console.log(obj)//Name: 'raj', age: 25, email: 'hg@J.com'}Name: "raj"age: 25email: "hg@J.com"[[Prototype]]: Object
console.log(Object.keys(obj))//(3) ['Name', 'age', 'email']
console.log(Object.values(obj))//(3) ['raj', 25, 'hg@J.com']


let obj4 = Object.create(obj)
console.log(obj4)//{}
console.log(obj4.age)//25

// prototype inheritance
//extendending prototype
let arr = [5, 4, 3]
Array.prototype.haripriya = function ()
{
   console.log("hi")//hi
}
arr.haripriya()//hi
let arr2 = [12,2,9]
arr2.haripriya()
console.log(arr2)//[12,2,9]

//example 2
let arr4=[22,23,24]
Array.prototype.lalitha=function()
{
    console.log("hello")
}
arr4.lalitha()
let arr5=[66,65,64]
arr5.lalitha()
console.log(arr5)//[66,65,64]



