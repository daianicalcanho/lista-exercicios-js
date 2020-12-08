function Trocar() {

    let idade = document.getElementById("idade").value;

    if (idade >= 18) {  
        document.getElementById("mensagem").innerText = "Maior de Idade";
    }
    else {
       document.getElementById("mensagem").innerText = "Menor de idade";
    }
}