function calcularRank(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    }else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    }else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    }else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    }else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    }else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendario";
    }else{
        nivel = "Imortal";
    } 
    
    return `O Herói tem de saldo de **${saldoVitorias}** vitorias está na patente **${nivel}**`;
}

function mostrarRank() {
    const vitorias = Number(document.getElementById("vitorias").value);
    const derrotas = Number(document.getElementById("derrotas").value);

    const resultadoTexto = calcularRank(vitorias, derrotas);

    const resultado = document.getElementById("resultado");
    const rankBox = document.getElementById("rankBox");

    resultado.innerText = resultadoTexto;

    // Remove classes antigas
    rankBox.className = "rank-box";

    if (vitorias < 10) rankBox.classList.add("ferro");
    else if (vitorias <= 20) rankBox.classList.add("prata");
    else if (vitorias <= 50) rankBox.classList.add("ouro");
    else if (vitorias <= 80) rankBox.classList.add("diamante");
    else if (vitorias <= 100) rankBox.classList.add("lendario");
    else rankBox.classList.add("imortal");
}
