export function tempo(min=0, max=3){
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random()*(max - min) + min);
}

//Simulado a busca de dados de uma API
export function espera(msg, tempo){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      //rejeição caso ocorra algum erro na promisse
      if(typeof msg !== 'string') {
        reject('mensagem inválida');
        return;
      };
      //resposta da promisse
      resolve(msg.toUpperCase());
    }, tempo);
  })
}

// espera('Fase 1', tempo())
//   .then(fase => { 
//     console.log(fase)
//     return espera('Fase 2', tempo())
//   })
//   .then(fase => {
//     console.log(fase);
//     return espera('Fase 3', tempo())
//   })
//   .then(fase => console.log(fase))
//   .catch(err => console.log(err))

async function executa(){
  try {
    const fase1 = await espera('Fase 1', tempo());
    console.log(fase1);
  
    const fase2 = await espera(2, tempo());
    console.log(fase2);
  
    const fase3 = await espera('Fase 3', tempo());
    console.log(fase3);

    console.log('Terminamos na: ', fase3);
  }
  catch(err) {
    console.log(err)
  }
}
executa();

/*
  Estados das promises:
  - pending -> pendente;
  - fullfilled -> resolvida
  - rejected -> rejeitada
*/ 