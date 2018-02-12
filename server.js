//exactly same thing as import
const express = require('express');
const PORT = process.env.PORT || 9000;

const app = express();

//whenever server gets outside request to '/' which is the home page, server will out this response.
app.get('/', (req, res) => {
    res.send('<h1>App is working!</h1>')
});

app.get('/test-route', (req, res) => {
    res.send('<h1>This is a test route, if you are seeing this all is well.</h1>')
});

app.listen(PORT, () => {
    console.log('App running on PORT' + PORT);
})