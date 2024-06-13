let calcularMemoria = (abc) => {
    let mem = abc / 1024 / 1024 / 1000;
    let round = Math.floor(mem);
    return round
}

module.exports = calcularMemoria;