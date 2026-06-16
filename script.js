function calcularSubtraçao(){
    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);

    let resultado = n1 - n2;

    document.getElementById('resultado').innerHTML = resultado;
}

function calcularSoma(){

    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);

    let resultado = n1 + n2;

    document.getElementById('resultado').innerHTML = resultado;
}

function calcularMultiplicacao({

    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);

    let resultado = n1 * n2;
    document.getElementById('resultado').innerHTML = resultado;
    
}

function calcularDivisao(){
    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);

    let resultado = n1 / n2;

    if (n2 == 0) {
        alert('Impossível divisão por 0')
        return;
    }
    
    document.getElementById('resultado').innerHTML = resultado;
    
}
function limparResultado(){
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    document.getElementById('resultado').innerHTML = '';
}
