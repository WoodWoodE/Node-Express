const express = require('express')
const nationsController = require('../controllers/nations.controller');
const nationRouter = express.Router();

nationRouter.post('/addnation', nationsController.postAddNations);

nationRouter.get('/', nationsController.getTotalNations);

nationRouter.get('/:code', nationsController.getNations);

nationRouter.post('/flag', nationsController.getNationFlag);

nationRouter.get('/please/getoff', nationsController.getBodyChange);

module.exports = nationRouter;

