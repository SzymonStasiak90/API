const express = require ('express'); // uzycie serwera node js express
const app = express();
const {port} = require('./config');

// routes

const apiRouter = require('./routes/api');
app.use('/',apiRouter);


app.listen(port,function() {
    console.log('serwer słucha... http://localhost:port'+ config.port);
});
