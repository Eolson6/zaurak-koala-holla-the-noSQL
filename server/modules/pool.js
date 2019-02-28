const mongoose =  require('mongoose')

const databaseUrl = 'mongodb://localhost:27017/koalaholla';
mongoose.connect(databaseUrl, {useNewUrlParser: true});

mongoose.connection.on('error', (error)=> {
    console.log('mongoose connection error', error);
});

mongoose.connection.once('connected', ()=> {
    console.log('connected to mongo');
});

module.exports = mongoose;