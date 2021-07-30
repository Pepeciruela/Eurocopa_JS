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
import {ordenarTerceros} from "./imprimir.js"



//MOSTRAR GRUPOS Y EQUIPOS POR PANTALLA
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
console.log("\n")

imprimirJornadas(euro2021grupoA);
imprimirJornadas(euro2021grupoB);
imprimirJornadas(euro2021grupoC);
imprimirJornadas(euro2021grupoD);
imprimirJornadas(euro2021grupoE);
imprimirJornadas(euro2021grupoF);


export const finalGrupoA = euro2021grupoA.equipos;
export const finalGrupoB = euro2021grupoB.equipos;
export const finalGrupoC = euro2021grupoC.equipos;
export const finalGrupoD = euro2021grupoD.equipos;
export const finalGrupoE = euro2021grupoE.equipos;
export const finalGrupoF = euro2021grupoF.equipos;

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
        // console.log(eliminatoria);
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

const dieciseisFinal = dieciseis;

const equiposDieciseisavos = dieciseisFinal.toString()

//MOSTRAMOS EQUIPOS PARTICIPANTES POR PANTALLA

console.log("Equipos clasificados para los dieciseisavos de final");
console.log("\n");
for (let item of dieciseisFinal){
    console.log(item);
}

//DIVIDIMOS LOS EQUIPOS EN 8 GRUPOS. VOLVER A MIRAR PARA HACER CON UN BUCLE.

const q1 = dieciseisFinal.splice(0,2);
const q2 = dieciseisFinal.splice(0,2);
const q3 = dieciseisFinal.splice(0,2);
const q4 = dieciseisFinal.splice(0,2);
const q5 = dieciseisFinal.splice(0,2);
const q6 = dieciseisFinal.splice(0,2);
const q7 = dieciseisFinal.splice(0,2);
const q8 = dieciseisFinal.splice(0,2);

//CREAMOS UNA FUNCIÓN QUE DE UN NÚMERO ALEATORIO ENTRE 1 Y 10.

function numeroAleatorio(partido) {
    return Math.floor((Math.random()*9)+1);
} 

//JUAGAMOS LOS ENCUENTROS DE LAS RONDAS, SACAMOS EL RESULTADO DE CADA PARTIDO Y EL GANADOR.
let ganador1 = [];
let perdedor1 = [];
let encuentro1 =[];

function resultadoP (partido){
    let encuentro = [];
    encuentro1 = encuentro;
    let ganador=[];
    ganador1 = ganador;
    let perdedor = [];
    perdedor1 = perdedor;

    for (let valor of partido){
        encuentro.push(valor);
        let resultado = numeroAleatorio(valor);
        encuentro.push(resultado);
        while (encuentro[1] === encuentro[3]){
            encuentro = [];
            encuentro1 = encuentro;
            let ganador=[];
            ganador1 = ganador;
            let perdedor = [];
            perdedor1 = perdedor;
            for (let valor of partido){
                encuentro.push(valor);
                let resultado = numeroAleatorio(valor);
                encuentro.push(resultado);
            }
                if (encuentro[1]>encuentro[3]){
                    //console.log(`${encuentro[0]} ha ganado el partido`)
                    ganador.push(encuentro[0])
                    perdedor.push(encuentro[2])
                }
                else {
                    //console.log(`${encuentro[2]} ha ganado el partido`)
                    ganador.push(encuentro[2])
                    perdedor.push(encuentro[0])
                }
            
    }}

    if (encuentro[1]>encuentro[3]){
        //console.log(`${encuentro[0]} ha ganado el partido`)
        ganador.push(encuentro[0])
        perdedor.push(encuentro[2])
    }
    else {
        //console.log(`${encuentro[2]} ha ganado el partido`)
        ganador.push(encuentro[2])
        perdedor.push(encuentro[0])
    }
console.log(`${encuentro[0]} ${encuentro[1]} - ${encuentro[2]} ${encuentro[3]} => ${ganador}`)  
}

        
    

//JUGAMOS LOS OCTAVOS DE FINAL
console.log("\n")
console.log("=======================================");
console.log("===========OCTAVOS DE FINAL============");
console.log("=======================================");
console.log("\n")

resultadoP(q1);
const ganadorQ1 = ganador1;
resultadoP(q2);
const ganadorQ2 = ganador1;
resultadoP(q3);
const ganadorQ3 = ganador1;
resultadoP(q4);
const ganadorQ4 = ganador1;
resultadoP(q5);
const ganadorQ5 = ganador1;
resultadoP(q6);
const ganadorQ6 = ganador1;
resultadoP(q7);
const ganadorQ7 = ganador1;
resultadoP(q8);
const ganadorQ8 = ganador1;

//COMIENZAN LOS CUARTOS DE FINAL
console.log("\n")
console.log("=======================================");
console.log("===========CUARTOS DE FINAL============");
console.log("=======================================");
console.log("\n")

const oct1= ganadorQ1.concat(ganadorQ8);
const oct2= ganadorQ7.concat(ganadorQ2);
const oct3= ganadorQ3.concat(ganadorQ6);
const oct4= ganadorQ5.concat(ganadorQ4);

resultadoP(oct1); //GANADOR Q1-Q8
const ganadorOct1 = ganador1;
resultadoP(oct2); //GANADOR Q2-Q7
const ganadorOct2 = ganador1;
resultadoP(oct3); //GANADOR Q3-Q6
const ganadorOct3 = ganador1;
resultadoP(oct4); //GANADOR Q4-Q5
const ganadorOct4 = ganador1;

//COMIENZAN LAS SEMIFINALES
console.log("\n")
console.log("=======================================");
console.log("=============SEMIFINALES===============");
console.log("=======================================");
console.log("\n")

const semi1 = ganadorOct1.concat(ganadorOct3);
const semi2 = ganadorOct2.concat(ganadorOct4);

resultadoP(semi1); //GANADOR Q1-Q8
const ganadorSemi1 = ganador1;
const perdedorSemi1 = perdedor1;
resultadoP(semi2); //GANADOR Q2-Q7
const ganadorSemi2 = ganador1;
const perdedorSemi2 = perdedor1;

//TERCER Y CUARTO PUESTO
console.log("\n")
console.log("=======================================");
console.log("============3º y 4º PUESTO=============");
console.log("=======================================");
console.log("\n")

const tercerCuarto = perdedorSemi1.concat(perdedorSemi2);
resultadoP(tercerCuarto)

//FINAL
console.log("\n")
console.log("=======================================");
console.log("=================FINAL=================");
console.log("=======================================");
console.log("\n")

const final = ganadorSemi1.concat(ganadorSemi2);
resultadoP(final)
const ganadorFinal = ganador1

console.log("\n")
console.log (`========== ${ganadorFinal} campeón de la EURO ==========`)
console.log("\n")

