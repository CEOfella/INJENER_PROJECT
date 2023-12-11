const apiUrl = 'https://a21455-041c.s.d-f.pw/api/Address/4a162ded-1cff-4603-b217-e9fdbebc7f37';

const requestData = {
  colorName: 'Black',
  skuID: 'FF1234567890',
  releaseDate: '2021-10-17T21:44:16.871Z',
  country: 'ExampleCountry',
  city: 'ExampleCity',
  street: 'ExampleStreet',
  house: 'ExampleHouse',
  room: 123 // Замените на нужное значение
};

const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(requestData)
};

fetch(apiUrl, requestOptions)
  .then(response => response.json())
  .then(data => {
    console.log('ID созданного адреса:', data);
    // Дальнейшие действия с данными, если нужно
  })
  .catch(error => {
    console.error('Произошла ошибка:', error);
    // Обработка ошибки
  });
