const mysql = require('mysql');
require('dotenv').config();

// const objData = {
//   DB_HOST :  process.env.SERVER ||  'localhost',
//   DB_USER : process.env.USER || '',
// }


const conexion = mysql.createConnection({
    host: process.env.SERVER,
    user: process.env.USER,
    password: process.env.PASS ,
    database: process.env.DB,
    port: process.env.DBPORT,
    multipleStatements: true,
});

// Para verificar si la conexión es exitosa para Falló mientras se ejecuta el proyecto en la consola.
conexion.connect((err) => {
    if (!err) {
      console.log("Conexión Exitosa A la base de datos");
    } else {
      console.log(
        "Conexión fallida en la base de datos  \n Error :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
  
  module.exports = conexion;
  