let arr=["lalitha" ,"govind","kavi","rohini"]
console.log(arr)//(4) ['lalitha', 'govind', 'kavi', 'rohini']
console.log(arr[3])//rohini
console.log(arr.length)//4
console.log(arr["mohini"])//undefined
arr[7]="madav";
console.log(arr)//
//(8) ['lalitha', 'govind', 'kavi', 'rohini', empty × 3, 'madav']
let x="govid",y="govid"
console.log(x==y)//true
let a=[1,2],b=[1,2];
console.log(a==b)//false



//DEFAULT METHODS:
let arr2=[4,5,6,7,8,9,10];
arr2.push(11)
console.log(arr2)//[4,5,6,7,8,9,10,11]
arr2.pop(arr2)
console.log(arr2)//[4,5,6,7,8,9,10]
let arr3=[3,4,5,6,7,8]
arr3.shift()
console.log(arr3)//[4,5,6,7,8]
arr3.unshift(10,11)
console.log(arr3)//[10,11,4,5,6,7,8]

let arr4=[22,23,24,25,26]
arr4.splice(2)
console.log(arr4)//[22,23]

let v=[11,13,24,25,15]
   v .splice(3,2)
console.log(v)//[11,13,24]

let p=[87,85,94,93,80]
p.splice(2,0,1,2,4)
console.log(p)//[87,85,1,2,4,94,93,80]

let friends = ["penny", "ross", "rachel", "chandler", "monica", "sheldon"]

// 1. remove penny and add pheobe
friends.shift();
friends.unshift("pheobe")
// 2. remove sheldon and add joey
friends.pop();
friends.push("joey")
// 3. between ross and rachel add justin
friends.splice(2,0,"justin")

arr = [3, 4, 5];
arr.forEach(function (ele, ind) {
	console.log(ele * ele, ind)
})

arr = ["raj", "john", "sheob", "shekhar"]
arr.forEach(function (ele,ind)
{
    console.log(ele.charAt(0))
})
// return values as even or odd in new array
arr = [1, 2, 3, 4, 5]
let arr9= arr.forEach(function (ele)
{
    return ele % 2 == 0;
})
console.log(arr9);
let arr10 = arr.map(function (ele) {
	return ele % 2 == 0
})
console.log(arr10)//
let arr11 = arr.filter(function (ele) {
	return ele % 2 == 0
})
console.log(arr11)//


arr = [1, 2, 3, 4, 5];
arr=[1,2,3,4,5]
let arr12=arr.some(function (ele,ind)
{
    return ele % 2 == 0;
})
console.log(arr12)//true
arr=[6,7]
let arr6 = arr.every(function (ele, ind) {
	return ele % 2 == 0
})
console.log(arr6)//false
arr=[1,2,3,4,5]
let arr7 = arr.find((ele, ind)=>ele % 2 == 0)
console.log(arr7)//2

// reduce
//reduce is used for accumulated values
// (values which considers previous values)
arr=[1,2,3,4,5]
let result = arr.reduce(function (prev,curr)
{
    return prev + curr;
},0)
console.log(result)//15