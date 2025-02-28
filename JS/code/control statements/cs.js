/*let islogin=true;
if(islogin ==false)
{
 alert("please login to continue")
}*/

/*let a=11
if(a % 2 == 0)
{
    console.log(`${a} is even`)
}
else
{
    console.log(`${a} is odd`)
}*/

 // vote for eligible or not

/*let age= +prompt("enter your age");
if (age >= 18)
{
    console.log("eligible to vote");
}
else
{
   console.log("Not eligible");
}*/

/* WAP to check and print whether the given person lastname is "pandey" or not */
/*let fullname = prompt("enter your full name")
//du r ga prasad
if (fullname.endsWith("pandey"))
    console.log("yes, they are pandey family")
else
    console.log("no, they are not pandey family")

//WAP to check whether given name/word is a pallindrome or not
//Eg: madam ,dad,mom,racecar,malayalam,radar,level
/*let word = prompt("enter word");//madam
let revWord= word.split('').reverse().join('') //[m,a,d,a,m]
if (word == revWord)
{
    console.log(word+"is pallindrome")
}
else
{
    console.log(`${word} is not pallindrome`)
}*/
//WAP to check whether the given is positive or negitive
/*let a1 = 15;
if (a1 > 0)
    console.log(`${a1} is positive`)
else if (a1 < 0)
    console.log(`${a1} is negitive`)
else
    console.log(`it is neither positive nor negitive`)*/




    //switch
// WAP to print correct answer or not based on user's choice
/*console.log("what is 2+2?")
console.log("1. 2 ")
console.log("2. 22")
console.log("3. 4")
console.log("4. 5")
let ch = +prompt("Enter the answer")
switch (ch) {
    case 1:
        alert("wrong answer")
        break;
	case 2:
		alert("wrong answer")
		break
	case 3:
		alert("right answer, congratulations!! you won ₹5")
		break
    case 4:
        alert("wrong answer")
        break;
    default: alert("please enter valid input")
}*/

/* WAP to print name of the week based on number of the week using switch*/

/*let ch2= +prompt("Enter  day of the week");
switch(ch){
    case 1:    alert("Monday")
    break;
    case 2:    alert("Tuesday")
    break;
    case 3:    alert("Wednesday")
    break;  
    case 4:    alert("Thursday")
    break;
    case 5:    alert("Friday")
    break;
    case 6:    alert("Saturday")
    break;
    case 7:    alert("Sunday")
    break;
    default: alert("choose bw 1-7")
    break;
}*/
i=10;
do{
    console.log(i)
    i++;
}while(i<10);
//print to 20 to 1 even numbers in reverse order
let n=2;
do{
    console.log(n)
    n-=20
}while(n<=20);