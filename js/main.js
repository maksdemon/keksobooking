let random = function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
console.log(random(5,10));

