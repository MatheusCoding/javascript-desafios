/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Brasileirão';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Grêmio', 'Flamengo', 'Vasco', 'Santos', 'Internacional'];

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(posicao) {
      

    if (posicao > 5 || posicao < 1 ) {
        return 'Não temos a informação do time que está na posição ' + posicao + '.';
    } else {
        return 'O time que está em ' + posicao + 'º lugar é o ' + teams[posicao - 1] + '.';
    }
};

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/

console.log(showTeamPosition(1));
console.log(showTeamPosition(2));
console.log(showTeamPosition(3));
console.log(showTeamPosition(4));
console.log(showTeamPosition(5));
console.log(showTeamPosition(0));
console.log(showTeamPosition(6));

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var contador = 20;

while(contador < 30) {
    console.log(contador++);
}

console.log(contador);

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/

function convertToHex(cor){
    var hexadecimal;

    if(!cor) return 'Por favor insira uma cor válida';

    switch(cor){
        
        case 'Azul':
            hexadecimal = '#0000FF';
            break;            
        case 'Vermelho':
            hexadecimal = '#FF0000';
            break;            
        case 'Verde':
            hexadecimal = '#008000';
            break;      
        case 'Amarelo':
            hexadecimal = '#FFFF00';
            break;            
        case 'Roxo':
            hexadecimal = '#993399';
            break;                    
        default:
            return 'Não temos o equivalente hexadecimal para ' + cor + '.';
    }
    return 'O hexadecimal para a cor ' + cor + ' é ' + hexadecimal;
};

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log(convertToHex());
console.log(convertToHex('Azul'));
console.log(convertToHex('Vermelho'));
console.log(convertToHex('Rosa'));
console.log(convertToHex('Cinza'));
console.log(convertToHex('Verde'));
console.log(convertToHex('Amarelo'));
console.log(convertToHex('Roxo'));
console.log(convertToHex('Preto'));
