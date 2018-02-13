//exactly same thing as import
const express = require('express');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors());

app.use(express.static(path.resolve(__dirname, 'client', 'dist')));

//whenever server gets outside request to '/' which is the home page, server will out this response.
// app.get('/', (req, res) => {
//     res.send('<h1>App is working! Now with Nodemon!</h1>')
// });

app.get('/test-route', (req, res) => {
    res.send('<h1>This is a test route, if you are seeing this all is well.</h1>')
});

app.get('/api/get-articles', (req, res) => {
    res.send(['article-1', 'article-2','article-3' ]);
});

app.get('/api/get-user', (req, res) => {
    res.send({
        username: 'Bobatime2002',
        email: 'bob@gmail.com',
        name: 'Bob',
    })
});


//should be last route
app.get('*', (req, res ) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
});

app.listen(PORT, () => {
    console.log('App running on PORT' + PORT);
})