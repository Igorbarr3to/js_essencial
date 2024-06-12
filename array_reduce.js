//reduce é geralmente utilizado para reduzir os valores de um 
//array a um unico elemento

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//some todos os números
const total = numeros.reduce((acumuludador, valor)=>{
  acumuludador += valor;
  return acumuludador;
}, 0);
console.log(total);

//retorne a soma dos numeros pares 
const somaPares = numeros.reduce((acumulador, valor)=>{
  if(valor % 2 === 0) acumulador += valor;
  return acumulador
}, 0);
console.log(somaPares)

//retorne a soma dos numeros impares
const somaImpares = numeros.reduce((acumulador, valor)=>{
  if (valor % 2 !== 0) acumulador += valor;
  return acumulador;
}, 0);
console.log(somaImpares)

const pessoas = [
  {nome:'Luiz', idade:62 },
  {nome:'Maria', idade:23 },
  {nome:'Eduardo', idade:55 },
  {nome:'Leticia', idade:19 },
  {nome:'Rosana', idade:64 },
  {nome:'Wallace', idade:63 },
];

// retorne a pessoa mais velha
const pessoaMaisVelha = pessoas.reduce((acumulador, valor)=>{
  if(acumulador.idade > valor.idade) return acumulador;
  return valor;
}, 0);
console.log(pessoaMaisVelha);