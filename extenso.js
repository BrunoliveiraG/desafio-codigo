// Conversão por extenso
// Criei essa função para converter os números
const CENTENAS_E = ['cento e', 'duzentos e', 'trezentos e', 'quatrocentos e', 'quinhentos e',
    'seiscentos e', 'setecentos e', 'oitocentos e', 'novecentos e'];
const CENTENAS = ['cem', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos',
    'seiscentos', 'setecentos', 'oitocentos', 'novecentos'];

const DEZENAS = ['dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta',
    'oitenta', 'noventa'];

const ENTRE_DEZ_VINTE = ['onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete',
    'dezoito', 'dezenove'];

const UNIDADES = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];

/*
  Converte um número por extenso
 */
function getNumeroPorExtenso(numero){
    let centenaMilCem = Math.floor(numero/100000);
    numero %= 100000;
    let centenaMilDez = Math.floor(numero/10000);
    numero %= 10000;
    let centenaMilUn = Math.floor(numero/1000);
    numero %= 1000;
    let centenaCem = Math.floor(numero/100);
    numero %= 100;
    let centenaDez = Math.floor(numero/10);
    numero %= 10;
    let unidade = numero;

    let stringExtensoMilhares = [];
    let stringExtensoCentenas = [];

    if((centenaMilCem >  0) && (centenaMilDez > 0 || centenaMilUn > 0)){
        stringExtensoMilhares.push(CENTENAS_E[centenaMilCem-1]);
    }
    else if(centenaMilCem > 0 && centenaMilDez === 0 && centenaMilUn === 0){
        stringExtensoMilhares.push(CENTENAS[centenaMilCem-1]);
    }
    if(centenaMilDez > 0 && centenaMilUn == 0 ){
        stringExtensoMilhares.push(DEZENAS[centenaMilDez-1]);
    }
    else if(((centenaMilDez*10) + centenaMilUn) > 10 && ((centenaMilDez*10) + centenaMilUn) < 20){
        stringExtensoMilhares.push(ENTRE_DEZ_VINTE[centenaMilUn-1]);
    }
    else if(centenaMilDez>0 && centenaMilUn >0){
        stringExtensoMilhares.push(DEZENAS[centenaMilDez-1]);
        stringExtensoMilhares.push('e');
        stringExtensoMilhares.push(UNIDADES[centenaMilUn-1]);
    }
    else if(centenaMilDez === 0 && centenaMilUn > 1){
        stringExtensoMilhares.push(UNIDADES[centenaMilUn-1]);
    }

    if(stringExtensoMilhares.length>0 || centenaMilUn > 0 ){
        stringExtensoMilhares.push('mil');
    }

    if(centenaCem > 0 && centenaDez === 0 && unidade === 0){
        if(stringExtensoMilhares.length>0){
            stringExtensoCentenas.push(' e');
        }
        stringExtensoCentenas.push(CENTENAS[centenaCem-1]);
    }
    else if((centenaCem >  0) && (centenaDez > 0 || unidade > 0)){
        stringExtensoCentenas.push(CENTENAS_E[centenaCem-1]);
    }
    if(centenaDez > 0 && unidade == 0 ){
        stringExtensoCentenas.push(DEZENAS[centenaDez-1]);
    }
    else if(((centenaDez*10) + unidade) > 10 && ((centenaDez*10) + unidade) < 20){
        stringExtensoCentenas.push(ENTRE_DEZ_VINTE[unidade-1]);
    }
    else if(centenaDez>=0 && unidade >0){
        if(centenaDez>0){
            stringExtensoCentenas.push(DEZENAS[centenaDez-1]);
            stringExtensoCentenas.push('e');
        }
        stringExtensoCentenas.push(UNIDADES[unidade-1]);
    }

    let stringExtenso = stringExtensoMilhares.join(' ') + stringExtensoCentenas.join(' ');
    return stringExtenso;


}

module.exports = {
    getNumeroPorExtenso,
};