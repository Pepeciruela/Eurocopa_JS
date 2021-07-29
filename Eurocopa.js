export default class Eurocopa{

    constructor(nombre, equipos =[], configuracion = {}){
        this.nombre = nombre;
        this.planificacion = [];
        this.configuracionDefecto(configuracion);
        this.configuracionEquipos(equipos);
        this.jornadasGuardadas = [];

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
                diferenciaGoles: 0,
                grupo: this.nombre,
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

    jugar(){
        for (const jornada of this.planificacion) {
            const actualizarJornada = {
                resultados: [],
                clasificacion: undefined,
            }
            for (const partido of jornada){
                const resultado =this.jugarPartido(partido);
                this.actualizacionEquipos(resultado);
                actualizarJornada.resultados.push(resultado);
                
            }
            actualizarJornada.clasificacion = this.obtenerClasificacion().map(equipo => Object.assign({}, equipo));
            this.jornadasGuardadas.push(actualizarJornada);
        }
        
    }

    generadorGoles(){
        return Math.floor(Math.random()*10);
    }

    jugarPartido(partido) {
        const golesLocal = this.generadorGoles();
        const golesVisitante = this.generadorGoles();
        return {
            local : partido.local,golesLocal,
            visitante: partido.visitante, golesVisitante
        }
    }

    estadisticasPorEquipo (nombre){
        return this.equipos.find(equipo => equipo.nombre === nombre)
    }

    actualizacionEquipos(resultado) {
        //console.log("Actualizacion equipos", resultado);

        const equipoCasa = this.estadisticasPorEquipo(resultado.local);
        const equipoFuera = this.estadisticasPorEquipo(resultado.visitante);

        equipoCasa.golesFavor += resultado.golesLocal;
        equipoCasa.golesContra += resultado.golesVisitante;
        equipoCasa.diferenciaGoles += resultado.golesLocal - resultado.golesVisitante;
        equipoFuera.golesFavor += resultado.golesVisitante;
        equipoFuera.golesContra += resultado.golesLocal;
        equipoFuera.diferenciaGoles += resultado.golesVisitante - resultado.golesLocal;

        if(resultado.golesLocal > resultado.golesVisitante) {
            equipoCasa.puntos += this.configuracion.puntosGanar;
            equipoCasa.partidosGanados++;
            equipoFuera.partidosPerdidos++;

        } else if (resultado.golesVisitante > resultado.golesLocal) {
            equipoFuera.puntos += this.configuracion.puntosGanar;
            equipoFuera.partidosGanados++;
            equipoCasa.partidosPerdidos++;
        } else {
            equipoCasa.puntos += this.configuracion.puntosEmpatar;
            equipoFuera.puntos += this.configuracion.puntosEmpatar;
            equipoCasa.partidosEmpatados++;
            equipoFuera.partidosEmpatados++;
        }
        //console.log ("equipoCasa", equipoCasa);
        //console.log ("equipoFuera", equipoFuera);
    }

    obtenerClasificacion(){
        //console.table(this.equipos);
        this.equipos.sort(function(equipoA, equipoB){
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
        return this.equipos;
    }


}
