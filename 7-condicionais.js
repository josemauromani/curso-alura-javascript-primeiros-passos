console.log("Trabalhando com condicionais");

const listaDestinos = new Array('Salvador', 'São Paulo', 'Rio de janeiro');
console.log(listaDestinos);

const idadeComprador = 14;
const estaAcompanhada = false;
const temPassagemComprada = true;

/*
if (idadeComprador >= 18) {
  listaDestinos.splice(1, 1);
  console.log("compra efetuada com sucesso");
} else if (estaAcompanhada) {
  listaDestinos.splice(1, 1);
  console.log("OK pode comprar o comprador está acompanhado");
} else {
  console.log("não é maior de idade e não pode efetuar a venda");
}
*/

if (idadeComprador>=18 || estaAcompanhada==true) {
  listaDestinos.splice(1, 1);
  console.log("OK Compra confirmaa");
} else {
  console.log("Não é possível comprar");
}

console.log("Embarque \n\n");
if (idadeComprador>=18 && temPassagemComprada) {
  console.log("Boa viagem");
} else {
  console.log("Não pode embarcar");
}
