import Calculator from './core/calculator.js';
import Parser from './core/parser.js';
import * as readline from 'node:readline/promises';
import {
    stdin as input,
    stdout as output,
} from 'node:process';



const calculator = new Calculator(new Parser());


const rl = readline.createInterface({ input, output });

const expression = await rl.question('Введите выражение: ');

if (!expression) {
  console.error('Пожалуйста, введите математическое выражение.');
  process.exit(1);
}

try {
  const result = calculator.calculate(expression);
  console.log(`Результат: ${result}`);
} catch (error) {
  console.error(`Ошибка: ${error.message}`);
  process.exit(1);
}
finally {
  rl.close()
}