// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(a , b) {
    return a + b;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var $invoke = soma(5, 2) + 5;
console.log($invoke); // verificar a variavel $invoke

// Qual o valor atualizado dessa variável?
console.log($invoke); // 12

// Declare uma nova variável, sem valor.
var novaVariavel;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function addValor() {
    novaVariavel = 25;
    return 'O valor da variável agora é ' + novaVariavel;
}

// Invoque a função criada acima.
addValor();

// Qual o retorno da função? (Use comentários de bloco).
console.log(addValor()); 
/* Adiciona o valor 25 a nova variavel.
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplicacao(a, b, c) {
    if (a === undefined || b === undefined || c === undefined){
        return 'Preencha todos os valores corretamente!';       
    } else {
        return (a * b * c) + 2;         
    }    
}

// Invoque a função criada acima, passando só dois números como argumento.
multiplicacao(3, 4);


// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
console.log(multiplicacao(3, 4)); 
/*Mostra o valor retornado passando apenas 2 argumentos que será 
'Preencha todos os valores corretamente!'.*/

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplicacao(2, 3, 4);


// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
console.log(multiplicacao(2, 3, 4)); //Mostra o valor 26 retornado passando todos os argumentos (a, b, c) e somando 2.

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function testeFuncao(a, b, c) {
    if (a !== undefined && b === undefined && c === undefined) {
        return a;        
    } else if (a !== undefined && b !== undefined && c === undefined) {
        return a + b;
    } else if (a !== undefined && b !== undefined && c !== undefined) {
        return (a + b) / c;
    } else if (a === undefined && b === undefined && c === undefined) {
        return false;
    } else {
        return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

// Para exemplificar adotei os valores 1, 2 e 3 respectivamente para os argumentos a, b, c.
testeFuncao();
console.log(testeFuncao()); // Invocação sem argumentos retorna false.

testeFuncao(1);
console.log(testeFuncao(1)); // Invocação com 1 argumento retorna o valor do argumento.

testeFuncao(1, 2);
console.log(testeFuncao(1, 2)); // Invocação com 2 argumentos a soma dos argumentos.

testeFuncao(1, 2, 3);
console.log(testeFuncao(1, 2, 3)); /* Invocação com 3 argumentos retorna a soma do primeiro e segundo argumento e
divide pelo terceiro argumento.
*/