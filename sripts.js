// Rolling dice
const btnRoll = document.querySelector(".roll-dice");
const btnAdd = document.querySelector(".add");
const btnNew = document.querySelector(".newGame");
const dicePng = document.querySelector(".png");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p1Score = document.querySelector(".p1-score");
const p2Score = document.querySelector(".p2-score");
const p1Curr = document.querySelector(".p1-curr-score");
const p2Curr = document.querySelector(".p2-curr-score");

const players = document.querySelector(".players");
const winner = document.querySelector(".winner");
const winnerName = document.querySelector(".winner-name");

let score = [0,0];
let currScore=0;
let activePlayer = true;


btnRoll.addEventListener('click', function (){
    document.querySelector(".png").classList.remove("hidden");
    let randnum = Math.trunc(Math.random()*6)+1;
    dicePng.src=`${randnum}.png`;
    
    if(randnum!=1){
        currScore+=randnum;
        if(activePlayer){
            p1Curr.textContent=currScore;
        }else{
            p2Curr.textContent=currScore;
        }
        
    }else{
        if(activePlayer){
            p1.classList.remove("active");
            p2.classList.add("active");
            activePlayer=false;
            currScore=0;
            p1Curr.textContent=currScore;
        }else{
            p2.classList.remove("active");
            p1.classList.add("active");
            activePlayer=true;
            currScore=0;
            p2Curr.textContent=currScore;
        }
    }

})

btnAdd.addEventListener('click', function (){
    if(activePlayer){
        p1.classList.remove("active");
        p2.classList.add("active");
        activePlayer=false;
        score[0]+=currScore;
        p1Score.textContent=score[0];
        currScore=0;
        p1Curr.textContent=currScore;

    }else{
        p2.classList.remove("active");
        p1.classList.add("active");
        activePlayer=true;
        score[1]+=currScore;
        p2Score.textContent=score[1];
        currScore=0;
        p2Curr.textContent=currScore;
    }

    if(score[0]>=100 || score[1]>=100){
        players.classList.add('hidden');
        winner.classList.remove("hidden");
        if(score[0]>=100){
            winnerName.textContent="Player 1";
        }else{
            winnerName.textContent="Player 2";
        }
    }
})

btnNew.addEventListener("click", function(){
    score=[0,0];
    currScore=0;
    activePlayer = true;
    p2.classList.remove("active");
    p1.classList.add("active");
    p1Score.textContent=score[0];
    p2Score.textContent=score[1];
    p1Curr.textContent=currScore;
    p2Curr.textContent=currScore;
    document.querySelector(".png").classList.add("hidden");
    players.classList.remove('hidden');
    winner.classList.add("hidden");
})