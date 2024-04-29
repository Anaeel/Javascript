
function exibirmensagem1(mensagem) {
    alert(mensagem);
}

function exibirmensagem2(mensagem){
var numero= prompt("Digite um número:");
alert("O número informado foi: "+numero);
}

function exibirmensagem3(mensagem){
    var num1 = persefloat(prompt("Digite o primeiro número:"));
    var num2 = persefloat(prompt("Digite o segundo número:"));
    var soma= num1+num2;
    alert( "A soma de" +num1 + "e" + num2 + "é igual a " + soma +".")
   

}
function exibirmensagem4(mensagem){
    var nota1 = parseFloat(prompt("Digite a nota do primeiro bimestre:"));
                var nota2 = parseFloat(prompt("Digite a nota do segundo bimestre:"));
                var nota3 = parseFloat(prompt("Digite a nota do terceiro bimestre:"));
                var nota4 = parseFloat(prompt("Digite a nota do quarto bimestre:"));
                var media = (nota1 + nota2 + nota3 + nota4) / 4;
                alert("A média das notas é: " + media);

}
function exibirmensagem5(mensagem){
    var metros = parseFloat(prompt("Digite o valor em metros:"));
                var centimetros = metros * 100;
                alert(metros + " metros é igual a " + centimetros + " centímetros.");

}

function exibirmensagem6(mensagem){
    var raio = parseFloat(prompt("Digite o raio do círculo:"));
                var area = Math.PI * Math.pow(raio, 2);
                alert("A área do círculo é: " + area.toFixed(2));
}

function exibirmensagem7(mensagem){
    var lado = parseFloat(prompt("Digite o lado do quadrado:"));
                var area = Math.pow(lado, 2);
                var dobroArea = 2 * area;
                alert("O dobro da área do quadrado é: " + dobroArea);
}

function exibirmensagem8(mensagem){
    var valorHora = parseFloat(prompt("Digite o valor que você ganha por hora:"));
                var horasTrabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas no mês:"));
                var salario = valorHora * horasTrabalhadas;
                alert("O total do seu salário no mês é: R$ " + salario.toFixed(2));
}

function exibirmensagem9(mensagem){
    var fahrenheit = parseFloat(prompt("Digite a temperatura em graus Fahrenheit:"));
                var celsius = 5 * ((fahrenheit - 32) / 9);
                alert(fahrenheit + "°F é igual a " + celsius.toFixed(2) + "°C.");

}

function exibirmensagem10(mensagem){
    var celsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));
var fahrenheit = (celsius * 9/5) + 32;
alert(celsius + "°C é igual a " + fahrenheit.toFixed(2) + "°F.");
}






