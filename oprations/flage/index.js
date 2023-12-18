box = document.getElementsByClassName('box');
var result=[...box];
var c=1
result.map((ele , index)=>{
    console.log(index);
    ele.addEventListener('click',()=>{
        if (c==1){
            ele.index
            c=c+1;
        }
        else if (c==2){
            ele.style.backgroundColor ='white';
            c=c+1;
        }
        else if (c==3){
            ele.style.backgroundColor ='green';
            c=1;
        }
    })
})