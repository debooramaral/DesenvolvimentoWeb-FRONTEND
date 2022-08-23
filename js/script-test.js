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

