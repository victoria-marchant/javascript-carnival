// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')
//retrieve elements for modification from HTML doc.
let headOnPage = document.getElementById('head')
let bodyOnPage = document.getElementById('body')
let feetOnPage = document.getElementById('feet')

// headImage array not needed as with string concatination can refer to path with just digit
// let headImageArray = [
//   './images/head0.png',
//   './images/head1.png',
//   './images/head2.png',
//   './images/head3.png',
//   './images/head4.png',
//   './images/head5.png',
// ]
// console.log(headImageArray)

//have a way to change cycle through images (6images per section) and body areas (3 sections)
//incrementing these numbers will make it possible to refer to images via concatination.
let headIndex = 0
let bodyIndex = 0
let feetIndex = 0

let verticalIndex = 0

//function to cycle through clothes per section concatination manipulation so that string plus variable can be brought together to cycle through pics
// conditions placed on incrementation as only 6 images, if goign above this number return to 0 if below return to 6. this creates a cycle through effect rather than endless incrementation that will break the code when no images available.
function changeClothes(increment) {
  if (verticalIndex == 0) {
    if (headIndex > 5) headIndex = 0
    else if (headIndex < 0) headIndex = 5
    headIndex += increment
    headOnPage.src = './images/head' + headIndex + '.png'
  } else if (verticalIndex == 1) {
    if (bodyIndex > 5) bodyIndex = 0
    else if (bodyIndex < 0) bodyIndex = 5
    bodyIndex += increment
    bodyOnPage.src = './images/body' + bodyIndex + '.png'
  } else if (verticalIndex == 2) {
    feetIndex += increment
    feetOnPage.src = './images/shoes' + feetIndex + '.png'

    if (feetIndex > 5) feetIndex = 0
    else if (feetIndex < 0) feetIndex = 5
  }
}

console.log(changeClothes)

// function to tie a user action (key press) to function so that every time user performs this action the function is called and incrementation occurs
// key press with key codes depreciated according to MDN. now keydown with key "value"
// key left and right cycles through images
// key up and down cycle through body sections
document.onkeydown = changeDirection

function changeDirection(e) {
  if (e.key == 'ArrowRight') {
    changeClothes(1)
    console.log('look at me over here on the right')
  } else if (e.key == 'ArrowLeft') {
    changeClothes(-1)
    //console.log('look at me over here on the left')
  } else if (e.key == 'ArrowDown') {
    console.log('down')
    changeClothingSelected(1)
  } else if (e.key == 'ArrowUp') {
    console.log('up')
    changeClothingSelected(-1)
  }
}

// Function to change body section

function changeClothingSelected(increment) {
  verticalIndex += increment
  if (verticalIndex > 2) verticalIndex = 0
  else if (verticalIndex < 0) verticalIndex = 2
}
