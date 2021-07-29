const equiposEuro = [
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

function barajarEquipos (equipos){
    equipos.sort(()=> Math.random()- 0.5);
}

barajarEquipos(equiposEuro);

let equiposEurocopa = [];
const numeroEquipos = 4;
for (let i=0; i < equiposEuro.length; i+= numeroEquipos) {
    let equipo = equiposEuro.slice(i, i+numeroEquipos);
    equiposEurocopa.push(equipo);
}

export const grupoA= equiposEurocopa[0];
export const grupoB = equiposEurocopa[1];
export const grupoC= equiposEurocopa[2];
export const grupoD = equiposEurocopa[3];
export const grupoE= equiposEurocopa[4];
export const grupoF = equiposEurocopa[5];

export default equiposEuro;