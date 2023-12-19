box = document.getElementsByClassName("box");
var result= [...box];
result.map((ele , ind)=>{
    ele.addEventListener("click",()=>{
        ele.style.display="none";
    });
})