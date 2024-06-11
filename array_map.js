//Semelhante ao filter, o map itera sobre cada indice do array
//porém, map modifica os valores dos indices retornando um novo array

//Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobroNumeros = numeros.map(valor => valor * 2);
console.log(dobroNumeros);

//Para cado elemento:
const pessoas = [
  {nome:'Luiz', idade:62 },
  {nome:'Maria', idade:23 },
  {nome:'Eduardo', idade:55 },
  {nome:'Leticia', idade:19 },
  {nome:'Rosana', idade:32 },
  {nome:'Wallace', idade:47 },
];

//Retorne apenas uma string com o nome da pessoa
const nome = pessoas.map(({ nome }) => nome);
console.log(nome);

//Remova apenas a chave "nome" do objeto
const idades = pessoas.map(obj => ({ idade: obj.idade }));
console.log(idades);

//adicione uma chave de id em cada objeto
const objetosComIds = pessoas.map((obj, indice) => {
  obj.id = indice + 1;
  return obj;
}) 
console.log(objetosComIds);