function Soma() {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let conta = parseFloat(numero1) + parseFloat(numero2);

    // float é tipo de dados decimal --> 10.5
    // int tipo de dado inteiro --> 10

    //document.getElementById("resultado").innerText = conta;

    if (conta == 0) {
        document.getElementById("resultado").innerText = "Neutro";
    }
    else if (conta > 0) {
        document.getElementById("resultado").innerText = "Positivo";
    }
    else {
        document.getElementById("resultado").innerText = "Negativo";
    }
}


