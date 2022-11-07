/* 
function motivacional() {
  console.log("Vá em frente!");
}
motivacional();
/*
/* 
function sayMyName(name) {
  console.log("Your name is " + name);
}
sayMyName("Tarcísio");
/*
/*
function nome_do_gato(nome) {
  console.log("O nome do gato é " + nome);
}
nome_do_gato("Surpresa");
*/

/* 
function quadrado(valor) {
  return valor * valor;
}
const quadrado_de_dois = quadrado(15);
console.log(quadrado_de_dois);
function incrementar_juros(valor, percentual_juros) {
  const valor_de_acrescimo = (percentual_juros / 100) * valor;
  return valor + valor_de_acrescimo;
}
console.log(incrementar_juros(100, 10));
console.log(incrementar_juros(100, 15));
function main() {
  console.log("Programa principal");
}
main();
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
- Acima de 40 Obesipdade grave;
*/

/*
function calcular_imc(peso, altura) {
  return peso / Math.pow(altura, 2);
}
function classificar_imc(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 25) {
    return "Peso normal";
  } else if (imc >= 25 && imc < 30) {
    return "Acima do peso";
  } else if (imc >= 30 && imc < 40) {
    return "Obeso";
  } else {
    return "Obesidade grave";
  }
}
function main() {
  const peso = 74.7;
  const altura = 1.69;
  const imc = calcular_imc(peso, altura);
  console.log(classificar_imc(imc));
}
main();
*/

/*
function esrevaNome(nome) {
  console.log("Meu nome é " + nome);
}
esrevaNome("Tarcísio");
esrevaNome("Barbosa");
function verificaMaioridade(idade) {
  if (idade < 18) {
    console.log("Menor de idade");
  } else {
    console.log("Maior de idade");
  }
}
verificaMaioridade(18);
*/

/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
Código de condição de pagamento:
1. À vista débito, recebe 10% de desconto;
2. À vista no dinheiro ou PIX, recebe 15% de desconto;
3. Parcelado em duas vezes, preco normal de etiqueta sem juros;
4. Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

function aplicar_desconto(valor, desconto) {
  return valor - valor * (desconto / 100);
}

function aplicar_juros(valor, juros) {
  return valor + valor * (juros / 100);
}

const preco_etiqueta = 100;
const forma_de_pagamento = 4;

if (forma_de_pagamento === 1) {
  console.log(aplicar_desconto(preco_etiqueta, 10));
} else if (forma_de_pagamento === 2) {
  console.log(aplicar_desconto(preco_etiqueta, 15));
} else if (forma_de_pagamento === 3) {
  console.log(preco_etiqueta);
} else {
  console.log(aplicar_juros(preco_etiqueta, 10));
}
