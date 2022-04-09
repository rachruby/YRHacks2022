const username = document.querySelector("#username")
const saveScoreBtn = document.querySelector("#saveScoreBtn")
const finalScore = document.querySelector("#finalScore")
const mostRecentScore = localStorage.getItem("mostRecentScore")

const highScores = JSON.parse(localStorage.getItem('highScores')) ||[]
const MAX_HIGH_SCORES = 40

finalScore.innerText = mostRecentScore

username.addEventListener("keyup", () =>{
  saveScoreBtn.disabled = !username.value
})

var img = document.getElementById("image");
var name1 = document.getElementById("BTname");
var descript = document.getElementById("description"); /*here*/

function change(){
  if (10 <= mostRecentScore && mostRecentScore <= 12) {
    img.src = "images/bt1.jpg"
    name1.innerText = "Milk"
    descript.innerText = "You're probably a kid (literally or at heart). You're fun to hang out with and the most reliable out of your group."
  }
  if (13 <= mostRecentScore && mostRecentScore <= 15){
    img.src = "images/bt2.jpg"
    name1.innerText = "Tea Macchiato + lots of cheese foam"
    descript.innerText = "You're a rare person who loves unsual combinations. Your niche hobbies and cool interests sets you apart from others. Don't get me wrong though, you're no pick me girl."
  }
  if (16 <= mostRecentScore && mostRecentScore <= 18) {
    img.src = "images/bt3.jpg"
    name1.innerText = "Mango Slush"
    descript.innerText = "This is one of your go-to drinks, you are caring and people call you the light of their life. (caring, cool)"
  }
  if (19 <= mostRecentScore && mostRecentScore <= 21) {
    img.src = "images/bt4.jpg"
    name1.innerText = "Honeydew Milk Tea"
    descript.innerText = "Awwww, sho cuuute! You are very soft spoken and sweet. You probably likes melons and japanese sweets!"
  }
  if (22 <= mostRecentScore && mostRecentScore <= 24) {
    img.src = "images/bt5.jpg"
    name1.innerText = "Original Milk Tea"
    descript.innerText = "Basically, ya basic. Step it up! Chances are you’re an abg. or one of those asian pals that has a supreme shoulder bag."
  }
  if (25 <= mostRecentScore && mostRecentScore <= 27) {
    img.src = "images/bt6.jpg"
    name1.innerText = "Oolong Milk Tea"
    descript.innerText = "Asian, artsy type, cute, and quirky. You probably have terrible vision."
  }
  if (28 <= mostRecentScore && mostRecentScore <= 30) {
    img.src = "images/bt7.jpg"
    name1.innerText = "Thai Milk Tea"
    descript.innerText = "You’re probably a soccer mom or you’re an old Asian that enjoys the simple things."
  }
  if (31 <= mostRecentScore && mostRecentScore <= 33) {
    img.src = "images/bt8.jpg"
    name1.innerText = "Matcha Milk Tea"
    descript.innerText = "Don’t you want to be healthy? A classic beverage that will drastically change our lifestyle. You are an organized person."
  }
  if (34 <= mostRecentScore && mostRecentScore <= 37) {
    img.src = "images/bt9.jpg"
    name1.innerText = "Coffee Milk Tea"
    descript.innerText = "You are stressed and intense. Take a break! Deep down you are a softie and caring but coffee is the only thing that makes you productive."
  }
  if (38 <= mostRecentScore && mostRecentScore <= 40) {
    img.src = "images/bt10.jpg" 
    name1.innerText = "Tea"
    descript.innerText = "Whether you are strong and bold or fresh and calming, you have a perfect balance of body and mind. You care about the overall ecosystem/environment and naturally create a relaxed, welcoming atmosphere in the workplace. Let’s face it however, you’re secretly 60"
  }
}
window.onload=change()

saveHighScore = e => {
  e.preventDefault()

  const score = {
    score: mostRecentScore,
    name: username.value 
  }

  highScores.push(score)
  highScores.sort((a,b) => {
    return b.score -a.score
  })
  highScores.splice(5)
  localStorage.setItem('highScores', JSON.stringify(highScores))
  window.location.assign('/')
  
}