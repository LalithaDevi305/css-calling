const headEle = document.getElementById('myHeading')
console.log(headEle.textContent)
console.log(headEle.innerText)
//const colors= ["black","white","green","yellow","purple","orange","violet","grey"]
function fun ()
{
     //headEle.innerHTML =
      // '<b>prasad</b><img src="./girl.jpg" alt="" height="50">';
    headEle.textContent ="lally"
    headEle.style.fontWeight="bold"
    headEle.style.color = "white";
    const ri = Math.floor(Math.random() * 255)
    const ri1 = Math.floor(Math.random() * 255)
    const ri2 = Math.floor(Math.random() * 255)
    console.log(ri) //5
    document.body.style.backgroundColor = `rgb(${ri},${ri1},${ri2})`
    /*const ri=Math.floor(math,radom()*8)
    document.body.style.backgroundColor=" "
    console.log(ri)*/

}