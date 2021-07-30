import { finalGrupoA } from "./index.js";
import { finalGrupoB } from "./index.js";
import { finalGrupoC } from "./index.js";
import { finalGrupoD } from "./index.js";
import { finalGrupoE } from "./index.js";
import { finalGrupoF } from "./index.js";
import {ordenarTerceros} from "./imprimir.js"


const primerosGrupo = [].concat(finalGrupoA[0],finalGrupoB[0],finalGrupoC[0],finalGrupoD[0],finalGrupoE[0],finalGrupoF[0]);
const segundosGrupo = [].concat(finalGrupoA[1],finalGrupoB[1],finalGrupoC[1],finalGrupoD[1],finalGrupoE[1],finalGrupoF[1]);
const tercerosGrupo = [].concat(finalGrupoA[2],finalGrupoB[2],finalGrupoC[2],finalGrupoD[2],finalGrupoE[2],finalGrupoF[2]);

ordenarTerceros(tercerosGrupo);

const mejoresTerceros = tercerosGrupo.slice(0,4);

// console.log (primerosGrupo);
// console.log (segundosGrupo);
// console.log (mejoresTerceros);

const ochoMejores = [];
const ochoPeores = [];
const gruposRepetidos = [];

mejoresTerceros.forEach(tercero => {
    gruposRepetidos.push(tercero.grupo);
});

segundosGrupo.forEach(segundo =>{
    if (segundo.grupo === gruposRepetidos[0] || segundo.grupo === gruposRepetidos[1] ||segundo.grupo ===  gruposRepetidos[2] ||segundo.grupo ===  gruposRepetidos[3]){
        ochoPeores.push(segundo);
    } else{
        ochoMejores.push(segundo);
    }
})

const cuadroFinal = [].concat(primerosGrupo,ochoMejores, ochoPeores, mejoresTerceros);

// //FUNCIÓN PARA COLOCAR EQUIPOS ENFRENTADOS
const eliminatoria = []
function ordenEliminatoria(equipos){
    const numeroPartidos = 1;
    const partidosJornada = equipos.length/2;

    for (let i = 0; i < numeroPartidos; i++) {
        const jornada = [];
        for (let j = 0; j < partidosJornada; j++ ) {
            const partido = { local: "A", visitante: "B"};
            jornada.push(partido);
        }
        eliminatoria.push(jornada);
}

//EQUIPOS LOCALES
const nombreEquiposL = equipos.map(equipo => equipo.nombre);
const grupoEquiposL = equipos.map(equipo => equipo.grupo);
    let indice2 = 0;
    const equiposMaximos2 = nombreEquiposL.length-2;
    eliminatoria.forEach(jornada => {
        jornada.forEach(partido => {
            partido.local = nombreEquiposL[indice2];
            indice2++;
            if (indice2 > equiposMaximos2){
                indice2 = 0;
            }
        })
    })

    //EQUIPOS VISITANTES

    const nombreEquiposV = equipos.map(equipo => equipo.nombre);
    const grupoEquiposV = equipos.map(equipo => equipo.grupo);
        const equiposMaximos = nombreEquiposV.length-2;
        let indice = equiposMaximos;
        eliminatoria.forEach(jornada => {
            let primerPartido = true;
            jornada.forEach(partido => {
                if (primerPartido) {
                    partido.visitante = nombreEquiposV[nombreEquiposV.length-1];
                    primerPartido = false;
                }
                else {
                    partido.visitante = nombreEquiposV[indice];
                    indice--;
                    if(indice<0){
                        indice=equiposMaximos;
                    }
                }
            })
        });
        console.log(eliminatoria);
        return eliminatoria;
}

ordenEliminatoria(cuadroFinal);
const prueba = eliminatoria[0]
// console.log(prueba);
const resultado = Object.entries(eliminatoria[0][0]);
// console.log (resultado);

const dieciseis = []
for (const equipo of prueba) {
    let cambio = Object.entries(equipo)
    for (let key of cambio){
        dieciseis.push(key[1]);
    }
}
export const dieciseisFinal = dieciseis;
// console.log(dieciseisFinal);
