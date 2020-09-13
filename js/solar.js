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

    custoPaineis(quantidade, pct_invest) {
        return (quantidade * 619 * pct_invest / 100)
    }

    custoMaoDeObra(quantidade) {
        return (quantidade * 150);
    }

    custoEquipEle(preco_inversor, preco_paineis) {
        return (0.3 * (preco_inversor + preco_paineis))
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

    if (document.getElementById("consumo").value == "" || document.getElementById("area_telhado").value == "") {
        alert("Lembre de preencher a seu consumo e a área do seu telhado, pode ser aproximado");
    } else {
        var consumo = parseFloat(document.getElementById("consumo").value)
        var area_telhado = parseFloat(document.getElementById("area_telhado").value)
        calculo = new Calculo(consumo, area_telhado)

        qtd_paineis = calculo.numeroPainel()
        pct_invest = calculo.telhadoEspaco(qtd_paineis)
        preco_inversor = calculo.custoInversor(qtd_paineis, pct_invest)
        preco_paineis = calculo.custoPaineis(qtd_paineis, pct_invest)
        mao_de_obra = calculo.custoMaoDeObra(qtd_paineis)
        equip_ele = calculo.custoEquipEle(preco_inversor, preco_paineis)
        custo_projeto = calculo.custoTotal(preco_inversor, preco_paineis, mao_de_obra, equip_ele)

        if (pct_invest == 0) {
            document.getElementById("valor_projeto").innerHTML = "Infelizmente a área de telhado informada torna o projeto inviável";
            document.getElementById("pct_abatimento").innerHTML = ``;
            document.getElementById("resultado_simulacao").style.display = 'block';
            document.getElementById('resultado_simulacao').scrollIntoView({ behavior: "smooth" });
        } else {

            document.getElementById("valor_projeto").innerHTML = `O seu projeto irá custar aproximadamente ${formatter.format(custo_projeto)}`;
            document.getElementById("pct_abatimento").innerHTML = `Pelo tamanho do seu telhado poderemos abater até <strong>${pct_invest}%</strong> da sua conta de energia`;

            document.getElementById("resultado_simulacao").style.display = 'block';

            document.getElementById('resultado_simulacao').scrollIntoView({ behavior: "smooth" });

            document.getElementById('dinheiro').value = custo_projeto;


        }

    }

    return custo_projeto;
}

function alterar1() {
    document.getElementById("curto_prazo").className = "dropdown-item active"
    document.getElementById("medio_prazo").className = "dropdown-item"
    document.getElementById("longo_prazo").className = "dropdown-item"
    document.getElementById("opcoes").innerHTML = "até 2 anos"
}

function alterar2() {
    document.getElementById("curto_prazo").className = "dropdown-item"
    document.getElementById("medio_prazo").className = "dropdown-item active"
    document.getElementById("longo_prazo").className = "dropdown-item"
    document.getElementById("opcoes").innerHTML = "até 4 anos"
}

function alterar3() {
    document.getElementById("curto_prazo").className = "dropdown-item"
    document.getElementById("medio_prazo").className = "dropdown-item"
    document.getElementById("longo_prazo").className = "dropdown-item active"
    document.getElementById("opcoes").innerHTML = "até 6 anos"
}

function resultado(preco_consumo, valor_parcela, tempo_retorno, valor_financeamento) {
    const dados = []
    let devendo = valor_financeamento * -1;
    for (let i = 0; i < 15; i++) {
        devendo += preco_consumo * 12;
        dados.push(Math.ceil(devendo));
    }
    var ctx = document.getElementById("myChart");

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['ano 1', 'ano 2', 'ano 3', 'ano 4', 'ano 5', 'ano 6', 'ano 7', 'ano 8', 'ano 9', 'ano 10',
                'ano 11', 'ano 12', 'ano 13', 'ano 14', 'ano 15'],
            datasets: [{
                label: "Economia no gasto de energia anual",
                data: dados,
                borderWidth: 0,
                borderColor: 'rgba(77,166,253,0.85)',
                backgroundColor: '#082ae931',
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: false
                    }
                }]
            }
        }
    })

    document.getElementById("consumo_atual").innerHTML = `Seu consumo atual é de <strong>${formatter.format(preco_consumo)}</strong>`;
    document.getElementById("valor_parcela").innerHTML = `Sua parcela será de <strong>${formatter.format(Math.round(valor_parcela).toFixed(2))}</strong>`;
    document.getElementById("tempo_retorno").innerHTML = `Seu projeto se pagará em <strong>${Math.ceil(tempo_retorno)}</strong> meses`;
    document.getElementById("potencial").innerHTML = `Em 15 anos você economizará <strong>${formatter.format(Math.ceil(devendo))}</strong>`;


}

function simulacao() {

    if (document.getElementById("curto_prazo").className == "dropdown-item active") {
        var juros = 0.008
        var parcelas = 24
    }
    else if (document.getElementById("medio_prazo").className == "dropdown-item active") {
        var juros = 0.01
        var parcelas = 48
    }
    else if (document.getElementById("longo_prazo").className == "dropdown-item active") {
        var juros = 0.012
        var parcelas = 72
    }
    else {
        alert("Você não escolheu uma opção de tempo de empréstimo, será mostrado automaticmante a de 2 anos")
        var juros = 0.008
        var parcelas = 24
    }

    var valor_monetario = parseFloat(document.getElementById("dinheiro").value)

    var coeficiente_financeamento = juros / (1 - ((1 + juros) ** (parcelas * -1)));
    var valor_parcela = coeficiente_financeamento * valor_monetario;
    var valor_financeamento = valor_parcela * parcelas;

    if (document.getElementById("consumo").value == "") {
        alert("preencha o campo de consumo de energia elétrica");
    }
    else {
        var consumo_regular = parseFloat(document.getElementById("consumo").value);
        var area_telhado2 = parseFloat(document.getElementById("area_telhado").value)
        calculo2 = new Calculo(consumo_regular, area_telhado2)
        num_paineis = calculo2.numeroPainel()
        parte_usada = calculo2.telhadoEspaco(num_paineis) / 100

    }

    var preco_consumo = 0.9 * consumo_regular * parte_usada;

    var tempo_retorno = valor_financeamento / preco_consumo;

    resultado(preco_consumo, valor_parcela, tempo_retorno, valor_financeamento);

    console.log(`Quanto você paga hoje: ${preco_consumo}`)
    console.log(`Valor da parcela: ${Math.round(valor_parcela)}`);
    console.log(`Valor financiamento: ${valor_financeamento}`);
    console.log(`Tempo de retorno: ${Math.ceil(tempo_retorno)}`);


}