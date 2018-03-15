a=1;
b=2;
c=10;

d=a>b
document.getElementById("one").innerHTML=d;

d=b>a;
document.getElementById("two").innerHTML=d;

//only checks the value
d=b>a;
document.getElementById("three").innerHTML=d;

//it compares both value and type
d=(b===a)
document.getElementById("four").innerHTML=d;

d=(a!=b)
document.getElementById("five").innerHTML=d;


//we can also compare strings in js
a="nody";
b="arru";

d=a>b;
document.getElementById("six").innerHTML=d;

d=b>a;
document.getElementById("seven").innerHTML=d;





