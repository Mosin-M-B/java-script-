box = document.getElementsByClassName("box");
var result = [...box];
result.map((ele,index)=>{
    ele.addEventListener("click",()=>{
        let previndex ;
        if (index === 0) {
            previndex = result.length - 1;
        }
        else
        {
            previndex = index -1;
        }
        let updatedValue = parseInt(ele.innerText) + parseInt(result[previndex].innerText);
        ele.innerHTML =`<h1>${updatedValue}</h1>`
    })
})