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

document.addEventListener("submit", function (evento) {

    //Previne de passar para a url os inputs das caixas
    evento.preventDefault()

    //Fazer com que todo o submit seja tratado apenas pelo EventListener
    evento.stopPropagation()

    let formulario = document.getElementById('formulario-01')
    let dadosFormulario = new FormData(formulario);

    
    //Vai passar os dados para o objeto
    let objeto = {}
    let notas = []

    //Laço para percorrer os inputs e inserí-los do objeto em notas
    for (let key of dadosFormulario.keys()) {

        objeto[key] = dadosFormulario.get(key)

        //Adicionando os itens do objeto no array notas
        notas.push(parseInt(objeto[key]))

    }

    console.log(objeto)

    texto = aprovacao(notas)
    document.getElementById('resultado').innerHTML = texto
})