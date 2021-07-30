//JUAGAMOS LOS ENCUENTROS DE LAS RONDAS, SACAMOS EL RESULTADO DE CADA PARTIDO Y EL GANADOR.

export let ganador1 = [];
export let perdedor1 = [];

function numeroAleatorio(partido) {
    return Math.floor((Math.random()*9)+1);
} 

export function resultadoP (partido){
    let encuentro = [];
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
