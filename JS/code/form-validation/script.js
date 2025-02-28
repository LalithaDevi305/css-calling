const passwordInput = document.getElementById('pwd')
const wifiIcon = document.getElementById("wifiIcon")
function reveal ()
{
    if (passwordInput.type == "password")
    {
        passwordInput.type = "text"
        wifiIcon.classList.remove("fa-wifi")		 
		wifiIcon.classList.add("fa-wifi-slash")
    }   
    else
    {
        passwordInput.type = "password"
        wifiIcon.classList.remove("fa-wifi-slash")
        wifiIcon.classList.add("fa-wifi")
        }
       
}
function formSubmit (e)
{
    e.preventDefault();
    console.log(passwordInput.value.length)
    if (passwordInput.value.trim() == "")
    {
        document.getElementById("pwderrorMsg").textContent="please Enter Password"
    }
    if (passwordInput.value.length<=8)
    {
        console.log("hello")
        document.getElementById("pwderrorMsg").textContent="please enter minimum 8 characters"
    }
}