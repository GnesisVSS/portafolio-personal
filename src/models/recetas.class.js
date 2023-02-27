export class RecetasC {
    nombre = '';
    descripcion = '';
    preparacion = '';
    categoria = '';
    tiempoPreparacion = '';
    porciones = '';
    dificultad = '';

    constructor(nombre,descripcion,preparacion,categoria,tiempoPreparacion,porciones,dificultad){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.preparacion = preparacion;
        this.categoria = categoria;
        this.tiempoPreparacion = tiempoPreparacion;
        this.porciones = porciones;
        this.dificultad = dificultad;
    }
}

