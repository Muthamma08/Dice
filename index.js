//genarting random numbders
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//changing image according to random number generated
var image1 = 'images/dice' + randomNumber1 + '.png';
var image2 = 'images/dice' + randomNumber2 + '.png';
document.querySelector('.img1').setAttribute('src', image1);
document.querySelector('.img2').setAttribute('src', image2);

//who wins!
if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerText = 'Player 1 wins 🙌';
} else if (randomNumber1 < randomNumber2) {
  document.querySelector('h1').innerHTML = 'Player 2 wins 🙌';
} else {
  document.querySelector('h1').innerHTML = 'Refresh Me';
}
