// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

let unicorns = document.getElementsByClassName('inflate-an-image')
console.log(unicorns)

for (let i = 0; i < unicorns.length; i++) {
  unicorns[i].onclick = cellClicked
}

let noughtsTurn = true
let gameIsOver

function cellClicked(e) {
  let unicorn = e.target
  console.log(unicorn.src)
  console.log('i clicked on: ' + unicorns)

  if (unicorn.src.match('./images/unicorn-0.png')) {
    unicorn.src = './images/unicorn-1.png'
  } else if (unicorn.src.match('./images/unicorn-1.png')) {
    unicorn.src = './images/unicorn-2.png'
  } else if (unicorn.src.match('./images/unicorn-2.png')) {
    unicorn.src = './images/unicorn-3.png'
  } else if (unicorn.src.match('./images/unicorn-3.png')) {
    unicorn.src = './images/unicorn-4.png'
    return alert(
      ` ${this.id}, the super rad unicorn says thanks a million for releasing my inner vermilion`
    )
  }
}
