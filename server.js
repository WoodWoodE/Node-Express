const express = require('express');
const nationsRouter = require('./routes/nations.routes');
const path = require('path');
const app = express();

app.use('/static',express.static(path.join(__dirname, 'public')))

app.use(express.json());

app.use('/nations', nationsRouter)

app.listen(6600, () => {
    console.log('listening on port 6600');
})