// 1.Calcule a média de diversas notas digitadas pelo usuario

/*var media, n1, n2, n3, n4;

n1 = prompt ("Informe N1: ");
n1 = eval (n1);

n2 = prompt ("Informe N2: ");
n2 = eval (n2);

n3 = prompt ("Informe N3: ");
n3 = eval (n3);

n4 = prompt ("Informe N4: ");
n4 = eval (n4);

console.log(
    `A primeira nota é: ${n1}\n A segunda nota é: ${n2}\n A terceira nota é: ${n3}\n A quarta nota é: ${n4}
`)

media = (n1 + n2 + n3 + n4) / 4;

console.log(`a média das notas é: ${media}`)

if(media >= 7)
{
    alert("Aprovado com a média de notas: " + parseFloat(media))
} else {
    alert("Reprovado com a média de notas: " + media)
}*/



/* 2. Faça um programa que entre com cinco números e imprima o quadrado de cada numero 
    - minha ideia: pegar os dados do usuário; armazenar; limpar o campo e depois calcular
*/

/* utilizando a ideia do professor, do exerecicio 1, só que no 2*/

/*function quadradoNum(){
    let num = document.getElementById("num").value;
    let numlist = num.split(','); //separador entre os dados do array
    let numqtdd = numlist.length;

    //let total = 0;
    let total;
    //let valor = 0;
    let quadrado = 0;

    for(let index = 0; index < numlist.length; index ++){

        //total += parseFloat(numlist[index]);

        total = (parseFloat(numlist[index]) * parseFloat(numlist[index]));
         
        quadrado += (`\nO número: ` + numlist[index] +  ` tem como valor quadrado: ${total}` );
    }

    /*valor = (total / numqtdd);
    alert("Valor final é: " + valor)*/

    /*alert(quadrado);
       
    return
}*/



    
/* 3. Peça ao usuário para digitar 5 números em uma caixa de texto. Verifique qual é o maior número exiba-o */


/*function maiorNum(){
    var n1, n2, n3, n4, n5;
   
    n1 = parseInt(document.getElementById("n1").value);
    n2 = parseInt(document.getElementById("n2").value);
    n3 = parseInt(document.getElementById("n3").value);
    n4 = parseInt(document.getElementById("n4").value);
    n5 = parseInt(document.getElementById("n5").value);

    var arr = [n1,n2,n3,n4,n5];

    //console.log("os número inseridos são: " + arr);
    alert("os números inseridos foram: " + arr);

    //console.log("o maior número é: " + Math.max.apply(Math, arr)); //finalmente consegui o que queria, resolver o exercicio em apenas uma linha
    alert(`o maior número é ${Math.max.apply(Math, arr)}`)

}*/






/* 4. Peca ao usuario para digitar varias idades. Exiba quantas pessoas são maior de idade (18 anos) e quantas são menores.
*/

/* 5. Crie um programa que entre com os dados de altura e sexo de 5 pessoas. Imprima na tela quantas pessoas são do sexo feminino. Mostre também qual é a maior altura e se essa altura é de um homem ou uma mulher.
*/

/* 6. Peça ao usuario para digitar varios nomes. Exiba na tela os nomes digitados, porem de maneira invertida (do ultimo para o primeiro).
*/

/* 7. Peça para o usuario digitar uma data. Exiba separadamente o dia, o mes e o ano.
*/