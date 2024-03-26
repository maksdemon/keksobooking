


// Импорт Lodash
// Подключение Lodash можно будет удалить
//const _ = require('lodash');
// Проверка, что Lodash успешно подключен
if (_) {
  console.log('Lodash подключен!');
} else {
  console.log('Lodash не подключен.');
}
const avatar = `img/avatars/user${_.padStart(_.random(1, 10).toString(), 2, '0')}.png`;
console.log(avatar);




function generateAdvertisements() {
  const advertisements = [];
  for (let i = 1; i <= 10; i++) {
    const avatar = `img/avatars/user${String(i).padStart(2, '0')}.png`;
    const title = `Offer Title ${i}`;
    const address = `{{location.x}}, {{location.y}}`;
    const price = Math.floor(Math.random() * 1000) + 100;
    const type = ['palace', 'flat', 'house', 'bungalow'][Math.floor(Math.random() * 4)];
    const rooms = Math.floor(Math.random() * 5) + 1;
    const guests = Math.floor(Math.random() * 10) + 1;
    const checkin = ['12:00', '13:00', '14:00'][Math.floor(Math.random() * 3)];
    const checkout = ['12:00', '13:00', '14:00'][Math.floor(Math.random() * 3)];
    const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.floor(Math.random() * 6));
    const description = `Description for offer ${i}`;
    const photos = [
      'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
      'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
      'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
    ].slice(0, Math.floor(Math.random() * 3));
    const location = {
      x: (Math.random() * (35.70000 - 35.65000) + 35.65000).toFixed(5),
      y: (Math.random() * (139.80000 - 139.70000) + 139.70000).toFixed(5)
    };

    const advertisement = {
      author: {
        avatar
      },
      offer: {
        title,
        address,
        price,
        type,
        rooms,
        guests,
        checkin,
        checkout,
        features,
        description,
        photos
      },
      location
    };

    advertisements.push(advertisement);
  }

  return advertisements;
}

// Генерация массива из 10 объявлений
const advertisements = generateAdvertisements();
console.log(advertisements);

export {advertisements};
