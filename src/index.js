import Calculator from './calculator.js';
import Parser from './parser.js';

const calculator = new Calculator(new Parser());

const input = process.argv[2];

if (!input) {
  console.error('Пожалуйста, введите математическое выражение.');
  process.exit(1);
}

try {
  const result = calculator.calculate(input);
  console.log(`Результат: ${result}`);
} catch (error) {
  console.error(`Ошибка: ${error.message}`);
  process.exit(1);
}