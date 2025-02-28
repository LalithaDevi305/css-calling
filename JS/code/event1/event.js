const buttonEle = document.getElementById('btn');
const gpEle = document.getElementById("gp")
const pEle = document.getElementById("p")
const cEle = document.getElementById("c")
// function fun (e)
// {
//     console.log(e.target)
// }

document.getElementById('c').addEventListener('click', function (e){
    console.log(e.target.textContent)
})
//