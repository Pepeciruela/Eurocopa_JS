import equiposEuro from "./equipos.js";

import Eurocopa from "./Eurocopa.js";

const euro2021 = new Eurocopa ("Eurocopa", ["A", "B", "C", "D"]);

console.log (`El nombre de esta liga es ${euro2021.nombre}`);

const equiposNombre = euro2021.equipos.map(equipo => equipo.nombre);

equiposNombre.forEach(equipoNombre => {
    console.log(equipoNombre)
});

euro2021.jornadasJugadas();

console.log(euro2021.planificacion);
// for(let i in euro2021.equipos){
//     const equipo = euro2021.equipos[i];
//     console.log (equipo.nombre);

// }
