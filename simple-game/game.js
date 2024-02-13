const imgOne = document.querySelector(".one")
const imgTwo = document.querySelector(".two")
const imgThree = document.querySelector(".three")
const imgFour = document.querySelector(".four")
const score = document.querySelector(".score") // 
const total = document.querySelector(".total") //
const win = document.querySelector(".win")
const lose = document.querySelector(".lose")
let oneCost = Math.floor(Math.random() * 12)
let twoCost = Math.floor(Math.random() * 12)
let threeCost = Math.floor(Math.random() * 12)
let fourCost = Math.floor(Math.random() * 12)
let [myScore, wins, loses] = [0,0,0]
const scoreFunc = ()=>{
    let x = Math.floor((Math.random() * 120));
    if(x>=20){
        return x
    }else{
        return scoreFunc()
    }
}

function scoreText() {
    score.textContent = scoreFunc()
}

scoreText()

 function winsOrLoses() {
     if (parseInt(total.textContent) > parseInt(score.textContent)) {
         loses++
         alert("siz uduzduz")
         lose.textContent = "Loses:" + loses
         total.textContent = "0" 
         myScore = 0
         scoreFunc()
         scoreText()
     } 
     else if (parseInt(total.textContent) === parseInt(score.textContent)) {
         wins++
         alert("siz qalibsiz")
         win.textContent = "Wins:" + wins
         total.textContent = "0"
         myScore = 0
         scoreFunc()
         scoreText()
     }
 }
 
imgOne.addEventListener('click' , function (e) {
    myScore+=oneCost
    total.innerHTML = myScore
    winsOrLoses()
})

imgTwo.addEventListener('click' , function (e) {
    myScore +=twoCost
    total.innerHTML = myScore
    winsOrLoses()
})

imgThree.addEventListener('click' , function (e) {
    myScore+=threeCost
    total.innerHTML = myScore
    winsOrLoses()
})

imgFour.addEventListener('click' , function (e) {
    myScore+=fourCost
    total.innerHTML = myScore
    winsOrLoses()
})
