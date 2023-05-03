const mongoose = require('mongoose');

   //nintendo-merket-place changed to --> games-market-place                               
mongoose.connect('mongodb://127.0.0.1:27017/games-market-place', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));