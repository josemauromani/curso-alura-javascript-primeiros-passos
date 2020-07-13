console.log(`Trabalhando com listas`);

/** 
 * desse jeito fica dificil de trabalhar
 * pois temos itens diferentes para a mesma informação
 * caso o numero aumente ficaria inviavel atribuir e imprimir todas os destinos
*/
const destino1 = `Salvador`;
const destino2 = `São Paulo`;
const destino3 = `Rio de Janeiro`;

console.log(destino1);
console.log(destino2);
console.log(destino3);

/**
 * Solução:
 * Array - como se fosse uma lista de dados
 */

const listaDestinos = new Array('Salvador','São Paulo', 'Rio de janeiro');
console.log(listaDestinos);

listaDestinos.push(`Porto Alegre`);
listaDestinos.push(`Fortaleza`);

console.log(listaDestinos);

listaDestinos.splice(2,1);

console.log(listaDestinos);

console.log(listaDestinos[2]);
