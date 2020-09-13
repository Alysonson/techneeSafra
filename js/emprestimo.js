function alterar1() {
    document.getElementById("pessoal").className = "dropdown-item active"
    document.getElementById("imovel").className = "dropdown-item"
    document.getElementById("modalidade").innerHTML = "Pessoal"
}

function alterar2() {
    document.getElementById("pessoal").className = "dropdown-item"
    document.getElementById("imovel").className = "dropdown-item active"
    document.getElementById("modalidade").innerHTML = "Imobiliário"
}

function alterar3() {
    document.getElementById("curto_prazo").className = "dropdown-item active"
    document.getElementById("medio_prazo").className = "dropdown-item"
    document.getElementById("longo_prazo").className = "dropdown-item"
    document.getElementById("opcoes").innerHTML = "até 2 anos"
}

function alterar4() {
    document.getElementById("curto_prazo").className = "dropdown-item"
    document.getElementById("medio_prazo").className = "dropdown-item active"
    document.getElementById("longo_prazo").className = "dropdown-item"
    document.getElementById("opcoes").innerHTML = "até 4 anos"
    
}

function alterar5() {
    document.getElementById("curto_prazo").className = "dropdown-item"
    document.getElementById("medio_prazo").className = "dropdown-item"
    document.getElementById("longo_prazo").className = "dropdown-item active"
    document.getElementById("opcoes").innerHTML = "até 6 anos"
}

function simulacao() {

    if (document.getElementById("curto_prazo").className == "dropdown-item active") {
        if (document.getElementById("pessoal").className == "dropdown-item active") {
            var juros = 0.008
            var parcelas = 24
        }
        else {
            var juros = 0.01
            var parcelas = 24
        }
        
    }
    else if (document.getElementById("medio_prazo").className == "dropdown-item active") {
        if (document.getElementById("pessoal").className == "dropdown-item active") {
            var juros = 0.012
            var parcelas = 48
        }
        else {
            var juros = 0.015
            var parcelas = 48
        }
    }
    else if (document.getElementById("longo_prazo").className == "dropdown-item active") {
        if (document.getElementById("pessoal").className == "dropdown-item active") {
            var juros = 0.02
            var parcelas = 72
        }
        else {
            var juros = 0.023
            var parcelas = 72
        }
    }
    else {
        alert("Você não escolheu uma opção de tempo de empréstimo, será mostrado automaticmante a de 2 anos")
        var juros = 0.008
        var parcelas = 24
    }

    var valor_monetario = parseFloat(document.getElementById("quantia").value)

    var coeficiente_financeamento = juros / (1 - ((1 + juros) ** (parcelas * -1)));
    var valor_parcela = coeficiente_financeamento * valor_monetario;
    var valor_financeamento = Math.round(valor_parcela * parcelas);

    console.log(valor_monetario)
    console.log(valor_parcela);
    console.log("aqui");
    console.log(valor_financeamento);

}