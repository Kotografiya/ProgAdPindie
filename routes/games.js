const gamesRouter = require("express").Router();

const sendAllGames = require('../controllers/games');
const findAllGames = require('../middlewares/games')

gamesRouter.get('/games', sendAllGames, findAllGames);

module.exports = gamesRouter