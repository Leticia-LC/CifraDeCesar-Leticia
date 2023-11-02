const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const botaoEnviar = document.querySelector('.btn');
const textareaSaida = document.querySelector('#textoSaida');

botaoEnviar.addEventListener('click', () => {
    const textoEntrada = document.querySelector('#textoEntrada').value;
    const chaveCifra = parseInt(document.querySelector('#chaveCifra').value);
    const metodoCesar = document.querySelector('input[type="radio"]:checked').value;
    let textoCifrado = '';

    for (let i = 0; i < textoEntrada.length; i++) {
        const caractere = textoEntrada[i];

        if (caractere.match(/[A-Za-z]/)) {
            const eMinuscula = caractere === caractere.toLowerCase();
            const indiceCaractere = alfabeto.indexOf(caractere.toUpperCase());
            let novoIndice;

            if (metodoCesar === 'cripto') {
                novoIndice = (indiceCaractere + chaveCifra) % 26;
            } else {
                novoIndice = (indiceCaractere - chaveCifra) % 26;
                if (novoIndice < 0) {
                    novoIndice += 26;
                }
            }

            const novoCaractere = eMinuscula ? alfabeto[novoIndice].toLowerCase() : alfabeto[novoIndice];
            textoCifrado += novoCaractere;
        } else {
            textoCifrado += caractere;
        }
    }

    textareaSaida.value = textoCifrado;
});