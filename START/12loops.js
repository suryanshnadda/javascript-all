"use strict"
function logi()
{
	let a;
	
	a=document.getElementById("firstnum").value;

	a=Number(a);

	
	var table = new Array(10);
	
	if(isNaN(a)|| a==" ")
	{
		alert(`enter the number in the text bar, alfa value is not accepted, zero is not accepted`);
	}
	else
	{
	
		for(let i=0;i<=10;i++)
		{
		 table[i]=i*a;
	    }		 
	}
  	 document.getElementById("two").innerHTML=table;
}

function logiw()
{
	let a;
	
	a=document.getElementById("firstnum").value;

	a=Number(a);

	
	var table = new Array();
	
	if(isNaN(a)|| a==" ")
	{
		alert(`enter the number in the text bar, alfa value is not accepted, zero is not accepted`);
	}
	else
	{
	
		for(let i=0;i<=10;i++)
		{
		 table[i]=i*a;
	    }		 
	}
  	 document.getElementById("two").innerHTML=table;
}

