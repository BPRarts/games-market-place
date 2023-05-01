const GameController = require('../controllers/game.controllers');

module.exports = app => {
    app.get('/api/allGames', GameController.findAllGames);
    app.post('/api/newGame', GameController.createGame);
    app.get('/api/oneGame/:id', GameController.findOneGame);
    app.put('/api/updateGame/:id', GameController.updateGame);
    app.delete('/api/deleteGame/:id', GameController.deleteGame);
}  