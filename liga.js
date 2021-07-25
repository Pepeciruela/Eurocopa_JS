const equipos = [
    "Turquía",
    "Italia",
    "Gales",
    "Suiza",
    "Dinamarca",
    "Finlandia",
    "Bélgica",
    "Rusia",
    "Holanda",
    "Ucrania",
    "Austria",
    "Macedonia",
    "Inglaterra",
    "Croacia",
    "Escocia",
    "República Checa",
    "España",
    "Suecia",
    "Polonia",
    "Eslovaquia",
    "Hungría",
    "Portugal",
    "Francia",
    "Alemania",
  ];

class Eurocopa{

    constructor(nombre, equipos =[], configuracion = {}){
        this.nombre = nombre;
        this.planificacion = [];
        this.configuracionDefecto(configuracion);
        this.configuracionEquipos(equipos);

    }

    configuracionDefecto(configuracion){
        const configuracionPorDefecto = {
            vueltas : 1,
            puntosGanar : 3,
            puntosEmpatar : 1,
            puntosPerder : 0
        }
        this.configuracion = Object.assign(configuracionPorDefecto, configuracion);
    }

    configuracionEquipos(nombreEquipos) {
        this.equipos = []
        for (const nombreEquipo of nombreEquipos) {
            const equipo = {
                nombre : nombreEquipo,
                partidosGanados : 0,
                partidosEmpatados : 0,
                partidosPerdidos : 0,
            }

            this.equipos.push(equipo);
        }
    }

}

// const configuracionEurocopa = {
//     vueltas : 1,
//     puntosGanar : 3,
//     puntosEmpatar : 1,
//     puntosPerder : 0
// }

const euro2021 = new Eurocopa ("Eurocopa", equipos,);

console.log (`El nombre de esta liga es ${euro2021.nombre}`);

for(let i in euro2021.equipos){
    const equipo = euro2021.equipos[i];
    const {partidosGanados, partidosPerdidos} = equipo;
    console.log (equipo.nombre, partidosGanados, partidosPerdidos);

}
