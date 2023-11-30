const fs = require('fs');

const myObject = {
    name: 'Olena',
    age: 17,
    email: 'fplprg@example.com'
};

const objectString = JSON.stringify(myObject, null, 2);

fs.writeFile('output.txt', objectString, 'utf8', (err) => {
    if (err) {
        console.error('Помилка запису у файл:', err);
        return;
    }
    console.log('Обєкт було успішно збережено у файл!');
});
