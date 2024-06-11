//declaração da função (Function hoisting)
//engine do js eleva a função para o topo do script
falaOi();
function falaOi(){
  console.log("Oi");
};

//First-class objects (objetos de primeira classe)
//Function expression, a variável recebe uma função e agora pode ser usada como função
const souUmDado = function() {
  console.log('Sou um dado');
};

function executaFuncao(funcao){
  funcao();
};
executaFuncao(souUmDado);

//Arrow function
//Declaração de função mais curta
const arrowFunction = () => {
  console.log('Sou uma arrow function');
};
arrowFunction();

//Dentro de um objeto
const obj = {
  falar(){
    console.log('Falando....')
  }
}
obj.falar();