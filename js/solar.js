class Calculo {

    constructor(consumo, area_telhado) {
        this.consumo_diario = consumo / 30;
        this.area_telhado = area_telhado;
        this.efiencia_inversor = 0.97;
        this.potencia_painel = 360;
        this.hsp = 5;
    }

    numeroPainel() {
        var quantidade = (this.consumo_diario * 1000 * 1.2) / (this.efiencia_inversor * 0.8 * this.potencia_painel * this.hsp);
        return Math.ceil(quantidade);
    }

    telhadoEspaco(quantidade) {
        var area_ocupada = quantidade * 2;
        var razao = area_ocupada / this.area_telhado;

        if (razao < 1) {
            return 100;
        }

        else if (razao > 1 && razao < 1.25) {
            return 75;
        }

        else if (razao > 1.25 && razao < 1.5) {
            return 60;
        }

        else {
            return 0;
        }
    }

    custoInversor(quantidade, pct_invest) {
        var pot_total = (quantidade * pct_invest * this.potencia_painel) / 100;

        if (pot_total <= 3100) {
            return 2850;
        }
        else if (pot_total <= 4100) {
            return 3400;
        }
        else if (pot_total <= 5100) {
            return 3890;
        }
        else if (pot_total <= 8100) {
            return 5990;
        }
        else if (pot_total <= 10100) {
            return 7490;
        }
        else if (pot_total <= 20100) {
            return 10700;
        }
        else if (pot_total <= 30100) {
            return 16500;
        }
        else if (pot_total <= 50100) {
            return 20500;
        }
        else if (pot_total <= 60100) {
            return 21800;
        }
        else if (pot_total <= 65100) {
            return (21800 + 3890);
        }
        else if (pot_total <= 70100) {
            return (21800 + 7490);
        }
        else {
            return (21800 + 7490 + 3890);
        }
    }

<<<<<<< HEAD
    custoPaineis(quantidade) {
        return quantidade * 619;
=======
    custoPaineis (quantidade, pct_invest) {
        return quantidade * 619 * pct_invest
>>>>>>> 460a670633e85d335f5c2e11f22d21ec5aff4276
    }

    custoMaoDeObra(quantidade) {
        return (quantidade * 150);
    }

    custoEquipEle(preco_inversor, preco_paineis) {
<<<<<<< HEAD
        return (0.35 * (preco_inversor + preco_paineis));
=======
        return (0.3 * (preco_inversor + preco_paineis))
>>>>>>> 460a670633e85d335f5c2e11f22d21ec5aff4276
    }

    custoTotal(preco_inversor, preco_paineis, mao_de_obra, equip_ele) {
        return (preco_inversor + preco_paineis + mao_de_obra + equip_ele);
    }
}

var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

function dimensionamento() {
    var Consumo = parseFloat(document.getElementById("consumo").value);
    var Area_telhado = parseFloat(document.getElementById("area_telhado").value);
    calculo = new Calculo(Consumo, Area_telhado);

    qtd_paineis = calculo.numeroPainel();
    pct_invest = calculo.telhadoEspaco(qtd_paineis);

    preco_inversor = calculo.custoInversor(qtd_paineis, pct_invest);
    preco_paineis = calculo.custoPaineis(qtd_paineis);
    mao_de_obra = calculo.custoMaoDeObra(qtd_paineis);
    equip_ele = calculo.custoEquipEle(preco_inversor, preco_paineis);
    custo_projeto = Math.ceil(calculo.custoTotal(preco_inversor, preco_paineis, mao_de_obra, equip_ele));

    document.getElementById("resultado").innerHTML = `O seu projeto irá custar aproximadamente R$ ${formatter.format(custo_projeto)}`;

    document.getElementById('resultado').scrollIntoView({ behavior: "smooth" });

    preco_inversor = calculo.custoInversor(qtd_paineis, pct_invest)
    preco_paineis = calculo.custoPaineis(qtd_paineis, pct_invest)
    mao_de_obra = calculo.custoMaoDeObra(qtd_paineis)
    equip_ele = calculo.custoEquipEle(preco_inversor, preco_paineis)
    custo_projeto = calculo.custoTotal(preco_inversor, preco_paineis, mao_de_obra, equip_ele)


    document.getElementById('dinheiro').value = custo_projeto;

    return custo_projeto;
}


function alterar1() {
    document.getElementById("curto_prazo").className = "dropdown-item active"
}

function alterar2() {
    document.getElementById("medio_prazo").className = "dropdown-item active"
}

function alterar3() {
    document.getElementById("longo_prazo").className = "dropdown-item active"
}

function simulacao() {

<<<<<<< HEAD
    var juros = 0.01;
    var parcelas = 72;
    var valor_monetario = parseFloat(document.getElementById("dinheiro").value);
=======
    if (document.getElementById("curto_prazo").className == "dropdown-item active") {
        var juros = 0.008
    }
    else if (document.getElementById("medio_prazo").className == "dropdown-item active") {
        var juros = 0.01
    }
    else if (document.getElementById("longo_prazo").className == "dropdown-item active") {
        var juros = 0.012
    }
    else {
        alert("Você não escolheu uma opção de tempo de empréstimo, será mostrado automaticmante a de 2 anos")
        var juros = 0.008

    }

    var parcelas = 24
    var valor_monetario = parseFloat(document.getElementById("dinheiro").value)
>>>>>>> 460a670633e85d335f5c2e11f22d21ec5aff4276

    var coeficiente_financeamento = juros / (1 - ((1 + juros) ** (parcelas * -1)));
    var valor_parcela = coeficiente_financeamento * valor_monetario;
    var valor_financeamento = valor_parcela * parcelas;

    if (document.getElementById("consumo").value == "") {
        alert("preencha o campo de consumo de energia elétrica");
    }
    else {
        var consumo_regular = parseFloat(document.getElementById("consumo").value);
    }

    var preco_consumo = 0.9 * consumo_regular;
    var tempo_retorno = valor_financeamento / preco_consumo;

    console.log(document.getElementsByClassName("dropdown-menu").value);

    console.log(valor_parcela);
    console.log("aqui");
    console.log(valor_financeamento);
    console.log(tempo_retorno);

}