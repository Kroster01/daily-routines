const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('respuest');
    res.json([{ name: 'jhon', age: 12 }, { name: 'david', age: 21 }]);
});

app.listen(3000);
const port = process.env.PORT || 3000;

console.log('*********************************************');
console.log('process.env: ', JSON.stringify(process.env));
console.log('*********************************************');
console.log('Server on port ', port);