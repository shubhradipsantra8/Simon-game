let gameSeq=[];
let userSeq=[];
let btns=["red","yellow","green","purple"];
let level=0;
let highestScore=0;
let started=false;
let h2=document.querySelector("h2");
h2.innerText="PRESS ANYWHERE KEY TO START THE GAME"
document.addEventListener("click",function(){
    if(started==false){
        started=true;
        console.log("started");
        levelUp();
    }
})
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    //random button chose
    let randomIdx=Math.floor(Math.random()*4);
    let randomColor=btns[randomIdx];
    let selectBtn=document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    btnFlash(selectBtn);
}
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },350);
}
function userbtnFlash(btn){
    btn.classList.add("flash1");
    setTimeout(function(){
        btn.classList.remove("flash1");
    },350);
}
function userChoice(){
    let butn=this;
    userbtnFlash(butn);
    userColor=butn.getAttribute("id");
    userSeq.push(userColor);
    check(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(bt of allBtns){
    bt.addEventListener("click",userChoice);
}
function check(indx){
    let idx=level-1;
    if(userSeq[indx]===gameSeq[indx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        if(level>highestScore){
            highestScore=level;
        }
        h2.innerHTML=`GAME OVER! YOUR SCORE IS ${level} PRESS ANY KEY TO RESTART THE GAME</br>YOUR HIGHEST SCORE IS ${highestScore}`;
        setTimeout(reset, 100); 

    }
}
function reset(){
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[];
    // alert("game over!");
    
}