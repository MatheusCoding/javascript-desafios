/*
Crie um array com 5 items (tipos variados).
*/
var myArray = [1, null, true, ['Matheus', 1, null], {tenis: 'azul', sola: 'sim'}];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item){
    
    myArray.push(item);    
    return myArray;
}

console.log(addItem('agua'));

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log(addItem(['agua', {piscina: 'cheia', pessoas: 2}, true]));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/

console.log( 'O segundo elemento do segundo array é ', myArray[6][1]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem '+ (myArray.length) + ' itens.');

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem ' + (myArray[3].length) + ' itens.');

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/

var contador = 10;
var pares = [];
while(contador <= 20){
    
    contador % 2 === 0 ? pares.push(contador) : '';
    contador++;
}
console.log( 'Números pares entre 10 e 20: \n' + pares );

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/

var contador = 10;
var impares = [];
while(contador <= 20){
    
    contador % 2 === 1 ? impares.push(contador) : '';
    contador++;
}
console.log( 'Números ímpares entre 10 e 20: \n' + impares );

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/

for(var contador = 100, pares = []; contador <= 120 ; contador++){
    contador % 2 === 0 ? pares.push(contador) : '';
};
console.log( 'Números pares entre 100 e 120: \n ' + pares );


for(var contador = 110, impares = [] ; contador <= 125 ; contador++ ){
    contador % 2 === 1 ? impares.push(contador) : '';
}
console.log( 'Números ímpares entre 111 e 125: \n' + impares );
