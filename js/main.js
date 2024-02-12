let random = function getRandomNumber(min, max) {
  if (min<0 || max < 0){
    return -1;
  }
  if (max<min){
    [min,max]=[max,min];
  }
  return Math.floor(Math.random() * (max - min+1) + min)
}
console.log(random(5,10));


let lengthword = function (text,sign){
return text.length<=sign ? true : false;
}
console.log(lengthword('Тестовое сообщение' ,10));
