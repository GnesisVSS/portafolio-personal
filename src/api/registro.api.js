import axios from "axios";
import RecetasLog from "../pages/recetas-log";

let url = 'http://localhost:3000/api/usuarios/';

// -------------------------------LOGIN-----------------------------------------

// Funciones en caso de que nos de error, el mensaje de error se muestre en pantalla
const errorContrasena = () => {
    var alerta = document.getElementById('alerta');
    function toggle(alerta) {
        if (alerta.className === '')
            alerta.className = alerta.className.replace(/(?:^|\s)visually-hidden(?!\S)/g, '')
        else
            alerta.className = '';
    }
    toggle(alerta);
}

// Funciones en caso de que nos de error, el mensaje de error se muestre en pantalla
const errorUsuario = () => {
    var alerta = document.getElementById('alerta-2');
    function toggle(alerta) {
        if (alerta.className === '')
            alerta.className = alerta.className.replace(/(?:^|\s)visually-hidden(?!\S)/g, '')
        else
            alerta.className = '';
    }
    toggle(alerta);
}

// Funciones en caso de que el mensaje de error esté en pantalla, este se esconda al ser las credenciales correctas

const success = () => {
    var alerta = document.getElementById('alerta');
    function toggle(alerta) {
        if (alerta.className === 'visually-hidden')
            alerta.className = alerta.className.replace(/(?:^|\s) (?!\S)/g, 'visually-hidden')
        else
            alerta.className = 'visually-hidden';
    }
    toggle(alerta);
}

export const buscarCorreoLogin = async (ingreso) => {
    await axios.get(url + ingreso.correo)
        .then(response => {
            if (response.data.message === "Usuario no registrado") {
                errorUsuario();
                // alert("No existe un usuario registrado con ese correo, revise nuevamente")
                
            } else if (response.data.message === "Usuario ya registrado") {
                // alert("Contraseña incorrecta,intente nuevamente")
                errorContrasena();
            } else {
                alert("Algo salió mal!")
            }
        })
}

export const buscarLogin = async (ingreso) => {
    // let correo = { correo: this.usuarios.correo }
    await axios.get(url + ingreso.correo + `/${ingreso.contrasena}`)
        .then(response => {
            if (response.data.message === "Credenciales correctas") {
                success();
                // alert("Credenciales correctas!")
                window.location.href = '/recetasHome';
            } else if (response.data.message === "Revisa los campos e intentalo de nuevo") { 
                buscarCorreoLogin(ingreso);
            } else {
                alert("Algo salió mal!")
            }
        })
}

// -------------------------------REGISTRO---------------------------------

export const buscar = async (ingreso) => {
    // let correo = { correo: this.usuarios.correo }
    await axios.get(url + ingreso.correo)
        .then(response => {

            if (response.data.message === "Usuario no registrado") {
                crear(ingreso);
            } else if (response.data.message === "Usuario ya registrado") {
                alert("El usuario ya existe!")
            } else {
                alert("Algo salió mal!")
            }

        })
}
export const crear = async (ingreso) => {
    // let parametros = { correo: correo, nombre: nombre, apellido: apellido, usuario: this.usuarios.usuario, contrasena: this.usuarios.contrasena };
    await axios.post(url, ingreso)
        .then((response) => {
            alert("Usuario registrado exitosamente")
            window.location.reload();
        })


}

//Botones y formularios
export const guardar = (ingreso) => {
    buscar(ingreso);
}


