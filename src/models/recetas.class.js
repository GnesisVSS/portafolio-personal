export class RecetasC {
    nombre = '';
    descripcion = '';
    preparacion = '';
    categoria = '';
    tiempoPreparacion = '';
    porciones = '';
    dificultad = '';
    imgUrl = '';

    constructor(nombre,descripcion,preparacion,categoria,tiempoPreparacion,porciones,dificultad,imgUrl){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.preparacion = preparacion;
        this.categoria = categoria;
        this.tiempoPreparacion = tiempoPreparacion;
        this.porciones = porciones;
        this.dificultad = dificultad;
        this.imgUrl = imgUrl;
    }
}

