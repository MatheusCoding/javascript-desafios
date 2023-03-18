/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arrayQualquer = [1, 'Matheus', null, { a: 1}, function(){}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arg) {
    return arg;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction(arrayQualquer)[1];
console.log(myFunction(arrayQualquer)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function pegarValor(arr, num) {
    return arr[num];    
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrayDe5Valores = ['Matheus', 2.2, true , [1, 2, 3, 'Matheus'] ,{propriedade: 1, proriedade2: 'Matheus'}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(pegarValor( arrayDe5Valores, 0 ));
console.log(pegarValor( arrayDe5Valores, 1 ));
console.log(pegarValor( arrayDe5Valores, 2 ));
console.log(pegarValor( arrayDe5Valores, 3 ));
console.log(pegarValor( arrayDe5Valores, 4 ));


/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nomeLivro) {
    var todosLivros = {
        'Segredos do Ninja': {
            quantidadePaginas: 986,
            autor: 'Matheus',
            editora: 'VsCode'
        },
        'Introdução ao HTML5': {
            quantidadePaginas: 353,
            autor: 'Matheus & Sei lá',
            editora: 'Braba'
        },
        'Smashing CSS': {
            quantidadePaginas: 347,
            autor: 'Matheus Dark',
            editora: 'Brabíssima'
        }
    };
    return !nomeLivro ? todosLivros : todosLivros[ nomeLivro ];
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

console.log('O livro Introdução ao HTML5 tem ' + book( 'Introdução ao HTML5' ).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var bookname = ['Segredos do Ninja', 'Introdução ao HTML5', 'Smashing CSS'] // para reutilizar

console.log('O autor do livro '+ bookname[2] + ' é ' + book( bookname[2] ).autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + bookname[0] + ' foi publicado pela editora ' + book(bookname[0]).editora);