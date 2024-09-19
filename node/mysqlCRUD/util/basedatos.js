const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '',
    user: '',
    password: '',
    database: ''
})

module.exports = pool.promise();

/*
CREATE TABLE infoEquipos (
id int AUTO_INCREMENT,
nombre varchar (30),
pais varchar (30),
ciudad varchar (30),
estadio varchar (30),
anio int,
PRIMARY KEY (id)
);
*/