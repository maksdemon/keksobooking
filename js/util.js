const lengthword = function (text,sign){
  return text.length<=sign ? true : false;
}

const random = function getRandomNumber(min, max, symbol) {
  if (min<0 || max < 0){
    return -1;
  }
  if (max<min){
    [min,max]=[max,min];
  }
  let random = Math.random() * (min - max) + min;
  let fin =random.toFixed(symbol);
  return parseFloat(fin);
}
// Пример использования функции


// Выведет число с тремя знаками после запятой из диапазона от 1.5 до 10.7
// Создание объекта с помощью литерала объекта
// eslint-disable-next-line no-unused-vars
const element = {
  autor: {
    avatar: 'img/avatars/user{{xx}}.png',
  },
  offer: {
    title: 'H1 head',
    address: '{{location.x}}, {{location.y}}',
    price: 10,
    type: 'palace',
    rooms: 10,
    guests: 2,
    checkin: '12:00',
    checkout: '12:00',
    features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
    description: 'отличное помещение',
    photos: [
      'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
      'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
      'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
    ],
  },
  location: {
    x: 35.65000,
    y: 139.70000,
  },
};
export {random,lengthword,element};
