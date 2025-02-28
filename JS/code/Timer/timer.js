// function myFun ()
// {
//     console.log("hello world")
// }
// setTimeout(myFun, 10)
// function myFun2() {
// 	console.log("miss you world")
// }
// setTimeout(myFun2, 0)
// for (let i = 0; i < 1000; i++)
// {
//     console.log("bye world")
// }


// let c=0
// function incr1 ()
// {
//     c++;
//     console.log(c);
// }
// //setTimeout(incr1,5000)
// setInterval(incr1,2000)

// function to resend otp
function resend ()
{
    const otp = Math.round(Math.random() * 100000000000000)
    console.log(otp)
}
let otp1=setInterval(resend,1000)
document.getElementById('btn').addEventListener('click', function ()
{
    clearInterval(otp1)
})