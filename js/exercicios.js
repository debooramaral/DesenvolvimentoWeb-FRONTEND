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

function quadradoNum(){
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

    alert(quadrado);
       
    return
}
    
