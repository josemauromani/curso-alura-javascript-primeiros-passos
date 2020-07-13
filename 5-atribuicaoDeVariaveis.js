console.log("Atribuição de Variáveis");

const idade = 38;
const nome = "Mauro";
const sobrenome = "Mani"; 

console.log(nome,sobrenome);
console.log(nome + ' ' + sobrenome);
console.log(`Meu nome é ${nome} ${sobrenome}`);

/* nao posso reatribuir variavel caso seja const, 
para isso deve mudar a declaracao da variavel para let 
nome = nome + sobrenome;
console.log(nome);
*/


const nomeCompleto = nome + sobrenome;
console.log(nomeCompleto);
