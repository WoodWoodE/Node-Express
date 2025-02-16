const express = require('express');
const nationsRouter = require('./routes/nations.routes');
const path = require('path');
const app = express();

app.set('view engine', 'hbs');

app.set( 'views', path.join(__dirname, 'views'));

app.use('/static',express.static(path.join(__dirname, 'public')))

app.use(express.json());

app.use('/nations', nationsRouter)

app.get('/', (req, res) => {
        res.render('index', {
            "miniTitle" : "Hi, Stranger"
        });
    }
)

app.listen(6600, () => {
    console.log('listening on port 6600');
})