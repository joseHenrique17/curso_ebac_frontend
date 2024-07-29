function validarMaiorQue(primeiroNumero,segundoNumero){
    return primeiroNumero > segundoNumero
}


document.getElementById('envio-formulario').addEventListener('click', function(e) {
    e.preventDefault()
    
    const primeiroNumero = Number(document.getElementById('numero-1').value)
    const segundoNumero = Number(document.getElementById('numero-2').value)
    
    const mensagemErro = document.querySelector('.mensagem-erro')
    const mensagemSucesso = document.querySelector('.mensagem-sucesso')
    
    if(validarMaiorQue(primeiroNumero,segundoNumero)){
        mensagemErro.style.display = 'none'
        const Sucesso = `Correto! o valor de ${primeiroNumero} é maior que o valor de ${segundoNumero}.`
        mensagemSucesso.innerHTML = Sucesso
        mensagemSucesso.style.display = 'block'
    }
    else {
        mensagemSucesso.style.display = 'none'
        const Erro = `Incorreto! o valor de ${primeiroNumero} é menor que o valor de ${segundoNumero}.`
        mensagemErro.innerHTML = Erro
        mensagemErro.style.display = 'block'
    }
})