import axios from "axios";

let url = 'http://localhost:3000/api/usuarios/';

export const buscarLogin = async(ingreso) => {
    // let correo = { correo: this.usuarios.correo }
    await axios.get(url + ingreso.correo + ingreso.contrasena)
        .then(response => {
            if (response.data.message === "Credenciales correctas") {
                alert("Credenciales correctas!")
            } else if (response.data.message === "Revisa los campos e intentalo de nuevo") {
                alert("Revisa los campos e intentalo de nuevo!")
            } else {
                alert("Algo salió mal!")
            }
        })
}

export const buscar = async(ingreso) => {
    // let correo = { correo: this.usuarios.correo }
    await axios.get(url + ingreso.correo)
        .then(response => {

            if (response.data.message === "Usuario disponible") {
                crear(ingreso);
            } else if (response.data.message === "Usuario no disponible") {
                alert("El usuario ya existe!")
            } else {
                alert("Algo salió mal!")
            }

        })
}
export const crear = async(ingreso) => {
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


