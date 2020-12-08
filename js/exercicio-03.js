function Trocar() {

    let numero = document.getElementById("numero").value;

    if (numero > 100) {  
        document.getElementById("mensagem").innerText = "Maior que 100";
    }
    else if (numero == 100) {
        document.getElementById("mensagem").innerText = "Igual á 100"
    }
    else {
       document.getElementById("mensagem").innerText = "Menor que 100";
    }
}