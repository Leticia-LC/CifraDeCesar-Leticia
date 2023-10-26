function principal() {
    const mensagem = document.getElementById("mensagem").value;
    const operacao = document.querySelector('input[name=operacao]:checked').value;
    const chaveInput = document.getElementById("chave").value;
    const chave = analisarChaveCifra(chaveInput);
    
    const resultado = executarCifraCesar(mensagem, chave, operacao);
    
    document.getElementById("saida").value = resultado;
}

function analisarChaveCifra(chaveInput) {
    if (isNaN(chaveInput)) {
        return chaveInput.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    } else {
        return parseInt(chaveInput);
    }
}

function executarCifraCesar(mensagem, chave, operacao) {
    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    return mensagem.replace(/[a-zA-Z]/g, function (char) {
        let base = char === char.toLowerCase() ? alfabeto : alfabeto.toLowerCase();
        let index = base.indexOf(char);
        
        if (operacao === 'cifrar') {
            index = (index + chave) % base.length;
        } else if (operacao === 'decifrar') {
            index = (index - chave + base.length) % base.length;
        }
        
        return base[index];
    });
}

document.getElementById("botaoExecutar").addEventListener("click", principal);

