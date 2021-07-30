
import equiposEuro from "./equipos.js";
import { grupoA } from "./equipos.js";
import { grupoB } from "./equipos.js";
import { grupoC } from "./equipos.js";
import { grupoD } from "./equipos.js";
import { grupoE } from "./equipos.js";
import { grupoF } from "./equipos.js";
import Eurocopa from "./classes/Eurocopa.js";

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
    console.log ("\n")

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
            DG: equipo.diferenciaGoles,
            Grupo: equipo.grupo
        }
        })

        console.table(jornadaImprimir);
    })
}

export function ordenarTerceros(equipos){
    equipos.sort(function(equipoA, equipoB){
        if (equipoA.puntos > equipoB.puntos) {
            return -1
        } else if (equipoA.puntos < equipoB.puntos){
            return 1
        } else {
            const diferenciaGolesA = equipoA.golesFavor - equipoA.golesContra;
            const diferenciaGolesB = equipoB.golesFavor - equipoB.golesContra;
            if (diferenciaGolesA > diferenciaGolesB) {
                return -1
            } else if (diferenciaGolesA < diferenciaGolesB) {
                return 1
            } else {
                const letraNombreA = equipoA.nombre;
                const letraNombreB = equipoB.nombre;
                if(letraNombreA < letraNombreB) {
                    return -1
                } else if (letraNombreA > letraNombreB) {
                    return 1
                } else {
                    return 0
                }

            }
        }
    })
    return equipos;
}



