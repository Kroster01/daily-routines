const express = require('express');

const app = express();

app.listen(3000);
const port = process.env.PORT || 3000;

console.log('Server on port ', port);