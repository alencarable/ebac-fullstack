function calcularMedia (notas) {

    let soma = 0

    for (var c = 0; c < notas.length; c++) {
        soma += notas[c]
    }

    let media = soma / notas.length

    return media
}

function aprovacao (notas) {

    let media = calcularMedia (notas)

    let condicao = media >= 7.5 ? "aprovado" : "reprovado"

    return "Média: " + media + " - Resultado: " + condicao
}

console.log(aprovacao([3, 5, 8, 10]))
console.log(aprovacao([10, 10, 4, 6]))