const express = require('express');
const app = express();
const path = require('path');

//settings
app.set("views", path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set("view engine", "ejs");

//middlewares

//routes
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname,'public')));

//listening the server
app.listen(3000, ()=>{
    console.log('funcionando port');
})