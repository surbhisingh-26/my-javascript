let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg =document.querySelector("msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const getCompChoice=()=>{
const option=["rock","paper","scissor"];
const randIdx=Math.floor(Math.random()*3);
 return option[randIdx];
};

const drawGame =()=>{
    console.log("game was draw.Play again");
    msg.innerText="game was Draw ,Play again";
    msg.style.backgroundColour="pink";

};

 const showWinner=(userWin,useChoice,CompChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScoreScore;
        msg.innerText=`you win lost.${CompChoiceChoice}beats youruser${CompChoice}`;
        msg.style.backgroundColour="green";
        //console.log("you win");
 } else {
    compScore++;
    compScorePara.innerText=compScore;
    console.log("you lose");
    msg.innerText=`you win your${userChoice}beats${CompChoice}`;
    msg.style.backgroundColour="green";
    //console.log("you win");
   // compScorePara.innerText=`you lost.${CompChoice}beats your ${useChoice}`
    
 }
const playGame=(useChoice)=>{
    console.log("user choice=",userChoice);
    const CompChoice=getCompChoice();
    console.log("comp choice=",CompChoice);
    //generate computer choice->modular
    if(userChoice===CompChoice){
        //draw game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice=="rock"){
            //scissor,paper
          userWin=  CompChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            //rock,scissor
          userWin=  CompChoice==="scissor"? false:true;
        }else{
            //rock,paper
          userWin=  CompChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice)=> {
   choice.addEventListener("click",()=> {
    const useChoice =choice.getAttribute("id");
    playGame(useChoice);
    //console.log("choice was clicked surbhi",choiceId)
    });
