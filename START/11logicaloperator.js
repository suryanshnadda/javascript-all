"use strict"
function logi()
{
	let a;
	let b;
	
	a=document.getElementById("firstnum").value;
	b=document.getElementById("secondnum").value;
	a=Number(a);
	b=Number(b);
	
	
	
	if(isNaN(a) || isNaN(b) || a==" " || b==" ")
	{
		alert(`enter the number in the text bar, alfa value is not accepted, zero is not accepted`);
	}
	else if(a>b)
	{
	
		document.getElementById("two").innerHTML=`${a} is greater then ${b}`;
	}
     else if(b>a)
	 {
		 document.getElementById("two").innerHTML=`${b} is greater then ${a}`;
	 }
	
	else if (a==b)
	{
	 document.getElementById("two").innerHTML=`both numbers are equal`;	
	}	
}

function andn()
{
	 let a;
	 let b;
	a=document.getElementById("firstnum").value;
	b=document.getElementById("secondnum").value;
	a=Number(a);
	b=Number(b);
	
	
	if( a%2==0 && b%2==0)
		
		{
			 document.getElementById("two").innerHTML=`both numbers are even`;	
			
		}
		
	else
	{
    document.getElementById("two").innerHTML=`both numbers are not even`;	
	}
	
}