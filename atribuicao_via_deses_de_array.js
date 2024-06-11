function putLine(){
  console.log("-----------------------------------------");
}

const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
let [ um, dois, tres, ...resto ] = numeros;
// o ... (rest operator) pode ser chamado de "spread operator" de acordo com o contexto de seu uso

console.log(um, dois, tres);
console.log(resto);
putLine();


//pulando valores
let [one, , three, , five, , seven] = numeros;
console.log(one, three, five, seven);
putLine();

//desestruturação em matriz
//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numbers = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [ ,[, , six]] = numbers;
console.log(six);

//alternativa mais simples: divir por listas. Ex:
const [list1, list2, list3] = numbers;
console.log(list3[2]); 