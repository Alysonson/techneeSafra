Class Calculo {

    constructor(consumo) {
        this.consumo = consumo
        this.efiencia_inversor = 0.97
        this.potencia_painel = 360
    }
}

function custoProjeto() {
    var consumo = parseFloat(document.getElementById("consumo").value)
    console.log(consumo)
}