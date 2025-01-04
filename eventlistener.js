let btn1=document.querySelector("#btn1");
btn1.addEventListener("click",()=>{
    console.log("button1 was clicked");
})
btn1.addEventListener("click",()=>{
    console.log("button123 was clicked");
})

        const handler3= () =>{
            console.log("button23333 was clicked");
        }
        btn1.addEventListener("click",handler3);

btn1.addEventListener("click",(Event)=>{
    console.log("button222 was clicked");
    console.log(Event);
    console.log(Event.type);
})
let div=document.querySelector("div");

btn1.removeEventListener("click",()=>{
    console.log("button23333 was clicked");
});

btn1.removeEventListener("click",handler3);


//const handler3=()=>{
   // console.log("button23333 was clicked");
