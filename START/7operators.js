function fun()
{
var a=("1" +2);

document.getElementById("one").innerHTML = a;

a=("1"-"2")
document.getElementById("two").innerHTML = a;

a=("6"/"2")
document.getElementById("three").innerHTML = a;


//here is hack only + operator do not well for strings and - and / works good with string numberic values also

a=("3"-1);
document.getElementById("four").innerHTML = a;

a=a++;
document.getElementById("five").innerHTML = a;

//a-- goes the same

a**3;
document.getElementById("six").innerHTML = a;

a=a%2;
document.getElementById("seven").innerHTML = a;

a="nody" +"india";
document.getElementById("eight").innerHTML = a;








}
fun();