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


// const primerosGrupo = [].concat(finalGrupoA[0],finalGrupoB[0],finalGrupoC[0],finalGrupoD[0],finalGrupoE[0],finalGrupoF[0]);
// const segundosGrupo = [].concat(finalGrupoA[1],finalGrupoB[1],finalGrupoC[1],finalGrupoD[1],finalGrupoE[1],finalGrupoF[1]);
// const tercerosGrupo = [].concat(finalGrupoA[2],finalGrupoB[2],finalGrupoC[2],finalGrupoD[2],finalGrupoE[2],finalGrupoF[2]);

// ordenarTerceros(tercerosGrupo);

// const mejoresTerceros = tercerosGrupo.slice(0,4);

// console.log (primerosGrupo);
// console.log (segundosGrupo);
// console.log (mejoresTerceros);

// //const dieciseisFinalistas = [].concat(primerosGrupo, segundosGrupo, mejoresTerceros);

// // console.log("segundosGrupo");
// // console.log(segundosGrupo);
// // console.log("mejoresTerceros");
// // console.log(mejoresTerceros);

// const ochoMejores = [];
// const ochoPeores = [];
// const gruposRepetidos = [];


// mejoresTerceros.forEach(tercero => {
//     gruposRepetidos.push(tercero.grupo);
// });

// segundosGrupo.forEach(segundo =>{
//     if (segundo.grupo === gruposRepetidos[0] || segundo.grupo === gruposRepetidos[1] ||segundo.grupo ===  gruposRepetidos[2] ||segundo.grupo ===  gruposRepetidos[3]){
//         ochoPeores.push(segundo);
//     } else{
//         ochoMejores.push(segundo);
//     }
// })

// const cuadroFinal = [].concat(primerosGrupo,ochoMejores, ochoPeores, mejoresTerceros);

// // console.log("ochoMejores");
// // console.log(ochoMejores);
// // console.log("ochoPeores");
// // console.log(ochoPeores);


// // //FUNCIÓN PARA COLOCAR EQUIPOS ENFRENTADOS

// function ordenEliminatoria(equipos){
//     const eliminatoria = []
//     const numeroPartidos = 1;
//     const partidosJornada = equipos.length/2;

//     for (let i = 0; i < numeroPartidos; i++) {
//         const jornada = [];
//         for (let j = 0; j < partidosJornada; j++ ) {
//             const partido = { local: "A", visitante: "B"};
//             jornada.push(partido);
//         }
//         eliminatoria.push(jornada);
// }

// //EQUIPOS LOCALES
// const nombreEquiposL = equipos.map(equipo => equipo.nombre);
// const grupoEquiposL = equipos.map(equipo => equipo.grupo);
//     let indice2 = 0;
//     const equiposMaximos2 = nombreEquiposL.length-2;
//     eliminatoria.forEach(jornada => {
//         jornada.forEach(partido => {
//             partido.local = nombreEquiposL[indice2];
//             indice2++;
//             if (indice2 > equiposMaximos2){
//                 indice2 = 0;
//             }
//         })
//     })

//     //EQUIPOS VISITANTES

//     const nombreEquiposV = equipos.map(equipo => equipo.nombre);
//     const grupoEquiposV = equipos.map(equipo => equipo.grupo);
//         const equiposMaximos = nombreEquiposV.length-2;
//         let indice = equiposMaximos;
//         eliminatoria.forEach(jornada => {
//             let primerPartido = true;
//             jornada.forEach(partido => {
//                 if (primerPartido) {
//                     partido.visitante = nombreEquiposV[nombreEquiposV.length-1];
//                     primerPartido = false;
//                 }
//                 else {
//                     partido.visitante = nombreEquiposV[indice];
//                     indice--;
//                     if(indice<0){
//                         indice=equiposMaximos;
//                     }
//                 }
//             })
//         });

//         console.log(eliminatoria);
// }

// ordenEliminatoria(cuadroFinal);


// //Unir todos los PRIMEROS en un Array



// //Unir todos los SEGUNDOS en un Array

// //Unir todos los Terceros en un Array, y coger los 4 mejores.



