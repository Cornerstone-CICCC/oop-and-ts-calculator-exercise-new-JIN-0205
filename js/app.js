

class Calculator {

  add(num1, num2) {
    return num1 + num2
  }
  subtract(num1, num2) {
    return num1 - num2
  }
  multiply(num1, num2) {
    return num1 * num2
  }
  divide(num1, num2) {
    return num1 / num2
  }
  compute(num1, num2, operation) {
    switch (operation) {
      case 'add': this.result = this.add(num1, num2)
        break
      case 'subtract': this.result = this.subtract(num1, num2)
        break
      case 'multiply': this.result = this.multiply(num1, num2)
        break
      case 'divide': this.result = this.divide(num1, num2)
        break
    }
    return this.result
  }
}

const calculator = new Calculator()

document.querySelector('#calculateBtn').addEventListener('click', () => {
  const num1 = Number(document.querySelector('#num1').value)
  const num2 = Number(document.querySelector('#num2').value)
  const operation = document.querySelector('#operation').value

  const result = calculator.compute(num1, num2, operation)

  document.querySelector('#result').textContent = result;
});
