L1Hint = document.getElementById("L1Hint")

function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

points = document.getElementById("counter")
points.innerText = "Points: 0"
var flip = 0
var number = generateRandom(1, 5)
var score = 0
function theRealWork(){
    if (score < 10){
    flip ++
    if (flip == number){
      score ++
      points.innerText  = "Points: " + score
      flip = 0
      number = generateRandom(1, 5)
      }
  }else{
    L1Hint.href = "leveltwo.html"
    L1Hint.classList.remove("noLink")
  }
}