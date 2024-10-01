import addition from './operations/addition.js';
import subtraction from './operations/subtraction.js';
import multiplication from './operations/multiplication.js';
import division from './operations/division.js';

const operations = {
  '+': addition,
  '-': subtraction,
  '*': multiplication,
  '/': division,
};

export default class Calculator {
  constructor(parser) {
    this.parser = parser;
  }

  calculate(expression) {
    const parsedExpression = this.parser.parse(expression);
    return this.evaluate(parsedExpression);
  }

  evaluate(tokens) {
    const stack = [];

    tokens.forEach((token) => {
      if (/\d/.test(token)) {
        stack.push(token);
      } else if (/[+\-*/]/.test(token)) {
        const b = parseFloat(stack.pop());
        const a = parseFloat(stack.pop());
        stack.push(operations[token](a, b));
      }
    });

    return stack.pop();
  }
}