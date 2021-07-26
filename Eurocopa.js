// const equipos = [
//     "Turquía",
//     "Italia",
//     "Gales",
//     "Suiza",
//     "Dinamarca",
//     "Finlandia",
//     "Bélgica",
//     "Rusia",
//     "Holanda",
//     "Ucrania",
//     "Austria",
//     "Macedonia",
//     "Inglaterra",
//     "Croacia",
//     "Escocia",
//     "República Checa",
//     "España",
//     "Suecia",
//     "Polonia",
//     "Eslovaquia",
//     "Hungría",
//     "Portugal",
//     "Francia",
//     "Alemania",
//   ];

import equiposEuro from "./equipos.js";

export default class Eurocopa{

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
                puntos: 0,
                golesFavor: 0,
                golesContra: 0,
            }

            this.equipos.push(equipo);
        }
    }

    jornadasJugadas(){
        const numeroPartidos = this.equipos.length -1;
        const partidosJornada = this.equipos.length /2;

        for (let i = 0; i < numeroPartidos; i++) {
            const jornada = [];
            for (let j = 0; j < partidosJornada; j++ ) {
                const partido = { local: "A", visitante: "B"};
                jornada.push(partido);
            }
            this.planificacion.push(jornada);
        }

        this.equiposLocales();
        this.equiposVisitantes();
        this.ultimoEquipo();

    }

    equiposLocales () {
        const nombreEquipos = this.equipos.map(equipo => equipo.nombre);
        let indice = 0;
        const equiposMaximos = nombreEquipos.length-2;
        this.planificacion.forEach(jornada => {
            jornada.forEach(partido => {
                partido.local = nombreEquipos[indice];
                indice++;
                if (indice > equiposMaximos){
                    indice = 0;
                }
            })
        })
    }

    equiposVisitantes (){
        const nombreEquipos = this.equipos.map(equipo => equipo.nombre);
        const equiposMaximos = nombreEquipos.length-2;
        let indice = equiposMaximos;
        this.planificacion.forEach(jornada => {
            let primerPartido = true;
            jornada.forEach(partido => {
                if (primerPartido) {
                    partido.visitante = nombreEquipos[nombreEquipos.length-1];
                    primerPartido = false;
                }
                else {
                    partido.visitante = nombreEquipos[indice];
                    indice--;
                    if(indice<0){
                        indice=equiposMaximos;
                    }
                }
            })
        });
    }

    this.ultimoEquipo(){
        
    }
}
