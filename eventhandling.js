let butn1=document.querySelector("butn1");
butn1.onclick=(evt)=>{
    consol.log("btn1 was click");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.click,evtX.clickY);
    let a=25;
    a++;
    console.log(a);

}
let div=document.querySelector("div");
div.onmousemove=()=>{
    console.log("you are insse you div surbhi");
}