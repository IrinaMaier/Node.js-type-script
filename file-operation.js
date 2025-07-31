const fs = require('fs');
require('dotenv').config();

const fileName = process.env.FILENAME;

fs.writeFile(fileName, 'Это текст, записанный через Node.js', (err) => {
  if (err) {
    console.error('Ошибка при записи файла', err);
    return;
  }
  console.log(`Файл ${fileName} успешно создан и записан`);

  fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) {
      console.error('Ошибка при чтении файла', err);
      return;
    }
    console.log('Содержимое файла');
    console.log(data);
  });
});
