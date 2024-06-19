// cria um tempo em segundo aleatorio 
function tempo(min, max){
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random()*(max - min) + min);
}

//Simulado a busca de dados de uma API
function espera(msg, tempo){
  return new Promise((resolve, reject)=>{
    //rejeição caso ocorra algum erro na promisse
    if(typeof msg !== 'string') reject('mensagem inválida');

    setTimeout(()=>{
      //resposta da promisse
      resolve(msg);
    }, tempo);
  })
}

espera('Conectando à base de dados...', tempo(1, 3))
  .then(resposta => {
    console.log(resposta);
    return espera('Buscando dados...', tempo(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
    //o tipo da msg não é uma string, logo, o script será interrompido e lançado ao bloco catch
    return espera(9273128, tempo(1, 3));
  }).then(resposta => {
    console.log(resposta);
  }).then(()=>{
    console.log('Exibindo dados...');
  })
  .catch(e =>{
    //lança a mensagem de erro
    console.log('ERRO:', e);
  });

