import { buscarLogin } from "../api/registro.api";

export const loadingInicial = () => {
    var alerta = document.getElementById('loading');
    var alerta2 = document.getElementById('iniciar');
    function toggle(alerta) {
        if (alerta.className === '' && alerta2.className === 'visually-hidden') {
            alerta.className = alerta.className.replace(/(?:^|\s)visually-hidden(?!\S)/g, '')
            alerta2.className = alerta2.className.replace(/(?:^|\s)''(?!\S)/g, '')
        } else {
            alerta.className = '';
            alerta2.className = 'visually-hidden';
        }
    }
    toggle(alerta);
}

export const resetCarga = () => {
    var alerta = document.getElementById('loading');
    var alerta2 = document.getElementById('iniciar');
    function toggle(alerta) {
        if (alerta.className === 'visually-hidden' && alerta2.className === '') {
            alerta.className = alerta.className.replace(/(?:^|\s)(?!\S)/g, '')
            alerta2.className = alerta2.className.replace(/(?:^|\s)visually-hidden(?!\S)/g, '')
        } else {
            alerta.className = 'visually-hidden';
            alerta2.className = '';
        }
    }
    toggle(alerta);
}

export async function cargaDef(values) {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(resetCarga(),buscarLogin(values)), 1500)
    });

    await (promise);
}

export const carga = (values) => {
    loadingInicial();
    cargaDef(values);
}