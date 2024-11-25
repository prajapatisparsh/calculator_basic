export function setupCalculator(element) {
  const calculator = document.createElement('div');
  calculator.className = 'calculator';
  
  calculator.innerHTML = `
    <h1>Calculator</h1>
    <div class="inputs">
      <input type="number" id="num1" placeholder="Enter first number">
      <input type="number" id="num2" placeholder="Enter second number">
    </div>
    <div class="operations">
      <button onclick="window.calculate('add')">Add (+)</button>
      <button onclick="window.calculate('subtract')">Subtract (-)</button>
      <button onclick="window.calculate('multiply')">Multiply (×)</button>
      <button onclick="window.calculate('divide')">Divide (÷)</button>
    </div>
    <div class="result" id="result">Result: </div>
  `;

  element.appendChild(calculator);

  window.calculate = (operation) => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultElement = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
      resultElement.textContent = 'Please enter valid numbers';
      return;
    }

    let result;
    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        if (num2 === 0) {
          resultElement.textContent = 'Cannot divide by zero';
          return;
        }
        result = num1 / num2;
        break;
    }

    resultElement.textContent = `Result: ${result}`;
  };
}