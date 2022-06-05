// Resposta exercício 01

console.log(10 + 15)
console.log(typeof(10 + 15))

console.log('----------')

console.log('10' + 2)
console.log(typeof('10' + 2))

console.log('----------')

console.log('10' * 2)
console.log(typeof('10' * 2))

console.log('----------')

console.log('10' / 3)
console.log(typeof('10' / 3))

console.log('----------')

console.log('10' % 3)
console.log(typeof('10' % 3))

console.log('----------')

console.log(10 + true)
console.log(typeof(10 + true))

console.log('----------')

console.log(10 == '10')
console.log(typeof(10 == '10'))

console.log('----------')

console.log(10 === '10')
console.log(typeof(10 === '10'))

console.log('----------')

console.log(10 < 11)
console.log(typeof(10 < 11))

console.log('----------')

console.log(10 > 12)
console.log(typeof(10 > 12))

console.log('----------')

console.log(10 <= 10.1)
console.log(typeof(10 <= 10.1))

console.log('----------')

console.log(10 > 9.99)
console.log(typeof(10 > 9.99))

console.log('----------')

console.log(10 != 'dez')
console.log(typeof(10 != 'dez'))

console.log('----------')

//Repetido
console.log(10 + true)
console.log(typeof(10 + true))

console.log('----------')

console.log('dez' + true)
console.log(typeof('dez' + true))

console.log('----------')

console.log(10 + false)
console.log(typeof(10 + false))

console.log('----------')

console.log(10 * false)
console.log(typeof(10 * false))

console.log('----------')

console.log(true + true)
console.log(typeof(true + true))

console.log('----------')

/*
var incremento = (10 ++)
console.log(incremento)
console.log(typeof(incremento))

console.log('----------')

var decremento = (10 --)
console.log(decremento)
console.log(typeof(decremento))
*/

console.log('----------')

console.log(1 & 1)
console.log(typeof(1 & 1))

console.log('----------')

console.log(1 & 0)
console.log(typeof(1 & 0))

console.log('----------')

console.log(0 & 0)
console.log(typeof(0 & 0))

console.log('----------')

//Repetido
console.log(1 & 0)
console.log(typeof(1 & 0))

console.log('----------')

console.log(0 / 1)
console.log(typeof(0 / 1))

console.log('----------')

console.log(5 + 5 == 10)
console.log(typeof(5 + 5 == 10))

console.log('----------')

console.log('5' + '5' == 10)
console.log(typeof('5' + '5' == 10))

console.log('----------')

console.log('5' * 2 > 9)
console.log(typeof('5' * 2 > 9))

console.log('----------')

console.log((10 + 10) * 2)
console.log(typeof((10 + 10) * 2))

console.log('----------')

console.log(10 + 10 * 2)
console.log(typeof(10 + 10 * 2))

console.log('-----------------------')
console.log('----- Exercício 02-----')
// Resolução exercício 02

var branco = 'preto';
var preto = 'cinza';
var cinza = 'branco';
var carro = 'preto';
var valor = 30000;
var prestacao = 750;

// Resposta a
console.log('----- Resposta a -----')
console.log(branco == 'branco')

// Resposta b
console.log('----- Resposta b -----')
console.log(branco == cinza)

// Resposta c
console.log('----- Resposta c -----')
console.log(carro === branco)

// Resposta d
console.log('----- Resposta d -----')
var cavalo = carro == 'preto' ? 'cinza' : 'marron'
console.log(cavalo)

// Resposta e
console.log('----- Resposta e -----')
const valorDevido = (30000 - 3000)

parcela = valorDevido/prestacao
console.log('São necessárias ' + parcela + ' prestações.')

// Resposta f
console.log('----- Resposta f -----')
let concatenacao = branco + preto + cinza + carro
console.log(concatenacao.length)