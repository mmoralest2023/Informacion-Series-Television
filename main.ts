import { SerieTv } from "./serieTv.js";
import { EpisodioSerie } from "./episodioSerie.js";
import { Persona } from "./persona.js";
import { Director } from "./director.js";
import { Plataforma } from "./plataforma.js";
import { Plan } from "./plan.js";


const series = [];
const obj1= new SerieTv("x","prueba",["comedia"]);
const obj2= new SerieTv("y","pruebay",["terror"]);


series.push(obj1.nombre);
series.push(obj2.nombre);


console.log(series);







