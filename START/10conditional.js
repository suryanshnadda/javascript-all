"use strict"

let a=prompt("enter your fav number","01");

if(isNaN(a)) {
alert("you have entered an alfa value ,not accepted .the page will die ");
close();
}
if (a<10)
{
    document.getElementById("one").innerHTML="your id is having high priority";
}
else if(a>10 && a<50)
{
    document.getElementById("one").innerHTML="you is having medium priority";
}
else
    {
    document.getElementById("one").innerHTML="you have low priority id"
}


//we can also ude ternary operator in place of if else

a=45;
a= a<20  ? "less then tenwty" : "less then tenwty";
document.getElementById("two").innerHTML=a;
