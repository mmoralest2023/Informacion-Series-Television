import { SerieTv } from "./serieTv.js";
import { EpisodioSerie } from "./episodioSerie.js";
import { Persona } from "./persona.js";
import { Director } from "./director.js";
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