/*
Retorne a soma do dobro de todos os pares
-> Filtrar pares
-> Dobrar os valores
-> Reduzir(Somar tudo)
*/

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const somaNumerosPares = numeros
  .filter(valor => valor % 2 === 0)
  .map(valor => valor * 2)
  .reduce((acum, valor) => acum += valor, 0);

console.log(somaNumerosPares);