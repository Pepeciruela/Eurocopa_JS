
import equiposEuro from "./equipos.js";
import { grupoA } from "./equipos.js";
import { grupoB } from "./equipos.js";
import { grupoC } from "./equipos.js";
import { grupoD } from "./equipos.js";
import { grupoE } from "./equipos.js";
import { grupoF } from "./equipos.js";
import Eurocopa from "./Eurocopa.js";

const euro2021grupoA = new Eurocopa ("Grupo A", grupoA);

export default function imprimirEmparejamientos (variable, grupo){
    console.log (`${variable.nombre}`);
    console.log("- - - - - - - - - - ")
    grupo.forEach((equipo) => {
        console.log(equipo)
        })

    console.log("- - - - - - - - - - ")

    variable.jornadasJugadas();

    variable.planificacion.forEach((jornada, indice) => {
        console.log(`Jornada ${indice + 1}`)
        jornada.forEach(partido => {
            console.log(`${partido.local} vs ${partido.visitante}`);
        })
        console.log ("====================")
    })

}

export function imprimirJornadas(variable){
    variable.jugar();
    variable.jornadasGuardadas.forEach((jornadaGuardada, indice) => {
    console.log(`${variable.nombre} - Jornada ${indice+1}`)
    jornadaGuardada.resultados.forEach(resultado => {
        console.log(`${resultado.local} vs ${resultado.visitante} : ${resultado.golesLocal} - ${resultado.golesVisitante}`)
    })

    const jornadaImprimir = jornadaGuardada.clasificacion.map(equipo =>{
        return{
            Equipo: equipo.nombre,
            Puntos: equipo.puntos,
            PJ: equipo.partidosGanados + equipo.partidosPerdidos + equipo.partidosEmpatados,
            PG: equipo.partidosGanados,
            PE: equipo.partidosEmpatados,
            PP: equipo.partidosPerdidos,
            GF: equipo.golesFavor,
            GC: equipo.golesContra,
            DG: equipo.diferenciaGoles
        }
        })

        console.table(jornadaImprimir);
    })
}

imprimirJornadas(euro2021grupoA);



