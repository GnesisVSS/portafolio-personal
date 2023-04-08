export class RecetasC {
    id = '';
    nombre = '';
    descripcion = '';
    preparacion = '';
    categoria = '';
    tiempoPreparacion = '';
    porciones = '';
    dificultad = '';
    imgUrl = '';

    constructor(id,nombre,descripcion,preparacion,categoria,tiempoPreparacion,porciones,dificultad,imgUrl){
        this.id = id;
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

