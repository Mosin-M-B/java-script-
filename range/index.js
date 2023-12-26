var from=document.getElementById('from');
var to=document.getElementById('to');
var box=document.getElementsByClassName('box');

var arr=[...box];

function change()
{
    let a=parseInt(from.value)-1;
    let b=parseInt(to.value)-1;
    console.log(a);
    console.log(b);
    if(a<0||b>arr.length)
    {
        alert("Number is invalid!!!");
    }
    else
    {
       
        for(i=a;i<=b;i++)
        {
            arr[i].style.display="none";
        }
    }
}
