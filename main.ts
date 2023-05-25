class SerieTv {
    imagen:string;
    nombre:string;
    categoria:string;
    constructor(imagen:string, nombre:string, categoria:string) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.categoria = categoria;
        
    }
    
}
class EpisodioSerie {
    nombre:string;
    resumen:string;
    constructor(nombre:string, resumen:string ) {
        this.nombre = nombre;
        this.resumen = resumen;

    }


}
class Persona {
    nombre:string;
    fotografia:string
    descripcion:string;
    constructor(nombre:string, fotografia:string, descripcion:string) {
        this.nombre = nombre;
        this.fotografia = fotografia;
        this.descripcion = descripcion;
        
    }

}
class Actor extends Persona{
    constructor(nombre:string, fotografia:string, descripcion:string){
        super(nombre, fotografia, descripcion)

    }

}
class Director extends Persona {
    constructor(nombre:string, fotografia:string, descripcion:string){
        super(nombre, fotografia, descripcion)

}
}
class Plataforma {
    nombre:string;
    sitioWeb:string;
    constructor(nombre:string, sitioWeb:string ){
        this.nombre = nombre;
        this.sitioWeb = sitioWeb;
        
}
}
class Plan {
    precio:string;
    constructor(precio:string){
        this.precio =precio;
    }
}