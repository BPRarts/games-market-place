const Game = require("../models/game.model");
 

module.exports ={
    findAllGames:(req,res) => {
        Game.find()
        .then((allGames) => {
            res.status(200).json(allGames)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
    },

    createGame:(req,res) => {
        Game.create(req.body)
        .then((newGame) => {
            res.status(200).json(newGame)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
    },


    findOneGame:(req,res) => {
        Game.findOne({_id:req.params.id})
        .then((oneGame) => {
            res.status(200).json(oneGame)
        })
        .catch((err) => {
            res.status(400).json(err)
        })

    },


    updateGame:(req,res) => {
        Game.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new:true, runValidators:true})
            .then((updateGame) =>{
                res.status(200).json(updateGame)
            })
            .catch((err) => {
                res.json(err)
            })
            
    },


    deleteGame: (req,res) => {
        Game.deleteOne ({_id: req.params.id})
            .then((result) =>{
                res.status(200).json(result)
            })
            .catch((err) => {
                res.status(400).json(err)
            });
            
    }
}