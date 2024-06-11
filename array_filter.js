//Sempre retorna um array, com a mesma quantidade de elementos 
//do array original ou menos;

//Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const maioresQueDez = numeros.filter( valor => valor > 10 ).sort();
console.log(maioresQueDez);





const pessoas = [
  {nome:'Luiz', idade:62 },
  {nome:'Maria', idade:23 },
  {nome:'Eduardo', idade:55 },
  {nome:'Leticia', idade:19 },
  {nome:'Rosana', idade:32 },
  {nome:'Wallace', idade:47 },
];

//Retorne as pessoas que tem o nome com 5 letras ou mais
const nomeCincoLetrasOuMais = pessoas.filter(({ nome })=> nome.length >= 5);
console.log(nomeCincoLetrasOuMais);

//Retorne as pessoas com mais de 50 anos
const maisDe50Anos = pessoas.filter(({ idade })=> idade > 50);
console.log(maisDe50Anos);

//Retorne as pessoas curjo nome termina com a
const nomeTerminaComA = pessoas.filter(({ nome })=> nome.toLocaleLowerCase().endsWith('a'));
console.log(nomeTerminaComA);