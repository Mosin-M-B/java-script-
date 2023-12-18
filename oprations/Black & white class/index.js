box = document.getElementsByClassName("box");
var res = [...box];
res.map((ele ,index)=>{
    ele.addEventListener('click',()=>{
        if (ele.style.backgroundColor==="black"){
            ele.style.backgroundColor="white"
        }
        else
        {
            ele.style.backgroundColor="black"
        }
    })
})