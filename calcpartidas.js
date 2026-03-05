let resultado = calculo(18, 7);
saldoVitorias = resultado;
function calculo (v, d) {
    let saldoVitorias = v - d;
    return saldoVitorias;
}
if (saldoVitorias <= 10) {
    ranking = "Ferro";
} else if (saldoVitorias <= 20) {
    ranking = "Bronze";
} else if (saldoVitorias <= 50) {
    ranking = "Prata";
} else if (saldoVitorias <= 80) {
    ranking = "Ouro";
} else if (saldoVitorias <= 90) {
    ranking = "Diamante";
} else if (saldoVitorias <= 100) {
    ranking = "Lendário";
} else {
    ranking = "Imortal";
}

console.log(`O herói tem saldo de ${saldoVitorias} vitórias e está no nível ${ranking}.`);
