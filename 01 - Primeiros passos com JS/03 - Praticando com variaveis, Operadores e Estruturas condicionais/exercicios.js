/* Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo. 
Média = (nota 1 + nota 2 + nota 3) / 3;
Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre; 
*/

/* 
const nota1 = 8;
const nota2 = 8;
const nota3 = 8;
const media = (nota1 + nota2 + nota3) / 3;
console.log(media);
if (media < 5) {
  console.log("Você está reprovado");
} else if (media >= 5 && media <= 7) {
  console.log("Você está de recuperação");
} else {
  console.log("Parabéns. Você passou para o próximo semestre");
}
*/

/* 
O IMC - Indíce de massa corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 
Fórmula do IMC:
IMC = peso / (altura * altura)
Elabore um algoritmo que dado o peso e a altura de um aldulto, mostre sua condição de acordo com a tabela abaixo.
IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade grave;
*/

/*
const peso = 74.7;
const altura = 1.69;
const imc = peso / Math.pow(altura, 2);
if (imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
  console.log("Peso normal");
} else if (imc >= 25 && imc < 30) {
  console.log("Acima do peso");
} else if (imc >= 30 && imc < 40) {
  console.log("Obeso");
} else {
  console.log("Obesidade grave");
}
*/

/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
Código de condição de pagamento:
1. À vista débito, recebe 10% de desconto;
2. À vista no dinheiro ou PIX, recebe 15% de desconto;
3. Parcelado em duas vezes, preco normal de etiqueta sem juros;
4. Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/


const preco_etiqueta = 100;
const forma_de_pagamento = 4;

if (forma_de_pagamento === 1) {
  console.log(preco_etiqueta - preco_etiqueta * 0.1);
} else if (forma_de_pagamento === 2) {
  console.log(preco_etiqueta - preco_etiqueta * 0.15);
} else if (forma_de_pagamento === 3) {
  console.log(preco_etiqueta);
} else {
  console.log(preco_etiqueta + preco_etiqueta * 0.1);
}
