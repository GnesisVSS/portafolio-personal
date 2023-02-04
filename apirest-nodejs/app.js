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
        }
    })
});

// busqueda por correo de usuario
app.get('/api/usuarios/:correo', (req, res) => {
    conexion.query("SELECT * FROM usuarios WHERE correo = ?", [req.params.correo], (error, fila) => {
        if(error){
            res.send({ message: "Algo salio mal" });
        }else{
            if(fila.length > 0){
                // res.send(fila);
                res.send({ message: "Usuario no disponible" });
            }else{
                res.send({ message: "Usuario disponible" });
            }
            
        }
        // if (results) {
        //     // res.send({ message: "El usuario ya existe!" });
            
        // } else {
        //     res.send({ message: "Usuario disponible" });
        // }
    })
});

app.post('/api/usuarios', (req, res) => {

    let data = { correo: req.body.correo, nombre: req.body.nombre, apellido: req.body.apellido, usuario: req.body.usuario, contrasena: req.body.contrasena }
    let sql = "INSERT INTO usuarios SET ?";
    conexion.query(sql, data, (error, results) => {

        // throw error;
        // res.send({err: error});
        if (error) {
            throw error;
        }

        if (results) {
            res.send(results);
        } else {
            res.send({ message: "Algo salió mal!" });
        }


        // if(results !== null) {

        // }else{
        //     res.send({ message: "El usuario ya existe!" });
        // }

    });

});

// Variable de entorno
// si el puerto está disponible en el definido por cmd en PUERTO accede a el,
// sino accede al 3000
const puerto = process.env.PUERTO || 3000;


app.listen(puerto, function () {
    console.log("Servidor OK en puerto: " + puerto);
})