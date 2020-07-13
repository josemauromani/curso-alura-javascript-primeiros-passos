console.log("Trabalhando com condicionais \n");

const listaDestinos = new Array('Salvador', 'São Paulo', 'Rio de Janeiro');
const idadeComprador = 14;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Janeiro";
let destinoExiste = false;

console.log("Destinos Possíveis \n");
console.log(listaDestinos);

const podeComprar = (idadeComprador >= 18 || estaAcompanhada == true);

let contador = 0;

console.log("********** WHILE **********");

while (contador < listaDestinos.length) {
  if (listaDestinos[contador] == destino) {
    destinoExiste = true;
    break;
  }
  contador++;
}


if (podeComprar && destinoExiste) {
  console.log("Boa viagem");
} else {
  console.log("Desculpe tivemos algum erro");
}

console.log("********** FOR **********");

for (let cont = 0; cont < destino.length; cont++) {
  if (listaDestinos[cont] == destino) {
    destinoExiste = true;
    break;
  }
}
