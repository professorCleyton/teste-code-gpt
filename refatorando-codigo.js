/* Testando refatoração de openAI */
var teste = 0

function isNumberPar () {
  if (teste / 2 == 0) { // Erro proposital 
    return true
  } else {
    return false
  }
}

isNumberPar()

/* Sugestão de refactor  GPT */
function isNumberPar (teste) {
  return teste % 2 === 0
}

isNumberPar(0)

/* Comentário da AI 
Foram feitas as seguintes alterações:

Adicionamos um parâmetro à função isNumberPar, para que ela possa receber qualquer número a ser testado;
Utilizamos o operador % para verificar se o número é divisível por 2, o que é mais eficiente do que dividir e comparar o resultado com zero;
Modificamos o retorno da função para que ela retorne diretamente o resultado da comparação, sem a necessidade do if e else;
Chamamos a função passando o valor desejado como parâmetro.
  */
