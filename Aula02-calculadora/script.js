primeiroValor = parseFloat(prompt("Digite o primeiro valor: "))
segundoValor = parseFloat(prompt("Digite o segundo valor: "))



operacao = prompt("Qual e a operação? | / | * | + | - |")

if (operacao == "/"){
    resultado =  primeiroValor / segundoValor
    document.write("<h2>" + primeiroValor + " / " + segundoValor +  " = " + resultado + "</h2>")
}else if(operacao == "*"){
    resultado =  primeiroValor * segundoValor
    document.write("<h2>" + primeiroValor + " * " + segundoValor +  " = " + resultado + "</h2>")
}else if(operacao == "+"){
    resultado =  primeiroValor + segundoValor
    document.write("<h2>" + primeiroValor + " + " + segundoValor +  " = " + resultado + "</h2>")
}else if(operacao == "-"){
    resultado =  primeiroValor - segundoValor
    document.write("<h2>" + primeiroValor + " - " + segundoValor +  " = " + resultado + "</h2>")
}else{
    alert("Digite um valor valido de 1 a 4 ")
}
