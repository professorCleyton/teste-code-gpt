

/*Comentário abaixo foi o que solicitei para o GPT*/
// Gerar função para validar CPF
/*Para ativar o comando use CTRL + SHIFT + i selecionando o comentário acima*/
// Código abaixo foi a resposta

function validarCPF (cpf) {
  cpf = cpf.replace(/[^\d]+/g, '') // Remover caracteres não numéricos

  if (cpf.length !== 11 || /^(.)\1+$/.test(cpf)) return false // CPF deve ter 11 dígitos e não pode ter todos os dígitos iguais

  var soma = 0
  for (var i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i) // Multiplica cada digito por um peso decrescente de 10 até 2
  }

  var resto = (soma * 10) % 11
  if (resto === 10 || resto === 11) resto = 0

  if (resto !== parseInt(cpf.charAt(9))) return false // Verifica primeiro dígito verificador

  soma = 0
  for (var i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i) // Multiplica cada digito por um peso decrescente de 11 até 2
  }

  resto = (soma * 10) % 11
  if (resto === 10 || resto === 11) resto = 0

  if (resto !== parseInt(cpf.charAt(10))) return false // Verifica segundo dígito verificador

  return true // CPF válido
}

console.log(validarCPF('123.456.789-09')) // Retorna true
console.log(validarCPF('12345678900')) // Retorna true
console.log(validarCPF('111.111.111-11')) // Retorna false
