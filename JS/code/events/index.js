function fun (e)
{
    console.log(e.target)
     alert("hi")
 }
function fun(e) {
 	console.log(`You pressed ${e.key} key`)
 }
 function fun2 (e)
 {
     console.log(e.target.textContent)
}
 document.addEventListener('keypress', fun);
 document.getElementById('btn').addEventListener('click', fun2)
/* when you press a, print a is presses*/
/* print button text when you click button */







// function fun (e)
// {
//     console.log(e.target.textContext)
// }
//  document.getElementById('btn').addEventListener('click',fun)
// document.getElementById('btn').addEventListener('dblclick',fun)
// document.getElementById('btn').addEventListener('mouseout',fun)

// document.getElementById('btn').addEventListener('click',fun)
// const heading= document.getElementById('heading')
// function fun (e)
// {
//     if (e.key == 'a')
//     {
//         heading.textContent = "apple";
//     }
//     else if (e.key == 'b')
//     {
//         heading.textContent="ball"
//     }
// }
// document.addEventListener('keypress',fun)
// function fun (e)
// {
//     console.log(e.target.value);
//     document.getElementById('heading').textContent= e.target.value+document.getElementById('inp').value
// }
// document.getElementById('gender').addEventListener('change',fun)
/*document.addEventListener('DOMContentLoaded', function ()
{
    console.log("hi")
})