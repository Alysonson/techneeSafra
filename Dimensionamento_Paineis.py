##Código para dimensionamento do número de painéis voltaicos
#Esse codigo vai, a partir de informacoes disponibilizadas pelo usuario, 
#dimensionar o numero de paineis voltaicos necessarios para uma aplicação
#e o custo estimado de instalação/aquisição.

perc = 0.8  #indica o percentual de redução na conta de energia que o usuario quer (20%, 40%, 60%, etc...).Essa informação será coletado do form que o usuário vai preencher.
q = 0   #indica a quantidade de paineis voltaicos calculados para a aplicacao
p = 360     #indica a potencia nominal dos paineis
em = 0.968  #indica a eficiencia do modulo do painel
hsp = 5     #indica a irradiacao global horizontal
l = 0.004   #indica a taxa de perda/dano das placas ao longo de 1 ano
kw = 200    #indica a energia média consumida pelo usuário em um mês. Essa informação será coletado do form que o usuário vai preencher.
q = round(kw/((p/1000)*(em)*hsp*(1-l)*30))
print ("A quantidade de paineis e: ")
print (q)

##Avaliação do custo de instalação dos paineis
cost_painel = 619*q #indica o custo de cada painel individual
##loop para indicar o custo do inversor 
total_kw = q*p #indica a potencia maxima gerada pelos paineis

if total_kw <= 3100:
    cost_i = 2850
elif total_kw > 3100 and total_kw < 4100:
    cost_i = 3400
elif total_kw > 4100 and total_kw < 5100:
    cost_i = 3890
elif total_kw > 5100 and total_kw < 8100:
    cost_i = 5990
elif total_kw > 8100 and total_kw < 10100:
    cost_i = 7490
elif total_kw > 10100 and total_kw < 20100:
    cost_i = 10700
elif total_kw > 20100 and total_kw < 30100:
    cost_i = 16500
elif total_kw > 30100 and total_kw < 50100:
    cost_i = 20500
elif total_kw > 50100 and total_kw < 60100:
    cost_i = 21800
print ("O custo do inversor é: ")
print (cost_i)

cost_instal = 150*q + 700   #indica o custo de instalação e mão de obra do projeto

total_cost = cost_painel + cost_i + cost_instal

print ("O custo total é: ")
print (total_cost)

cost_regular_energy = kw*0.90   #indica o custo médio mensal de energia eletrica de fontes comuns, hidreletrica, gas natural, etc...
tempo_recuperacao = round(total_cost/cost_regular_energy)
print("Dessa forma, o investimento seria recuperado em aproximadamente:")
print (tempo_recuperacao,"meses") 