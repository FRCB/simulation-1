const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const controller = require('./controller');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => app.set('db', db))

//ENDPOINTS
app.get('/api/inventory', controller.getAll);
app.post('/api/product', controller.createProduct);
app.delete('/api/product/:id', controller.deleteProduct);
app.put('/api/products/:id', controller.editProduct);


const PORT = 4000
app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
});

