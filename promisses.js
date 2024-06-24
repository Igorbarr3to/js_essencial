// cria um tempo em segundo aleatorio 
export function tempo(min, max){
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
      resolve(msg.toUpperCase().concat(' - passei na promise'));
    }, tempo);
  })
}

// espera('Conectando à base de dados...', tempo(1, 3))
//   .then(resposta => {
//     console.log(resposta);
//     return espera('Buscando dados...', tempo(1, 3));
//   })
//   .then(resposta => {
//     console.log(resposta);
//     //o tipo da msg não é uma string, logo, o script será interrompido e lançado ao bloco catch
//     return espera(9273128, tempo(1, 3));
//   }).then(resposta => {
//     console.log(resposta);
//   }).then(()=>{
//     console.log('Exibindo dados...');
//   })
//   .catch(e =>{
//     //lança a mensagem de erro
//     console.log('ERRO:', e);
//   });



//Métodos para Promises
// const promises = [
//   espera('Promise 1', tempo(1,5)),
//   espera('Promise 2', tempo(1,5)),
//   espera('Promise 3', tempo(1,5)),
//   espera(1000, tempo(1,5)),
// ];

//Promise.all() -> Espera até que todas as promises do array
//sejam resolvidas e só entam lança o resolve das promises,
//caso alguma promise caisa em reject, todas as promieses serão
//interrompidas
// Promise.all(promises)
// .then(valor => console.log(valor))
// .catch(error => console.log(error));

// //Promise.race() -> retorna a primeira promise que for resolvida
// Promise.race(promises)
// .then(valor => console.log(valor))
// .catch(error => console.log(error));

// function baixaPagina(){
//   const emCache = false;

//   if(emCache){
//     return Promise.resolve('Página em cache');
//   }
//   else{
//     return espera('Página baixada', 3000);
//   }
// }

// baixaPagina()
//   .then(dadosPagina => console.log(dadosPagina))
//   .catch(err => console.log(err));

