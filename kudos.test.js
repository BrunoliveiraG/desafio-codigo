const kudos = require('./kudos');

test('test getKudosForUser', () => {
  expect(kudos.getKudosForUser(0)).toEqual("Você recebeu zero reais em retorno aos kudos!");
  expect(kudos.getKudosForUser(30)).toEqual("Você recebeu treze reais em retorno aos kudos GOOD, NICE!");
  expect(kudos.getKudosForUser(135)).toEqual("Você recebeu quarenta reais em retorno aos kudos SUPER, GOOD, NICE, OK!");
  expect(kudos.getKudosForUser(40)).toEqual("Você recebeu dezesseis reais em retorno aos kudos GOOD, GOOD!");
  expect(kudos.getKudosForUser(1355)).toEqual("Você recebeu trezentos e quarenta e dois reais em retorno aos kudos SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, SUPER, GREAT, OK!");
});


