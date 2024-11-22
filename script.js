let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert('Soma:' + sum)
alert('Subtração:' + sub)
alert('Multiplicação:' + multi)
alert('Divisão:' + div)
alert('Resto da divisão:' + restDiv)


if (sum % 2 === 0) {
  alert('Soma:' + sum + 'Par')
} else {
  alert('Soma:' + sum + 'Impar')
}


if (firstNumber === secondNumber) {
  alert('Números Idênticos')
} else {
  alert('Números Não Idênticos')
}