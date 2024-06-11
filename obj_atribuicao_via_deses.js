const pessoa = {
  nome: 'Igor',
  sobrenome: 'Barreto',
  idade: '19',
  endereco: {
    rua: 'Tancredo Neves' ,
    numero: 3907
  }
};
//notação de .
console.log(pessoa.nome);

//atribuiçã usando variável:
const name  = pessoa.nome;
console.log(name);

//atribuição por desestruturação:
const { nome, sobrenome, idade } = pessoa;
console.log(nome, sobrenome);  

//também é possível "setar" valores padrão caso algum valor não exista:
const { endereco: { rua, numero, bairro="não informado" } } = pessoa;
console.log(rua, numero, bairro);