const equiposEurocopa = ["ESP", "ING", "ITL", "FRN", "HOL", "BEL", "RUS", "POL", "ALM", "SRB", "POR", "NOR", "UKR", "TUR", "LET", "SUE"];


//CREAMOS UNA FUNCIÓN PARA BARAJAR LOS EQUIPOS EN ORDENA ALEATORIO
function barajarEquipos (equipos){
    equipos.sort(()=> Math.random()- 0.5);
}

barajarEquipos(equiposEurocopa);

//Al arrancar el programa se deberá mostrar por pantalla la información de los equipos que hay en cada grupo y la planificación de partidos del mismo.

console.log ("=========== COMIENZA LA EUROCOPA ===========")


//DIVIDIMOS LOS EQUIPOS EN 8 GRUPOS. VOLVER A MIRAR PARA HACER CON UN BUCLE.

const q1 = equiposEurocopa.splice(0,2);
const q2 = equiposEurocopa.splice(0,2);
const q3 = equiposEurocopa.splice(0,2);
const q4 = equiposEurocopa.splice(0,2);
const q5 = equiposEurocopa.splice(0,2);
const q6 = equiposEurocopa.splice(0,2);
const q7 = equiposEurocopa.splice(0,2);
const q8 = equiposEurocopa.splice(0,2);

//CREAMOS UNA FUNCIÓN QUE DE UN NÚMERO ALEATORIO ENTRE 1 Y 10.

function numeroAleatorio(partido) {
    return Math.floor((Math.random()*9)+1);
} 

//JUAGAMOS LOS ENCUENTROS DE LAS RONDAS, SACAMOS EL RESULTADO DE CADA PARTIDO Y EL GANADOR.
function resultado (partido){
    encuentro = []
    ganador=[]
    for (let valor of partido){
        encuentro.push(valor);
        let resultado = numeroAleatorio(valor);
        encuentro.push(resultado);
        //console.log(`${valor} ha marcado ${resultado} goles`)
    }
    if (encuentro[1] === encuentro[3]){
        encuentro = []
        for (let valor of partido){
        encuentro.push(valor);
        let resultado = numeroAleatorio(valor);
        encuentro.push(resultado);
        //console.log(`${valor} ha marcado ${resultado} goles`)
    }
        
    }
    //console.log(encuentro);
    if (encuentro[1]>encuentro[3]){
        //console.log(`${encuentro[0]} ha ganado el partido`)
        ganador.push(encuentro[0])}
    else {
        //console.log(`${encuentro[2]} ha ganado el partido`)
        ganador.push(encuentro[2])
    }
    console.log(`${encuentro[0]} ${encuentro[1]} - ${encuentro[2]} ${encuentro[3]} => ${ganador}`)  
}

//JUGAMOS LOS OCTAVOS DE FINAL
console.log ("=========== OCTAVOS DE FINAL ===========")
resultado(q1);
const ganadorQ1 = ganador;
resultado(q2);
const ganadorQ2 = ganador;
resultado(q3);
const ganadorQ3 = ganador;
resultado(q4);
const ganadorQ4 = ganador;
resultado(q5);
const ganadorQ5 = ganador;
resultado(q6);
const ganadorQ6 = ganador;
resultado(q7);
const ganadorQ7 = ganador;
resultado(q8);
const ganadorQ8 = ganador;

//Nombre del grupo

//Listado de los equipos ( una en cada línea)

//La asignación de los equipos a cada grupo se realizará de manera aleatoria.

//Después se anunciará con un texto el comienzo del torneo

//A continuación se mostrarán los resultados de los partidos y la clasificación de cada grupo tras el final de la primera jornada de partidos, después los de la segunda jornada, y finalmente los de la tercera jornada. Una vez finalice la fase de grupos, se deberán anunciar el comienzo de la fase de eliminatorias.

//A partir de aquí, se continuaría con l os requisitos del programa mínimo

