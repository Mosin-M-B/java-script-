var box = document.getElementsByClassName("box");
var d=document.getElementsByClassName('main2');
var result = [...box];
var t;
result .map((ele, index)=>{
    ele.addEventListener("click",()=>{
            ele.style.display ='none';
            console.log(result.splice(index,1));   
            var div = document.createElement("div");
            div.style.display='flex'
            div.style.height='100px'
            div.style.width='100px'
            div.style.borderRadius="50%";
            div.style.justifyContent='center'
            div.style.alignItems='center'
            div.style.backgroundColor='blueviolet';
            div.style.color='white';
            div.style.fontFamily='sans-serif';
            div.innerHTML=`<h1>${index+1}</h1>`;
            document.getElementById('dc').appendChild(div);
    });
});







