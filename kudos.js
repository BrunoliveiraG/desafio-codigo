// Conversion to written number
const writtenNumber = require('written-number');

// Conversion from kudos to points
const KUDOS_TO_POINTS = [
  { name: 'OK', value: 5 },
  { name: 'NICE', value: 10 },
  { name: 'GOOD', value: 20 },
  { name: 'GREAT', value: 50 },
  { name: 'SUPER', value: 100 },
];

// Conversion from kudos to points
const KUDOS_TO_REAL = [
  { name: 'OK', value: 2 },
  { name: 'NICE', value: 5 },
  { name: 'GOOD', value: 8 },
  { name: 'GREAT', value: 15 },
  { name: 'SUPER', value: 25 },
];

/*
  Receives: integer representing user points
  Returns: String with value and kudos
*/
function getKudosForUser(points) {
  const kudos = getKudosList(points);
  const totalValue = getKudosValue(points);
  return createResponse(kudos, totalValue);
}

/*
Receives: integer representing user points
Returns: total money earned from kudos
 */
function getKudosValue(points) {
  let totalValue = 0;
  const listToReal = (Object.values(KUDOS_TO_REAL));
  const listToPoints = (Object.values(KUDOS_TO_POINTS));

  for (let i = listToReal.length - 1; i >= 0; i--) {
    totalValue += getKudoAmmount(points, i) * listToReal[i].value;
    points %= listToPoints[i].value;
  }
  return totalValue;
}

/*
Receives: integer representing user points
Returns: array with all the kudos received
 */
function getKudosList(points) {
  const kudos = [];
  const listToPoints = (Object.values(KUDOS_TO_POINTS));
  for (let i = listToPoints.length - 1; i >= 0; i--) {
    for (let j = 0; j < getKudoAmmount(points, i); j++) {
      kudos.push(listToPoints[i].name);
    }
    points %= listToPoints[i].value;
  }
  return kudos;
}

/*
Receives: integer representing remainder of user points
Returns: Ammount of times a kudo enters the list
 */
function getKudoAmmount(points, i) {
  const listToPoints = (Object.values(KUDOS_TO_POINTS));
  return Math.floor(points / listToPoints[i].value);
}

/*
Receives: list of kudos and total value earned
Returns: Call to format the String depending on the value (Max: 1mil)
 */
function createResponse(kudos, totalValue) {
  if (totalValue >= 0 && totalValue <= 1000000) {
    let writtenValue = writtenNumber(totalValue, { lang: 'pt' });
    return createKudosMessage(writtenValue, kudos);
  }
  return createKudosMessage('um milhão de', kudos);
}

/*
Receives: list of kudos and total value earned treated
Returns: Formated string with answer
 */
function createKudosMessage(value, kudos) {
  const kudosFormatted = kudos.join(', ');
  return `Você recebeu ${value} reais em retorno aos kudos ${kudosFormatted}!`;
}

module.exports = {
  getKudosForUser,
};
