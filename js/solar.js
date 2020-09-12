class Calculo {

    constructor(consumo, area_telhado) {
        this.consumo_diario = consumo/30
        this.area_telhado = area_telhado
        this.efiencia_inversor = 0.97
        this.potencia_painel = 360
        this.hsp = 5
    }

    numeroPainel() {
        var quantidade = (this.consumo_diario*1000*1.2)/(this.efiencia_inversor*0.8*this.potencia_painel*this.hsp)
        return Math.ceil(quantidade)
    }

    telhado_espaco(quantidade) {
        var area_ocupada = quantidade * 2
        var razao = area_ocupada / this.area_telhado

        if (razao < 1) {
            return 100
        }

        else if (razao > 1 && razao < 1.25) {
            return 75
        }

        else if (razao > 1.25 && razao < 1.5) {
            return 60
        }

        else {
            return 0
        }
    }
}

function dimensionamento() {
    var Consumo = parseFloat(document.getElementById("consumo").value)
    var Area_telhado = parseFloat(document.getElementById("area_telhado").value)
    calculo = new Calculo(Consumo, Area_telhado)

    qtd_paineis = calculo.numeroPainel()
    pct_invest = calculo.telhado_espaco(qtd_paineis)

    console.log(qtd_paineis, pct_invest)
}