var lista = []
soma = 0
function adicionar() {
    document.getElementById('resultado').innerHTML = ''
    var lista2 = document.getElementById('lista')
    var numero = Number(document.getElementById('numero').value)
    if (numero > 100 || numero <= 0 || lista.includes(numero)) {
        window.alert('Este número é inválido [maior que 100, igual ou menor a zero, ou já foi adicionado]')
    } else {
        var item = document.createElement('option')
        item.text = `Valor ${numero} adicionado.`
        lista2.appendChild(item)
        lista.push(numero)
        soma += numero
    }   
}


function finalizar() {
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = ''
    if (lista.length == 0) {
        window.alert('A lista ainda está vazia.')
    } else {
        lista.sort((a, b) => a-b)
        resultado.innerHTML += `<p>Ao todo, temos ${lista.length} número(s) cadastrado(s).</p>`
        resultado.innerHTML += `<p>O maior valor informado foi ${lista[lista.length - 1]}</p>`
        resultado.innerHTML += `<p>O menor valor informado foi ${lista[0]}</p>`
        resultado.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        resultado.innerHTML += `<p>A média dos valores é ${soma/lista.length}</p>`
    }
}

function limparLista() {
    let lista = document.getElementById('lista')
    lista.innerHTML = ''
    lista.style.width = '150px'
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = ''
    
}