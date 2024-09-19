const bodyParser = require('body-parser');
const express = require('express');

const equipoRout = require('./routes/equipoRou');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine','ejs'); // se configura para poder usar ejs
app.set('views','views');

app.use(equipoRout);

app.listen(3003);