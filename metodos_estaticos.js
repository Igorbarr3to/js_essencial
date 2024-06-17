class ControleRemoto {
  constructor(tv){
    this.tv = tv;
    this.volume = 0;
  }

  //Método de instância
  aumentarVolume(){
    this.volume === 100 ? this.volume : this.volume += 2;
  }
  
  diminuirVolume(){
    this.volume === 0 ? this.volume : this.volume -= 2;
  }

  //Método estático - método referente à classe ControleRemoto em si, não as suas instâncias
  //Métodos estáticos não têm acesso aos dados da instâncias
  static trocaPilha(){
    console.log('Pilha trocada')
  }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.diminuirVolume();
controle1.diminuirVolume();
console.log(controle1)

ControleRemoto.trocaPilha();