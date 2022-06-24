const squares = document.querySelectorAll(".square")
const mole = document.querySelector(".mole")
const timeLeft = document.querySelector("#time-left")
const score = document.querySelector("#score")

let result=0;
let hitPosition;
let currentTime=10;
let timerId=null;
let countDownTimerId=setInterval(countDown,1000)

function randomSquare(){

    squares.forEach(square => {

        square.classList.remove("mole")

    })

    let randomSquare=squares[Math.floor(Math.random()*9)]  // Math.floor(Math.random()*Math.floor(max));
    
    //console.log(randomSquare)
    //console.log(Math.floor(Math.random()*9))

    randomSquare.classList.add("mole")

    hitPosition=randomSquare.id;

}

squares.forEach(square=>{
    square.addEventListener('mousedown',()=>{
        if (square.id==hitPosition) {
            result++;
            score.textContent=result;
            hitPosition=null;
        }
    })
})

function moveMole(){
    timerId=setInterval(randomSquare,750)
}

//randomSquare()
moveMole()

function countDown(){
   currentTime--;
   timeLeft.textContent=currentTime + " s";


   if(currentTime==0){
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    alert("GAME OVER !!!!  Your final score is: "+ result)
   }
}


