import equiposEuro from "./equipos.js";

import Eurocopa from "./Eurocopa.js";

const euro2021 = new Eurocopa ("Eurocopa", equiposEuro);

console.log (equiposEuro);

console.log (`El nombre de esta liga es ${euro2021.nombre}`);

const equiposNombre = euro2021.equipos.map(equipo => equipo.nombre);

// equiposNombre.forEach(equipoNombre => {
//     console.log(equipoNombre)
// });

euro2021.jornadasJugadas();

//poner el nombre de los GRUPOS

euro2021.planificacion.forEach((jornada, indice) => {
    console.log(`Jornada ${indice + 1}`)
    jornada.forEach(partido => {
        console.log(`${partido.local} vs ${partido.visitante}`);
    })
    console.log ("====================")
})

euro2021.jugar();
//console.log(euro2021.planificacion);
// for(let i in euro2021.equipos){
//     const equipo = euro2021.equipos[i];
//     console.log (equipo.nombre);

// }
