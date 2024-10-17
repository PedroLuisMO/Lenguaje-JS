const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const pilotoR = require('./routes/pilotoR');


const MONGODB_URI = "mongodb://localhost:27017/pilotos";

const app = express();

const fileStorage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, 'images');
    },
    filename: (req,file,cb) => {
        cb(null, new Date().toISOString() + '-' + file.originalname);
    }
});

const fileFilter = (req,file,cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg' || file.mimetype == 'image/png') {
        cb(null,true);
    } else {
        cb(null,false);
    }
}

app.use(bodyParser.urlencoded({extended:false}));
app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single('myfile'));
app.use('/images', express.static('images'));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(pilotoR);

mongoose.connect(MONGODB_URI)
.then((result) => {
    app.listen(3456, () => {
        console.log('Server inicializado en el puerto 3456');
    })
}).catch((err) => {
    err = new Error ('Error al conectar con mongoDB');
    throw err;
});