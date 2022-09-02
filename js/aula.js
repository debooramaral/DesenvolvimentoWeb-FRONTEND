var frutas = ['Maça', 'Banana']

console.log(frutas.length) //verifica quantos elementos na minha lista 

frutas.forEach(function(item, indice){ // estrutura que executa uma funçao em cada item da lista

    console.log(item, indice); // mostra no console o que é o item e sua descricao

    //exemplo de funcao que desenvolvo na aplicacao
    if(indice == 0){
        console.log("teste");
    }else {
        console.log("teste 2");
    }
});

//outro jeito 

/*var index = 0;

frutas.forEach(element => {
    console.log(element + " - " + index);
    index++;
})*/

/*adicionando ao ultimo da lista*/
frutas.push('Laranja')
console.log(frutas)

/* removendo o ultimo item */
//frutas.pop('Laranja')
console.log(frutas)

/* remover primeiro item da lista */
//frutas.shift('Maca')
console.log(frutas)

/* adicionar ao inicio */
frutas.unshift('Morango')
console.log(frutas)

/* procurar indice */
var procura = frutas.indexOf('Banana')
console.log(procura)

/* remover item da posicao determinada */
var remove = frutas.slice(2, 3)
console.log(remove)
console.log(frutas)