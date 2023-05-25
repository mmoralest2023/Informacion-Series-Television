"use strict";
class SerieTv {
    constructor(imagen, nombre, categoria) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.categoria = categoria;
    }
}
class EpisodioSerie {
    constructor(nombre, resumen) {
        this.nombre = nombre;
        this.resumen = resumen;
    }
}
class Persona {
    constructor(nombre, fotografia, descripcion) {
        this.nombre = nombre;
        this.fotografia = fotografia;
        this.descripcion = descripcion;
    }
}
class Actor extends Persona {
    constructor(nombre, fotografia, descripcion) {
        super(nombre, fotografia, descripcion);
    }
}
class Director extends Persona {
    constructor(nombre, fotografia, descripcion) {
        super(nombre, fotografia, descripcion);
    }
}
class Plataforma {
    constructor(nombre, sitioWeb) {
        this.nombre = nombre;
        this.sitioWeb = sitioWeb;
    }
}
class Plan {
    constructor(precio) {
        this.precio = precio;
    }
}
