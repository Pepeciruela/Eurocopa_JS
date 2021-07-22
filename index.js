const equiposEurocopa = ["ESP", "ING", "ITL", "FRN", "HOL", "BEL", "RUS", "POL", "ALM", "SRB", "POR", "NOR", "UKR", "TUR", "LET", "SUE"];


//CREAMOS UNA FUNCIÓN PARA BARAJAR LOS EQUIPOS EN ORDENA ALEATORIO
function barajarEquipos (equipos){
    equipos.sort(()=> Math.random()- 0.5);
}

barajarEquipos(equiposEurocopa);

//Al arrancar el programa se deberá mostrar por pantalla la información de los equipos que hay en cada grupo y la planificación de partidos del mismo.

console.log ("=========== COMIENZA LA EUROCOPA ===========");


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
    perdedor = []
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
console.log ("=========== OCTAVOS DE FINAL ===========");
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

//COMIENZAN LOS CUARTOS DE FINAL
console.log ("=========== CUARTOS DE FINAL ===========");
const oct1= ganadorQ1.concat(ganadorQ8);
const oct2= ganadorQ7.concat(ganadorQ2);
const oct3= ganadorQ3.concat(ganadorQ6);
const oct4= ganadorQ5.concat(ganadorQ4);

resultado(oct1); //GANADOR Q1-Q8
const ganadorOct1 = ganador;
resultado(oct2); //GANADOR Q2-Q7
const ganadorOct2 = ganador;
resultado(oct3); //GANADOR Q3-Q6
const ganadorOct3 = ganador;
resultado(oct4); //GANADOR Q4-Q5
const ganadorOct4 = ganador;

//COMIENZAN LAS SEMIFINALES
console.log ("=========== SEMIFINALES ===========");
const semi1 = ganadorOct1.concat(ganadorOct3);
const semi2 = ganadorOct2.concat(ganadorOct4);

resultado(semi1); //GANADOR Q1-Q8
const ganadorSemi1 = ganador;
const perdedorSemi1 = perdedor;
resultado(semi2); //GANADOR Q2-Q7
const ganadorSemi2 = ganador;
const perdedorSemi2 = perdedor;

//TERCER Y CUARTO PUESTO
console.log ("=========== TERCER Y CUARTO PUESTO ===========");
const tercerCuarto = perdedorSemi1.concat(perdedorSemi2);
resultado(tercerCuarto)

//FINAL
console.log ("=========== FINAL ===========");
const final = ganadorSemi1.concat(ganadorSemi2);
resultado(final)
ganadorFinal = ganador
console.log (`========== ${ganadorFinal} campeón de la EURO ==========`)





