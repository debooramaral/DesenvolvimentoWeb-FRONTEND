var variavel1 = 'Empresa One'
//console.log('Meu negócio é novo no mercado, e se chama: ' + variavel1)

//alert('Mensagem: ' + variavel1)


function returnFruts(){

    var variavel2 = 'uvaaaaaa'

    if(variavel2 === 'uvaaaaaa'){
        var variavel2 = 'morango';
        //console.log('Dentro do if: ' + variavel2)
    }

    //console.log('Fora do if: ' + variavel2);

}
returnFruts();
//alert('o VAR sobre-escreve as variaveis declaradas')

function doces(){

    let variavel3 = 'pirulito';

    if(variavel3 === 'pirulito'){
        let variavel3 = 'chocolate';
        //console.log('No escopo do código temos: ' + variavel3)
    }

    //console.log('Após o escopo do código, temos: ' + variavel3)
}
doces();
//alert('o LET é particular de cada escopo/bloco de código')

const RG = '123456';
//console.log(RG)
//alert(RG)

const expr = 'Mamão';

// switch(expr){
//     case 'Laranja':
//         console.log('Laranja é R$ 0.59 centavos');
//         break;
//     case 'Manga':
//     case 'Mamão':
//         console.log('Manga e Mamão custam R$ 2.79 reais');
//         break;
//     default:
//         console.log('Desculpe, estamos sem ' + expr)
// }

var foo = 10;

var output = 'Output: ';

/*switch(foo){
    case 10: 
        output += 'Então ';
    case 1:
        output += 'Qual ';
        output += 'É ';
    case 2:
        output += 'O Seu ';
    case 3:
        output += 'Nome ';
    case 4:
        output += '?';
        alert(output);
        break
    case 5:
        output += '!';
        alert(output);
        break
    default:
        alert('Favor escolher um número de 0 a 6 !');
}*/

var passo;

/*for (passo = 0; passo < 5; passo ++){
    //executa 5 vezes, com os valores de passos de 0 a 4.
    console.log('Ande um passo para o leste ' + passo)
}*/

var i = 0

/*do {
    i += 1;
    console.log(i);
} while (i<5);*/

n = 0;
x = 0;

while (n < 3){
    n++; //acrescenta 1
    console.log('esse é o n ' + n)
    x += n; //valor que ja tem + valor do n
    console.log('esse é o x ' + x)
}


