/* Nesse bloco pedi que o GPT me explicasse o código abaixo */


function getApi() {
    fetch('SUA_URL_API', { method: 'GET' })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }

  /* Explicação gerada 
  Este código é uma função chamada getApi() que faz uma solicitação de busca (método GET) para a URL 
  especificada na linha 2. Em seguida, a função usa a função fetch() do JavaScript para obter os dados da API. 
  Os dados da resposta são convertidos em formato JSON na linha 3, usando o método json(). 
  Em seguida, os dados são exibidos no console do navegador usando a função console.log() na linha 4. 
  Se houver algum erro durante o processo, ele será capturado na linha 5 e exibido no console de erros do 
  navegador usando a função console.error(). 
  Este código é usado para buscar dados de uma API e exibi-los no console do navegador.

  */