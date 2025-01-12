const nations = require('../models/nations.model')
const path = require('path');

function postAddNations(req, res) {
    if (req.body.nation) {
        const newNation = {
            code: req.body.code,
            nation: req.body.nation
        }
    } else if (!req.body.nation) {
        return res.status(400).json({ error: 'Nation is required, Error!' });
    }
    
    nations.push(newNation);
    res.json(newNation);
}

function getTotalNations(req, res) {
    res.json(nations);
}

function getNations(req, res) { 
    if (req.params.code === 82) {
        res.json(nations[0]);
    } else if (req.params.code === 1) {
        res.json(nations[1]);
    } else {
        res.status(404).json("There is no available Code, Please try again");
    }
}

function getNationFlag(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'images', 'Korea.jpg'));
}

function getBodyChange(req, res) {
    res.render('nations', {
        who: "left side girl"
    })
}

module.exports = {
    postAddNations,
    getTotalNations,
    getNations,
    getNationFlag,
    getBodyChange
}