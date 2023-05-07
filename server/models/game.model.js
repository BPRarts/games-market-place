const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema(
    {
        gameTitle: {
            type: String,
            required:[true,'Game Name is required'],
            minLength:[3,'The Game Name must be 3 or more characters'],
            maxlenth:[50,'The Game Name is too long']
        },

        gamePrice: {
            type: String,
            required:[true,'Game Price is required'],
            minLength:[1,'The Game Price must be 2 or more characters'],
            maxlenth:[50,'The Game Price is too long']
        },

        gameDescription: {
            type: String,
            required:[true,'Game Description is required'],
            minLength:[3,'The Game Description must be 3 or more characters'],
            maxlenth:[50,'The Game Description is too long']
        },

        gameType:{
            type: String,
            required:[true,'Game Type is required'],
            minLength:[3,'The Game Type must be 3 or more characters'],
            maxlenth:[50,'The Game Type is too long']
        }


        
       
    },
    { timestamps: true },
);


const Game = mongoose.model("Game", GameSchema);
module.exports = Game;