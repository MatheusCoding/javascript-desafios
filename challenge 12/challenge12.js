(function(){
/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
var person = {
    name: 'Matheus',
    lastname: 'Dias',
    age: 27
};
console.log( 'Propriedades de "person":', person );

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log(Object.keys(person));

/*
Crie um array vazio chamado `books`.
*/
var books = [];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
books.push({name: 'Em Busca do Tempo Perdido', pages: 2472}, {name: 'Ulysses', pages: 550}, {name: 'Dom Quixote', pages: 126} );
console.log(books);

/*
Mostre no console todos os livros.
*/
var listBooks = [];
for (var prop in books) {
  listBooks.push(books[prop].name);
}
console.log( '\nLista de livros:', listBooks.join(', ') );

/*
Remova o último livro, e mostre-o no console.
*/
var lastBook = listBooks.pop();
console.log( '\nLivro que está sendo removido:', lastBook );

/*
Mostre no console os livros restantes.
*/
console.log( '\nAgora sobraram somente os livros:', listBooks.join(', ')  );

/*
Converta os objetos que ficaram em `books` para strings.
*/
var str = JSON.stringify(books);

/*
Mostre os livros nesse formato no console:
*/
console.log( '\nLivros em formato string:', str  );

/*
Converta os livros novamente para objeto.
*/
var obj = JSON.parse(str);
console.log( '\nAgora os livros são objetos novamente:', obj );

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
for( var prop in books){
    console.log(books[prop]);
}

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var myName = ['M', 'a', 't', 'h', 'e', 'u', 's'];

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log( '\nMeu nome é:', myName.join('') );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
var invert = myName.reverse();
console.log( '\nMeu nome invertido é:', invert.join('')  );

/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
var alphabetic = myName.sort();
console.log( '\nAgora em ordem alfabética:', alphabetic.join('') );

}())