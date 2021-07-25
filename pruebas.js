const equiposEurocopa = ["ESP", "ING", "ITL", "FRN", "HOL", "BEL", "RUS", "POL", "ALM", "SRB", "POR", "NOR", "UKR", "TUR", "LET", "SUE"];


//CREAMOS UNA FUNCIÓN PARA BARAJAR LOS EQUIPOS EN ORDENA ALEATORIO
function barajarEquipos (equipos){
    equipos.sort(()=> Math.random()- 0.5);
}

barajarEquipos(equiposEurocopa);

//Al arrancar el programa se deberá mostrar por pantalla la información de los equipos que hay en cada grupo y la planificación de partidos del mismo.

console.log ("=========== COMIENZA LA EUROCOPA ===========");

//DIVIDIMOS LOS EQUIPOS EN 8 GRUPOS. VOLVER A MIRAR PARA HACER CON UN BUCLE.

/*function separarEquipos (equipos){
    const equiposSeparados = [];
    let j = 1;
    for (equipo of equipos) {
        equiposSeparados["Q" + [j]]  = equipos.splice(0,2);
        ++j;
    }
    console.log(equiposSeparados);
}

separarEquipos(equiposEurocopa);*/

// const equiposSeparados = equiposEurocopa.map (function(x){
//     equiposEurocopa.splice(0,2);
// })

// equiposEurocopa.forEach(equipo => {
//     const equiposSeparados = []
//     let j =1;
//     equiposSeparados["Q" [j]] = equiposEurocopa.splice(0,2);
//     ++j;
    
// }
console.log(equiposSeparados);


