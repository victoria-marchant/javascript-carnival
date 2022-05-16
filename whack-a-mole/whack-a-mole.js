// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

//randomly select one of these table cells

//clicking on that mole will then make it
//Get a reference array for td elements so that changes can be made
let cells = document.getElementsByTagName('TD')
console.log(cells)
console.log(cells.innerHTML)

//randomly select one of the above td elements
let randCell = cells[Math.floor(Math.random() * cells.length)]
console.log(randCell)

const scoreCard = document.getElementById('score')
scoreCard.innerHTML = "Na na na-na na! You can't catch me!!"
// let button = document.getElementById('button')
let score = 0
// timeup = false (button and timer were part of time out fx I was trying to generate but no dice)

//when rand cell selected on page refresh add image of mole to it
let img = document.createElement('img')
img.src = './mole.PNG'
img.id = 'mole'
randCell.appendChild(img)

//call the fx below on mouse click
img.onclick = newMole

//this function with the above call means that mole img will shift cells on mouse click on img rather than on page refresh
//fx also updates score count to be displayed
function newMole(e) {
  randCell = cells[Math.floor(Math.random() * cells.length)]
  randCell.appendChild(img)
  console.log('i clicked on: ' + cells)
  score++
  scoreCard.innerHTML = 'Moletoll ' + score
  let soundEffect = new Audio('./whack-audio.wav')
  soundEffect.play()
  // if (!timeup) newMole()
}
