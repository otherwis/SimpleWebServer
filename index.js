const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
    });

app.use(express.static(__dirname + '/public/'))

app.listen(8886, () => {
    console.log('Server is running on http://localhost:8886');
    });

