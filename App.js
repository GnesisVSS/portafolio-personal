
var express = require('express');
var mysql = require('mysql');
var cors = require('cors');
// objeto para que el servidor acceda a todos los obj y libreria express

var app = express();
app.use(express.json());
app.use(cors());

// Se crea la conexion
var conexion = mysql.createConnection({
    host: 'aws-sa-east-1.connect.psdb.cloud',
    user: 'dw0mh08j9egl2aj9nvfk',
    password: 'pscale_pw_JZPcEz6J8U52DhZmDjjE2qPy2BmqC7HQL17DOn3faDm',
    database: 'portafolio',
    ssl: true
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
// busqueda por correo de usuario
app.get('/api/usuarios/:correo', (req, res) => {
    conexion.query("SELECT * FROM usuarios WHERE correo = ?", [req.params.correo], (error, fila) => {
        if(error){
            res.send({ message: "Algo salio mal" });
        }else{
            if(fila.length > 0){
                // res.send(fila);
                res.send({ message: "Usuario ya registrado" });
            }else{
                res.send({ message: "Usuario no registrado" });
            }
            
        }
    })
});

// -----------------------------LOGIN--------------------------------------

// busqueda por correo de usuario y contraseña
app.get('/api/usuarios/:correo/:contrasena', (req, res) => {
    conexion.query("SELECT * FROM usuarios WHERE correo = ? and contrasena = ?", [req.params.correo,req.params.contrasena], (error, fila) => {
        if(error){
            res.send({ message: "Algo salio mal" });
        }else{
            if(fila.length > 0){
                res.send({ message: "Credenciales correctas" });
            }else{
                res.send({ message: "Revisa los campos e intentalo de nuevo" });
            }
            
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
const puerto = process.env.PUERTO || 3001;


app.listen(puerto, function () {
    console.log("Servidor OK en puerto: " + puerto);
})