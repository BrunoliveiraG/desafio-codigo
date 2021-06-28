// Conversão de kudos para pontos
const KUDOS_TO_POINTS = [
  { name: 'OK', value: 5 },
  { name: 'NICE', value: 10 },
  { name: 'GOOD', value: 20 },
  { name: 'GREAT', value: 50 },
  { name: 'SUPER', value: 100 },
];

// Conversão de kudos para reais
const KUDOS_TO_REAL = [
  { name: 'OK', value: 2 },
  { name: 'NICE', value: 5 },
  { name: 'GOOD', value: 8 },
  { name: 'GREAT', value: 15 },
  { name: 'SUPER', value: 25 },
];

//A nossa função de conversão para extenso
const extenso = require('./extenso');

/* 
  Recebe: um int representando o número de pontos do usuário
  Retorna: um array contendo os kudos. Ex.: ['OK', 'GOOD'] 
*/
function getKudosForUser(points) {
  //Valor total recebido
  let valorTotal = 0;

  //Lista para guardar os kudos recebidos
  let kudos = [];

  let listaToPoints = (Object.values(KUDOS_TO_POINTS));
  let listaToReal = (Object.values(KUDOS_TO_REAL));
  /*
  Aqui percorremos as duas listas ao mesmo tempo, fazendo os calculos
  Isso permite que no futuro possamos adicionar novos tipos de Kudos alterando somente o Objeto
   */
  for(let i=listaToPoints.length-1; i >= 0 ; i--){

    let count = 0;

    //verificamos se tem pontos suficientes pro kudos atual
    //atualizamos os pontos para o %(resto) da divisão
    count = Math.floor(points / listaToPoints[i].value);
    points %= listaToPoints[i].value;

    //adicionamos o kudos *(vezes) quantas vezes ele aparece ao total
    valorTotal += count * listaToReal[i].value;

    //usamos a mesma count para adicionar o Kudos (N) vezes à lista
    for(let j = 0; j<count; j++){
      kudos.push(listaToPoints[i].name);
    }

  }

  let resposta;
  //Montamos a resposta com a nossa funcão de transformar o valor em extenso
  //E damos join com os kudos da lista de kudos que montamos
  if(valorTotal > 0 && valorTotal < 1000000){
    let valorExtenso = extenso.getNumeroPorExtenso(valorTotal);
    resposta = "Você recebeu " + valorExtenso + " reais em retorno aos kudos " + kudos.join(', ') + "!";
  }//Tratamos se o valor é zero ou maior que 999999
  else if(valorTotal === 0){
    resposta = "Você recebeu " + "zero" + " reais em retorno aos kudos" +  "!";
  }
  else{
    resposta = "Você recebeu " + "um milhão de" + " reais em retorno aos kudos " + kudos.join(', ') + "!";
  }

  return resposta;

}

// Usamos uma função única com 1 loop for para otimizar o código
// function getKudosValueMessageForUser(kudos) {}

module.exports = {
  getKudosForUser,
};
