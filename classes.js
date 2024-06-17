class Pessoa {
  constructor(nome, sobrenome){
    this.nome = nome,
    this.sobrenome = sobrenome
  }

  falar(){
    console.log(`${this.nome} está falando`)
  }
  
  comer(){
    console.log(`${this.nome} está comendo`)
  }
}

const p1 = new Pessoa('Igor', 'Vinicius');
console.log(p1)
p1.falar()