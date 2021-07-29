import equiposEuro from "./equipos.js";
import { grupoA } from "./equipos.js";
import { grupoB } from "./equipos.js";
import { grupoC } from "./equipos.js";
import { grupoD } from "./equipos.js";
import { grupoE } from "./equipos.js";
import { grupoF } from "./equipos.js";

import Eurocopa from "./Eurocopa.js";

import imprimirEmparejamientos from "./imprimir.js"
import {imprimirJornadas} from "./imprimir.js"

console.log("Grupos y equipos")
console.log("====================")

const euro2021grupoA = new Eurocopa ("Grupo A", grupoA);
const euro2021grupoB = new Eurocopa ("Grupo B", grupoB);
const euro2021grupoC = new Eurocopa ("Grupo C", grupoC);
const euro2021grupoD = new Eurocopa ("Grupo D", grupoD);
const euro2021grupoE = new Eurocopa ("Grupo E", grupoE);
const euro2021grupoF = new Eurocopa ("Grupo F", grupoF);

imprimirEmparejamientos(euro2021grupoA, grupoA);
imprimirEmparejamientos(euro2021grupoB, grupoB);
imprimirEmparejamientos(euro2021grupoC, grupoC);
imprimirEmparejamientos(euro2021grupoD, grupoD);
imprimirEmparejamientos(euro2021grupoE, grupoE);
imprimirEmparejamientos(euro2021grupoF, grupoF);


//JUGAR LIGA
console.log("=======================================");
console.log("==========EMPIEZA LA EUROCOPA==========");
console.log("=======================================");

imprimirJornadas(euro2021grupoA);
imprimirJornadas(euro2021grupoB);
imprimirJornadas(euro2021grupoC);
imprimirJornadas(euro2021grupoD);
imprimirJornadas(euro2021grupoE);
imprimirJornadas(euro2021grupoF);



// euro2021grupoA.jugar();
// euro2021grupoA.jornadasGuardadas.forEach((jornadaGuardada, indice) => {
//     console.log(`${euro2021grupoA.nombre} - Jornada ${indice+1}`)
//     jornadaGuardada.resultados.forEach(resultado => {
//         console.log(`${resultado.local} vs ${resultado.visitante} : ${resultado.golesLocal} - ${resultado.golesVisitante}`)
//     })

//     const jornadaImprimir = jornadaGuardada.clasificacion.map(equipo =>{
//         return{
//             Equipo: equipo.nombre,
//             Puntos: equipo.puntos,
//             PJ: equipo.partidosGanados + equipo.partidosPerdidos + equipo.partidosEmpatados,
//             PG: equipo.partidosGanados,
//             PE: equipo.partidosEmpatados,
//             PP: equipo.partidosPerdidos,
//             GF: equipo.golesFavor,
//             GC: equipo.golesContra,
//             DG: equipo.diferenciaGoles
//         }
//         })

//         console.table(jornadaImprimir);
//     })

