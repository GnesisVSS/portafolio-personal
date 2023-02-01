var express = require('express');
var mysql = require('mysql');
var cors = require('cors');
// objeto para que el servidor acceda a todos los obj y libreria express

var app = express();
app.use(express.json());
app.use(cors());
// Se crea la conexion
var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'recetas'
})

// probar la conexión
conexion.connect(function (error) {
    if (error) {
        throw error;
    } else {
        console.log("Conexión exitosa a la base de datos")

    }
});

// con el metodo get al acceder a la raiz nos muestre algo
app.get('/', function (req, res) {
    res.send('Ruta INICIO');
});
// El objeto app denota convencionalmente la aplicacion express, al invocarlo
// se pueden utilizar todo tipo de metodos

app.get('/api/usuarios', (req, res) => {
    conexion.query('SELECT * FROM usuarios', (error, filas) => {
        if (error) {
            throw error;
        } else {
            res.send(filas);
            // console.log("exito");
        }
    })
});

app.post('/api/usuarios', (req, res) => {
    
    // const contrasena = req.body.inputPasswordReg;
    // let passwordHaash = await bcryptjs.hash(pass, 8);

    let data = { correo: req.body.correo, nombre: req.body.nombre, apellido: req.body.apellido, usuario: req.body.usuario, contrasena: req.body.contrasena}
    let sql = "INSERT INTO usuarios SET ?";
    conexion.query(sql, data, function (error, results) {
        if (error) {
            throw error;
        } else {
            res.send(results);
        }

    });

});

// Variable de entorno
// si el puerto está disponible en el definido por cmd en PUERTO accede a el,
// sino accede al 3000
const puerto = process.env.PUERTO || 3000;


app.listen(puerto, function () {
    console.log("Servidor OK en puerto: " + puerto);
})